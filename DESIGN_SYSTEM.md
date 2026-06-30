# 🎨 Sistema de Diseño NEXT Academy v2.0
## Basado en el Gradiente Multicolor de Marca

### Visión General
Implementación de un diseño minimalista y sofisticado con **fondo blanco limpio** y uso selectivo del **gradiente secuencial de marca** (Amarillo → Naranja → Rojo → Morado → Azul → Verde) **únicamente en elementos de interacción y conversión**.

---

## 🎯 Gradiente de Marca Oficial

```
from-amber-400 via-rose-500 via-indigo-500 to-emerald-500
```

**Representación:**
- 🟨 Amarillo (Amber-400) → 🧡 Naranja (Rose-500)
- 💜 Morado (Indigo-500) → 🟢 Verde (Emerald-500)

**Aplicación**: Botones CTA, titulares enfocados, iconos interactivos.

---

## 📐 Paleta de Colores

### Fondos (Lienzo Limpio)
```
bg-white              /* Principal */
bg-slate-50           /* Secciones alternas/cards */
bg-slate-100          /* Hover subtle */
```

### Textos
```
text-slate-950        /* Títulos principales */
text-slate-900        /* Cuerpo de texto */
text-slate-700        /* Descripciones */
text-slate-600        /* Subtítulos */
text-slate-500        /* Texto secundario */
text-slate-400        /* Disabled/placeholder */
```

### Bordes y Separadores
```
border-slate-100      /* Muy sutil */
border-slate-200      /* Sutil */
border-slate-300      /* Visible */
```

---

## 🔘 Componentes Clave

### 1. Navbar
- **Logo**: Degradado de marca en fondo cuadrado redondeado
- **Links de navegación**: Gris oscuro `text-slate-600 hover:text-slate-950`
- **Selector de idioma**: Borde `border-slate-200`, hover degradado de marca
- **Botón "Plataforma Alumnos"**: Degradado completo + sombra
  ```
  bg-gradient-to-r from-amber-400 via-rose-500 via-indigo-500 to-emerald-500
  shadow-lg rounded-xl hover:scale-[1.02]
  ```

### 2. Hero Section
- **Fondo**: Blanco puro con decorativos sutiles (blur background slate-50)
- **Badge**: `bg-slate-50 text-slate-700 rounded-full`
- **Titular principal**: Negro extrabold + palabra clave con **gradiente**
  ```
  text-slate-950 extrabold tracking-tight
  Palabra destacada: bg-gradient-to-r... bg-clip-text text-transparent
  ```
- **Botón CTA primario**: Gradiente completo
- **Botón CTA secundario**: Borde slate-200, hover bg-slate-50

### 3. Método NEXT
- **Cards**: Blancas `bg-white`, borde `border-slate-100`
- **Hover**: `hover:bg-slate-50 hover:border-slate-200 hover:shadow-lg`
- **Icono de fondo**: `bg-slate-50` en card → `bg-slate-100` en hover
- **Título "NEXT"**: Palabra clave con **gradiente**

### 4. Selector Dinámico de Asignaturas (CRÍTICO)

#### Selector de Grados
- **Inactivo**: Borde `border-slate-200`, blanco `bg-white`, texto gris
- **Activo**: Gradiente completo de marca + texto blanco
- **Hover inactivo**: `hover:border-slate-300 hover:bg-slate-50`

#### Tabs de Cursos (Pestañas)
- **Inactivo**: Texto `text-slate-400`, sin fondo
- **Activo**: 
  - Texto negro `text-slate-950`
  - **Borde decorativo inferior 2px**: Gradiente multicolor
  ```
  h-1 rounded-b-lg bg-gradient-to-r from-amber-400 via-rose-500 via-indigo-500 to-emerald-500
  ```

#### Cards de Asignaturas
- **Base**: Blancas `bg-white`, borde muy sutil `border-slate-100`
- **Hover**: 
  - `hover:shadow-lg` (sombra suave)
  - `hover:-translate-y-1` (elevación 4px)
  - Borde `hover:border-slate-200`
  - Transición suave `transition-all duration-300`
- **Botón "Solicitar Información"**: 
  - Degradado completo de marca
  - `rounded-lg` (8px)
  - `hover:scale-[1.02]` + sombra
  - `active:scale-[0.98]`

### 5. Instalaciones
- **Fondo**: `bg-slate-50` (sutil)
- **Características**: Check circular con gradiente
  ```
  w-6 h-6 rounded-full bg-gradient-to-r... text-white
  ```
- **Placeholder imagen**: `bg-gradient-to-br from-slate-200 to-slate-300`

### 6. Testimonios
- **Cards**: `bg-slate-50`, borde `border-slate-100`
- **Estrellas**: `fill-amber-400 text-amber-400` (no gradiente aquí)
- **Nombres**: `text-slate-950`, descripciones `text-slate-600`

### 7. Formulario de Contacto
- **Labels**: `text-slate-950`, font-semibold
- **Inputs**: 
  - Borde `border-slate-200`
  - Focus: `focus:ring-2 focus:ring-emerald-500 focus:border-transparent`
  - `rounded-lg`
- **Botón Submit**: 
  - Degradado completo
  - `rounded-xl` (16px)
  - `hover:scale-[1.02]`
- **Success message**: Verde esmeralda `bg-emerald-50 border-emerald-200 text-emerald-700`
- **Iconos de contacto**: 
  - Degradado de marca en fondo circular
  - `p-3 rounded-xl`

