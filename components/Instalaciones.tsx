'use client';

export default function Instalaciones() {
  return (
    <section id="facilities" className="py-20 bg-slate-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
              Nuestras Instalaciones
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Espacio moderno y profesional en el corazón de San Sebastián
            </p>
            <p className="text-lg text-slate-600">
              Aulas equipadas con tecnología de última generación para optimizar tu aprendizaje.
            </p>

            <div className="space-y-4 pt-6">
              {[
                'Aulas equipadas con pizarras digitales',
                'Zonas de estudio colaborativo',
                'Biblioteca digital y recursos online',
                'Acceso 24/7 a plataforma de aprendizaje',
                'Zona de descanso y cafetería',
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-amber-400 via-rose-500 via-indigo-500 to-emerald-500 text-white flex items-center justify-center text-sm font-bold">
                    ✓
                  </div>
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🏢</div>
              <p className="text-slate-600 text-sm">Galería de instalaciones</p>
              <p className="text-slate-500 text-xs mt-2">(Imágenes próximamente)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
