'use client';

import { useEffect } from 'react';

export default function GradientBackgroundPointer() {
  useEffect(() => {
    const el = document.body;
    const handler = (e: PointerEvent) => {
      const { clientX: x, clientY: y } = e;
      const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
      el.style.setProperty('--posX', String(x - l - w / 2));
      el.style.setProperty('--posY', String(y - t - h / 2));
    };
    el.addEventListener('pointermove', handler);
    return () => el.removeEventListener('pointermove', handler);
  }, []);

  return null;
}
