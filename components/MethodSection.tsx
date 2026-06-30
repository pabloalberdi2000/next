'use client';

import { Users, BookOpen, Video, Zap } from 'lucide-react';

const pillars = [
  {
    icon: Users,
    title: 'Aprendizaje Personalizado',
    description: 'Tutores expertos adaptados a tu nivel y ritmo de aprendizaje.',
  },
  {
    icon: BookOpen,
    title: 'Plataforma Online',
    description: 'Acceso 24/7 a contenidos, ejercicios y seguimiento de progreso.',
  },
  {
    icon: Video,
    title: 'Clases en Vídeo',
    description: 'Contenido visual claro y estructurado, fácil de entender y repasar.',
  },
  {
    icon: Zap,
    title: 'Grupos Reducidos',
    description: 'Máxima atención y participación en sesiones de refuerzo colectivas.',
  },
];

export default function MethodSection() {
  return (
    <section id="method" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            El Método <span className="text-blue-600">NEXT</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cuatro pilares fundamentales diseñados para tu éxito académico
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg hover:bg-blue-50/50 transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors duration-300">
                    <Icon
                      size={32}
                      className="text-blue-600 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
