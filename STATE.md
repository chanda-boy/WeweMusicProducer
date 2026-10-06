# Estado del Proyecto: Wewe Music Producer

Documento de seguimiento del estado actual del desarrollo, decisiones de arquitectura, buenas prácticas y hoja de ruta.

---

## 1. Información General y Fase Actual

- **Proyecto:** Sitio web oficial y portafolio de Wewe (Productor Musical).
- **Stack:** Astro (Static mode), CSS nativo con scroll-driven animations, Geist Variable (`@fontsource-variable/geist`), HTML5 Audio API + Web Audio API.
- **Fase Actual:** Desarrollo de features / Pruebas de reproducción de audio y beats inéditos.
- **Rama Activa:** `feature/beat-audio-playback`.

---

## 2. Estrategia de Ramas y Buenas Prácticas Git

Siguiendo principios de desarrollo ordenados:
- **`main` / `master` / `release`:** Ramas de referencia y producción protegidas (no se tocan directamente).
- **`feature/*`:** Ramas de características individuales para aislar cambios y permitir revisiones limpias (ej. `feature/beat-audio-playback`).
- **Verificación previa a commit:** Todo cambio debe superar `pnpm run verify` y `pnpm build` antes de ser integrado.

---

## 3. Resumen de lo Implementado

### A. Sistema Visual y Tokens Monocromos (`src/styles/global.css`)
- **Paleta monocroma estricta:** Fondo `--bg: #0b0b0d`, superficies (`--surface-1: #141417`, `--surface-2: #1c1c20`), líneas (`--line: #26262b`), texto principal (`--text: #f2f2f3`), secundario (`--text-muted: #a3a3aa`) y metadatos (`--text-subtle: #8a8a92`). Eliminado el color naranja anterior.
- **Tipografía Geist:** Titulares con peso 600 y tracking negativo (`-0.035em` a `-0.045em`). Números tabulares (`tabular-nums`) para player y metadatos.
- **Radios:** `--r-pill: 999px` para controles y botones; `--r-card: 24px` para portadas, tarjetas y player flotante.
- **Textura:** Grano sutil fijo en `body::after` con opacidad controlada (0.05).
- **Accesibilidad:** Anillo de foco `:focus-visible` de 2px con offset de 3px, enlace accesible "Saltar al contenido" (`.skip-link`) y respeto por `prefers-reduced-motion` y `prefers-reduced-transparency`.

### B. Componentes Modulares de la UI (`src/components/`)
1. **`Nav.astro`:** Barra fija translúcida (64px) con blur (`--glass`), enlaces a *Producciones*, *Beats*, *Bio*, selector *ES / EN* y botón de acción.
2. **`Hero.astro`:** Layout asimétrico con foto 4:5 B/N, titular conciso de 2 líneas con itálica Geist (*"Sonido que define el momento"*), subtexto de menos de 20 palabras y acción primaria *"Escuchar"*.
3. **`Statement.astro`:** Manifiesto con animación *scroll-driven* que revela el texto palabra por palabra.
4. **`StickyStack.astro`:** Tarjetas de producciones destacadas que se apilan con el scroll, con metadatos reales y botón de play.
5. **`ZoomImage.astro`:** Fotografía de estudio que realiza zoom a sangre (*full bleed*) conforme se navega.
6. **`Bio.astro`:** Fotografía vertical real de Wewe (`/jared-prod.jpg`) y texto en 3ª persona estricta sin pronombres ("Wewe...").
7. **`BeatsPreview.astro`:** Lista de beats con filtros en pastilla por género (Trap, Reggaetón, Pop alternativo), duraciones tabulares y botones interactivos. Incluye el beat real **"Mañana Sí"** (96 BPM, 1:29).
8. **`ContactSection.astro`:** Sin formularios; acceso directo al DM de Instagram (*"Escribir por Instagram"*).
9. **`Footer.astro`:** Copyright sin guiones largos ni emojis, e iconos Phosphor de Instagram, YouTube y TikTok.
10. **`Toast.astro`:** Notificación *"Mensaje copiado"* al hacer clic en *"Pedir beat"* (copia automáticamente el mensaje prellenado para Instagram).

### C. Motor de Audio y Player Persistente (`src/components/PersistentPlayer.astro`)
- Barra flotante inferior de 24px de radio (`--z-player: 110`).
- **Reproducción híbrida:**
  - Pistas con archivo físico (como `Mañana Sí` en `/audio/manana-si.mp3`): Reproducidas a través de `HTMLAudioElement` nativo con sincronización precisa del timeline, barra de scrubber interactiva, fin de pista automático y control de volumen/mute.
  - Pistas demo sin archivo físico: Fallback automático a sintetizador musical suave (`Web Audio API`).

### D. Optimización de Assets Multimedia
- **`public/MañanaSi_jared.wav`:** Archivo original maestro de 33 MB preservado sin modificaciones.
- **`public/audio/manana-si.mp3`:** Versión comprimida de alta fidelidad a 256 kbps estéreo (2.72 MB, reducción del 92%) para carga inmediata y sin problemas de codificación de caracteres en URLs.
- **`public/MañanaSi_jared.jpeg` & `public/audio/manana-si-cover.jpeg`:** Portada oficial del beat (1600x1542 px), vinculada a la fila de beats y al reproductor persistente con filtro blanco y negro monocromo.
- **`public/jared-prod.jpg`:** Fotografía original de alta resolución (3024x4032 px) calibrada en blanco y negro para la biografía.

---

## 4. Subagentes y Arneses de Prueba

### Subagentes
- **`spec-reader`:** Subagente activo y registrado. Configurado para ejecutarse con el modelo económico **`flash_lite`**. Su función es leer y verificar archivos `.md` de especificaciones y reglas para asegurar coherencia técnica y de diseño sin consumir tokens excesivos.

### Arneses de Evaluación (Test Harness)
- **Script:** `scripts/verify-assets-and-specs.mjs` (ejecutable con `pnpm run verify`).
- **Validaciones automáticas:**
  1. Comprueba la presencia física de los assets de audio e imagen requeridos.
  2. Verifica que ningún componente viole reglas no negociables (cero em-dashes `—`, cero en-dashes `–`, cero términos prohibidos como "Book a session" o colores heredados).

---

## 5. Próximos Pasos (Roadmap)

1. [ ] Crear las páginas secundarias dedicadas `/beats` y `/en/beats` para el catálogo completo de instrumentales.
2. [ ] Crear las páginas dinámicas de detalle de producción `/produccion/[slug]`.
3. [ ] Añadir colecciones de contenido de Astro (`content collections`) para tipar y gestionar producciones y beats mediante archivos Markdown/YAML en `src/content/`.
4. [ ] Normalización de audio a estándares de streaming (-14 LUFS) en próximos beats subidos.
