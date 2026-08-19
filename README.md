# Estudio Monolito

**Hormigón, contraste y nada más.**

Landing page brutalista para un estudio de arquitectura. Una sola página, tres archivos, sin build.

## 🚀 Características

- **Tipografía de alto contraste** sobre una paleta inspirada en el hormigón.
- **Scroll con inercia** — Lenis para el desplazamiento vertical, GSAP ScrollTrigger para cada revelación.
- **Parallax de imágenes** que se desplazan contra la grilla al avanzar la página.
- **Responsive** con utilidades de Tailwind CSS.
- **Formulario de contacto** manejado en el mismo `main.js`, sin dependencias extra.

## 📂 Estructura

```
index.html      Diseño unificado de una sola página
css/style.css   Configuración de Lenis, tipografía y formas brutalistas
js/main.js      Timelines de GSAP, ScrollTrigger, Lenis y formulario
```

## 🛠️ Stack

HTML5 · Tailwind CSS · GSAP + ScrollTrigger · Lenis

## 💻 Puesta en marcha

```bash
git clone https://github.com/SimonOcampo1/architecture-landing.git
cd architecture-landing
python -m http.server 8000
```
