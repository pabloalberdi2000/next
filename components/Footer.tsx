'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone, Linkedin, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logoSinFondo.png"
                alt="NEXT Academy"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm">
              Transformando la educación universitaria en Deusto con método, pasión y resultados.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Enlaces</h4>
            <ul className="space-y-3">
              {['Inicio', 'Método', 'Asignaturas', 'Contacto'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-slate-400 hover:text-white transition-colors duration-300 font-medium"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academy */}
          <div>
            <h4 className="text-lg font-bold mb-4">Academia</h4>
            <ul className="space-y-3">
              {['Acerca de NEXT', 'Nuestro Equipo', 'Blog', 'Recursos'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors duration-300 font-medium"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold mb-4">Contacto</h4>
            <a
              href="tel:+34943123456"
              className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-300"
            >
              <Phone size={20} />
              <span>+34 943 12 34 56</span>
            </a>
            <a
              href="mailto:info@academianext.com"
              className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-300"
            >
              <Mail size={20} />
              <span>info@academianext.com</span>
            </a>
            <div className="flex items-start gap-3 text-slate-400 pt-2">
              <MapPin size={20} className="flex-shrink-0 mt-1" />
              <div>
                <p>Paseo de Urumea, 3</p>
                <p>20004 San Sebastián, Guipúzcoa</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="flex items-center justify-between flex-wrap gap-6">
            <p className="text-slate-400">Síguenos en redes sociales</p>
            <div className="flex gap-6">
              {[
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Twitter, href: '#', label: 'Twitter' },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-slate-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
          <p>© {currentYear} NEXT Academy. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors duration-300">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-white transition-colors duration-300">
              Términos de Servicio
            </a>
            <a href="#" className="hover:text-white transition-colors duration-300">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
