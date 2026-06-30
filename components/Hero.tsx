'use client';

import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToAsignaturas = () => {
    const element = document.getElementById('asignaturas');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="pt-32 pb-16 bg-gradient-to-br from-white via-blue-50/30 to-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-50/30 rounded-full blur-3xl -z-10"></div>

      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
            Supera tus asignaturas en{' '}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Deusto
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
            Con el <span className="font-semibold text-gray-900">Método NEXT</span>: aprendizaje
            personalizado, tutores expertos, plataforma online y grupos reducidos diseñados
            específicamente para ti.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={scrollToAsignaturas}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 active:scale-95"
            >
              Ver Asignaturas
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-300">
              Contactar
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center pt-12 animate-bounce">
            <ArrowDown className="text-gray-400" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
}
