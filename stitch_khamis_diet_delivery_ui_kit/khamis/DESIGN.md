---
name: Khamis
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daef'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#e9edff'
  surface-container-high: '#e1e8fd'
  surface-container-highest: '#dce2f7'
  on-surface: '#141b2b'
  on-surface-variant: '#404944'
  inverse-surface: '#293040'
  inverse-on-surface: '#edf0ff'
  outline: '#707974'
  outline-variant: '#bfc9c3'
  surface-tint: '#2b6954'
  primary: '#003527'
  on-primary: '#ffffff'
  primary-container: '#064e3b'
  on-primary-container: '#80bea6'
  inverse-primary: '#95d3ba'
  secondary: '#5c5f60'
  on-secondary: '#ffffff'
  secondary-container: '#e1e3e4'
  on-secondary-container: '#626566'
  tertiary: '#4f1f19'
  on-tertiary: '#ffffff'
  tertiary-container: '#6b342d'
  on-tertiary-container: '#ea9e93'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b0f0d6'
  primary-fixed-dim: '#95d3ba'
  on-primary-fixed: '#002117'
  on-primary-fixed-variant: '#0b513d'
  secondary-fixed: '#e1e3e4'
  secondary-fixed-dim: '#c5c7c8'
  on-secondary-fixed: '#191c1d'
  on-secondary-fixed-variant: '#454748'
  tertiary-fixed: '#ffdad5'
  tertiary-fixed-dim: '#ffb4a9'
  on-tertiary-fixed: '#380d08'
  on-tertiary-fixed-variant: '#6e372f'
  background: '#f9f9ff'
  on-background: '#141b2b'
  surface-variant: '#dce2f7'
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-margin: 120px
  gutter: 24px
---

## Brand & Style

The design system is built on a **Clinical-Premium Minimalism** philosophy. It targets a sophisticated audience that values transparency, efficiency, and professional health standards. The UI must feel authoritative and "quietly expensive," avoiding all decorative clutter, illustrative whimsy, or soft gradients.

The aesthetic combines the structural rigor of **Corporate Modern** design with the spatial confidence of high-end **Minimalism**. The emotional response should be one of immediate trust and clarity—a "digital sanctuary" where information is easy to parse and actions are decisive. Every element must serve a functional purpose; if a component doesn't aid utility, it is removed.

## Colors

The palette is restricted to emphasize focus and high-end positioning.

- **Primary (Deep Forest Green):** Used exclusively for primary calls to action, active states, and critical brand highlights. It represents health, stability, and growth.
- **Base (Off-White/Soft Sand):** `#F9FAFB` or `#F3F4F6` is used for the main background to reduce eye strain and provide a "clinical" sterile backdrop that feels premium rather than stark white.
- **Text (Ink):** `#111827` is the standard for all body copy and headings, providing maximum contrast against the base.
- **Support:** A very pale mint tint (`#D1FAE5`) may be used for secondary badges or success indicators to maintain color harmony without introducing new hues.

## Typography

This design system utilizes **Inter** for all roles to maintain a systematic, utilitarian feel. The distinction is created through aggressive scale and weight contrast.

- **Headlines:** Must use tight tracking (letter-spacing) to create a "blocky," authoritative look. Bold and Extra-Bold weights are preferred to anchor the page.
- **Body:** Standard tracking with generous line-heights to ensure readability and a "breathable" feel.
- **Labels:** Small, uppercase, and slightly tracked out to denote metadata or secondary navigation elements.

## Layout & Spacing

The layout is built on a **12-column fixed grid** for desktop, shifting to a **4-column fluid grid** for mobile. 

- **Margins:** Desktop views require substantial horizontal padding (80-120px) to center the focus and evoke a premium, editorial feel. 
- **The 8pt Scale:** All spacing between elements (margins, padding, gaps) must be a multiple of 8px. 
- **Vertical Rhythm:** Use larger gaps (`xl`) between major sections to emphasize the "minimalist" aspect of the brand. Group related components with `sm` or `md` spacing.

## Elevation & Depth

This system rejects traditional drop shadows. Depth is communicated through **Tonal Layering** and **Low-Contrast Outlines**.

- **Surfaces:** Use subtle shifts in background color (e.g., a slightly darker gray-wash for a container) to separate content sections.
- **Outlines:** UI elements like cards or input fields use a 1px solid border in a neutral tint (`#E5E7EB`).
- **Interaction:** On hover, an element should not "lift" with a shadow. Instead, it should undergo a subtle color shift or a slight increase in border-weight/darkness to maintain a flat, architectural feel.

## Shapes

The shape language is disciplined and geometric. A **Soft (0.25rem)** radius is used for primary UI elements like buttons and input fields to prevent the UI from feeling sharp or aggressive while maintaining a professional "grid-aligned" look. Larger containers (cards) may use **rounded-lg (0.5rem)** but never go beyond this; pill-shapes and high-roundedness are strictly forbidden to preserve the clinical vibe.

## Components

- **Buttons:** 
  - *Primary:* Solid Deep Forest Green with white text. No rounded corners beyond 4px.
  - *Secondary:* Ghost style with 1px Deep Forest Green border or solid neutral light gray.
- **Inputs:** High-contrast borders (1px) with label text placed strictly above the field in `label-sm`.
- **Cards:** Minimalist layout. No shadows. Use 1px borders. Content inside cards should have generous internal padding (min 24px).
- **Verification Badges:** Small, circular icons with a checkmark, using the Primary color or the Accent tint. They must appear next to high-value data points to reinforce the "Trusted" brand pillar.
- **Lists:** Clean, horizontal dividers (1px) with no bullet points. Use typography weight to differentiate list headers from items.
- **Icons:** Use thin-stroke, flat SVG icons. Avoid filled icons unless used for an active state in navigation.