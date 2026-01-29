'use client';
import { useEffect, useRef } from 'react';

// tiny simplex-ish noise
function snoise2D(x:number,y:number){const s=(x+y)*0.366025403;const i=Math.floor(x+s),j=Math.floor(y+s);const g3=0.211324865;const t=(i+j)*g3;const X0=i-t,Y0=j-t;const x0=x-X0,y0=y-Y0;const i1=x0>y0?1:0,j1=x0>y0?0:1;const x1=x0-i1+g3,y1=y0-j1+g3;const x2=x0-1+2*g3,y2=y0-1+2*g3;function grad(ix:number,iy:number,x:number,y:number){const h=((ix*374761393+iy*668265263)^0)%12;const u=h<8?x:y,v=h<4?y:h===12||h===14?x:0;return ((h&1)?-u:u)+((h&2)?-v:v);}function dot(x:number,y:number){return x*x+y*y;}let n0=0,n1=0,n2=0;let t0=0.5-dot(x0,y0);if(t0>0){t0*=t0;n0=t0*t0*grad(i,j,x0,y0);}let t1=0.5-dot(x1,y1);if(t1>0){t1*=t1;n1=t1*t1*grad(i+i1,j+j1,x1,y1);}let t2=0.5-dot(x2,y2);if(t2>0){t2*=t2;n2=t2*t2*grad(i+1,j+1,x2,y2);}return 70*(n0+n1+n2);}

export default function AnimatedBackgroundInner({
  count = 520,          // ↑ more particles = more ink
  step = 1.8,           // particle step per frame
  lineWidthMin = 0.8,   // thicker lines
  lineWidthMax = 2.2,
  fade = 0.04,          // lower = longer trails (more ink)
  scale = 0.0011,       // noise scale (smaller = tighter curls)
  flowSpeed = 0.0008,   // time flow through noise
  tintA = 'rgba(120,255,200,', // main tint
  tintB = 'rgba(80,200,255,',  // secondary tint
  base = 'rgba(8,8,8,1)',      // background
}: {
  count?: number; step?: number; lineWidthMin?: number; lineWidthMax?: number;
  fade?: number; scale?: number; flowSpeed?: number;
  tintA?: string; tintB?: string; base?: string;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current!, ctx = c.getContext('2d')!;
    const DPR = Math.min(devicePixelRatio||1, 1.75);
    let raf = 0, t = 0, running = true;

    const resize = () => {
      const w = innerWidth, h = innerHeight;
      c.width = Math.floor(w*DPR); c.height = Math.floor(h*DPR);
      c.style.width = w+'px'; c.style.height = h+'px';
      ctx.setTransform(DPR,0,0,DPR,0,0);
      // repaint base so trails reset on resize
      ctx.fillStyle = base; ctx.fillRect(0,0,w,h);
    };
    resize(); addEventListener('resize', resize);

    // particles
    const pts = Array.from({length: count}, () => ({
      x: Math.random()*innerWidth,
      y: Math.random()*innerHeight,
      w: lineWidthMin + Math.random()*(lineWidthMax-lineWidthMin),
      c: Math.random() < 0.5 ? tintA : tintB
    }));

    function draw(){
      if(!running) return;
      const w = c.width/DPR, h = c.height/DPR;

      // translucent fill to create trails
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = `rgba(10,10,10,${fade})`;
      ctx.fillRect(0,0,w,h);

      ctx.globalCompositeOperation = 'lighter'; // additive glow
      for(const p of pts){
        const n = snoise2D(p.x*scale, p.y*scale + t*flowSpeed);
        const ang = n * Math.PI*2;
        const nx = p.x + Math.cos(ang)*step;
        const ny = p.y + Math.sin(ang)*step;

        ctx.strokeStyle = `${p.c}${0.16})`;
        ctx.lineWidth = p.w;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(nx, ny);
        ctx.stroke();

        // advance
        p.x = nx; p.y = ny;

        // wrap-around to keep density high
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
      }

      t += 1;
      raf = requestAnimationFrame(draw);
    }
    raf = requestAnimationFrame(draw);

    const vis = () => { running = !document.hidden; if(running) raf=requestAnimationFrame(draw); else cancelAnimationFrame(raf); };
    document.addEventListener('visibilitychange', vis);

    return () => { cancelAnimationFrame(raf); removeEventListener('resize', resize); document.removeEventListener('visibilitychange', vis); };
  }, [count, step, lineWidthMin, lineWidthMax, fade, scale, flowSpeed, tintA, tintB, base]);

  return <canvas ref={ref} className="fixed inset-0 z-0" aria-hidden="true" />;
}
