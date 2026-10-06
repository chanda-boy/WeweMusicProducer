# Specs de diseño: web de Wewe

Especificación de la web de Wewe, productor musical. Se usa como entrada para Claude Design y, después, para implementar en Astro. Todo en Markdown, en español; las cadenas en inglés están en 05-contenido.md.

## Índice

| Archivo | Contenido |
|---|---|
| `README.md` | Este índice, Design Read, diales, reglas globales y prompt para Claude Design |
| `00-brief.md` | Quién es Wewe, objetivo, audiencias, tono de voz ES/EN, qué no es la web, criterios de éxito |
| `01-sistema-visual.md` | Tokens monocromos con contraste, tipografía Geist, radios, espaciado, grid, fotos, iconos, foco, z-index |
| `02-paginas.md` | Mapa de rutas y orden de secciones de `/`, detalle de producción, `/beats` y sus versiones `/en/` |
| `03-componentes.md` | Nav, barra del player, tarjeta de producción, fila de beat, botón "Pedir beat", toast, selector de idioma, footer. Estados, móvil y accesibilidad |
| `04-motion.md` | Cada efecto con su motivo, técnica CSS scroll-driven, fallback reduced-motion y comportamiento móvil |
| `05-contenido.md` | Esquemas de content collections, copy ES/EN de todas las cadenas, checklist de assets pendientes |
| `06-tecnico.md` | i18n de Astro, player persistente entre páginas, audio, imágenes, metadatos OG, Core Web Vitals |

Orden de lectura recomendado: README, 00, 01, 02, 03, 04, 05, 06.

## Design Read

**Leyendo esto como:** portafolio de productor musical para artistas, labels y fans, con un lenguaje monocromo premium de producto Apple, apoyado en Astro estático, CSS nativo con animaciones scroll-driven y Geist.

## Diales

| Dial | Valor | Por qué |
|---|---|---|
| `DESIGN_VARIANCE` | 7 | Preset "premium consumer". Hero asimétrico (texto a un lado, foto al otro), sticky stack y zoom a sangre dan carácter; el monocromo y Geist piden contención, por eso no 8 o más |
| `MOTION_INTENSITY` | 7 | El scroll cuenta la historia: texto que se ilumina, foto que hace zoom, producciones en sticky stack, más un player persistente. Todo con CSS scroll-driven, sin WebGL ni secuestro de scroll horizontal, por eso no 8 o más |
| `VISUAL_DENSITY` | 3 | Galería: menos de 5 producciones, fotos grandes, mucho aire. El contenido es escaso y bueno; espaciarlo lo hace ver caro |

Excepción documentada a la skill: la web es **solo oscura** por decisión explícita del usuario (la skill pide claro y oscuro por defecto).

## Reglas globales no negociables

Aplican a los 8 archivos y a todo lo que salga de Claude Design.

**Tipografía y signos**
- Cero em-dash (U+2014) y cero en-dash (U+2013) en cualquier parte: titulares, botones, alt, metadatos, specs. Rangos con guion normal (`2024-2026`).
- Sin emojis. Punto medio (`·`) como máximo uno por línea.

**Color y tema**
- Monocromo puro. Sin color de acento. El naranja anterior queda eliminado.
- Solo oscuro. Ninguna sección se invierte a clara.
- Nunca `#000` ni `#fff`. Escala en 01-sistema-visual.md.
- Énfasis interactivo = relleno off-white (`--text`) con texto oscuro (`--ink`).

**Voz**
- Tercera persona y sin pronombres para Wewe: siempre "Wewe", nunca "él", "yo", "mi", "nosotros".
- La única excepción es el mensaje prellenado del DM, que está escrito con la voz de quien lo envía (ver 05-contenido.md).

**Alcance**
- Nada de servicios, paquetes, precios, botones de reserva de sesiones ("booking"), tienda ni carrito.
- Sin formulario de contacto. Contacto solo por DM de Instagram.
- Sin testimonios, logos de clientes, cifras ni créditos inventados. Lo desconocido se marca `[PENDIENTE: ...]`.

**Un label por intención** (idéntico en nav, hero, tarjetas y footer)

| Intención | ES | EN |
|---|---|---|
| Reproducir música | Escuchar | Listen |
| Pedir un beat | Pedir beat | Request beat |
| Contactar | Escribir por Instagram | Message on Instagram |
| Confirmación de copiado | Mensaje copiado | Message copied |

Prohibidos como sinónimos: "Escúchalo", "Play", "Dale play", "Contacto", "Escríbeme", "Hablemos", "DM me", "Get in touch", "Comprar", "Licenciar". Las etiquetas de navegación restantes se fijan en 05-contenido.md con la misma regla.

**Layout (de la skill design-taste-frontend)**
- Hero: titular de 2 líneas máximo, subtexto de 20 palabras máximo, CTA visible sin scroll, `min-height: 100dvh`, máximo 4 elementos de texto.
- Eyebrows: máximo 1 cada 3 secciones (la home tiene 8 secciones, por tanto 3 como tope; objetivo: 1 o ninguno). Sin numeración de secciones (`01 /`, `002 ·`).
- Sin indicadores de scroll, sin franjas decorativas de texto, sin pills sobre fotos, sin puntos de color, sin cursores personalizados.
- Ninguna familia de layout se repite en la home. Máximo 2 secciones seguidas de imagen + texto en columnas.
- Nav en una línea, 64px de alto como máximo.
- Todo el motion respeta `prefers-reduced-motion`.

## Prompt para Claude Design

