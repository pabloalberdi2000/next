'use client';

import AsignaturasSelector from './AsignaturasSelector';

export default function AsignaturasSection() {
  return (
    <section
      id="subjects"
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
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            Nuestras <span
              style={{
                background: 'linear-gradient(90deg, #FBBF24 0%, #FBBF24 25%, #EF4444 35%, #3B82F6 65%, #10B981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >Asignaturas</span>
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
