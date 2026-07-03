'use client';

import { Users, Video, Globe, Users2 } from 'lucide-react';

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

export default function Metodo() {
  return (
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
  );
}