Copiar el bloque completo. Es autocontenido.

```text
Diseña la web de Wewe, productor musical. Necesito pantallas de alta fidelidad en escritorio (1440px) y móvil (390px).

QUIÉN Y PARA QUÉ
Wewe es productor de urbano, reggaetón y trap, con incursiones en pop, alternativo e indie. La web sirve para crecer como artista y mostrar portafolio. NO vende servicios: no hay precios, paquetes, tienda, formulario ni botones para reservar sesiones.
Audiencias, en orden de prioridad: artistas que quieren escuchar y pedir un beat, labels y managers que validan el trabajo, fans.
La web habla de Wewe en tercera persona y sin pronombres: siempre "Wewe", nunca "él", "yo" ni "nosotros".
Idiomas: español (por defecto) e inglés, con selector ES/EN en la nav.

LENGUAJE VISUAL
Monocromo puro, solo modo oscuro, estilo producto Apple: preciso, pulido, con mucho aire. Sin color de acento. El peso visual lo llevan las fotos de Wewe en blanco y negro y la música.
Colores (ningún negro ni blanco puro):
  fondo #0b0b0d, superficie #141417, superficie 2 #1c1c20, línea #26262b, línea fuerte #34343a,
  borde de control #6a6a72, texto sutil #8a8a92, texto secundario #a3a3aa, hover de relleno #d9d9dc, texto #f2f2f3.
Botón primario: relleno #f2f2f3 con texto #0b0b0d. Secundario: transparente con borde #6a6a72 y texto #f2f2f3.
Tipografía: solo Geist (variable). Titulares peso 600 con tracking negativo (-0.035em a -0.045em). Énfasis en titulares solo con itálica de Geist, máximo una palabra, mismo color. Números tabulares en el player.
Radios: controles en pastilla (botones, chips, selector de idioma, toast); fotos, portadas, tarjetas y barra del player a 24px; elementos a sangre a 0.
Fotos: blanco y negro, negros profundos que se funden con el fondo, sin blancos puros. Grano muy sutil fijo sobre toda la página. Nunca etiquetas ni pills encima de las fotos.
Iconos: Phosphor, peso regular, siempre el mismo.
Densidad: galería. Secciones con mucho espacio vertical. Ancho máximo 1400px.

ESTRUCTURA
1. Home (/ y /en/), una sola página narrativa, en este orden:
   a. Hero: layout asimétrico, texto a la izquierda y foto vertical de Wewe en B/N a la derecha. Titular corto (2 líneas como máximo), subtexto de 20 palabras como máximo, un botón primario "Escuchar". Sin eyebrow, sin taglines bajo el botón, sin indicador de scroll.
   b. Frase grande que se ilumina palabra por palabra al hacer scroll (de gris tenue a blanco roto).
   c. Producciones en sticky stack: cada producción (menos de 5) es una tarjeta a pantalla completa que se fija arriba y la siguiente la tapa; la anterior se reduce y se oscurece. Cada tarjeta: portada grande, título, artista, rol de Wewe, año y botón "Escuchar".
   d. Foto horizontal de Wewe que crece desde un marco con radio 24px hasta ocupar toda la pantalla, con un titular corto encima.
   e. Bio corta en tercera persona con una foto.
   f. Adelanto de beats: 3 beats con play y enlace a /beats.
   g. Contacto: titular grande y botón primario "Escribir por Instagram".
   h. Footer: enlaces a Instagram, TikTok y YouTube, selector de idioma.
2. Detalle de producción (/produccion/[slug] y su equivalente en /en/): portada grande, botón de play, título, artista, rol de Wewe, año, historia de la canción en 2 o 3 párrafos cortos, enlace opcional a YouTube.
3. Beats (/beats y su equivalente en /en/): lista de beats inéditos. Cada fila: play, título, tags de género y mood, duración y botón "Pedir beat". Filtro por género con chips en pastilla.

COMPONENTES CLAVE
- Nav fija de una línea, 64px máximo, fondo oscuro translúcido con blur. Nombre "Wewe" a la izquierda, enlaces y selector ES/EN a la derecha.
- Barra de player persistente fija abajo, flotante, radio 24px: play/pausa, anterior/siguiente, título, artista, barra de progreso, tiempo. Sigue sonando al cambiar de página. Diseña sus estados: vacío (oculta hasta el primer play), cargando, sonando, en pausa y error.
- Botón "Pedir beat": copia al portapapeles un mensaje prellenado con el nombre del beat, muestra un toast "Mensaje copiado" y abre el DM de Instagram de Wewe.
- En móvil todo pasa a una columna; el player queda anclado abajo con margen de 8px.

TEXTOS Y REGLAS
- Un label por intención, siempre igual: "Escuchar" / "Listen", "Pedir beat" / "Request beat", "Escribir por Instagram" / "Message on Instagram".
- Cero guiones largos (em-dash ni en-dash) en ningún texto. Sin emojis.
- No inventes artistas, cifras, ciudades ni premios. Donde falte un dato usa un marcador visible como [PENDIENTE: título de la canción].
- Usa placeholders de foto en B/N donde falten las fotos reales (hero vertical 4:5, zoom horizontal 16:9, bio 4:5).
- Contraste WCAG AA en todo el texto. Anillo de foco visible de 2px en #f2f2f3.

ENTREGABLES
Home, detalle de producción y beats en escritorio y móvil; la barra del player en todos sus estados; el toast; la nav con el selector de idioma; y una lámina con los tokens de color, la escala tipográfica y los radios.
```
