---
name: Smart
description: Launch-readiness assessment for Sri Lankan startups. Four modules, traceable scores.
colors:
  neutral-900: "#3c3c3c"
  neutral-800: "#4c4c4c"
  neutral-700: "#5c5c5c"
  neutral-600: "#6c6c6c"
  neutral-550: "#949494"
  neutral-500: "#bcbcbc"
  neutral-400: "#cccccc"
  neutral-300: "#dcdcdc"
  neutral-200: "#ededed"
  neutral-100: "#f4f4f4"
  neutral-50: "#f9f9f9"
  neutral-0: "#ffffff"
  lilac-400: "#6d51ab"
  lilac-300: "#a08cd0"
  lilac-200: "#b9a8e0"
  lilac-100: "#d2c5ef"
  lilac-50: "#f4f2fc"
  blue-300: "#66afea"
  blue-100: "#bfe2fb"
  yellow-300: "#feca00"
  yellow-100: "#ffed6e"
  lime-300: "#c3d100"
  lime-100: "#daf06b"
  destructive: "oklch(0.577 0.245 27.325)"
typography:
  headline:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.55
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  body-small:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.43
  label:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
  wordmark:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "-0.05em"
  numeric:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "1rem"
    fontWeight: 500
    fontFeature: '"tnum" 1'
rounded:
  mark: "3px"
  sm: "9.6px"
  md: "12.8px"
  lg: "16px"
  xl: "22.4px"
spacing:
  gap-sm: "12px"
  gap-md: "16px"
  card: "20px"
  page: "24px"
  page-wide: "40px"
  section: "40px"
components:
  button-primary:
    backgroundColor: "{colors.neutral-900}"
    textColor: "{colors.neutral-0}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "0 20px"
    height: "44px"
  button-primary-large:
    backgroundColor: "{colors.neutral-900}"
    textColor: "{colors.neutral-0}"
    rounded: "{rounded.lg}"
    padding: "0 24px"
    height: "56px"
  button-secondary:
    backgroundColor: "{colors.neutral-0}"
    textColor: "{colors.neutral-900}"
    rounded: "{rounded.lg}"
    padding: "0 20px"
    height: "44px"
  button-danger:
    backgroundColor: "{colors.destructive}"
    textColor: "{colors.neutral-0}"
    rounded: "{rounded.lg}"
    padding: "0 20px"
    height: "44px"
  text-field:
    backgroundColor: "{colors.neutral-0}"
    textColor: "{colors.neutral-900}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "0 16px"
    height: "56px"
  choice-card:
    backgroundColor: "{colors.neutral-0}"
    textColor: "{colors.neutral-700}"
    rounded: "{rounded.lg}"
    padding: "12px 16px"
    height: "56px"
  choice-card-selected:
    backgroundColor: "{colors.neutral-0}"
    textColor: "{colors.neutral-900}"
  nav-item-active:
    backgroundColor: "{colors.lilac-50}"
    textColor: "{colors.neutral-900}"
    rounded: "{rounded.xl}"
    padding: "12px 16px"
  module-card:
    backgroundColor: "{colors.neutral-0}"
    textColor: "{colors.neutral-900}"
    rounded: "{rounded.xl}"
    padding: "{spacing.card}"
  module-icon-infrastructure:
    backgroundColor: "{colors.blue-100}"
    textColor: "{colors.neutral-900}"
    rounded: "{rounded.lg}"
    size: "44px"
  module-icon-marketing:
    backgroundColor: "{colors.yellow-100}"
    textColor: "{colors.neutral-900}"
    rounded: "{rounded.lg}"
    size: "44px"
  module-icon-compliance:
    backgroundColor: "{colors.lilac-100}"
    textColor: "{colors.neutral-900}"
    rounded: "{rounded.lg}"
    size: "44px"
  module-icon-product:
    backgroundColor: "{colors.lime-100}"
    textColor: "{colors.neutral-900}"
    rounded: "{rounded.lg}"
    size: "44px"
