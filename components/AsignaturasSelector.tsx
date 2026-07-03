'use client';

import { useState } from 'react';
import { MessageSquare } from 'lucide-react';

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
      {
        nombre: '3º Curso',
        asignaturas: [
          { id: 'ade-3-1', nombre: 'Dirección Estratégica', creditos: 6, descripcion: 'Formulación e implementación de estrategias empresariales.' },
          { id: 'ade-3-2', nombre: 'Gestión de Recursos Humanos', creditos: 6, descripcion: 'Selección, formación y desarrollo del talento organizacional.' },
          { id: 'ade-3-3', nombre: 'Derecho Laboral y Fiscal', creditos: 6, descripcion: 'Legislación laboral y fiscalidad aplicada a la empresa.' },
          { id: 'ade-3-4', nombre: 'Análisis Financiero Avanzado', creditos: 6, descripcion: 'Evaluación de proyectos y análisis de rentabilidad.' },
          { id: 'ade-3-5', nombre: 'Logística y Supply Chain', creditos: 6, descripcion: 'Gestión integral de la cadena de suministro.' },
        ],
      },
      {
        nombre: '4º Curso',
        asignaturas: [
          { id: 'ade-4-1', nombre: 'Emprendimiento e Innovación', creditos: 6, descripcion: 'Creación y gestión de nuevas empresas y modelos de negocio.' },
          { id: 'ade-4-2', nombre: 'Business Intelligence', creditos: 6, descripcion: 'Análisis de datos para la toma de decisiones empresariales.' },
          { id: 'ade-4-3', nombre: 'Sostenibilidad Empresarial', creditos: 6, descripcion: 'Responsabilidad social corporativa y desarrollo sostenible.' },
          { id: 'ade-4-4', nombre: 'Auditoría y Control Interno', creditos: 6, descripcion: 'Sistemas de control y auditoría en organizaciones.' },
          { id: 'ade-4-5', nombre: 'Proyecto Final de Grado', creditos: 12, descripcion: 'Trabajo integrador de todas las competencias adquiridas.' },
        ],
      },
    ],
  },
  {
    id: 'ade-ingenieria',
    nombre: 'ADE + Ingeniería Informática',
    cursos: [
      {
        nombre: '1º Curso',
        asignaturas: [
          { id: 'adeii-1-1', nombre: 'Contabilidad Financiera', creditos: 6, descripcion: 'Fundamentos de contabilidad y registros contables.' },
          { id: 'adeii-1-2', nombre: 'Programación I', creditos: 6, descripcion: 'Introducción a la programación con Java y desarrollo orientado a objetos.' },
          { id: 'adeii-1-3', nombre: 'Álgebra Lineal', creditos: 6, descripcion: 'Matrices, vectores y sistemas de ecuaciones para computación.' },
          { id: 'adeii-1-4', nombre: 'Fundamentos de Economía', creditos: 6, descripcion: 'Principios económicos fundamentales aplicados a la tecnología.' },
          { id: 'adeii-1-5', nombre: 'Estructuras de Datos', creditos: 6, descripcion: 'Listas, árboles, grafos y algoritmos fundamentales.' },
        ],
      },
      {
        nombre: '2º Curso',
        asignaturas: [
          { id: 'adeii-2-1', nombre: 'Programación II', creditos: 6, descripcion: 'Patrones de diseño y desarrollo avanzado en Java.' },
          { id: 'adeii-2-2', nombre: 'Bases de Datos', creditos: 6, descripcion: 'Diseño relacional, SQL y gestión de sistemas de bases de datos.' },
          { id: 'adeii-2-3', nombre: 'Microeconomía Digital', creditos: 6, descripcion: 'Economía aplicada a mercados tecnológicos y digitales.' },
          { id: 'adeii-2-4', nombre: 'Sistemas Operativos', creditos: 6, descripcion: 'Procesos, memoria, ficheros y sistemas de archivos.' },
          { id: 'adeii-2-5', nombre: 'Marketing Digital', creditos: 6, descripcion: 'Estrategias de marketing en entornos digitales y e-commerce.' },
        ],
      },
      {
        nombre: '3º Curso',
        asignaturas: [
          { id: 'adeii-3-1', nombre: 'Ingeniería del Software', creditos: 6, descripcion: 'Metodologías, ciclo de vida y desarrollo de proyectos software.' },
          { id: 'adeii-3-2', nombre: 'Redes de Computadores', creditos: 6, descripcion: 'Protocolos, arquitectura TCP/IP y comunicación en redes.' },
          { id: 'adeii-3-3', nombre: 'Dirección Estratégica Digital', creditos: 6, descripcion: 'Estrategia empresarial en transformación digital.' },
          { id: 'adeii-3-4', nombre: 'Desarrollo Web Avanzado', creditos: 6, descripcion: 'Frontend y backend con frameworks modernos.' },
          { id: 'adeii-3-5', nombre: 'Ciberseguridad', creditos: 6, descripcion: 'Seguridad informática y protección de datos.' },
        ],
      },
      {
        nombre: '4º Curso',
        asignaturas: [
          { id: 'adeii-4-1', nombre: 'Machine Learning y IA', creditos: 6, descripcion: 'Algoritmos de aprendizaje automático y aplicaciones prácticas.' },
          { id: 'adeii-4-2', nombre: 'Cloud Computing', creditos: 6, descripcion: 'Plataformas cloud y arquitectura de servicios distribuidos.' },
          { id: 'adeii-4-3', nombre: 'Business Intelligence Avanzado', creditos: 6, descripcion: 'Análisis de big data y visualización de información.' },
          { id: 'adeii-4-4', nombre: 'Emprendimiento Tecnológico', creditos: 6, descripcion: 'Creación de startups y modelos de negocio digitales.' },
          { id: 'adeii-4-5', nombre: 'Proyecto Final', creditos: 12, descripcion: 'Desarrollo de un proyecto integrador de todas las competencias.' },
        ],
      },
      {
        nombre: '5º Curso',
        asignaturas: [
          { id: 'adeii-5-1', nombre: 'Especialización: Desarrollo Full Stack', creditos: 6, descripcion: 'Desarrollo completo de aplicaciones web modernas.' },
          { id: 'adeii-5-2', nombre: 'Especialización: Análisis de Datos', creditos: 6, descripcion: 'Data science y análisis avanzado con Python y R.' },
          { id: 'adeii-5-3', nombre: 'Consultoría Tecnológica', creditos: 6, descripcion: 'Gestión de proyectos tecnológicos y consultoría empresarial.' },
          { id: 'adeii-5-4', nombre: 'Normativa y Cumplimiento Digital', creditos: 6, descripcion: 'Regulación, GDPR y compliance en empresas tecnológicas.' },
          { id: 'adeii-5-5', nombre: 'Prácticas Profesionales', creditos: 12, descripcion: 'Experiencia práctica en empresas del sector tecnológico.' },
        ],
      },
    ],
  },
  {
    id: 'ade-derecho',
    nombre: 'ADE + Derecho',
    cursos: [
      {
        nombre: '1º Curso',
        asignaturas: [
          { id: 'adeder-1-1', nombre: 'Contabilidad Financiera', creditos: 6, descripcion: 'Fundamentos de contabilidad y registros contables.' },
          { id: 'adeder-1-2', nombre: 'Derecho Constitucional', creditos: 6, descripcion: 'Estructura y principios del ordenamiento jurídico español.' },
          { id: 'adeder-1-3', nombre: 'Economía General', creditos: 6, descripcion: 'Principios económicos fundamentales para juristas.' },
          { id: 'adeder-1-4', nombre: 'Derecho Penal I', creditos: 6, descripcion: 'Conceptos básicos del derecho penal y teoría del delito.' },
          { id: 'adeder-1-5', nombre: 'Historia del Derecho', creditos: 6, descripcion: 'Evolución histórica del ordenamiento legal español.' },
        ],
      },
      {
        nombre: '2º Curso',
        asignaturas: [
          { id: 'adeder-2-1', nombre: 'Derecho Mercantil', creditos: 6, descripcion: 'Regimen jurídico de actividades comerciales y empresariales.' },
          { id: 'adeder-2-2', nombre: 'Derecho Civil', creditos: 6, descripcion: 'Relaciones jurídicas entre personas físicas y patrimoniales.' },
          { id: 'adeder-2-3', nombre: 'Finanzas Empresariales', creditos: 6, descripcion: 'Decisiones financieras en marco legal y fiscal.' },
          { id: 'adeder-2-4', nombre: 'Derecho Laboral', creditos: 6, descripcion: 'Relaciones jurídicas laborales y derechos de los trabajadores.' },
          { id: 'adeder-2-5', nombre: 'Derecho Tributario', creditos: 6, descripcion: 'Sistema fiscal y obligaciones tributarias en España.' },
        ],
      },
      {
        nombre: '3º Curso',
        asignaturas: [
          { id: 'adeder-3-1', nombre: 'Derecho Administrativo', creditos: 6, descripcion: 'Organización y actividad de la administración pública.' },
          { id: 'adeder-3-2', nombre: 'Derecho Penal II', creditos: 6, descripcion: 'Delitos especiales y teoría de la responsabilidad penal.' },
          { id: 'adeder-3-3', nombre: 'Dirección Estratégica Legal', creditos: 6, descripcion: 'Gobernanza corporativa y compliance normativo.' },
          { id: 'adeder-3-4', nombre: 'Derecho de Sociedades', creditos: 6, descripcion: 'Constitución y operación de personas jurídicas mercantiles.' },
          { id: 'adeder-3-5', nombre: 'Gestión de Recursos Humanos', creditos: 6, descripcion: 'Gestión de personal desde perspectiva legal y empresarial.' },
        ],
      },
      {
        nombre: '4º Curso',
        asignaturas: [
          { id: 'adeder-4-1', nombre: 'Derecho Procesal Civil', creditos: 6, descripcion: 'Procedimiento civil y resolución de controversias.' },
          { id: 'adeder-4-2', nombre: 'Derecho Internacional Mercantil', creditos: 6, descripcion: 'Comercio internacional y contratos transnacionales.' },
          { id: 'adeder-4-3', nombre: 'Protección de Datos', creditos: 6, descripcion: 'RGPD y privacidad en la era digital.' },
          { id: 'adeder-4-4', nombre: 'Propiedad Intelectual', creditos: 6, descripcion: 'Patentes, marcas, derechos de autor y propiedad industrial.' },
          { id: 'adeder-4-5', nombre: 'Seminario de Casos Prácticos', creditos: 6, descripcion: 'Análisis de jurisprudencia y resolución de conflictos.' },
        ],
      },
      {
        nombre: '5º Curso',
        asignaturas: [
          { id: 'adeder-5-1', nombre: 'Especialización: Derecho Empresarial', creditos: 6, descripcion: 'Asesoría jurídica a empresas y estructuras societarias.' },
          { id: 'adeder-5-2', nombre: 'Especialización: Fiscalidad Corporativa', creditos: 6, descripcion: 'Planificación fiscal y optimización tributaria.' },
          { id: 'adeder-5-3', nombre: 'Mediación y Resolución de Conflictos', creditos: 6, descripcion: 'Métodos alternativos para solucionar disputas.' },
          { id: 'adeder-5-4', nombre: 'Sustentabilidad y RSC Legal', creditos: 6, descripcion: 'Marco legal de responsabilidad social corporativa.' },
          { id: 'adeder-5-5', nombre: 'Prácticum Profesional', creditos: 12, descripcion: 'Experiencia práctica en despachos y empresas.' },
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
                  ? 'border-emerald-500 bg-gradient-to-r gradient-custom text-white shadow-lg'
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
                    ? 'bg-gradient-to-r gradient-custom text-white'
                    : 'text-slate-600 bg-white hover:bg-gradient-to-r hover:gradient-custom hover:text-white'
                }`}
              >
                {curso.nombre}
              </button>
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
              <button
                className="mt-6 w-full px-4 py-3 bg-white text-slate-950 font-semibold rounded-lg border-2 border-slate-200 transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2 group hover:shadow-lg"
                style={{
                  background: 'white',
                  color: '#0f172a',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(90deg, #FBBF24 0%, #FBBF24 25%, #EF4444 35%, #3B82F6 65%, #10B981 100%)';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.borderColor = 'transparent';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.color = '#0f172a';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }}
              >
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
