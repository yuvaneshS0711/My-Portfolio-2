# Yuvanesh S — QA Automation Engineer Portfolio

A clean, responsive personal portfolio website for **Yuvanesh S**, a QA Automation Engineer based in Chennai, Tamil Nadu, India.

---

## 📁 Project Structure

```
portfolio/
├── index.html          ← Main HTML file (single-page, self-contained)
└── assets/
    ├── style.css       ← All styles (extracted from index.html)
    └── script.js       ← All JavaScript (extracted from index.html)
```

> **Note:** The original `index.html` is fully self-contained (CSS + JS inline). The `assets/` folder contains the same code split out for easier maintenance.

---

## 🌐 Sections

| Section        | Description                                         |
|----------------|-----------------------------------------------------|
| **Hero**       | Name, title, availability badge, CTA buttons        |
| **Ticker**     | Scrolling marquee of tech stack keywords            |
| **About**      | Bio and highlights (frameworks, approach, process)  |
| **Skills**     | 6 skill category cards (automation, API, CI/CD…)    |
| **Skill Depth**| Animated progress bars with proficiency %           |
| **Experience** | Timeline of 3 jobs (Teamlease, IRC, Buzzworks)      |
| **Projects**   | 3 key project cards with tech tags                  |
| **Achievements**| 4 stat cards (years exp, companies, KPI gains)     |
| **Education**  | B.Sc Computer Science — Dhanraj Baid Jain College   |
| **Contact**    | Info cards + mailto contact form                    |
| **Footer**     | Logo, copyright, quick nav links                    |

---

## 🎨 Design System

### Color Palette

| Variable      | Hex / Value                   | Usage                        |
|---------------|-------------------------------|------------------------------|
| `--cream`     | `#faf7f2`                     | Page background              |
| `--cream2`    | `#f3ede3`                     | Alternate section background |
| `--navy`      | `#0f1923`                     | Primary dark color           |
| `--amber`     | `#e8892a`                     | Accent / highlight color     |
| `--amber2`    | `#f5a623`                     | Amber gradient end           |
| `--green`     | `#1a6b4a`                     | Available badge / tags       |
| `--muted`     | `#7a7a8a`                     | Subtitle / secondary text    |

### Fonts (Google Fonts)

| Font              | Weight(s)         | Usage                    |
|-------------------|-------------------|--------------------------|
| Playfair Display  | 700, 900 + italic | Headings, logo, names    |
| Outfit            | 300–700           | Body text, UI elements   |
| JetBrains Mono    | 300–500           | Labels, tags, code-style |

---

## ⚙️ Features

- **Responsive design** — mobile hamburger menu, fluid grids, breakpoints at 1024px, 768px, 480px
- **Scroll animations** — `IntersectionObserver`-based reveal on scroll for all sections
- **Animated skill bars** — bars animate to percentage when scrolled into view
- **Active nav highlighting** — current section highlighted in the navbar on scroll
- **Back-to-top button** — fixed button appears after scrolling 400px
- **Sticky nav** — glass-morphism frosted navbar with shadow on scroll
- **Scrolling ticker** — infinite marquee of technology keywords
- **mailto contact form** — form data compiled into a pre-filled email using `mailto:`

---

## 🚀 Quick Start

### Option 1 — Self-contained (original)
Just open `index.html` in a browser — no server needed.

### Option 2 — Linked assets (separated)
Update `index.html` to reference the external files:

1. Remove the `<style>` block from `<head>` and replace with:
   ```html
   <link rel="stylesheet" href="assets/style.css">
   ```

2. Remove the `<script>` block from the bottom of `<body>` and replace with:
   ```html
   <script src="assets/script.js"></script>
   ```

3. Serve from any static host (GitHub Pages, Netlify, Vercel, etc.)

---

## 🛠️ Customisation Guide

| What to change           | Where to find it                          |
|--------------------------|-------------------------------------------|
| Name / Title             | `<title>`, `.hero h1`, `.hero-card h3`    |
| Contact details          | `#contact` section — email, phone, links  |
| Work experience          | `#experience` section — `.exp-card` blocks|
| Projects                 | `#projects` section — `.project-card`     |
| Skill bar percentages    | `data-width` attributes on `.bar-fill`    |
| Achievement stats        | `.ach-num` values in `#achievements`      |
| Colors                   | CSS variables in `:root { … }`            |
| Fonts                    | Google Fonts `<link>` in `<head>`         |

---

## 📬 Contact

**Yuvanesh S**
- 📧 yuvanesh.s0711@gmail.com
- 📱 +91 9384511054
- 💼 [linkedin.com/in/yuvanesh-s-293227391](https://linkedin.com/in/yuvanesh-s-293227391)
- 📍 Chennai, Tamil Nadu, India

---

© 2025 Yuvanesh S · QA Automation Engineer · Chennai, India