---

# Design System: Smart

## Overview

**Creative North Star: "Four Squares"**

The four modules are the brand. Infrastructure, Marketing, Compliance and Product each own one pastel colour, and the logo is just those four colours as a 2x2 grid. Everything else stays quiet: charcoal text on white, thin grey lines, soft 16px corners. Colour on a screen should tell you which module you are looking at, and nothing else.

The app is a working tool for technical founders, and it is checked by experts and SUS testers. So screens are calm, roomy and easy to scan. One clear heading, short grey lines under it, cards with a thin border and no shadow. Text is plain and direct, a little warm: "62 out of 100. Power backup is the biggest gap."

The name "Smart" may become "Nexaura". The mark is not a letter, so it survives the rename. The name is written only in `app-logo.tsx` and the root layout metadata.

**Key Characteristics:**

- Charcoal ink (neutral-900) on white. Never pure black.
- One pastel per module, and module colours mean "this module" only.
- Lilac-400 is the interaction colour: focus rings and accent text.
- Flat. Borders and soft grey panels, not shadows.
- 16px corners on controls, about 22px on cards and nav items.
- Geist for everything; Geist Mono only for numbers people compare.
- Big touch targets: 44px buttons, 56px fields and choice cards.

## Colors

A quiet charcoal-and-white base, one lilac for interaction, and four pastel module colours.

### Primary

- **Charcoal Ink** (neutral-900): Headings, body text, the primary button fill, the selected choice card ring, the active nav icon tile. It is the shadcn `primary` and `foreground`.

### Secondary

- **Signal Lilac** (lilac-400): Focus rings (`ring`), accent text (`accent-foreground`), and, once built, score citation numbers. Use it for "you can act here" and "you are here", not for decoration.
- **Lilac Wash** (lilac-50): Background of the active sidebar item and the shadcn `accent` surface (menu hover).

### Tertiary: the module colours

Each module has a light shade (100) for icon tiles and backgrounds, and a strong shade (300) for the logo mark and, later, score bars.

- **Infrastructure Sky** (blue-100 tile, blue-300 strong)
- **Marketing Sun** (yellow-100 tile, yellow-300 strong)
- **Compliance Lavender** (lilac-100 tile, lilac-300 strong)
- **Product Lime** (lime-100 tile, lime-300 strong)

Module order is always Infrastructure, Marketing, Compliance, Product. The mapping lives in `features/company/components/module-icon.tsx`.

### Neutral

- **Paper** (neutral-0): Page and card background.
- **Mist** (neutral-50): Sidebar surface.
- **Fog** (neutral-100): Grey form panel, `muted` and `secondary` surfaces, nav hover.
- **Hairline** (neutral-200 / neutral-300): Panel borders (200) and the default `border` for cards, dividers and table rows (300).
- **Field Edge** (neutral-550): Input and choice card borders, secondary button border, the "Not started" dot. It meets 3:1 against white, which lighter greys don't.
- **Quiet Text** (neutral-600): Descriptions, labels in detail rows, "Not set" values.
- **Soft Text** (neutral-700): Unselected choice card text, inactive nav items.
- **Danger** (shadcn red, `destructive`): Delete buttons and delete menu items only.

### Named Rules

**The Module Colour Rule.** Blue, yellow, lime and the lilac 100/300 shades belong to the four modules. Never use them for generic decoration, status (success, warning) or charts that are not about modules.

**The Lilac Means Interaction Rule.** Lilac-400 marks focus and accent text. A screen that uses it as a background fill or for a heading has misused it.

**The Hex Lives In One File Rule.** Every colour is a token in `src/app/globals.css`. Classes use the token names (`bg-lilac-50`, `text-neutral-600`), never `bg-[#...]`.

## Typography

**Body Font:** Geist (via `next/font`, `--font-sans`), also used for headings.
**Numeric Font:** Geist Mono (`--font-mono`), with tabular figures.

