---
name: Tawan Pingma Portfolio Design System
description: The Cyber Laboratory - Cyberpunk-inspired dark workspace with glowing neon signals.
colors:
  primary: "#7836cf"
  primary-dark: "#512092"
  accent: "#69c7c7"
  neutral-bg: "#0b1121"
  neutral-bg-dark: "#030712"
  neutral-text: "#f8fafc"
  neutral-muted: "#94a3b8"
typography:
  display:
    fontFamily: "Inter, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 300
    lineHeight: 1.6
rounded:
  sm: "4px"
  md: "8px"
  lg: "16px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-text}"
    rounded: "{rounded.full}"
    padding: "12px 32px"
  card:
    backgroundColor: "rgba(15, 23, 42, 0.5)"
    rounded: "{rounded.lg}"
    padding: "24px"
---

# Design System: Tawan Pingma Portfolio

## 1. Overview

**Creative North Star: "The Cyber Laboratory"**

This visual system represents a high-tech, precise, and structural workspace. It draws inspiration from digital command terminals, security dashboards, and Capture The Flag (CTF) environments. The theme is anchored on deep dark space backgrounds representing the "void" of the system, punctuated by vibrant purple and glowing cyan accents that act as status signals or interactive elements. 

The aesthetic is clean, technical, and highly structured, utilizing fine borders, dark glassy surfaces, grid patterns, and sharp typography. It explicitly rejects generic layouts, flat gray cards, and warm cream/beige background tones.

**Key Characteristics:**
- Deep space contrast (dark backgrounds with bright, glowing visual highlights).
- Technical data structures (clean grids, terminal window mockups, monospace text).
- Responsive micro-animations (typewriter effects, floating elements, scrolling indicators).

## 2. Colors

The color palette is built for maximum contrast in a dark theme, utilizing rich cosmic purples as the dominant brand colors and sharp cyans/blues as active/interactive signals.

### Primary
- **Nebula Purple** (#7836cf): The main brand identifier. Used for core styling, background accents, and main interactive highlights.
- **Deep Space Violet** (#512092): The secondary brand tone. Used for gradients and darker purple states.

### Accent
- **Glitch Cyan** (#69c7c7): The active signal color. Used for logo text, active navigation links, hover scales, and text-shadow glow effects.
- **Sky Glow** (#0ea5e9): The secondary accent blue. Used in radial background spotlights and text gradients.

### Neutral
- **Midnight Void** (#0b1121): The main container background. A deep navy-black that prevents pure black eye strain.
- **Absolute Dark** (#030712): The body background. Used as the base surface.
- **Off-White** (#f8fafc): The main text color. Provides clear contrast.
- **Slate Gray** (#94a3b8): The secondary text color. Used for helper copy and captions.

### Named Rules
**The Neon Rarity Rule.** Glowing neon colors (Glitch Cyan, Sky Glow) must be reserved for interactive indicators, active states, and logos. They should make up less than 10% of any given screen area.

**The Space Depth Rule.** Dark surfaces must layer logically: body (`#030712`) -> sections (`#0b1121`) -> interactive cards (`rgba(15, 23, 42, 0.5)`).

## 3. Typography

**Display Font:** Inter (sans-serif)
**Body Font:** Inter (sans-serif)
**Label/Mono Font:** Monospace (standard browser fallback)

The typography layout relies on Inter's clean, geometric forms to achieve a professional, modern look. It utilizes bold display weights for greetings/headers, contrasted by light/thin weights for body paragraphs to feel modern and airy. Monospace fonts are introduced selectively for terminal cards and technical text.

### Hierarchy
- **Display** (700, clamp(2.5rem, 6vw, 4.5rem), 1.2): Used for primary hero greetings.
- **Headline** (700, 2.25rem, 1.3): Used for section titles.
- **Title** (600, 1.25rem, 1.4): Used for card titles.
- **Body** (300, 1rem, 1.6): Used for descriptive copy. Under 70ch line length.
- **Label** (500, 0.875rem, 1.2): Used for buttons, tags, and small navigation links.

### Named Rules
**The Balanced Headline Rule.** Display headings (H1, H2) must use `text-wrap: balance` to prevent awkward line breaks and orphans on mobile devices.

**The Tech Accent Rule.** Monospace font styling should only be applied to console windows, command-line snippets, and numbers. Never use it for full paragraphs of prose.

## 4. Elevation

The elevation philosophy is centered around "Tactile Neon Layers". Rather than traditional dark drop shadows, depth is communicated through fine semi-transparent borders, glassmorphism backdrops, and glowing neon highlights that react to state changes.

### Shadow Vocabulary
- **Neon Glow** (`0 8px 32px rgba(0, 0, 0, 0.3)` with `border border-white/10`): Used for floating navigation capsules and dialog backdrops.
- **Cyan Glow** (`drop-shadow-[0_0_10px_rgba(105,199,199,0.5)]`): Applied to logo text to represent active energy.
- **Blue Shadow** (`shadow-lg shadow-blue-500/30`): Applied to buttons to give them weight and clickable affordance.

### Named Rules
**The React-on-Hover Rule.** Elevation effects (shadow scaling, translations) must occur dynamically. Cards and buttons should elevate by translating upwards (`-translate-y-1`) and scaling their glow on hover.

## 5. Components

### Buttons
- **Shape:** Rounded-full (pill-shape).
- **Primary:** Gradient from Blue-600 (`#2563eb`) to Indigo-700 (`#4338ca`), white text, bold font-weight, padding `12px 32px`.
- **Hover / Focus:** Translate upwards (`-translate-y-1`), scale shadows (`hover:shadow-blue-500/50`), standard ease-in-out transition.

### Cards / Containers
- **Corner Style:** Rounded-2xl (`16px`).
- **Background:** Semi-transparent dark slate (`rgba(15, 23, 42, 0.5)`) with backdrop blur (`backdrop-blur-xl`).
- **Border:** Thin cyan-tinted border (`border-sky-500/20` or `border-white/10`).
- **Internal Padding:** Large (`24px`).

### Navigation
- **Style:** Capsule menu, fixed top, floating above content.
- **Background:** Glassy dark gray (`bg-gray-950/60` with `backdrop-blur-xl`).
- **Borders:** Thin transparent border (`border-white/10`).
- **Active State:** Text changes to Glitch Cyan (`#69c7c7`) and scales up slightly (`scale-110`).

## 6. Do's and Don'ts

### Do:
- **Do** use `backdrop-blur` in combo with low-opacity dark surfaces (`rgba(15, 23, 42, 0.5)`) to maintain contrast over background blobs.
- **Do** balance heavy cyan/purple colors with large areas of deep dark `#030712` body space.
- **Do** ensure font sizes scale fluidly on smaller devices using CSS `clamp()` or media queries.

### Don't:
- **Don't** use standard box shadows with blurs greater than 16px on solid black surfaces; they are invisible and fail to create depth.
- **Don't** use saturated warm backgrounds like cream, beige, or linen. The brand is dark-space and cybernetic.
- **Don't** use neon cyan or purple for body text; keep them reserved for headers, active text, and buttons.
- **Don't** use side-stripe borders (e.g. `border-left-4` as an accent) on cards. Use a thin full border.
- **Don't** let headlines stretch beyond the mobile viewport. Always test layout at breakpoints.
