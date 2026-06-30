'use client';

import AsignaturasSelector from './AsignaturasSelector';

export default function AsignaturasSection() {
  return (
    <section
      id="subjects"
      className="py-20 bg-white"
    >
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            Nuestras <span className="text-gradient-to-r from-amber-400 via-rose-500 via-indigo-500 to-emerald-500 bg-clip-text text-transparent">Asignaturas</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Selecciona tu grado y curso para ver todas las asignaturas disponibles
          </p>
        </div>

        <AsignaturasSelector />
      </div>
    </section>
  );
}
