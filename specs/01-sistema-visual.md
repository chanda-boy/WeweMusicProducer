# 01. Sistema visual

Monocromo puro, solo oscuro, estilo producto Apple. El color lo ponen las fotos en blanco y negro y el audio; la interfaz se aparta.

Cambios respecto a `src/styles/global.css` actual:

| Antes | Ahora | Motivo |
|---|---|---|
| `--accent` (naranja) | **Eliminado** | Sin color de acento. El énfasis es relleno off-white con texto oscuro |
| `--accent-ink: #160a05` | `--ink: #0b0b0d` | Texto sobre relleno off-white |
| `--text: #f1f0ee` (cálido) | `--text: #f2f2f3` (neutro frío) | Una sola familia de grises, alineada con el fondo `#0b0b0d` |
| `--line: rgb(255 255 255 / 0.1)` | `--line` sólido + `--line-alpha` translúcido | Sin `#fff` puro ni en alfa; sólido para la página, alfa solo sobre superficies con blur |
| Degradado naranja `soft-light` sobre la foto del hero | **Eliminado** | Monocromo |
| `:focus-visible` con color de acento | Anillo off-white (ver Foco) | Monocromo |

## 1. Color

### 1.1 Escala de tokens

Contrastes calculados con la fórmula de luminancia relativa WCAG 2.x. Columna "vs bg" = contra `#0b0b0d`.

| Token | Hex | Uso | vs bg | vs surface-1 | vs surface-2 |
|---|---|---|---|---|---|
| `--bg` | `#0b0b0d` | Fondo de página. Único fondo de sección | 1.00 | 1.07 | 1.16 |
| `--surface-1` | `#141417` | Tarjetas, barra del player, toast | 1.07 | 1.00 | 1.08 |
| `--surface-2` | `#1c1c20` | Hover de filas, skeletons, pista de progreso en reposo | 1.16 | 1.08 | 1.00 |
| `--line` | `#26262b` | Hairlines y divisores decorativos | 1.31 | 1.22 | 1.13 |
| `--line-strong` | `#34343a` | Pista de la barra de progreso, borde de tarjetas | 1.59 | 1.49 | 1.37 |
| `--control-border` | `#6a6a72` | Borde de botón secundario, chips de filtro inactivos | 3.67 | 3.43 | 3.17 |
| `--text-subtle` | `#8a8a92` | Metadatos: año, duración, tiempos del player, tags | 5.74 | 5.37 | 4.96 |
| `--text-muted` | `#a3a3aa` | Texto secundario, bio, enlaces de nav en reposo | 7.84 | 7.33 | 6.78 |
| `--fill-hover` | `#d9d9dc` | Hover del botón primario | 13.96 | 13.05 | 12.06 |
| `--text` | `#f2f2f3` | Texto principal, titulares, relleno del botón primario | 17.58 | 16.43 | 15.18 |
| `--ink` | `#0b0b0d` | Texto e iconos sobre `--text` y `--fill-hover` | 17.58 sobre `--text` | 13.96 sobre `--fill-hover` | |

Tokens translúcidos (solo sobre superficies con `backdrop-filter` o encima de fotos):

| Token | Valor | Uso |
|---|---|---|
| `--line-alpha` | `rgb(242 242 243 / 0.10)` | Borde inferior de la nav, borde de la barra del player |
| `--glass` | `rgb(11 11 13 / 0.80)` | Fondo de nav y barra del player con blur |
| `--scrim` | `linear-gradient(to top, rgb(11 11 13 / 0.85), rgb(11 11 13 / 0) 60%)` | Bajo texto encima de fotos |

Reglas:
- **Nunca** `#000` ni `#fff`, tampoco en `rgb()` con alfa. El negro de sombras es `--bg` con alfa.
- **Sin acento.** Ningún componente introduce color. Estados (activo, sonando, error) se comunican con relleno, peso, icono y texto, no con tono.
- **Un solo tema.** Todas las secciones usan `--bg`. Las variaciones de profundidad se hacen con `--surface-1` y `--surface-2`, nunca invirtiendo a claro.
- `color-scheme: dark` en `:root`. `::selection` = fondo `--text`, texto `--ink`.

### 1.2 Énfasis interactivo

