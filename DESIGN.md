# Oberon Lai · Feature Stack design tokens (adapted)

> Adapted from CSS Wizardry About macrostructure (Feature Stack, light mode).
> Reference magenta brand intentionally replaced — do not copy `#d805ec`.

## Direction
顧問自我介紹（Feature Stack／CSS Wizardry–inspired）  
Stark, functional consultant about page. First-person technical partner.

## Accent chosen
**Teal `#0d9488`** (not amber, not magenta)

| Token | Hex | Role |
|---|---|---|
| `--accent` | `#0d9488` | Links, active nav hover bg, H1 vertical rule, trust card top border, callout rule, section labels |
| `--accent-hover` | `#0f766e` | Link / secondary hover |
| `--accent-soft` | `#ccfbf1` | Soft fills (nav hover, learning box, secondary hover) |
| `--accent-ink` | `#115e59` | Text on soft teal surfaces |
| `--cta` | `#111111` | Primary button fill (high contrast) |
| `--paper` | `#fafafa` | Page background |
| `--paper-alt` | `#f5f5f5` | Alternating sections / footer |
| `--ink` | `#111111` | Body / headings |
| `--ink-muted` | `#3a3a3a` | Lead / supporting copy |
| `--ink-soft` | `#6b6b6b` | Meta / captions |
| `--line` | `#e4e4e4` | Borders / dividers |
| `--card` | `#ffffff` | Cards / panels |
| `--panel-dark` | `#1a1a1a` | Contact panel |

## Typography
- Stack: `Inter, "Noto Sans TC", system-ui, -apple-system, "Segoe UI", sans-serif`
- Body: `1.0625rem` / line-height `1.6`
- H1: `clamp(2.25rem, 4.2vw, 3.5rem)` weight 600, line-height ~1.08, max-width ~12ch (2–3 lines)
- H2: `clamp(1.5rem, 2.4vw, 1.875rem)` weight 600
- Meta / nav: `0.8125rem`

## Layout (Feature Stack)
1. **Sticky header** — brand left (`Oberon Lai`), anchors right: 做事 / 現在 / 服務 / 教學 / Codotx / 聯絡
2. **Hero above the fold** (~1280×800 / `min-height: calc(100svh - header)`)
   - Two-column from 900px: left ~60% / right ~40%
   - Left: thick `6px` teal vertical rule on H1「嗨，我是 Oberon」, name, tagline, lead, avatar (`assets/oberon-avatar.png`)
   - Right: primary mailto CTA + meta dl (角色／專長／公司／Email) + connect links
   - Compact padding; short-viewport media query shrinks type/avatar so nav+hero stay above fold
3. **Below fold** — section rhythm `clamp(72px, 10vw, 140px)`
   - 我怎麼做事 (trust trio)
   - 現在在做什麼 (Product×4 + Project×4 + 最近在 K 的×3)
   - 服務精簡 (+ AI callout)
   - 教學與演講
   - Codotx bridge
   - 來聊聊 / footer

## Spacing / shape
- Container: `1160px` max-width
- Inline padding: `clamp(1.5rem, 4vw, 2rem)` (≥24px)
- Radius: `2px` (sharp consultant feel; 0–4px range)
- Section containers use padding-inline only on `.container`; block rhythm on `.section`

## Accessibility
- `lang="zh-Hant"`, charset UTF-8
- Skip link → `#main`
- `:focus-visible` ring via `--focus`
- `prefers-reduced-motion` disables smooth scroll / transitions
- Semantic landmarks: header, nav, main, sections with `aria-labelledby`, footer

## Content preserved
All Traditional Chinese substantive copy from the previous site (intro, trust×3, Product×4, Project×4, learning×3, services + AI callout, teaching, talks, Codotx, contact). Working links retained including `mailto:hi@oberonlai.blog` and LINE `https://lin.ee/fjrAhZg`. Avatar path: `assets/oberon-avatar.png`.
