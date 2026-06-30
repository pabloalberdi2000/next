'use client';

import { Mail, MapPin, Phone, Linkedin, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-gray-900 text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg flex items-center justify-center font-bold text-lg">
                N
              </div>
              <span className="text-2xl font-bold">NEXT</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
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
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 font-medium"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-4">Academia</h4>
            <ul className="space-y-3">
              {['Acerca de NEXT', 'Nuestro Equipo', 'Blog', 'Recursos'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 font-medium"
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
              className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <Phone size={20} />
              <span>+34 943 12 34 56</span>
            </a>
            <a
              href="mailto:info@nextacademy.es"
              className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <Mail size={20} />
              <span>info@nextacademy.es</span>
            </a>
            <div className="flex items-start gap-3 text-gray-400 pt-2">
              <MapPin size={20} className="flex-shrink-0 mt-1" />
              <div>
                <p>Paseo de Urumea, 3</p>
                <p>20004 San Sebastián, España</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex items-center justify-between flex-wrap gap-6">
            <p className="text-gray-400">Síguenos en redes sociales</p>
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
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>
            © {currentYear} NEXT Academy. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">
              Términos de Servicio
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
