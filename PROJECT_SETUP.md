# 🚀 TypingSoft - React + Vite Migration

Una migración completamente optimizada de tu aplicación web a **React 19 + Vite 8** con arquitectura enterprise-grade.

## ✨ Características Implementadas

- ⚡ **Vite 8** - Build tool ultra-rápido con HMR instantáneo
- ⚛️ **React 19** - La versión más reciente con todas las características
- 🎬 **GSAP + Lenis** - Animaciones profesionales y scroll suave premium
- 🎨 **TypeScript** - Type-safe development
- 📦 **Code Splitting** - Chunks optimizados (vendor, animations, main)
- 🔥 **CSS Variables** - Sistema de diseño escalable y consistente
- 📱 **Responsive** - Mobile-first design approach
- 🎯 **Path Aliases** - Importes simples y limpios (@components, @hooks, etc)

## 🏗️ Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Button.tsx      # Botón con variantes
│   ├── Container.tsx   # Contenedor responsivo
│   ├── Layout.tsx      # Layout base
│   └── index.ts        # Exportación central
├── pages/              # Páginas de la aplicación
├── hooks/              # Custom hooks
│   ├── useScrollAnimation.ts  # Animaciones al scroll
│   ├── useSmoothScroll.ts     # Scroll suave
│   ├── useMediaQuery.ts       # Media queries reactivos
│   └── index.ts
├── utils/              # Funciones utilitarias
│   ├── cn.ts          # Merger de clases
│   ├── constants.ts   # Constantes globales
│   └── index.ts
├── styles/             # Estilos globales
│   └── globals.css    # CSS variables y utilidades
├── types/              # TypeScript types
├── context/            # React Context
├── assets/             # Imágenes y archivos estáticos
└── App.tsx             # Componente principal
```

## 🚀 Inicio Rápido

### Instalar dependencias
```bash
npm install
```

### Modo desarrollo
```bash
npm run dev
```
Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Build para producción
```bash
npm run build
```

### Preview de producción
```bash
npm run preview
```

## 📋 Dependencias Principales

### Runtime
- `react@^19.2.4` - Librería UI
- `react-dom@^19.2.4` - React DOM
- `gsap` - Animaciones profesionales
- `lenis` - Scroll suave
- `framer-motion` - Animaciones React
- `axios` - HTTP client
- `clsx` - Utility para clases
- `tailwindcss` - Framework CSS (opcional)

### Development
- `typescript@~5.9.3` - Lenguaje
- `vite@^8.0.1` - Build tool
- `@vitejs/plugin-react@^6.0.1` - Plugin React
- `eslint@^9.39.4` - Linter
- `terser` - Minificador

## 🎨 Customización

### Variables CSS Globales
Todas las variables se definen en `src/styles/globals.css`:

```css
:root {
  /* Colors */
  --color-primary: #6366f1;
  --color-secondary: #ec4899;
  --color-accent: #14b8a6;
  
  /* Spacing */
  --spacing-4: 1rem;
  --spacing-8: 2rem;
  
  /* Transitions */
  --transition-base: 250ms ease-in-out;
}
```

### Path Aliases
Importa desde cualquier lado sin rutas relativas:

```typescript
// ✅ Recomendado
import { Button } from '@components'
import { useScrollAnimation } from '@hooks'
import { cn } from '@utils/cn'

// ❌ Evitar
import { Button } from '../../../../components'
```

## 🎬 Animaciones

### Scroll Animation Hook
```typescript
import { useScrollAnimation } from '@hooks'

function MyComponent() {
  const ref = useScrollAnimation('.animate-item')
  
  return (
    <div ref={ref}>
      <div className="animate-item">Animaré al scroll</div>
    </div>
  )
}
```

### Smooth Scroll
```typescript
import { useSmoothScroll, scrollToElement } from '@hooks'

function App() {
  useSmoothScroll() // Activa scroll suave globalmente
  
  const handleClick = () => {
    scrollToElement('#section-2')
  }
  
  return <button onClick={handleClick}>Ir a Sección 2</button>
}
```

### GSAP Animaciones
```typescript
import gsap from 'gsap'

gsap.to(element, {
  duration: 0.6,
  opacity: 1,
  y: 0,
  ease: 'power3.out'
})
```

## 📱 Responsive Design

### Breakpoints Disponibles
```typescript
export const BREAKPOINTS = {
  xs: 320,    // Móviles pequeños
  sm: 640,    // Móviles
  md: 768,    // Tablets
  lg: 1024,   // Laptops
  xl: 1280,   // Desktops
  '2xl': 1536 // Pantallas grandes
}
```

### Media Query Hook
```typescript
import { useMediaQuery } from '@hooks'

function MyComponent() {
  const isMobile = useMediaQuery('(max-width: 640px)')
  
  return isMobile ? <MobileView /> : <DesktopView />
}
```

## 🔧 Configuración

### Vite (vite.config.ts)
- Configuración optimizada para producción
- Code splitting automático
- Minificación con Terser
- Alias de rutas configurados

### TypeScript (tsconfig.app.json)
- Strict mode habilitado
- Path aliases configuradas
- Soporte completo para JSX

### ESLint (eslint.config.js)
- Configuración recomendada de React
- Validación de hooks
- Detección de refresh en desarrollo

## 🌈 Temas (Light/Dark)

Las variables de color se adaptan automáticamente:

```css
@media (prefers-color-scheme: light) {
  :root {
    --bg-primary: #ffffff;
    --text-primary: #0f172a;
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #0f172a;
    --text-primary: #f8fafc;
  }
}
```

## 📦 Build Output

El build produce chunks optimizados:

```
dist/
├── index.html                 # Template HTML
├── assets/
│   ├── vendor-*.js           # React + React-DOM
│   ├── animations-*.js       # GSAP + Lenis + Framer Motion
│   ├── index-*.js            # Código principal
│   ├── index-*.css           # Estilos compilados
│   └── rolldown-runtime.js   # Runtime de Rolldown
```

**Tamaños típicos (gzip):**
- Vendor: ~60KB
- Animations: ~49KB
- Main: ~2KB

## 🚀 Performance

- ✅ Lazy loading de componentes
- ✅ Code splitting automático
- ✅ CSS optimizado con variables
- ✅ Minificación agresiva
- ✅ Terser para JS
- ✅ Tree-shaking de dependencias

## 📝 Próximos Pasos

1. **Migrar contenido**: Reemplaza el contenido de `App.tsx` con tu diseño actual
2. **Componentes**: Convierte secciones en componentes reutilizables
3. **Animaciones**: Actualiza transiciones con GSAP/Framer Motion
4. **Páginas**: Crea rutas si necesitas (instala `react-router-dom`)
5. **Testing**: Agrega `vitest` y `@testing-library/react`

## 🎯 Mejores Prácticas

- ✅ Usa path aliases para importes
- ✅ Mantén componentes pequeños y reutilizables
- ✅ Aprovecha TypeScript para type safety
- ✅ Usa hooks custom para lógica compartida
- ✅ Optimiza imágenes y assets
- ✅ Considera lazy loading con `React.lazy()`

## 🤝 Soporte

Para problemas o preguntas:
1. Revisa la documentación de [Vite](https://vite.dev)
2. Consulta [React Docs](https://react.dev)
3. Lee sobre [GSAP](https://greensock.com/gsap/)
4. Explora [Lenis](https://lenis.studiofreight.com/)

## 📄 Licencia

Proyecto personal de TypingSoft. Todos los derechos reservados.

---

**¡Tu proyecto está listo para desarrollar!** 🎉

