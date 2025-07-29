## 1 · Brand Essence
| Attribute           | Rationale                                                                 | Practical Cue                                                        |
| ------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| **Calm Authority**  | Users are stressed about shipments—design must feel steady and competent. | Deep blue surfaces, generous padding.                                |
| **Welcoming & Fun** | A seagull-mascot and sunny yellow accents keep the tone friendly.         | Round corners, conversational copy, playful animation micro‑moments. |
| **Straightforward** | Data & forms come first; décor never obscures function.                   | Clear hierarchy, high‑contrast text, predictable component patterns. |

---

## 2 · Colour Palette  
*(values pulled directly from `styles.css`; aliases are suggested CSS custom props for future scalability)*  

| Role                  | Hex       | CSS Utility (present)                              | Suggested CSS Var         |
| --------------------- | --------- | -------------------------------------------------- | ------------------------- |
| **Primary Blue**      | `#183A52` | `.bg-primary-blue`, `.text-primary-blue`           | `--clr-primary-blue`      |
| **Primary Yellow**    | `#FFD147` | `.bg-primary-yellow`, `.text-primary-yellow`       | `--clr-primary-yellow`    |
| **Secondary White**   | `#FFFFFF` | `.text-secondary-white`                            | `--clr-secondary-white`   |
| **Accent Red**        | `#E54D42` | `.bg-accent-red`, `.text-accent-red`               | `--clr-accent-red`        |
| **Accent Orange**     | `#F5A623` | `.bg-accent-orange`, `.text-accent-orange`         | `--clr-accent-orange`     |
| **Accent Light Blue** | `#50A6C2` | `.bg-accent-light-blue`, `.text-accent-light-blue` | `--clr-accent-light-blue` |
| **Accent Green**      | `#7ED321` | `.bg-accent-green`, `.text-accent-green`           | `--clr-accent-green`      |
| **Neutral Gray‑800**  | `#333333` | *(Tailwind `text-gray-800`)*                       | `--gray-800`              |
| **Neutral Gray‑100**  | `#F8FAFC` | `.bg-slate-50`                                     | `--gray-100`              |

> **Contrast Check:** All foreground/background pairings above exceed WCAG AA 4.5:1 when used as in the source files.

---

## 3 · Typography

| Level               | Font Family & Weight | Tailwind Classes in Use                         | Size / Caps           | Notes                                                  |
| ------------------- | -------------------- | ----------------------------------------------- | --------------------- | ------------------------------------------------------ |
| **H1 (Hero)**       | **Bebas Neue**, 400  | `text-8xl lg:text-[96px]`                       | 6 rem / ALL CAPS      | Tracking ~+1 px, primary‑yellow on primary‑blue.       |
| **H2 (Section)**    | **Bebas Neue**, 400  | `text-4xl md:text-5xl`                          | 2.25–3 rem / ALL CAPS | Centered; underline bar (`w-24 h-1`) in yellow.        |
| **H3 (Card Title)** | **Bebas Neue**, 400  | `text-2xl`                                      | 1.5 rem               | Dark blue on light cards.                              |
| **Body L**          | **Open Sans**, 400   | `text-lg`                                       | 1.125 rem             | 160 % line height, gray‑700 text.                      |
| **Body S**          | **Open Sans**, 400   | `text-base`                                     | 1 rem                 | Default paragraph size.                                |
| **Label / Button**  | **Bebas Neue**, 400  | `text-xl` (btn) / `text-sm font-medium` (label) | Upper‑case            | Letter‑spacing 0.5 px; white on blue or blue on white. |

_Fallbacks are Tailwind’s sans stack; always import Google Fonts for Bebas Neue + Open Sans._

---

## 4 · Layout & Spacing

| Token               | Definition                                                                                              |
| ------------------- | ------------------------------------------------------------------------------------------------------- |
| **Grid**            | Tailwind `.container` max‑width (72 rem) with `px-6` (24 px) side‑gutters.                              |
| **Section Padding** | `py-16` (64 px) desktop, `py-12` (48 px) tablet, `py-10` (40 px) mobile.                                |
| **Vertical Rhythm** | 8 px baseline; major blocks separated by `mb-4 / mb-6 / mb-10`.                                         |
| **Cards**           | `rounded-lg` (8 px), `shadow-md` → hover `shadow-xl`, internal padding `p-6`.                           |
| **Hero**            | Position mascot image left (or top on mobile) with text block right; background overlay `.hero-bg-map`. |

