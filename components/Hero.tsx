'use client';

import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToSubjects = () => {
    const element = document.getElementById('subjects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="pt-32 pb-16 bg-white relative overflow-hidden"
    >
      {/* Decorative elements - muy sutiles */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-slate-50/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-slate-50/20 rounded-full blur-3xl -z-10"></div>

      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-block">
            <span className="px-4 py-2 bg-slate-50 text-slate-700 rounded-full text-sm font-semibold">
              Deusto Donostia ✓
            </span>
          </div>

          {/* Main Headline con gradiente en palabra clave */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-950 leading-tight tracking-tight">
            Especialistas en la Universidad de{' '}
            <span className="bg-gradient-to-r from-amber-400 via-rose-500 via-indigo-500 to-emerald-500 bg-clip-text text-transparent">
              Deusto
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-3xl mx-auto">
            Desde que llegas hasta que te gradúas. Apoyo académico personalizado con el Método NEXT.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-gradient-to-r from-amber-400 via-rose-500 via-indigo-500 to-emerald-500 text-white font-semibold rounded-xl hover:shadow-xl transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg"
            >
              Solicitar Información
            </button>
            <button
              onClick={scrollToSubjects}
              className="px-8 py-4 border-2 border-slate-200 text-slate-950 font-semibold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all duration-300"
            >
              Ver Asignaturas
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center pt-12 animate-bounce">
            <ArrowDown className="text-slate-400" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
}
