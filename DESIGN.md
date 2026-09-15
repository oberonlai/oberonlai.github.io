# Oberon site v2 — Design notes

Dense Portfolio Grid redesign (Max Siedentopf density + Daniel Sun craft cues), addressing live Feature Stack feedback: too much whitespace / 簡陋.

## Accent
**Warm amber `#b45309`** (hover `#92400e`, soft wash `#f5e6d3`, ink `#78350f`). Used for labels, hairlines, icons, stats numerals, service titles, and focus rings.

## Paper & ink
| Token | Hex | Role |
|---|---|---|
| `--paper` | `#ebe6df` | Warm stone ground (not cold white) |
| `--paper-alt` | `#e3ddd4` | Alternating section band |
| `--card` | `#f7f4ef` | Bordered cards / bento cells |
| `--ink` | `#1a1714` | Primary text / dark CTA / contact panel |
| `--line` | `#d6cfc4` | 1px borders throughout |

## Typography
- **Display (H1–H2):** Source Serif 4 + Noto Serif TC
- **UI / body:** Inter + Noto Sans TC
- Radius mostly `2px`; primary CTAs can use pill radius for craft warmth

## Density tactics
1. **Section rhythm** `clamp(48px, 6vw, 80px)` — tighter than prior 72–140
2. **Grid gaps** 12–16px (`--gap: 14px`); cards fill edge-to-edge with 1px borders
3. **Hero** compact split (~70–85svh) + full-width **stats strip** (11 年 / ×4 Product / Talks / Codotx) so the fold is information, not empty paper
4. **CSS blueprint grid** on hero (1px lines, low opacity, masked fade)
5. **Trust trio** equal bordered cards with top amber hairline + icon chip
6. **Now section** as bento: 2×2 product cards + dense project list + tagged learning chips
7. **Services** 2×2 tiles (WP / Woo / LINE / AI) + full-width left-bar AI callout
8. **Talks** two dense year/meta columns (Siedentopf-style lists)
9. **Contact** dark warm panel `#1a1714` as contrast finish

## Human warmth (icons / illustrations / photo)
- **Inline SVG icons** (Heroicons-like stroke, amber/ink): section labels, trust trio (partner / code / sparkles), services (code / cart / phone / AI), contact (mail / clock / building), hero connect links — no icon CDN
- **Decorative SVGs** under `assets/`: `deco-doodle.svg` (hero), `deco-grid-mark.svg` + `deco-blob.svg` (Codotx panel)
- **Avatar** `assets/oberon-avatar.png` in soft photo-frame with serif caption “Fig. 1 — Oberon”
- No invented product screenshots

## Accessibility
- `lang="zh-Hant"`, UTF-8
- Skip link, `:focus-visible` amber ring, `prefers-reduced-motion`
- Decorative SVGs `aria-hidden` / empty alt

## Content
All Traditional Chinese copy and links preserved from live site (mailto, LINE `https://lin.ee/fjrAhZg`, Codotx URLs, tax ID 90516823). First person. No new claims.

## Files
- `out-v2/index.html`
- `out-v2/styles.css`
- `out-v2/DESIGN.md`
- `out-v2/assets/deco-*.svg` (+ keep site `assets/oberon-avatar.png` on deploy)

## Layout fix (2026-09-15)
Removed hero `min-height: ~78svh` + `justify-content: center` + stats `margin-top: auto` — those created a large empty band between hero content and stats. Hero now sizes to content; section rhythm tightened to `clamp(40px, 5vw, 64px)`.
