'use client';

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

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

interface Grado {
  id: string;
  nombre: string;
  cursos: Curso[];
}

const grados: Grado[] = [
  {
    id: 'ade',
    nombre: 'ADE (Administración de Empresas)',
    cursos: [
      {
        nombre: '1º Curso',
        asignaturas: [
          { id: 'ade-1-1', nombre: 'Contabilidad Financiera', creditos: 6, descripcion: 'Fundamentos de contabilidad y registros contables' },
          { id: 'ade-1-2', nombre: 'Economía General', creditos: 6, descripcion: 'Principios económicos y microeconomía' },
          { id: 'ade-1-3', nombre: 'Estadística', creditos: 6, descripcion: 'Análisis estadístico y probabilidad' },
          { id: 'ade-1-4', nombre: 'Derecho Mercantil', creditos: 6, descripcion: 'Leyes comerciales y regulaciones' },
          { id: 'ade-1-5', nombre: 'Matemáticas para Empresas', creditos: 6, descripcion: 'Cálculo y álgebra aplicada' },
        ],
      },
      {
        nombre: '2º Curso',
        asignaturas: [
          { id: 'ade-2-1', nombre: 'Contabilidad de Gestión', creditos: 6, descripcion: 'Costes y análisis interno de empresas' },
          { id: 'ade-2-2', nombre: 'Microeconomía', creditos: 6, descripcion: 'Comportamiento de consumidores y empresas' },
          { id: 'ade-2-3', nombre: 'Finanzas Empresariales', creditos: 6, descripcion: 'Decisiones financieras corporativas' },
          { id: 'ade-2-4', nombre: 'Dirección de Operaciones', creditos: 6, descripcion: 'Gestión de procesos y producción' },
          { id: 'ade-2-5', nombre: 'Marketing Estratégico', creditos: 6, descripcion: 'Estrategias de mercado y posicionamiento' },
        ],
      },
      {
        nombre: '3º Curso',
        asignaturas: [
          { id: 'ade-3-1', nombre: 'Auditoría', creditos: 6, descripcion: 'Procesos de revisión y verificación contable' },
          { id: 'ade-3-2', nombre: 'Fiscalidad Empresarial', creditos: 6, descripcion: 'Tributación e impuestos corporativos' },
          { id: 'ade-3-3', nombre: 'Dirección Financiera', creditos: 6, descripcion: 'Gestión avanzada de finanzas' },
          { id: 'ade-3-4', nombre: 'Estrategia Empresarial', creditos: 6, descripcion: 'Planificación estratégica corporativa' },
          { id: 'ade-3-5', nombre: 'Gestión de Recursos Humanos', creditos: 6, descripcion: 'Dirección de personas en la empresa' },
        ],
      },
      {
        nombre: '4º Curso',
        asignaturas: [
          { id: 'ade-4-1', nombre: 'Valoración de Empresas', creditos: 6, descripcion: 'Métodos de evaluación empresarial' },
          { id: 'ade-4-2', nombre: 'Análisis de Estados Financieros', creditos: 6, descripcion: 'Interpretación de balances e informes' },
          { id: 'ade-4-3', nombre: 'Emprendimiento', creditos: 6, descripcion: 'Creación y gestión de nuevos negocios' },
          { id: 'ade-4-4', nombre: 'Derecho Fiscal', creditos: 6, descripcion: 'Régimen fiscal avanzado' },
          { id: 'ade-4-5', nombre: 'Trabajo Fin de Grado', creditos: 12, descripcion: 'Proyecto final integrador' },
        ],
      },
    ],
  },
  {
    id: 'ingenieria',
    nombre: 'Ingeniería (Informática/Industrial)',
    cursos: [
      {
        nombre: '1º Curso',
        asignaturas: [
          { id: 'ing-1-1', nombre: 'Álgebra Lineal', creditos: 6, descripcion: 'Matrices, vectores y espacios vectoriales' },
          { id: 'ing-1-2', nombre: 'Cálculo I', creditos: 6, descripcion: 'Límites, derivadas e integrales' },
          { id: 'ing-1-3', nombre: 'Física I', creditos: 6, descripcion: 'Mecánica clásica y ondas' },
          { id: 'ing-1-4', nombre: 'Programación', creditos: 6, descripcion: 'Fundamentos de programación' },
          { id: 'ing-1-5', nombre: 'Química', creditos: 6, descripcion: 'Principios de química general' },
        ],
      },
      {
        nombre: '2º Curso',
        asignaturas: [
          { id: 'ing-2-1', nombre: 'Cálculo II', creditos: 6, descripcion: 'Ecuaciones diferenciales y series' },
          { id: 'ing-2-2', nombre: 'Física II', creditos: 6, descripcion: 'Electricidad y magnetismo' },
          { id: 'ing-2-3', nombre: 'Estadística', creditos: 6, descripcion: 'Probabilidad y análisis estadístico' },
          { id: 'ing-2-4', nombre: 'Estructuras de Datos', creditos: 6, descripcion: 'Algoritmos y estructuras computacionales' },
          { id: 'ing-2-5', nombre: 'Termodinámica', creditos: 6, descripcion: 'Principios de energía y calor' },
        ],
      },
      {
        nombre: '3º Curso',
        asignaturas: [
          { id: 'ing-3-1', nombre: 'Análisis Numérico', creditos: 6, descripcion: 'Métodos computacionales avanzados' },
          { id: 'ing-3-2', nombre: 'Sistemas Digitales', creditos: 6, descripcion: 'Circuitos y lógica digital' },
          { id: 'ing-3-3', nombre: 'Bases de Datos', creditos: 6, descripcion: 'Diseño y gestión de datos' },
          { id: 'ing-3-4', nombre: 'Teoría de Máquinas', creditos: 6, descripcion: 'Mecanismos y máquinas térmicas' },
          { id: 'ing-3-5', nombre: 'Control Automático', creditos: 6, descripcion: 'Sistemas de control y regulación' },
        ],
      },
      {
        nombre: '4º Curso',
        asignaturas: [
          { id: 'ing-4-1', nombre: 'Ingeniería de Software', creditos: 6, descripcion: 'Diseño y desarrollo de aplicaciones' },
          { id: 'ing-4-2', nombre: 'Redes de Computadores', creditos: 6, descripcion: 'Comunicación y protocolos de red' },
          { id: 'ing-4-3', nombre: 'Inteligencia Artificial', creditos: 6, descripcion: 'Machine learning y algoritmos IA' },
          { id: 'ing-4-4', nombre: 'Sistemas Distribuidos', creditos: 6, descripcion: 'Arquitectura de sistemas paralelos' },
          { id: 'ing-4-5', nombre: 'Trabajo Fin de Grado', creditos: 12, descripcion: 'Proyecto final integrador' },
        ],
      },
    ],
  },
  {
    id: 'derecho',
    nombre: 'Derecho',
    cursos: [
      {
        nombre: '1º Curso',
        asignaturas: [
          { id: 'der-1-1', nombre: 'Introducción al Derecho', creditos: 6, descripcion: 'Conceptos fundamentales del derecho' },
          { id: 'der-1-2', nombre: 'Derecho Constitucional', creditos: 6, descripcion: 'Constitución y derechos fundamentales' },
          { id: 'der-1-3', nombre: 'Derecho Civil I', creditos: 6, descripcion: 'Teoría general del derecho civil' },
          { id: 'der-1-4', nombre: 'Derecho Penal I', creditos: 6, descripcion: 'Delitos y penas' },
          { id: 'der-1-5', nombre: 'Historia del Derecho', creditos: 6, descripcion: 'Evolución histórica del derecho' },
        ],
      },
      {
        nombre: '2º Curso',
        asignaturas: [
          { id: 'der-2-1', nombre: 'Derecho Civil II', creditos: 6, descripcion: 'Contratos y obligaciones' },
          { id: 'der-2-2', nombre: 'Derecho Penal II', creditos: 6, descripcion: 'Delitos específicos' },
          { id: 'der-2-3', nombre: 'Derecho Administrativo I', creditos: 6, descripcion: 'Organización administrativa' },
          { id: 'der-2-4', nombre: 'Derecho Procesal I', creditos: 6, descripcion: 'Proceso civil' },
          { id: 'der-2-5', nombre: 'Derecho Laboral', creditos: 6, descripcion: 'Relaciones laborales' },
        ],
      },
      {
        nombre: '3º Curso',
        asignaturas: [
          { id: 'der-3-1', nombre: 'Derecho Mercantil', creditos: 6, descripcion: 'Derecho comercial y societario' },
          { id: 'der-3-2', nombre: 'Derecho Administrativo II', creditos: 6, descripcion: 'Acto administrativo' },
          { id: 'der-3-3', nombre: 'Derecho Procesal II', creditos: 6, descripcion: 'Proceso penal' },
          { id: 'der-3-4', nombre: 'Derecho Internacional', creditos: 6, descripcion: 'Relaciones internacionales' },
          { id: 'der-3-5', nombre: 'Derecho Ambiental', creditos: 6, descripcion: 'Protección del medio ambiente' },
        ],
      },
      {
        nombre: '4º Curso',
        asignaturas: [
          { id: 'der-4-1', nombre: 'Derecho Tributario', creditos: 6, descripcion: 'Sistema fiscal' },
          { id: 'der-4-2', nombre: 'Derecho de Propiedad Intelectual', creditos: 6, descripcion: 'Derechos de autor y patentes' },
          { id: 'der-4-3', nombre: 'Práctica Jurídica', creditos: 6, descripcion: 'Aplicación práctica del derecho' },
          { id: 'der-4-4', nombre: 'Ética Jurídica', creditos: 6, descripcion: 'Ética profesional legal' },
          { id: 'der-4-5', nombre: 'Trabajo Fin de Grado', creditos: 12, descripcion: 'Proyecto final integrador' },
        ],
      },
    ],
  },
  {
    id: 'economia',
    nombre: 'Economía',
    cursos: [
      {
        nombre: '1º Curso',
        asignaturas: [
          { id: 'eco-1-1', nombre: 'Microeconomía I', creditos: 6, descripcion: 'Comportamiento de agentes económicos' },
          { id: 'eco-1-2', nombre: 'Macroeconomía I', creditos: 6, descripcion: 'Agregados económicos' },
          { id: 'eco-1-3', nombre: 'Matemáticas para Economía', creditos: 6, descripcion: 'Herramientas matemáticas' },
          { id: 'eco-1-4', nombre: 'Estadística I', creditos: 6, descripcion: 'Métodos estadísticos' },
          { id: 'eco-1-5', nombre: 'Historia Económica', creditos: 6, descripcion: 'Evolución de sistemas económicos' },
        ],
      },
      {
        nombre: '2º Curso',
        asignaturas: [
          { id: 'eco-2-1', nombre: 'Microeconomía II', creditos: 6, descripcion: 'Teoría del consumidor y productor' },
          { id: 'eco-2-2', nombre: 'Macroeconomía II', creditos: 6, descripcion: 'Dinero e inflación' },
          { id: 'eco-2-3', nombre: 'Econometría I', creditos: 6, descripcion: 'Análisis de regresión' },
          { id: 'eco-2-4', nombre: 'Contabilidad Nacional', creditos: 6, descripcion: 'Sistema de cuentas nacionales' },
          { id: 'eco-2-5', nombre: 'Economía Española', creditos: 6, descripcion: 'Economía de España' },
        ],
      },
      {
        nombre: '3º Curso',
        asignaturas: [
          { id: 'eco-3-1', nombre: 'Macroeconomía III', creditos: 6, descripcion: 'Modelos macroeconómicos avanzados' },
          { id: 'eco-3-2', nombre: 'Econometría II', creditos: 6, descripcion: 'Análisis de series temporales' },
          { id: 'eco-3-3', nombre: 'Economía Industrial', creditos: 6, descripcion: 'Estructura de mercados' },
          { id: 'eco-3-4', nombre: 'Economía Internacional', creditos: 6, descripcion: 'Comercio y finanzas internacionales' },
          { id: 'eco-3-5', nombre: 'Economía Laboral', creditos: 6, descripcion: 'Mercados de trabajo' },
        ],
      },
      {
        nombre: '4º Curso',
        asignaturas: [
          { id: 'eco-4-1', nombre: 'Economía Pública', creditos: 6, descripcion: 'Finanzas públicas' },
          { id: 'eco-4-2', nombre: 'Análisis Económico Regional', creditos: 6, descripcion: 'Economía espacial' },
          { id: 'eco-4-3', nombre: 'Economía del Medio Ambiente', creditos: 6, descripcion: 'Economía ecológica' },
          { id: 'eco-4-4', nombre: 'Política Económica', creditos: 6, descripcion: 'Instrumentos de política económica' },
          { id: 'eco-4-5', nombre: 'Trabajo Fin de Grado', creditos: 12, descripcion: 'Proyecto final integrador' },
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
        <h3 className="text-2xl font-bold text-gray-900">Selecciona tu Grado</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {grados.map((grado) => (
            <button
              key={grado.id}
              onClick={() => {
                setSelectedGrado(grado.id);
                setSelectedCurso(0);
              }}
              className={`p-4 rounded-lg font-semibold transition-all duration-300 text-center border-2 ${
                selectedGrado === grado.id
                  ? 'border-blue-500 bg-blue-50 text-blue-600 shadow-lg'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50/30'
              }`}
            >
              {grado.nombre}
            </button>
          ))}
        </div>
      </div>

      {/* Selector de Curso */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-gray-900">Selecciona tu Curso</h3>
        <div className="flex flex-wrap gap-3">
          {gradoActual?.cursos.map((curso, index) => (
            <button
              key={index}
              onClick={() => setSelectedCurso(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 border-2 ${
                selectedCurso === index
                  ? 'border-blue-500 bg-blue-500 text-white shadow-lg'
                  : 'border-gray-300 bg-white text-gray-700 hover:border-blue-400 hover:bg-gray-50'
              }`}
            >
              {curso.nombre}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de Asignaturas */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-gray-900">
          Asignaturas de {gradoActual?.cursos[selectedCurso]?.nombre}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {asignaturasActuales.map((asignatura) => (
            <div
              key={asignatura.id}
              className="group p-6 bg-white border border-gray-200 rounded-xl hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:translate-y-[-4px]"
            >
              <div className="space-y-3">
                <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {asignatura.nombre}
                </h4>
                <p className="text-sm text-gray-500 font-semibold">
                  {asignatura.creditos} Créditos ECTS
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {asignatura.descripcion}
                </p>
              </div>
              <button className="mt-6 w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2">
                Más información
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