**Character:** One clean sans for all text, so the page reads as one voice. The mono is a tool for lining up numbers, not a style.

### Hierarchy

- **Headline** (700, 24px on phones, 30px from sm, tight tracking): The one page title, through `PageHeader`.
- **Dialog title** (700, 20px): `ConfirmDialog` titles.
- **Title** (700, 18px): Section headings such as "Assessments" and "Company details", and the `FormPanel` heading.
- **Card title** (700, 16px): Module names on cards.
- **Body** (400, 16px): Default text, field text (16px stops iOS zoom), button labels, page descriptions (max about 42rem).
- **Body small** (400, 14px): Card descriptions, status lines, form panel intros, nav items (500).
- **Label** (500, 14px): Field labels and choice group legends.
- **Wordmark** (700, 20px, tracking -0.05em, lowercase "smart"): The logo only.

### Named Rules

**The Mono Is For Numbers Rule.** Use Geist Mono with tabular figures only for numbers people compare: scores, LKR amounts, source numbers. Never use mono as a "technical" costume for labels, headings or code-ish decoration.

**The Bold Not Big Rule.** Hierarchy comes from weight (700) and a short size step, not from huge display type. The largest text in the app is the 30px page title.

## Layout

- **App shell:** a 288px sidebar on the left from md (768px) up. Below md it becomes a slim sticky top bar with the logo and a menu button that opens the same links in a left sheet.
- **Content column:** centred, max 64rem, padding 24px on phones and 40px from md.
- **Auth pages:** one centred column, max 24rem.
- **Rhythm:** 40px between page sections, 16px between cards, 12px between choice cards, 8px between a heading and its line.
- **Module cards:** one column on phones (icon left, text right), two from sm, four from lg (stacked, status line pinned to the bottom with a divider).
- **Detail rows:** label left, value right, divider under each row; two columns from sm.
- **Forms:** `FormPanel` puts a white intro column next to the grey field panel only from xl. Below that the intro sits on top. Choice cards follow the form's width (container queries), not the window's.
- **Touch:** on touch screens every button, input, select and menu item grows to at least 44px (`globals.css`).

## Elevation & Depth

The app is flat. Depth comes from tone and lines: white cards with a hairline border, a grey (neutral-100) panel behind form fields, a light grey (neutral-50) sidebar. The only shadows are the ones shadcn puts on floating layers (sheet, dialog, menu), and those come from `components/ui/` unchanged.

### Named Rules

**The Flat Card Rule.** Cards and panels never get a shadow. Use a border and a tone change instead.

## Shapes

One base radius (1rem) drives everything. Buttons, fields, choice cards and module icon tiles use 16px. Cards, nav items and the form panel use the larger step (about 22px). Icon chips inside nav items use the medium step (about 13px). Status dots are full circles. The logo squares are the one exception: 10px squares with 3px corners, so they read as tiles, not dots. Icons are Lucide at stroke width 1.5, 16 to 20px.

## Components

Built from `src/components/shared/`. Use these, not the raw shadcn parts.

### Buttons (`AppButton`)

- **Shape:** soft corners (16px), 16px label.
- **Sizes:** md is 44px tall with 20px side padding. lg is 56px with 24px padding, for a submit button under 56px fields.
- **Primary:** charcoal fill, white text. Hover fades the fill to 80%.
- **Secondary:** white with a Field Edge (neutral-550) border and charcoal text.
- **Danger:** solid red fill, white text. Only for confirming a delete.
- **Ghost:** no fill or border; for icon buttons like the phone menu (44px square).
- **Focus:** lilac-400 border plus a 3px lilac-400 ring at 50%.

### Inputs / Fields (`TextField`)

- **Style:** 56px tall, white, 16px corners, Field Edge border, 16px side padding, 16px text. Label above, error below.
- **Focus:** lilac-400 border and a 3px lilac ring at 50%.
- **Error:** red border and a faint red ring; message under the field.

