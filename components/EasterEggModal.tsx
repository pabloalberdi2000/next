'use client';

import { useState, useEffect } from 'react';

export default function EasterEggModal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && (e.key === 'z' || e.key === 'Z')) {
        e.preventDefault();
        setIsVisible(true);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Control' || e.key === 'Shift' || e.key === 'z' || e.key === 'Z') {
        setIsVisible(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center animate-fade-in">
      <div className="flex flex-col items-center gap-4">
        <img
          src="/easterPic.JPG"
          alt="Easter Egg"
          className="max-h-[80vh] object-contain rounded-2xl shadow-2xl"
        />
        <p className="text-white/80 text-sm font-light">
          Suelte las teclas para volver
        </p>
      </div>
    </div>
  );
}
