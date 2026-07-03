'use client';

import { Star } from 'lucide-react';

const testimonios = [
  {
    nombre: 'Carlos M.',
    grado: 'Estudiante de ADE',
    texto:
      'NEXT Academy me ha ayudado a mejorar mis notas en un 2.5 puntos. Los tutores son excepcionales y la plataforma es muy intuitiva.',
  },
  {
    nombre: 'Elena L.',
    grado: 'Estudiante de Derecho',
    texto:
      'Las clases en vídeo son claras y concisas. He aprobado todas las asignaturas difíciles gracias a NEXT.',
  },
  {
    nombre: 'David P.',
    grado: 'Estudiante de Ingeniería',
    texto:
      'Excelente relación calidad-precio. Los grupos reducidos permiten resolver dudas al instante.',
  },
];

export default function Testimonios() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            Historias de Éxito
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Experiencias reales de estudiantes de Deusto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonios.map((testimonial, idx) => (
            <div
              key={idx}
              className="p-8 border border-slate-100 rounded-xl hover:shadow-lg transition-all duration-300 bg-slate-50"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <p className="text-slate-700 mb-6 leading-relaxed">
                &quot;{testimonial.texto}&quot;
              </p>

              <div>
                <p className="font-bold text-slate-950">{testimonial.nombre}</p>
                <p className="text-sm text-slate-600">{testimonial.grado}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
