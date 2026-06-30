'use client';

import { useState } from 'react';
import { ChevronRight, MessageSquare } from 'lucide-react';

interface Asignatura {
  id: string;
  nombre: string;
  creditos: number;
  descripcion: string;
}

interface Curso {
  nombre: string;
  asignaturas: Asignatura[];
}

const grados = [
  {
    id: 'ade',
    nombre: 'ADE (Administración de Empresas)',
    cursos: [
      {
        nombre: '1º Curso',
        asignaturas: [
          { id: 'ade-1-1', nombre: 'Contabilidad Financiera', creditos: 6, descripcion: 'Fundamentos de contabilidad y registros contables.' },
          { id: 'ade-1-2', nombre: 'Economía General', creditos: 6, descripcion: 'Principios económicos y microeconomía aplicada.' },
          { id: 'ade-1-3', nombre: 'Estadística Empresarial', creditos: 6, descripcion: 'Análisis estadístico para la toma de decisiones.' },
          { id: 'ade-1-4', nombre: 'Derecho Mercantil I', creditos: 6, descripcion: 'Leyes comerciales y normas regulatorias básicas.' },
          { id: 'ade-1-5', nombre: 'Matemáticas Aplicadas', creditos: 6, descripcion: 'Herramientas matemáticas para análisis empresarial.' },
        ],
      },
      {
        nombre: '2º Curso',
        asignaturas: [
          { id: 'ade-2-1', nombre: 'Contabilidad de Gestión', creditos: 6, descripcion: 'Análisis de costes y gestión interna de la empresa.' },
          { id: 'ade-2-2', nombre: 'Microeconomía', creditos: 6, descripcion: 'Comportamiento de consumidores y productores.' },
          { id: 'ade-2-3', nombre: 'Finanzas Empresariales', creditos: 6, descripcion: 'Decisiones financieras corporativas e inversión.' },
          { id: 'ade-2-4', nombre: 'Dirección de Operaciones', creditos: 6, descripcion: 'Gestión de procesos y optimización de producción.' },
          { id: 'ade-2-5', nombre: 'Marketing Estratégico', creditos: 6, descripcion: 'Estrategias de mercado y posicionamiento de marca.' },
        ],
      },
    ],
  },
];

export default function AsignaturasSelector() {
  const [selectedGrado, setSelectedGrado] = useState<string>(grados[0].id);
  const [selectedCurso, setSelectedCurso] = useState<number>(0);

  const gradoActual = grados.find((g) => g.id === selectedGrado);
  const asignaturasActuales = gradoActual?.cursos[selectedCurso]?.asignaturas || [];

  return (
    <div className="space-y-8">
      {/* Selector de Grado */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-slate-950">Selecciona tu Grado</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {grados.map((grado) => (
            <button
              key={grado.id}
              onClick={() => {
                setSelectedGrado(grado.id);
                setSelectedCurso(0);
              }}
              className={`p-4 rounded-xl font-semibold transition-all duration-300 text-center border-2 ${
                selectedGrado === grado.id
                  ? 'border-emerald-500 bg-gradient-to-r from-amber-400 via-rose-500 via-indigo-500 to-emerald-500 text-white shadow-lg'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              {grado.nombre}
            </button>
          ))}
        </div>
      </div>

      {/* Selector de Curso */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-slate-950">Selecciona tu Curso</h3>
        <div className="flex flex-wrap gap-3">
          {gradoActual?.cursos.map((curso, index) => (
            <div key={index} className="relative">
              <button
                onClick={() => setSelectedCurso(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCurso === index
                    ? 'text-slate-950 bg-white'
                    : 'text-slate-400 bg-white hover:text-slate-600'
                }`}
              >
                {curso.nombre}
              </button>
              {selectedCurso === index && (
                <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-lg bg-gradient-to-r from-amber-400 via-rose-500 via-indigo-500 to-emerald-500"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Grid de Asignaturas */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-slate-950">
          Asignaturas de {gradoActual?.cursos[selectedCurso]?.nombre}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {asignaturasActuales.map((asignatura) => (
            <div
              key={asignatura.id}
              className="group p-6 bg-white border border-slate-100 rounded-xl hover:shadow-lg hover:border-slate-200 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="space-y-3">
                <h4 className="text-lg font-bold text-slate-950 group-hover:text-slate-950 transition-colors duration-300 line-clamp-2">
                  {asignatura.nombre}
                </h4>
                <p className="text-sm text-slate-500 font-semibold">
                  {asignatura.creditos} Créditos ECTS
                </p>
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                  {asignatura.descripcion}
                </p>
              </div>
              <button className="mt-6 w-full px-4 py-3 bg-gradient-to-r from-amber-400 via-rose-500 via-indigo-500 to-emerald-500 text-white font-semibold rounded-lg hover:shadow-lg transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
                <MessageSquare size={18} />
                Solicitar Información
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