### Choice cards (`ChoiceField`)

- **Style:** at least 56px tall, the whole card is clickable, radio on the left, 16px medium text in Soft Text.
- **Hover:** border darkens to neutral-600.
- **Selected:** charcoal border plus a 1px charcoal ring, text turns charcoal.
- **Layout:** one column, two from small container width, three in a row when there are exactly three options.

### Cards / Containers

- **Module card:** white, hairline border, about 22px corners, 20px padding, no shadow. Holds the module icon tile, a bold name, a short grey description and a status line.
- **Form panel (`FormPanel`):** grey neutral-100 panel with a neutral-200 border and about 22px corners; white intro column with a 192px line illustration on wide screens.
- **Confirm dialog (`ConfirmDialog`):** max 28rem, 24px padding (32px from sm), Cancel (secondary) then the red confirm button; stacked full width on phones.

### Navigation (`AppSidebar`, `SidebarNav`)

- **Items:** 14px medium, 12px by 16px padding, about 22px corners. Inactive is Soft Text with a Fog hover. Active is a Lilac Wash background with charcoal text, and its icon chip turns charcoal with a white icon.
- **New company:** a dashed Field Edge border item at the end of the list.
- **Phone:** top bar plus a left sheet with the same items; tapping a link closes it.

### Module icon (`ModuleIcon`)

A 44px tile with 16px corners in the module's 100 shade and a charcoal Lucide icon (stroke 1.5): Server, Megaphone, Scale, Package.

### The mark (`AppLogo`)

A 2x2 grid of 10px squares with 2px gaps, in the module 300 shades and module order (blue, yellow, lilac, lime), next to the lowercase bold "smart" wordmark. The link is 44px tall so it is a full tap target.

### Progress mark (planned, Phase 7, not built yet)

The same 2x2 grid used per company to show completion. A completed module's square is filled in its 300 colour. An unfinished square is an outlined neutral-300 square.

### Scores and sources (planned, not built yet)

- Scores read "62 of 100"; criterion scores read "1.5 of 5". Numbers in Geist Mono with tabular figures.
- Every score on screen carries a small numbered citation: superscript, bold, lilac-400. It links to a numbered source list on the same screen (for example "Weights: AHP, expert panel").
- Score bars use the module's 300 shade.
- Score values come only from the engine, never from LLM text.

### Dark mode (not designed yet)

The `.dark` block in `globals.css` is shadcn's untouched default and the app never turns it on. There is no dark palette yet. Don't build dark styles on top of it.

## Do's and Don'ts

### Do:

- **Do** build every screen from the shared components (`AppButton`, `TextField`, `ChoiceField`, `ConfirmDialog`, `PageHeader`, `FormPanel`).
- **Do** keep module colours in module order: Infrastructure blue, Marketing yellow, Compliance lilac, Product lime.
- **Do** use the 100 shade for module tiles and backgrounds, and the 300 shade for the mark and score bars.
- **Do** use lilac-400 for focus and interaction, and charcoal (neutral-900) for primary actions and selected states.
- **Do** keep touch targets at least 44px and fields and choice cards 56px.
- **Do** show unset values as "Not set" in Quiet Text (neutral-600), not as a dash or blank.
- **Do** put Geist Mono with tabular figures on scores, LKR amounts and source numbers.
- **Do** check every screen at 390px and at laptop width.

### Don't:

- **Don't** use module colours for decoration, status or generic charts.
- **Don't** write hex colours in classes; add a token to `globals.css` instead.
- **Don't** add shadows to cards or panels.
- **Don't** use Geist Mono for labels, headings or anything that is not a compared number.
- **Don't** write the product name anywhere except `app-logo.tsx` and the root layout metadata.
- **Don't** edit `components/ui/`; wrap the part in `components/shared/`.
- **Don't** design dark mode by editing the shadcn `.dark` block piecemeal.
