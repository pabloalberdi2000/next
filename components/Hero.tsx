'use client';

import { ArrowDown, Users, Video, Globe, Users2 } from 'lucide-react';

const pillars = [
  {
    icon: Users,
    title: 'Tutores Expertos',
    description: 'Docentes especializados en cada materia de Deusto con experiencia probada.',
  },
  {
    icon: Video,
    title: 'Clases en Vídeo',
    description: 'Contenido visual de calidad, grabado y estructurado para máximo aprendizaje.',
  },
  {
    icon: Globe,
    title: 'Plataforma Online 24/7',
    description: 'Acceso total a recursos, seguimiento y ejercicios desde cualquier lugar.',
  },
  {
    icon: Users2,
    title: 'Grupos Reducidos',
    description: 'Máxima atención personalizada en sesiones de refuerzo y dudas.',
  },
];

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
      className="pt-32 pb-16 relative overflow-hidden"
      style={{
        backgroundImage: 'url(/ninopizarra.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay oscuro para legibilidad */}
      <div className="absolute inset-0 bg-black/40 -z-10"></div>
      {/* Decorative elements - muy sutiles */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-slate-50/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-slate-50/20 rounded-full blur-3xl -z-10"></div>

      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-block">
            <span className="px-4 py-2 bg-white/90 text-slate-700 rounded-full text-sm font-semibold">
              Deusto Donostia ✓
            </span>
          </div>

          {/* Main Headline con gradiente en palabra clave */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight">
            Especialistas en la Universidad de{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #FBBF24 0%, #FBBF24 25%, #EF4444 35%, #3B82F6 65%, #10B981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Deusto
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-3xl mx-auto">
            Desde que llegas hasta que te gradúas. Apoyo académico personalizado con el Método NEXT.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-gradient-to-r gradient-custom text-white font-semibold rounded-xl hover:shadow-xl transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg"
            >
              Solicitar Información
            </button>
            <button
              onClick={scrollToSubjects}
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:border-white/80 hover:bg-white/10 transition-all duration-300"
            >
              Ver Asignaturas
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center pt-12 animate-bounce">
            <ArrowDown className="text-white/70" size={24} />
          </div>
        </div>
      </div>

      {/* El Método NEXT Section */}
      <section id="method" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
              El Método{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #FBBF24 0%, #FBBF24 25%, #EF4444 35%, #3B82F6 65%, #10B981 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                NEXT
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Cuatro pilares fundamentales diseñados para tu éxito en Deusto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="group p-8 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-lg hover:bg-slate-50 transition-all duration-300 text-center bg-white"
                >
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-slate-50 rounded-xl group-hover:bg-slate-100 transition-colors duration-300">
                      <Icon
                        size={32}
                        className="text-slate-700 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-950 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
}
