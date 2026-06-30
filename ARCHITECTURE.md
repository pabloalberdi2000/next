# 🏗️ Arquitectura NEXT Academy - Guía Completa

## Visión General

NEXT Academy es una plataforma web moderna de apoyo académico especializada **100% en la Universidad de Deusto**, con soporte multiidioma (Castellano/Euskera) y enfoque completo en conversión y captación de leads.

### Características Clave
- ✅ Next.js 14 + App Router
- ✅ Internacionalización (i18n) con rutas `/es/` y `/eu/`
- ✅ TypeScript + Tailwind CSS
- ✅ Diseño minimalista blanco/negro/gris
- ✅ Componentes interactivos (selector dinámico de asignaturas)
- ✅ Formularios de conversión integrados
- ✅ SEO técnico preparado (hreflang, canonical tags)
- ✅ Responsive design (Mobile-First)

---

## 📁 Estructura de Carpetas

```
next-academy/
│
├── app/
│   ├── [lng]/                          # Parámetro dinámico de idioma (es/eu)
│   │   ├── layout.tsx                  # Layout raíz con soporte i18n
│   │   ├── page.tsx                    # Página de inicio
│   │   └── plataforma/
│   │       └── page.tsx                # Futura plataforma de alumnos
│   │
│   ├── globals.css                     # Estilos globales
│   └── favicon.ico
│
├── components/
│   ├── Navbar.tsx                      # Navegación sticky con selector de idioma
│   ├── Hero.tsx                        # Sección hero principal
│   ├── Metodo.tsx                      # 4 pilares del método NEXT
│   ├── AsignaturasSection.tsx          # Contenedor de asignaturas
│   ├── AsignaturasSelector.tsx         # Componente dinámico (CRÍTICO)
│   ├── Instalaciones.tsx               # Galería y detalles de instalaciones
│   ├── Testimonios.tsx                 # Testimonios de estudiantes
│   ├── ContactoCTA.tsx                 # Formulario de contacto y CTA
│   ├── Footer.tsx                      # Pie de página
│   └── WhatsAppWidget.tsx              # Widget de WhatsApp (futuro)
│
├── lib/
│   └── i18n.ts                         # Configuración de internacionalización
│
├── public/
│   ├── logos/
│   ├── images/
│   └── icons/
│
├── styles/
│   └── animations.css                  # Animaciones personalizadas
│
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
├── postcss.config.js
├── .eslintrc.json
├── ARCHITECTURE.md                     # Este archivo
└── README.md
```

---

## 🌐 Sistema de Internacionalización (i18n)

### Estructura

**Archivo: `lib/i18n.ts`**

Define dos diccionarios completos: `es` (Español) y `eu` (Euskera).

```typescript
export type Language = 'es' | 'eu';
export const languages: Language[] = ['es', 'eu'];

// Dictionary contiene todas las claves de texto de la app
export type Dictionary = {
  nav: { ... }
  hero: { ... }
  method: { ... }
  subjects: { ... }
  footer: { ... }
}

// getDictionary(lng) retorna el diccionario del idioma seleccionado
```

### Rutas Limpias

- **Español**: `https://academianext.com/es/`
- **Euskera**: `https://academianext.com/eu/`

Cada ruta es indexable por Google y tiene `hreflang` correcto para SEO.

### Uso en Componentes

```tsx
interface ComponentProps {
  lng: Language;
  dict: Dictionary;
}

export default function Component({ lng, dict }: ComponentProps) {
  return <h1>{dict.hero.title}</h1>
}
```

---

## 🎯 Componentes Principales

### 1. **Navbar.tsx**
- Logo minimalista (letra N en cuadrado negro)
- Selector de idioma (ES / EU) con dropdown
- Enlaces de navegación: Inicio, Método, Asignaturas, Instalaciones, Contacto
- Botón destacado "Acceso Plataforma Alumnos"
- Menú responsive para mobile
- Sticky/Fixed position

### 2. **Hero.tsx**
- Badge con ubicación (Deusto Donostia)
- Titular potente: "Especialistas en la Universidad de Deusto"
- Subtítulo: "Desde que llegas hasta que te gradúas"
- 2 CTAs: Solicitar Información + Ver Asignaturas
- Indicador de scroll suave
- Decorativos (blur backgrounds)

### 3. **AsignaturasSelector.tsx** ⭐ CRÍTICO
El componente más complejo e interactivo:

#### Estados internos:
```typescript
const [selectedGrado, setSelectedGrado] = useState<string>(grados[0].id);
const [selectedCurso, setSelectedCurso] = useState<number>(0);
const [showInfoForm, setShowInfoForm] = useState<string | null>(null);
```

#### Flujo de usuario:
1. Selecciona grado (ADE, Derecho, Ingeniería Informática)
2. Sistema renderiza tabs de cursos (1º, 2º, 3º, 4º)
3. Al seleccionar curso, se muestra grid de 5 asignaturas
4. Cada asignatura tiene botón "Solicitar Información"
5. Botón abre formulario mini o scrollea a contacto