| Nivel | Fondo | Texto/icono | Borde | Hover | Uso |
|---|---|---|---|---|---|
| Primario | `--text` | `--ink` | ninguno | fondo `--fill-hover` | Una acción principal por vista: "Escuchar", "Pedir beat", "Escribir por Instagram" |
| Secundario | transparente | `--text` | 1px `--control-border` | borde `--text` | Acción alternativa junto a una primaria |
| Terciario (enlace) | transparente | `--text-muted` | subrayado 1px, offset 0.2em | texto `--text` | Enlaces de nav, footer, "ver más" |
| Seleccionado (chip, idioma activo) | `--text` | `--ink` | ninguno | sin cambio | Filtro de género activo, idioma actual |
| Deshabilitado | transparente | `--text-subtle` | 1px `--line-strong` | sin cambio | Solo si es inevitable. `aria-disabled` |

`:active` en cualquier botón: `transform: scale(0.98)`, 120 ms.

## 2. Tipografía

Familia única: **Geist Variable**, auto-hospedada con `@fontsource-variable/geist` (ya instalada, pesos 100 a 900).

- Importar `@fontsource-variable/geist` (normal) y `@fontsource-variable/geist/wght-italic.css` (itálica, solo si se usa en titulares).
- `font-display: swap` (lo trae el paquete). Precargar solo `geist-latin-wght-normal.woff2`.
- Pila: `'Geist Variable', system-ui, sans-serif`.
- Números en player, duraciones y años: `font-variant-numeric: tabular-nums`. No se añade Geist Mono.
- Sin serif. Sin segunda familia.

### 2.1 Escala

| Token | Tamaño | Peso | Tracking | Interlineado | Uso |
|---|---|---|---|---|---|
| `--fs-display` | `clamp(2.75rem, 7vw, 6rem)` | 600 | `-0.045em` | 1.0 (1.1 si hay itálica) | H1 del hero. Máx. 2 líneas |
| `--fs-statement` | `clamp(2rem, 4.8vw, 4rem)` | 500 | `-0.035em` | 1.1 | Frase que se ilumina, titular del zoom, contacto |
| `--fs-h2` | `clamp(2rem, 4.4vw, 3.75rem)` | 600 | `-0.035em` | 1.05 | Títulos de sección, título de producción en detalle |
| `--fs-h3` | `clamp(1.375rem, 2vw, 1.75rem)` | 600 | `-0.02em` | 1.2 | Título en tarjeta de producción, nombre de beat destacado |
| `--fs-lead` | `clamp(1.0625rem, 1.4vw, 1.25rem)` | 400 | `-0.005em` | 1.55 | Subtexto del hero, bio, historia de la canción |
| `--fs-body` | `1rem` | 400 | `0` | 1.6 | Texto corrido |
| `--fs-small` | `0.875rem` | 500 | `0` | 1.45 | Nav, botones, metadatos, footer |
| `--fs-micro` | `0.8125rem` | 500 | `0.01em` | 1.4 | Tags de beat, tiempos del player, toast |
| `--fs-eyebrow` | `0.75rem` | 500 | `0.12em`, mayúsculas | 1.3 | Eyebrow. Máximo 1 cada 3 secciones (ver README) |

Reglas:
- Tamaño mínimo de texto visible: 12px (`0.75rem`).
- Ancho de lectura: `max-width: 65ch` en párrafos, `22ch` a `24ch` en la frase que se ilumina.
- Jerarquía con peso y color (`--text` frente a `--text-muted`), no solo con tamaño.
- Botones: `--fs-small`, peso 500, sin mayúsculas forzadas, una sola línea (`white-space: nowrap`).

### 2.2 Regla de itálica (descendentes)

La itálica de Geist es el único recurso de énfasis en titulares. Nunca color, nunca otra familia.

- Máximo **una palabra o grupo en itálica por titular**, y solo en `--fs-display` o `--fs-statement`.
- Mismo color que el resto del titular (`--text`).
- Si la palabra en itálica tiene descendentes (`g j p q y`, en español es frecuente: "ya", "juego", "pista", "que", "groove"): `line-height: 1.1` mínimo en el titular, y el `<em>` con `display: inline-block; padding-bottom: 0.08em`.
- Revisar cada titular con itálica en ES y EN por separado: la palabra con descendente puede cambiar entre idiomas.

## 3. Radios

Sistema mixto documentado. Se aplica igual en todas las páginas.

| Token | Valor | Se aplica a |
|---|---|---|
| `--r-pill` | `999px` | Todos los controles: botones, chips de filtro, selector ES/EN, botón de play, toast, thumb de la barra de progreso |
| `--r-card` | `24px` | Media y contenedores: fotos enmarcadas, portadas, tarjetas de producción, barra del player (flotante) |
| `--r-inner` | `calc(var(--r-card) - <padding>)` | Media dentro de un contenedor con padding (radio concéntrico). Ej.: tarjeta de 24px con 8px de padding, portada interior de 16px |
| `0` | `0` | Elementos a sangre completa: imagen del zoom al final de la animación, foto del hero a sangre en móvil |

