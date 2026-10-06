## 🛡️ ARNÉS DE REGLAS (TEST HARNESS PROACTIVO)

Todo agente o subagente que interactúe en este proyecto **DEBE OBEDECER OBLIGATORIAMENTE** estas reglas, las cuales previenen que el proyecto se desvíe de las especificaciones (`specs/`):

1. **PROHIBIDO EL COLOR:** No utilices `#fff`, `#000` ni colores de acento (como el naranja antiguo). Utiliza única y exclusivamente las variables monocromas (`--bg`, `--surface-1`, `--surface-2`, `--text`, `--text-muted`, `--line`, etc.) definidas en el sistema visual.
2. **CERO EMOJIS Y SIGNOS PROHIBIDOS:** No incluyas emojis bajo ninguna circunstancia. Prohibido estrictamente el uso de em-dash (`—`) y en-dash (`–`).
3. **TERCERA PERSONA:** Todos los textos generados de cara al usuario final deben estar en tercera persona ("Wewe produjo...") y nunca en primera persona ("Yo produje", "Contáctanos").
4. **CERO RELLENO:** Nada de palabras como "elevar el sonido", "next-level", "revolucionar". Ve directo al grano.
5. **GEIST Y RADIOS:** La única fuente permitida es Geist. Los radios de bordes permitidos son únicamente `--r-pill` (999px) para botones y `--r-card` (24px) para portadas/cards.
6. **AUDIO API:** Toda reproducción de audio debe estar sincronizada y optimizada para no interrumpirse al cambiar de página en Astro. Usa `tabular-nums` para la duración de pistas.
7. **ACTUALIZACIÓN DE ESTADO:** Cada vez que completes una tarea importante o avance del roadmap, es obligatorio actualizar `STATE.md` para reflejar el progreso y marcar las tareas hechas.

## 🛠️ Development & Documentation

When starting the dev server, use background mode: `astro dev --background`
Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

- [Astro Routing](https://docs.astro.build/en/guides/routing/)
- [Astro Components](https://docs.astro.build/en/basics/astro-components/)
- [CSS Nativo / Styling](https://docs.astro.build/en/guides/styling/)