#### Datos de Asignaturas:
- **3 Grados principales**: ADE, Derecho, Ingeniería Informática
- **4 cursos por grado**: 1º a 4º año
- **5 asignaturas por curso**: Nombre, Créditos ECTS, Descripción
- **100% Bilingüe**: ES + EU en cada campo

#### Características:
- Transiciones suaves (`transition-all duration-300`)
- Grid responsivo (1 col mobile, 2 cols tablet, 3 cols desktop)
- Animación fade-in al cambiar curso
- Hover effects en tarjetas
- Estados visuales clara (botones seleccionados con color de fondo)

### 4. **Metodo.tsx**
- Grid de 4 pilares (Users, Video, Globe, Users2 icons)
- Hover effects suaves
- Textos descriptivos cortos pero potentes
- Cada pilar tiene icono decorativo en fondo gris

### 5. **Instalaciones.tsx**
- Imagen/galería placeholder (futuro: carrusel de fotos)
- Listado de 5 features clave
- Diseño 2 columnas (texto + imagen)
- Responsive (stacked en mobile)

### 6. **Testimonios.tsx**
- Grid de 3 testimonios (estudiantes reales de Deusto)
- Estrellas de 5 ⭐
- Nombre, grado y cita
- Totalmente bilingüe

### 7. **ContactoCTA.tsx** ⭐ CONVERSIÓN
Formulario avanzado de captura de leads:

**Campos:**
- Nombre (requerido)
- Email (requerido)
- Teléfono (opcional)
- Interesado en (dropdown: ADE, Derecho, Ingeniería)
- Mensaje (textarea)

**Funcionalidades:**
- Validación básica (required fields)
- Mensaje de éxito al enviar
- Estados de loading
- Integrable con servicios de email/CRM (Brevo, Zapier, etc.)

**Información de contacto alternativa:**
- Llamar directamente (+34 943 12 34 56)
- Email (info@academianext.com)
- Dirección (Paseo de Urumea, 3 - San Sebastián)

### 8. **Footer.tsx**
- Grid de 4 columnas (Brand, Links, Academy, Contact)
- Social media icons (LinkedIn, Instagram, Twitter)
- Links legales (Privacy, Terms, Cookies)
- Copyright y año dinámico

---

## 🎨 Sistema de Diseño

### Paleta de Colores
```css
--color-white: #FFFFFF        /* Fondo principal */
--color-black: #000000        /* Acciones, botones, textos fuertes */
--color-gray-50: #F9FAFB
--color-gray-100: #F3F4F6
--color-gray-200: #E5E7EB
--color-gray-300: #D1D5DB
--color-gray-400: #9CA3AF
--color-gray-500: #6B7280
--color-gray-600: #4B5563
--color-gray-700: #374151
--color-gray-900: #111827    /* Texto principal elegante */
```

### Tipografía
- Font: Inter / Geist (San-serif moderna)
- Pesos: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- Tamaños base: 16px
- Line height: 1.5

### Espaciado
Basado en escala de Tailwind (4px):
- `p-4` = 16px
- `p-6` = 24px
- `p-8` = 32px
- Gaps: `gap-4`, `gap-6`, `gap-8`, `gap-12`

### Bordes
- `rounded-lg` = 8px
- `rounded-xl` = 12px
- `rounded-2xl` = 16px
- Bordes: `border border-gray-200`

### Sombras
- `shadow-sm` = leve
- `shadow-lg` = media
- `shadow-xl` = fuerte
- Colores: `shadow-black/30`, `shadow-black/40`

### Transiciones
- Default: `transition-all duration-300`
- Para colores: `transition-colors duration-300`
- Para transforms: `transition-transform duration-300`

---

## 🚀 Flujo de Datos y Estado

### Props Drilling
La mayoría de componentes reciben:
```typescript
interface ComponentProps {
  lng: Language;        // 'es' | 'eu'
  dict: Dictionary;     // Diccionario de textos
}
```

### Estado Local
Cada componente interactivo maneja su propio estado:
- `AsignaturasSelector`: grado, curso, formulario abierto
- `ContactoCTA`: datos del formulario, estado enviado
- `Navbar`: menú abierto, menú de idioma abierto

### No hay estado global (Redux, Zustand)
Innecesario para este proyecto. Si crece, considerar Zustand.

---

## 📱 Responsive Design

### Breakpoints (Tailwind)
- `sm`: 640px (tablets pequeñas)
- `md`: 768px (tablets)
- `lg`: 1024px (desktops pequeños)
- `xl`: 1280px (desktops grandes)

