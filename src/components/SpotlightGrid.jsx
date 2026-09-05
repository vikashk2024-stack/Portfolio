import { useEffect, useState } from 'react';

export default function SpotlightGrid() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden dark:bg-[#0a0a0a] bg-[#ffffff] transition-colors duration-300">
      {/* Studio Geometric Grid */}
      <div className="absolute inset-0 studio-grid-bg opacity-40" />

      {/* Subtle cursor-following radial spotlight */}
      <div
        className="absolute rounded-full transition-transform duration-100 ease-out opacity-20 blur-[130px]"
        style={{
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, rgba(56, 189, 248, 0.05) 50%, transparent 75%)',
          left: `${mousePosition.x - 275}px`,
          top: `${mousePosition.y - 275}px`,
          willChange: 'left, top',
        }}
      />

      {/* Very faint background ambient warmth */}
      <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-[#38bdf8]/[0.02] blur-[160px]" />
      <div className="absolute bottom-[20%] left-[5%] w-[450px] h-[450px] rounded-full bg-[#38bdf8]/[0.02] blur-[150px]" />
    </div>
  );
}