Prohibido: radios sueltos fuera de esta tabla (4px, 8px, 12px "porque sí"), botones cuadrados, tarjetas en pastilla.

## 4. Espaciado y grid

### 4.1 Escala de espaciado (base 4px)

| Token | Valor | Uso típico |
|---|---|---|
| `--s-1` | 4px | Separación icono y texto pequeño |
| `--s-2` | 8px | Padding interno de chips, gap de tags |
| `--s-3` | 12px | Gap entre botones |
| `--s-4` | 16px | Padding de filas de beat (vertical) |
| `--s-5` | 24px | Padding de tarjetas, gap de grid en móvil |
| `--s-6` | 32px | Separación titular y párrafo |
| `--s-7` | 48px | Separación bloque de texto y CTA grande |
| `--s-8` | 64px | Separación entre bloques dentro de una sección |
| `--s-9` | 96px | Padding de sección en móvil |
| `--s-10` | 128px | Padding de sección en escritorio (mínimo) |
| `--s-11` | 192px | Padding de sección de respiro (frase, contacto) |

Padding vertical de sección: `clamp(6rem, 14vw, 12rem)`. DENSITY 3 significa aire: ante la duda, más espacio, no más contenido.

Hero: `min-height: 100dvh` (nunca `100vh` ni `h-screen`). Padding superior máximo 6rem en escritorio.

### 4.2 Grid

| Propiedad | Valor |
|---|---|
| Ancho máximo de contenido | `1400px` (`--max`) |
| Gutter lateral | `clamp(1.25rem, 4vw, 3rem)` (`--gutter`) |
| Columnas | 4 (menos de 768px), 6 (768px a 1023px), 12 (1024px o más) |
| Gap de columnas | `clamp(1rem, 2vw, 1.5rem)` |
| Elementos a sangre | Zoom y, en móvil, la foto del hero ignoran `--max` y `--gutter` |

Usar CSS Grid, no matemáticas de porcentajes con flex.

### 4.3 Breakpoints

| Nombre | Mín. ancho | Cambio principal |
|---|---|---|
| base | 0 | Una columna estricta. Todo apilado |
| `sm` | 640px | Ajustes de tipografía y paddings |
| `md` | 768px | Aparecen los layouts asimétricos (hero dividido, detalle de producción en 2 columnas) |
| `lg` | 1024px | Grid de 12 columnas, nav completa |
| `xl` | 1280px | Tamaños tipográficos tope del `clamp()` |

Frames de referencia para diseño: 390px (móvil) y 1440px (escritorio).

## 5. Fotografía

Las fotos profesionales de Wewe son el único material visual propio. Tratamiento único en toda la web:

| Paso | Regla |
|---|---|
| Color | Blanco y negro. Preferible exportar ya en B/N (menos coste de pintado). Respaldo CSS: `filter: grayscale(1) contrast(1.1) brightness(0.85)` |
| Curva | Negros profundos que se funden con `--bg` (punto negro cercano a `#0b0b0d`), medios con contraste medio-alto, luces altas recortadas por debajo de `#e8e8ea`. Nunca blanco puro |
| Grano | Solo en un pseudo-elemento fijo: `body::after { position: fixed; inset: 0; pointer-events: none; z-index: var(--z-grain); }` con una textura PNG pequeña en mosaico, opacidad 0.04 a 0.06, estática. Nunca grano dentro de contenedores que hacen scroll ni en `filter` animado |
| Texto encima | Solo con `--scrim` debajo del texto. Ver regla de contraste en sección 9 |
| Formatos | Hero: vertical 4:5. Zoom: horizontal 16:9 o más ancho. Bio: vertical 4:5 o 3:4. [PENDIENTE: fotos reales elegidas, ver 05-contenido.md] |
| Pies de foto | Ninguno decorativo. Créditos del fotógrafo solo si son reales y con permiso [PENDIENTE: nombre del fotógrafo] |
| Etiquetas encima | Prohibido superponer pills o labels sobre fotos |

Portadas de producciones: se muestran en B/N para mantener el monocromo, con el mismo tratamiento. [PENDIENTE: confirmar si en la página de detalle la portada oficial puede ir a color.]

## 6. Iconografía

| Regla | Valor |
|---|---|
| Librería | Phosphor (única). Integración en Astro definida en 06-tecnico.md |
| Peso | `regular` en todos los iconos. Sin mezclar `bold`, `fill` ni `duotone` |
| Tamaños | 16px (en línea con texto pequeño), 20px (botones, player), 24px (botón de play principal) |
| Color | `currentColor`. Hereda `--text`, `--text-muted` o `--ink` |
| Área táctil | Mínimo 44 x 44 px aunque el icono mida 20px |
| Icono solo | Siempre con `aria-label` en el botón; el SVG con `aria-hidden="true"` |

