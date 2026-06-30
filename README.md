# NEXT Academy - Web Platform

Plataforma web moderna para NEXT Academy, academia de apoyo académico para estudiantes de la Universidad de Deusto.

## 🎨 Características de Diseño

- **Minimalista & Sofisticado**: Estética limpia y profesional
- **Colores Corporativos**: 
  - Fondo: Blanco (#FFFFFF)
  - Texto: Gris oscuro elegante (#111827)
  - Acento: Azul corporativo (#3B82F6)
  - Separaciones: Grises muy claros
- **Tipografía**: Inter/Geist (sans-serif moderna)
- **Responsive**: Completamente adaptable a móvil, tablet y desktop

## 📱 Secciones Principales

### 1. **Navbar**
- Logo de NEXT con diseño minimalista
- Navegación sticky (fija)
- Botón destacado "Plataforma Alumnos" con gradiente
- Menú responsive para mobile

### 2. **Hero Section**
- Titular impactante enfocado en estudiantes de Deusto
- Subtítulo explicando el método personalizado
- CTA primaria: "Ver Asignaturas"
- Decorativos sutiles de fondo (gradient blurs)

### 3. **Método NEXT**
- Grid de 4 pilares fundamentales:
  - Aprendizaje Personalizado (Tutores)
  - Plataforma Online
  - Clases en Vídeo
  - Grupos Reducidos
- Iconos interactivos con hover effects
- Transiciones suaves

### 4. **Asignaturas Dinámicas** (Componente Clave)
- **Selector de Grado**: 4 grados (ADE, Ingeniería, Derecho, Economía)
- **Selector de Curso**: Tabs para 1º, 2º, 3º, 4º curso
- **Grid de Asignaturas**: Tarjetas animadas con:
  - Nombre de la asignatura
  - Créditos ECTS
  - Descripción breve
  - Botón "Más información"
- Transiciones fluidas al cambiar grado/curso
- Estado dinámico completamente funcional

### 5. **Footer**
- Datos de contacto de San Sebastián
- Enlaces de navegación
- Redes sociales (LinkedIn, Instagram, Twitter)
- Información legal (Privacy, Terms, Cookies)

## 🛠️ Tecnologías

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS 3.3
- **Componentes**: React 18
- **Iconos**: Lucide React
- **Build**: SWC minify + optimización CSS

## 📁 Estructura de Carpetas

```
next/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página de inicio
│   ├── globals.css         # Estilos globales
│   └── favicon.ico
├── components/
│   ├── Navbar.tsx          # Barra de navegación
│   ├── Hero.tsx            # Sección hero
│   ├── MethodSection.tsx   # Sección de método
│   ├── AsignaturasSection.tsx # Contenedor de asignaturas
│   ├── AsignaturasSelector.tsx # Componente dinámico (CRÍTICO)
│   └── Footer.tsx          # Pie de página
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
├── postcss.config.js
├── .eslintrc.json
└── README.md
```

## 🚀 Inicio Rápido

### Instalación

```bash
cd next
npm install
# o
yarn install
```

### Desarrollo

```bash
npm run dev
# o
yarn dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build Producción

```bash
npm run build
npm start
```

### Type Checking

```bash
npm run type-check
```

## 🎯 Componentes Destacados

### AsignaturasSelector.tsx
El componente más complejo e interactivo:
- Gestión de estado con `useState` para grado y curso
- 4 grados con múltiples cursos cada uno
- Datos de asignaturas completos (nombre, créditos, descripción)
- Animaciones fluidas con `transition-all duration-300`
- Grid responsivo que se adapta a cualquier pantalla
- Botones interactivos con estados visuales

```tsx
const [selectedGrado, setSelectedGrado] = useState<string>(grados[0].id);
const [selectedCurso, setSelectedCurso] = useState<number>(0);
```

### Transiciones & Animaciones
- `animate-fade-in`: Desvanecimiento suave
- `animate-slide-up`: Deslizamiento hacia arriba
- `transition-all duration-300`: Transiciones suaves universales
- `hover:scale-105`: Escalado en hover
- `hover:shadow-xl`: Sombras dinámicas

## 📱 Responsive Design

- **Mobile First**: Diseñado primero para móvil
- **Breakpoints**:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px

## 🎨 Paleta de Colores

```css
--color-white: #FFFFFF
--color-primary: #3B82F6 (Azul corporativo)
--color-text-primary: #111827 (Gris oscuro)
--color-text-secondary: #6B7280 (Gris medio)
--color-bg-secondary: #F3F4F6 (Gris muy claro)
```

## 📊 Datos de Asignaturas

Cada grado incluye 4 cursos con 5 asignaturas cada uno (20 asignaturas por grado):

- **ADE**: Contabilidad, Economía, Estadística, Derecho Mercantil, Matemáticas...
- **Ingeniería**: Álgebra, Cálculo, Física, Programación, Química...
- **Derecho**: Introducción al Derecho, Constitucional, Civil, Penal, Administrativo...
- **Economía**: Microeconomía, Macroeconomía, Econometría, Historia Económica...

## 🔧 Configuración

### Variables de Entorno (si necesarias)

```bash
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_ANALYTICS_ID=
```

### TypeScript

Configuración estricta activada:
- `strict: true`
- `noImplicitAny: true`
- `strictNullChecks: true`
- `noUnusedLocals: true`

## 📈 Optimizaciones

- Code splitting automático
- Image optimization
- CSS minification
- Font optimization
- Zero-layout shift

## 🎯 Contacto

**NEXT Academy**
- 📍 Paseo de Urumea, 3 | San Sebastián
- 📧 info@nextacademy.es
- 📱 +34 943 12 34 56

---

Desarrollado con ❤️ para estudiantes de Deusto