### 8. Footer
- **Fondo**: Gris oscuro `bg-slate-950`
- **Logo**: Degradado de marca en fondo
- **Links hover**: `hover:text-white` (transición suave)
- **Social icons**: `hover:text-white hover:scale-110`

### 9. Widget WhatsApp
- **Botón flotante**: 
  - Verde WhatsApp original `bg-[#25D366]`
  - Circular `rounded-full w-16 h-16`
  - Sombra profunda `shadow-2xl`
  - Posición: `fixed bottom-8 right-8 z-40`
  - Hover: `hover:scale-110`
  - Active: `active:scale-95`

---

## 📝 Reglas de Tipografía

### Pesos de Fuente
- **Títulos principales**: `font-extrabold` (800)
- **Subtítulos/Cards**: `font-bold` (700)
- **Etiquetas**: `font-semibold` (600)
- **Cuerpo**: `font-medium` / `font-normal` (500/400)

### Tamaños
- **H1 (Hero)**: `text-5xl md:text-7xl`
- **H2 (Secciones)**: `text-4xl md:text-5xl`
- **H3 (Subsecciones)**: `text-2xl`
- **Body**: `text-base` (16px)
- **Small**: `text-sm` (14px)
- **Tiny**: `text-xs` (12px)

### Tracking
- Títulos con contenido importante: `tracking-tight`
- Títulos grandes: `tracking-tight`

---

## 🎭 Transiciones y Animaciones

### Estándar
```
transition-all duration-300    /* Cambio general */
transition-colors duration-300 /* Solo colores */
transition-transform duration-300 /* Solo transform */
```

### Escalado
```
hover:scale-[1.02]      /* Crecer 2% */
hover:scale-110         /* Crecer 10% */
active:scale-[0.98]     /* Encoger 2% al click */
active:scale-95         /* Encoger 5% al click */
```

### Elevación
```
hover:shadow-lg         /* Sombra media */
hover:shadow-xl         /* Sombra fuerte */
hover:-translate-y-1    /* Subir 4px */
```

---

## ✨ Efectos Especiales

### Textos con Gradiente
```tsx
<span className="bg-gradient-to-r from-amber-400 via-rose-500 via-indigo-500 to-emerald-500 bg-clip-text text-transparent">
  Texto con gradiente
</span>
```

### Bordes Degradados (Tabs activos)
```tsx
<div className="h-1 rounded-b-lg bg-gradient-to-r from-amber-400 via-rose-500 via-indigo-500 to-emerald-500"></div>
```

### Botones Degradados
```tsx
<button className="bg-gradient-to-r from-amber-400 via-rose-500 via-indigo-500 to-emerald-500 text-white rounded-xl hover:shadow-xl transition-transform duration-300 hover:scale-[1.02]">
  CTA
</button>
```

---

## 📱 Responsive Breakpoints

```
sm:  640px  (tabletas pequeñas)
md:  768px  (tabletas)
lg:  1024px (desktops pequeños)
xl:  1280px (desktops grandes)
```

**Enfoque Mobile-First**: Estilos base para móvil, ampliar con prefijos `md:` y `lg:`.

---

## 🎯 Puntos de Conversión (Con Degradado)

1. **Navbar**: Botón "Acceso Plataforma Alumnos"
2. **Hero**: Botón "Solicitar Información"
3. **Hero**: Botón "Ver Asignaturas"
4. **AsignaturasSelector**: Botones en tarjetas "Solicitar Información"
5. **AsignaturasSelector**: Selector de Grados (cuando activo)
6. **ContactoCTA**: Botón "Enviar Solicitud"
7. **ContactoCTA**: Iconos de contacto (teléfono, email, ubicación)
8. **WhatsAppWidget**: Botón flotante verde

---

## 🔍 Contraste y Accesibilidad

- ✅ Texto blanco sobre gradiente: Suficiente contraste
- ✅ Textos slate-950/900 sobre blanco/slate-50: WCAG AAA
- ✅ Botones con hover visual claro
- ✅ Focus rings en formularios: `:focus:ring-2 focus:ring-emerald-500`
- ✅ Estados disabled con texto gris suave

---

## 📐 Espaciado

### Padding (Interior)
- `p-3` = 12px (botones pequeños)
- `p-4` = 16px (cards, inputs)
- `p-6` = 24px (secciones)
- `p-8` = 32px (containers principales)

### Margin (Exterior)
- `mb-2` = 8px (entre elementos)
- `mb-4` = 16px (entre grupos)
- `mb-6` = 24px (entre secciones)
- `mb-16` = 64px (entre secciones grandes)

### Gap (Entre items de grid/flex)
- `gap-2` = 8px (compacto)
- `gap-3` = 12px (normal)
- `gap-4` = 16px (espacioso)
- `gap-6` = 24px (muy espacioso)
- `gap-8` = 32px (máximo espaciado)

---

## 🔐 Regla de Oro

> **El gradiente multicolor de marca se aplica ÚNICAMENTE a:**
> - Botones de acción primaria (CTA)
> - Palabras clave en titulares (texto)
> - Indicadores visuales de estado activo (bordes, checks)
> - Iconos de contacto (fondos)

> **Todo lo demás es blanco, gris o negro** para mantener la elegancia y sofisticación.

---

**Versión**: 2.0  
**Último actualizado**: 30 de junio de 2026  
**Próxima revisión**: Cuando se agreguen nuevas funcionalidades