Iconos previstos: `Play`, `Pause`, `SkipForward`, `SkipBack`, `SpeakerHigh`, `SpeakerSlash`, `InstagramLogo`, `YoutubeLogo`, `TiktokLogo`, `ArrowUpRight`, `Copy`, `Check`, `WarningCircle`, `X`.

Prohibido: SVG dibujados a mano, emojis, puntos de color decorativos, cursores personalizados.

## 7. Bordes, sombras y profundidad

En oscuro las sombras apenas se ven: la profundidad se construye con pasos de superficie y bordes.

| Elemento | Tratamiento |
|---|---|
| Divisores de sección | `1px solid var(--line)`, solo donde separan contenido real (ej. sobre el footer) |
| Tarjeta de producción | Fondo `--surface-1`, `1px solid var(--line-strong)`, sin sombra |
| Nav y barra del player | Fondo `--glass` + `backdrop-filter: blur(20px) saturate(140%)`, borde `1px solid var(--line-alpha)`, brillo interior `inset 0 1px 0 rgb(242 242 243 / 0.06)` |
| Elementos flotantes (player, toast) | Sombra `0 24px 64px rgb(11 11 13 / 0.6)` |
| `prefers-reduced-transparency: reduce` | `--glass` pasa a `--surface-1` sólido, sin blur |

Prohibido: glows, sombras de color, texto con degradado, bordes arriba y abajo en cada fila de una lista.

## 8. Foco y capas

### 8.1 Anillo de foco

- `:focus-visible { outline: 2px solid var(--text); outline-offset: 3px; }`
- En botones primarios (relleno `--text`) el offset deja una franja de `--bg` entre botón y anillo, así el anillo se distingue.
- Sobre fotos: añadir halo `box-shadow: 0 0 0 5px var(--bg)` detrás del outline.
- Nunca `outline: none` sin sustituto. El foco de teclado debe verse en todos los controles, incluida la barra de progreso.

### 8.2 Escala de z-index

| Token | Valor | Capa |
|---|---|---|
| `--z-base` | 0 | Contenido |
| `--z-raised` | 1 | Texto sobre foto, overlays locales |
| `--z-stack` | 10 | Tarjetas del sticky stack (el orden lo da el DOM dentro de esta capa) |
| `--z-nav` | 100 | Nav fija |
| `--z-player` | 110 | Barra del player persistente |
| `--z-toast` | 120 | Toast "Mensaje copiado" |
| `--z-grain` | 150 | Grano fijo, `pointer-events: none` |
| `--z-skip` | 200 | Enlace "Saltar al contenido" al recibir foco |

No usar valores fuera de esta tabla.

## 9. Accesibilidad de contraste

| Caso | Mínimo | Cómo se cumple |
|---|---|---|
| Texto normal (menos de 24px, o menos de 18.66px en negrita) | 4.5:1 | Solo `--text`, `--text-muted` o `--text-subtle`. Todos pasan sobre `--bg`, `--surface-1` y `--surface-2` (peor caso 4.96) |
| Texto grande | 3:1 | Igual que arriba. Objetivo AAA (7:1) en hero: `--text` da 17.58 |
| Componentes de UI y estados (bordes de controles, iconos solos) | 3:1 | Borde secundario `--control-border` (3.67 sobre bg). Iconos en `--text` o `--text-muted` |
| Texto sobre relleno primario | 4.5:1 | `--ink` sobre `--text` (17.58) y sobre `--fill-hover` (13.96) |
| Texto sobre fotos | 4.5:1 | La zona bajo el texto debe tener al menos 0.70 de opacidad de `--bg` para `--text` (7.54 en el peor caso, con luces de foto a `#e8e8ea`) y 0.85 para `--text-muted` (5.56) |
| Nav y player translúcidos | 4.5:1 | `--glass` con alfa 0.80 como mínimo: `--text-muted` sobre foto clara queda en 4.74. Con alfa 0.72 bajaría a 3.58 y falla |

Prohibido:
- Texto en `--control-border`, `--line` o `--line-strong` (no llegan a 4.5:1).
- Comunicar estado solo con un cambio de gris sutil. El estado "sonando" usa icono (pausa), texto o `aria-pressed`, además del cambio visual.
- Placeholders como etiqueta. (No hay formularios previstos; si aparece alguno, etiqueta encima y error debajo.)
