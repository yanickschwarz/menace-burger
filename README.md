# 🔴 MENACE BURGER — Website

**Live:** https://menace-burger.vercel.app  
**Repo:** https://github.com/yanickschwarz/menace-burger  
**Stack:** Next.js 14 App Router · Vercel (auto-deploy) · GitHub

---

## ✏️ Änderungen vornehmen (neuer Chat)

Sage Claude:
> "Ich möchte Änderungen an der Menace Burger Website. Repo: github.com/yanickschwarz/menace-burger. Hier mein GitHub Token: [TOKEN]"

Claude holt den Code von GitHub, macht Änderungen, pusht → Vercel deployt automatisch.

**GitHub Token erstellen:** github.com/settings/tokens/new → Scope: `repo`  
**Push-URL Format:** `https://yanickschwarz:TOKEN@github.com/yanickschwarz/menace-burger.git`

---

## 🗂 Projektstruktur

```
app/
  layout.tsx          # Metadata, Fonts (Adobe Typekit + Google Fonts via <link>)
  page.tsx            # Haupt-SSR Page – alle Sections
  globals.css         # Alle Styles (kein Tailwind für Custom-Design)
  sitemap.ts
  robots.txt
components/
  MenaceClient.tsx    # 'use client' – HUD, Nav, Parallax, Scroll, Clock
public/images/        # Alle Bilder lokal optimiert (Pillow, WebP/JPG)
```

---

## 🎨 Design System

| Token | Wert |
|---|---|
| Primärfarbe | `#e31a1e` |
| Schwarz | `#0a0a0a` |
| Weiss | `#ffffff` |
| Display Font | `mudstone-sans` (Adobe Typekit: `aox2cwn`) |
| Body Font | `DM Sans` 300/400 (Google Fonts via `<link>`) |
| Stil | Brutalist · Clinical Butcher Chic · HUD-UI |
| Easing | `cubic-bezier(0.77,0,0.18,1)` |

---

## 📐 Sections (Reihenfolge)

| Section | Key-Details |
|---|---|
| Preloader | Roter Fullscreen, Logo rotiert, Iris-Reveal nach 1.5s |
| HUD | Fixed Corners, Live-Uhr, Open/Closed Status |
| Nav Overlay | Fullscreen Rot, Circle-Reveal, 4 Links |
| Hero | Floating Burger, MENACE BG-Text, Parallax via rAF |
| Marquee | Roter Banner, endlos, 22s Loop |
| Menu Cards | 7 Burger, Horizontal Drag-Scroll, Scroll-Progress-Bar |
| Menu Modal | Vollmenü-Bild (`menu-full.jpg`) |
| About | Roter BG, Dennis & Fabian, `crew.jpg` |
| Instagram/CCTV | 6 Bilder, Scanlines-Overlay, REC-Dot Animation |
| Location | Öffnungszeiten (heute highlighted), 3 Fotos, Google Maps Embed |
| Footer | Logo, IG + TikTok |

---

## 🍔 Burger Menu

| Name | Single | Menü |
|---|---|---|
| Menace Cheese | 14.00 | 19.90 |
| Menace Cheese TS | 15.00 | 20.90 |
| Menace Cheese Hot | 15.00 | 20.90 |
| Little Cheese | 10.00 | 15.90 |
| Classic Chicken | 13.00 | 18.90 |
| Buffalo Chicken | 14.00 | 19.90 |
| Nashville Chicken | 15.00 | 20.90 |

---

## ⏰ Öffnungszeiten

| Tag | Zeit |
|---|---|
| Mo–Do | 11:00 – 21:30 |
| Fr | 11:00 – 23:00 |
| Sa | 12:00 – 23:00 |
| So | 13:00 – 21:00 |

---

## ⚠️ Wichtige Regeln (NICHT brechen)

1. **Keine `next/image`** → immer native `<img>`. next/image bricht `object-fit: cover`.
2. **Keine `next/font`** → Google Fonts als `<link>` Tag in `layout.tsx`.
3. **Kein `eslint:` in `next.config.ts`** → TypeScript-Fehler. ESLint in `eslint.config.mjs`.
4. **`@next/next/no-img-element: off`** in `eslint.config.mjs` setzen.
5. **Alles Client-seitige in `MenaceClient.tsx`** – der Rest bleibt SSR.

---

## 📍 Adresse & Socials

Menace Burger · Schulgutstrasse 4 · 8953 Dietikon  
[Instagram](https://www.instagram.com/menaceburger/) · [TikTok](https://www.tiktok.com/@menaceburger)
