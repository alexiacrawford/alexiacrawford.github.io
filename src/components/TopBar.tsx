'use client';

export default function TopBar() {
  return (
    <header className="flex justify-start items-center font-geist text-base tracking-wide mt-8">
      <nav className="flex gap-10">
        <a
          href="#about"
          className="hover:text-lime-300 transition-all duration-200 text-white hover:scale-120"
        >
          About
        </a>
        <a
          href="#experience"
          className="hover:text-lime-300 transition-all duration-200 text-white hover:scale-120"
        >
          Experience
        </a>
        <a
          href="#projects"
          className="hover:text-lime-300 transition-all duration-200 text-white hover:scale-120"
        >
          Projects
        </a>

      </nav>
    </header>
  );
}
