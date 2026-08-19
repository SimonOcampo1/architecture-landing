# Estudio Monolito

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?logo=greensock&logoColor=black)](https://gsap.com)
[![Lenis](https://img.shields.io/badge/Lenis-000000)](https://lenis.darkroom.engineering)

> Landing brutalista para un estudio de arquitectura. Hormigón, contraste y nada más.

![Estudio Monolito](docs/preview.png)

**[Ver el sitio →](https://architecture-monolitico.vercel.app/)**

Una sola página, tres archivos, sin build ni dependencias instaladas. Todo el movimiento —parallax, revelaciones, atenuación del hero— se apoya en GSAP ScrollTrigger montado sobre el scroll de Lenis.

## Características

- **Cuatro secciones en una página**: manifiesto, `#retiros` (la grilla de obras), `#detalle` (el proyecto destacado) y `#contacto`.
- **Header que reacciona al scroll**: se solidifica pasados 60 px y ofrece un botón de vuelta al inicio.
- **Entrada del hero**: la imagen arranca ampliada y saturada, y se asienta en su posición final con una timeline de GSAP.
- **Parallax por bloque**: en cada obra, la imagen y su título se desplazan a distinta velocidad para separarse del fondo.
- **Atenuación progresiva**: al entrar en el detalle, el hero se oscurece y la imagen hace zoom según avanza el scroll.
- **Apariciones escalonadas**: los bloques de texto entran de a uno, no todos juntos.

## Estructura

```
index.html            Página completa: manifiesto, retiros, detalle, contacto
css/style.css         Tipografía, formas brutalistas y configuración de Lenis
js/main.js            Timelines de GSAP, ScrollTrigger, Lenis y el formulario
assets/images/        casa_piedra · el_mirador · el_refugio · pabellon_negro
```

## Cómo correrlo

No hay dependencias que instalar: Tailwind, GSAP y Lenis se cargan por CDN.

```bash
git clone https://github.com/SimonOcampo1/architecture-landing.git
cd architecture-landing
npx serve .
```

También sirve abrir `index.html` directo en el navegador, o cualquier servidor estático (`python -m http.server`, Live Server de VS Code).

> [!NOTE]
> El formulario de contacto no envía nada. `main.js` simula el envío con un spinner y un estado de éxito; para que funcione de verdad hay que conectarlo a un endpoint.

> [!TIP]
> Tailwind entra por `cdn.tailwindcss.com` con los plugins `forms` y `container-queries`. Es lo correcto para una landing de una página, pero el CDN no está pensado para producción con tráfico real: ahí conviene compilar el CSS.
