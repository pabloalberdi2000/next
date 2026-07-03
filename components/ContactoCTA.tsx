'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactoCTA() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    motivo: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      className="py-20 relative"
      style={{
        backgroundImage: 'url(/logogrande.png)',
        backgroundSize: 'contain',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay blanco semi-transparente */}
      <div className="absolute inset-0 bg-white/85 -z-10"></div>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
                Solicita Información{' '}
                <span
                  style={{
                    color: '#3B82F6',
                  }}
                >
                  Gratuita
                </span>
              </h2>
              <p className="text-xl text-slate-600">
                Nuestro equipo te ayudará a elegir el mejor plan de apoyo
              </p>
            </div>

            {/* Info Items */}
            <div className="space-y-6">
              <a
                href="tel:+34943123456"
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-colors duration-300"
              >
                <div className="p-3 bg-gradient-to-r gradient-custom text-white rounded-xl flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-semibold text-slate-950">Llamanos</p>
                  <p className="text-slate-600">+34 943 12 34 56</p>
                </div>
              </a>

              <a
                href="mailto:info@academianext.com"
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-colors duration-300"
              >
                <div className="p-3 bg-gradient-to-r gradient-custom text-white rounded-xl flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-semibold text-slate-950">Email</p>
                  <p className="text-slate-600">info@academianext.com</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-colors duration-300">
                <div className="p-3 bg-gradient-to-r gradient-custom text-white rounded-xl flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-semibold text-slate-950">Ubicación</p>
                  <p className="text-slate-600">Paseo de Urumea, 3</p>
                  <p className="text-slate-600">20004 San Sebastián, Guipúzcoa</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-950 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-950 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-950 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                  placeholder="+34 6xx xxx xxx"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-950 mb-2">
                  Motivo de la consulta
                </label>
                <textarea
                  name="motivo"
                  value={formData.motivo}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Cuéntanos el motivo de tu consulta..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2"
                style={{ background: '#3B82F6' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#1d4ed8';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.3)';
                  e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#3B82F6';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <Send size={20} />
                Enviar Solicitud
              </button>

              {submitted && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-700 text-sm">
                  ✓ Solicitud enviada. Te contactaremos pronto.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
