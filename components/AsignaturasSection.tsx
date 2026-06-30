'use client';

import { useState } from 'react';
import AsignaturasSelector from './AsignaturasSelector';

export default function AsignaturasSection() {
  return (
    <section
      id="asignaturas"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50"
    >
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Nuestras <span className="text-blue-600">Asignaturas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Selecciona tu grado y curso para ver todas las asignaturas disponibles
          </p>
        </div>

        <AsignaturasSelector />
      </div>
    </section>
  );
}
