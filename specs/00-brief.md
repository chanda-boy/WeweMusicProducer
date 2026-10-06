# 00. Brief

Documento base. Todo lo demás (sistema visual, páginas, componentes, motion, contenido, técnico) se decide a partir de aquí.

## Quién es Wewe

| Campo | Dato |
|---|---|
| Nombre público | Wewe |
| Rol | Productor musical |
| Géneros principales | Urbano, reggaetón, trap |
| Géneros secundarios | Pop, alternativo, indie |
| Trabajo que se muestra | Producciones para otros artistas (menos de 5) y beats/demos inéditos |
| Plataformas | YouTube, Instagram, TikTok |
| Assets existentes | Solo fotos profesionales de Wewe (sin logo, sin portadas propias) |
| Ciudad, país, años de carrera | [PENDIENTE: confirmar si se quiere mostrar. Por defecto no se muestra] |
| Créditos, artistas, cifras de streams | [PENDIENTE: lista real de producciones en 05-contenido.md. No se inventa nada] |

Regla de identidad: la web habla de Wewe en **tercera persona y sin pronombres**. Siempre "Wewe", nunca "él", "yo", "nosotros" ni "mi".

## Objetivo

1. **Crecer como artista.** Que Wewe se perciba como un productor con sonido propio, no como un proveedor.
2. **Mostrar portafolio.** Que cualquiera pueda escuchar el trabajo en uno o dos clics, sin fricción y sin que la música se corte al navegar.

No es objetivo vender servicios, captar clientes con formulario ni cobrar online.

## Audiencias

| Audiencia | Qué busca | Qué necesita encontrar en la web | Acción principal |
|---|---|---|---|
| Artistas | Saber si el sonido de Wewe encaja con su proyecto | Producciones reales con audio inmediato, beats inéditos filtrables por género y mood | Pedir beat (DM de Instagram) |
| Labels y managers | Validar credibilidad y rango | Artista, rol y año de cada producción; historia breve; enlace a YouTube si existe | Escribir por Instagram |
| Fans | Conocer a Wewe y lo que suena | Fotos, bio corta, música, redes | Escuchar y seguir en redes |

Prioridad de diseño: **artistas primero**, labels/managers segundo, fans tercero. Si una decisión beneficia a fans pero frena a un artista que quiere escuchar, gana el artista.

## Tono de voz

Principios:
- **Concreto.** Nombra artistas, canciones, géneros, roles. Nada de adjetivos vacíos.
- **Corto.** Titulares de 8 palabras o menos. Párrafos de 25 palabras o menos.
- **Seguro, no presumido.** Los hechos hablan; no se autoproclama "el mejor".
- **Tercera persona.** "Wewe produce...", nunca "Produzco..." ni "Él produce...".
- **Botones en infinitivo (ES) o imperativo (EN).** "Escuchar", "Listen". Evita tutear o ustedear en botones.
- Español neutro. [PENDIENTE: confirmar si se quiere un registro regional concreto.]

### Hacer y no hacer (ES)

| Hacer | No hacer | Por qué |
|---|---|---|
| "Wewe produjo [canción] para [artista]." | "Él produjo un temazo increíble." | Sin pronombres, sin adjetivos vacíos |
| "Beats inéditos de trap y pop alternativo." | "Beats que elevan tu sonido al siguiente nivel." | "Elevar", "siguiente nivel" son relleno |
| "Escuchar" | "Dale play ya" / "Escucha ahora mismo" | Un label por intención, sin urgencia falsa |
| "Escribir por Instagram" | "Escríbeme" / "Contáctanos" / "Hablemos" | Primera persona y etiquetas duplicadas |
| "Mensaje copiado" | "¡¡Listo!! Ya puedes pegarlo" (con emoji) | Sin emojis, sin exclamaciones de relleno |
| [PENDIENTE: frase de hero real] | "Sound that moves the room." | Cita genérica heredada de la versión anterior |

### Do and don't (EN)

| Do | Don't | Why |
|---|---|---|
| "Wewe produced [song] for [artist]." | "He crafted an unforgettable banger." | No pronouns, no filler |
| "Unreleased trap and alt-pop beats." | "Beats that unleash your next-level sound." | "Unleash", "next-level" are filler |
| "Listen" | "Hit play now" | One label per intent |
| "Message on Instagram" | "DM me" / "Let's talk" / "Get in touch" | First person and duplicated intent |
| "Message copied" | "Boom! Copied!" | No forced excitement |

Prohibido en ambos idiomas: em-dash y en-dash, emojis, "elevar/elevate", "sin fisuras/seamless", "desata/unleash", "next-gen", "revolucionar", metáforas forzadas, cifras inventadas.

## Qué NO es la web

- No es una web de **servicios**: no hay sección de servicios, paquetes, precios ni botones para reservar sesiones.
- No es una **tienda**: no hay carrito, checkout, licencias a la venta ni precios de beats.
- No hay **formulario de contacto**: el único canal es el DM de Instagram.
- No hay **testimonios** ni logos de clientes inventados.
- No hay **modo claro**: solo oscuro.
- No hay **color de acento**: monocromo puro.
- No es un **blog** ni un EPK descargable. [PENDIENTE: confirmar si en el futuro se quiere un press kit.]

## Criterios de éxito

Cualitativos (se validan en revisión de diseño):
- Desde el hero, una producción suena en **1 clic** ("Escuchar").
- La música **no se corta** al pasar de la home a una producción o a /beats.
- Un artista puede **pedir un beat en 2 pasos**: pulsar "Pedir beat" (copia el mensaje y abre el DM) y pegar en Instagram.
- Cada pantalla se entiende sin leer párrafos: foto, título, play.
- La web se ve igual de cuidada en móvil (390px) que en escritorio (1440px).
- Ninguna cadena visible contiene em-dash, en-dash, primera persona o pronombres para Wewe.

Técnicos (detalle en 06-tecnico.md):
- Core Web Vitals en verde: LCP menor de 2.5 s, INP menor de 200 ms, CLS menor de 0.1.
- Contraste WCAG AA en todo el texto (ver 01-sistema-visual.md).
- Todo el motion respeta `prefers-reduced-motion`.

Medibles después del lanzamiento:
- Clics en "Pedir beat", "Escribir por Instagram" y reproducciones iniciadas. [PENDIENTE: decidir herramienta de analítica, o ninguna.]