### Estrategia Mobile-First
Todos los estilos comienzan en móvil:
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* 1 col en mobile, 2 en tablet, 3 en desktop */}
</div>
```

---

## 🔍 SEO & Performance

### Meta Tags
- Títulos dinámicos por página
- Descripciones optimizadas
- Canonical tags (`/es/` y `/eu/`)
- hreflang alternates (multiidioma)
- OpenGraph (para compartir en RRSS)

### Rutas Indexables
Todas las rutas generadas con `generateStaticParams()`:
```typescript
export function generateStaticParams() {
  return [{ lng: 'es' }, { lng: 'eu' }];
}
```

### Lighthouse
Objetivos:
- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: 100

---

## 🛠️ Instalación y Desarrollo

### 1. Instalar dependencias
```bash
npm install
```

### 2. Ejecutar servidor de desarrollo
```bash
npm run dev
```
Abre http://localhost:3000/es/ (o /eu/)

### 3. Build de producción
```bash
npm run build
npm start
```

### 4. Type checking
```bash
npm run type-check
```

---

## 📊 Grados y Asignaturas Incluidos

### ADE (Administración de Empresas)
- 1º: Contabilidad, Economía, Estadística, Derecho Mercantil, Matemáticas
- 2º: Contabilidad de Gestión, Microeconomía, Finanzas, Operaciones, Marketing
- 3º: Auditoría, Fiscalidad, Dirección Financiera, Estrategia, RRHH
- 4º: Valoración, Análisis Financiero, Emprendimiento, Derecho Fiscal, TFG

### Derecho
- 1º: Introducción, Constitucional, Civil I, Penal I, Historia
- 2º: Civil II, Penal II, Administrativo I, Procesal I, Laboral
- 3º: Mercantil, Administrativo II, Procesal Penal, Internacional, Ambiental
- 4º: Tributario, Propiedad Intelectual, Práctica Jurídica, Ética, TFG

### Ingeniería Informática
- 1º: Álgebra, Cálculo I, Física I, Programación, Química
- 2º: Cálculo II, Física II, Estadística, Estructuras de Datos, Termodinámica
- 3º: Análisis Numérico, Sistemas Digitales, Bases de Datos, Sistemas Operativos, Control
- 4º: Ingeniería de Software, Redes, IA, Ciberseguridad, TFG

**Total: 3 grados × 4 cursos × 5 asignaturas = 60 asignaturas indexables**

---

## 🎯 Estrategia de Conversión

### Puntos CTA (Llamadas a la Acción)
1. **Hero**: "Solicitar Información" + "Ver Asignaturas"
2. **AsignaturasSelector**: Botón en cada tarjeta "Solicitar Información"
3. **ContactoCTA**: Formulario completo + info de contacto
4. **Navbar**: Botón "Acceso Plataforma Alumnos"
5. **Footer**: Links a contacto, redes sociales

### Formularios de Captura
- **Contacto Principal**: Nombre, Email, Teléfono, Grado Interesado, Mensaje
- **Mini Formularios**: Cada asignatura puede tener su propio micro-formulario

### Integración con Marketing
Endpoints preparados para:
- Brevo (antigua Sendinblue)
- Zapier
- Google Sheets
- CRM propios (future)

---

## 🔐 Seguridad

### Validación
- TypeScript strict mode
- Validación de formularios (HTML5 + JS)
- Sanitización de inputs

### HTTPS & SSL
- Requerido en producción
- Certificados Auto-renovables (Let's Encrypt en Vercel)

### Privacy & GDPR
- Política de Privacidad (página legal)
- Consentimiento de cookies
- No se almacenan datos sensibles en cliente

---

## 📈 Analytics & Tracking

### Eventos a Trackear
- Clics en botones CTA
- Envío de formularios
- Selector de idioma
- Scroll en asignaturas
- Clics en redes sociales

### Servicios Recomendados
- Google Analytics 4
- Hotjar (heatmaps)
- Microsoft Clarity
- Faro (Real User Monitoring)

---

## 🚀 Deployment

### Vercel (Recomendado)
```bash
vercel deploy
```
- Zero-config deployment
- Preview URLs automáticas
- Analytics integrado

### Alternativas
- Netlify
- AWS Amplify
- DigitalOcean App Platform

### Environment Variables
```bash
NEXT_PUBLIC_FORM_ENDPOINT=https://...
NEXT_PUBLIC_ANALYTICS_ID=GA-...
```

---

## 📚 Recursos & Referencias

### Next.js
- [Docs Oficiales](https://nextjs.org/docs)
- [App Router](https://nextjs.org/docs/app)
- [i18n Routing](https://nextjs.org/docs/app/building-your-application/routing/internationalization)

### Tailwind CSS
- [Documentation](https://tailwindcss.com/docs)
- [Color Palette](https://tailwindcss.com/docs/customizing-colors)

### SEO & i18n
- [hreflang Implementation](https://developers.google.com/search/docs/specialty/international/localized-versions)
- [Canonical Tags](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)

---

## 📝 Checklist Pre-Launch

- [ ] Todos los diccionarios (ES/EU) completos
- [ ] Imágenes optimizadas y comprimidas
- [ ] Meta tags y OG images
- [ ] Formularios conectados a email/CRM
- [ ] Google Analytics 4 configurado
- [ ] Google Search Console verificado
- [ ] Robots.txt y sitemap.xml
- [ ] Mobile testing en dispositivos reales
- [ ] Lighthouse > 90 en 4 métricos
- [ ] Testing de performance
- [ ] Backups y disaster recovery

---

**Última actualización**: 30 de junio de 2026
**Versión**: 2.0.0 (i18n + Deusto Especializado)
