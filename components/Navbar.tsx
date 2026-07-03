'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: 'Inicio', href: '/' },
    { label: 'Asignaturas', href: '/asignaturas' },
    { label: 'Contactanos', href: '/contactanos' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logoSinFondo.png"
            alt="NEXT Academy"
            width={48}
            height={48}
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-slate-600 hover:text-slate-950 font-medium transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://academianext.com/plataforma/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-gradient-to-r gradient-custom text-white font-semibold rounded-xl hover:shadow-xl shadow-lg transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            Plataforma Alumnos
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-lg transition-colors duration-300"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white animate-slide-down">
          <div className="container py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-slate-700 hover:text-slate-950 font-medium py-2 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile CTA */}
            <div className="pt-4 border-t border-slate-100">
              <a
                href="https://academianext.com/plataforma/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block px-4 py-3 bg-gradient-to-r gradient-custom text-white font-semibold rounded-xl text-center hover:shadow-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Plataforma Alumnos
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