---

## 5 · Core Components

| Component            | Key Classes / Styles                                                                                                                       | States                                                                                |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| **Primary Button**   | `.bg-primary-blue .text-secondary-white .font-bebas .text-xl .px-10 .py-3 .rounded-lg`                                                     | Hover: `.hover:bg-blue-800` + `scale-105`; Disabled: `opacity-50 cursor-not-allowed`. |
| **Secondary Button** | Transparent bg, `border-2 border-primary-blue text-primary-blue rounded-lg px-6 py-3`                                                      | Hover: blue bg, white text.                                                           |
| **Input / Textarea** | `border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary-yellow`                                                             | Error: add `border-accent-red` + helper text.                                         |
| **Alert Banner**     | (Not yet in HTML) Suggest `bg-accent-orange text-white p-4 rounded-lg`.                                                                    | Variants: success (green), warning (orange), error (red).                             |
| **Info Card**        | Icon in circular mask `.rounded-full w-1/3 md:w-1/2`, title H3, body copy; wrapper `p-6 bg-slate-50 rounded-lg shadow-md hover:shadow-xl`. | Hover shadow elevation as above.                                                      |

---

## 6 · Iconography & Illustration

* **Style:** Flat vector, 2 px strokes, no gradients.  
* **Colour Use:** Only palette hues from §2 (90 % opacity max) + white.  
* **Mascot:** “Seagull Steve” always sports hard‑hat + hazard‑vest; keep proportions from `public/seagull-steve.png`.  
* **Generic Icons:** Masked inside coloured circle to 33–50 % card width as in current cards.

---

## 7 · Backgrounds & Imagery

| Element                | Treatment                                                                                                   |
| ---------------------- | ----------------------------------------------------------------------------------------------------------- |
| **Hero**               | `.hero-bg-map` uses `header-background.png`; overlay `bg-primary-blue opacity-50` so white text is legible. |
| **Alternate Sections** | Light (`bg-slate-50`) ↔ Dark (`bg-primary-blue`) to create cadence.                                         |
| **Photos**             | Desaturate 10 %, overlay 8 % navy if mixed with illustrations. Prefer vectors.                              |

---

## 8 · Motion & Interaction

| Event              | Duration / Easing                            | Effect                              |
| ------------------ | -------------------------------------------- | ----------------------------------- |
| Button hover       | 150 ms `cubic-bezier(.4,0,.2,1)`             | Scale 1.05 + bg‑darken.             |
| Card hover         | 200 ms                                       | Elevate shadow + translate‑y ‑4 px. |
| Mobile menu toggle | 250 ms                                       | Slide‑down (hidden ↔ flex) + fade.  |
| Anchor scroll      | Smooth scroll via JS with nav‑height offset. |

---

## 9 · Accessibility Checklist

1. **Contrast:** Palette meets WCAG AA for headings/text vs backgrounds.  
2. **Focus Ring:** Tailwind default + custom `focus:ring-primary-blue focus:ring-opacity-50`.  
3. **Semantic HTML:** Preserve `<nav>`, `<header>`, `<section>`, `<button>` usage as in source.  
4. **Alt Text:** Required for all `img`; follow “{What} icon” or descriptive phrase.  
5. **Keyboard Navigation:** Mobile menu button and form fields already keyboard‑friendly; keep tabindex flow logical.

---

## 10 · CSS Variable Quick‑Start

```css
:root {
  --clr-primary-blue: #183A52;
  --clr-primary-yellow: #FFD147;
  --clr-secondary-white: #FFFFFF;

  --clr-accent-red:   #E54D42;
  --clr-accent-orange:#F5A623;
  --clr-accent-light-blue:#50A6C2;
  --clr-accent-green:#7ED321;

  --gray-800: #333333;
  --gray-100: #F8FAFC;
}
```

---

### How to Extend This Guide

1. **Reference Colours** strictly from §2 vars or Tailwind utility classes.  
2. **Reuse Components**: extend via Tailwind composition; avoid inventing new patterns.  
3. **Document Additions**: any new token/component should be appended to this file to keep the system single‑source.