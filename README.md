# JALO GROUP for Oil & Gas Services — Enterprise Web Platform

[![License: Restricted Proprietary](https://img.shields.io/badge/License-Restricted_Proprietary-red.svg)](LICENSE)
[![Architect & Owner](https://img.shields.io/badge/Owner-@ZerroDevs-0B4F8A.svg)](https://github.com/ZerroDevs)
[![Architecture](https://img.shields.io/badge/Architecture-Vanilla_ES_Modules-FF7A00.svg)](#architecture--engineering-standards)
[![i18n](https://img.shields.io/badge/i18n-English_%7C_Arabic_(RTL)-1B2A38.svg)](#internationalization-i18n--rtl-engine)
[![Mobile](https://img.shields.io/badge/UX-Phone--First-22C55E.svg)](#phone-first-mobile-architecture)

An enterprise-grade, highly modular, multilingual web platform engineered for **Jalo Group for Oil & Gas Services** (Libya). Developed with vanilla **HTML5**, **CSS3 Custom Properties**, and modern **ES Modules JavaScript**, this system provides institutional presentation, technical service discovery, operational HSE transparency, and direct procurement quote dispatch for national energy operators (NOC, Waha, Mellitah, Agoco, Sirte Oil) and international joint ventures.

---

## Project Owner & Lead Architect

This project was conceived, designed, and engineered by:

- **Owner & Lead Developer**: [**ZerroDevs**](https://github.com/ZerroDevs)
- **GitHub Profile**: [https://github.com/ZerroDevs](https://github.com/ZerroDevs)
- **Role**: Principal Frontend Engineer & Enterprise UI/UX Specialist
- **Intellectual Property**: Proprietary & Restricted (All Rights Reserved)

---

## Table of Contents

1. [Executive Summary & Core Objectives](#executive-summary--core-objectives)
2. [Phone-First Mobile Architecture](#phone-first-mobile-architecture)
3. [Brand Identity & Design System](#brand-identity--design-system)
4. [Interactive Technical Capabilities](#interactive-technical-capabilities)
5. [Multi-Page Platform Overview](#multi-page-platform-overview)
6. [Project File Hierarchy](#project-file-hierarchy)
7. [Internationalization (i18n) & RTL Engine](#internationalization-i18n--rtl-engine)
8. [Theme Management Engine](#theme-management-engine)
9. [Local Development & Deployment](#local-development--deployment)
10. [Restricted Proprietary License](#restricted-proprietary-license)

---

## Executive Summary & Core Objectives

**Jalo Group for Oil & Gas Services** is a premier Libyan oilfield service enterprise certified under ISO 9001, ISO 14001, and ISO 45001, and fully registered as an approved vendor with the Libyan National Oil Corporation (NOC).

The web platform was constructed to satisfy rigorous institutional criteria:
- **Zero Monolithic Dependencies**: Built entirely without heavy frameworks (React, Vue, Tailwind, Bootstrap), eliminating build-step friction and achieving instant sub-second page loads.
- **Enterprise-Grade Modularity**: Every stylesheet, JavaScript controller, and translation dictionary is strictly decoupled into dedicated, maintainable modules.
- **Strict Visual & Content Compliance**:
  - Zero unicode emojis (FontAwesome 6 Pro vector icons exclusively).
  - Absolute prohibition of purple, violet, pink, or magenta tones.
  - Zero background gradients (solid enterprise colors and subtle frosted panels only).
  - Industrial imagery reflecting authentic Libyan petroleum operations, wellhead manifolds, QA/QC NDT ultrasonic testing, and safety briefings with Libyan personnel in compliant PPE.

---

## Phone-First Mobile Architecture

The platform implements a **Phone-First layout system**, ensuring flawless ergonomics, immediate legibility, and high-conversion interactions on mobile screens:

1. **Clutter-Free Mobile Header**:
   - Sticky top bar (`height: 64px` on phones, `74px` on desktop) with high-contrast corporate branding.
   - Bulky desktop elements and secondary controls (Theme switcher, PC Quote button) are hidden on mobile viewports (`<1024px`), keeping the bar clean with only:
     1. High-resolution brand logo & corporate typography.
     2. Compact 1-tap language switch (`عربي` / `EN`).
     3. Ergonomic hamburger navigation button with smooth transformation states.
2. **Horizontal Overflow & Zero Lateral Shift Prevention**:
   - Clamped root viewports (`html, body { overflow-x: hidden; width: 100%; max-width: 100%; }`).
   - Mobile navigation drawer utilizes `visibility: hidden; pointer-events: none;` in its inactive state to completely remove off-screen transformed panels from the mobile browser layout calculation, preventing lateral scrolling or blank whitespace across all 7 pages.
   - Dual-element scroll lock (`html.drawer-open, body.drawer-open { overflow: hidden !important; touch-action: none; }`).
   - `.btn-block` enforces `white-space: normal; text-align: center;` to prevent localized button labels from expanding containers beyond mobile viewports (390px).
3. **Structured Mobile Navigation Drawer**:
   - **Primary Action**: Prominent "Request a Quote" CTA button at the top of the drawer.
   - **Navigation Stack**: Vertical navigation links with chevron indicators (directionally flipped in Arabic RTL).
   - **Preferences Hub**: Side-by-side Language and Dark/Light Mode selectors.
   - **Fast Emergency Dispatch Card**: 1-tap direct phone call dialer and WhatsApp field dispatch link.
4. **Dedicated Footer Utility Hub (`.footer-utility-bar`)**:
   - Present across all 7 pages right above the copyright bar.
   - Houses quick theme switching, language toggle, secondary quote modal trigger, and a smooth "Back to Top" scrolling anchor.
5. **Adaptive Two-Column Form Grids (`.form-grid-2`)**:
   - Two-column input layouts automatically collapse into single touch-friendly columns on `<640px` screens for both the Contact form and the Universal Quote Modal.

---

## Brand Identity & Design System

The platform's palette is directly derived from the official **Jalo Group** corporate emblem:

| Color Name | Hex Code | Role in Interface |
| :--- | :--- | :--- |
| **Flame Orange** | `#FF7A00` / `#F56000` | Primary brand accent, primary CTA buttons, active state indicators |
| **Industrial Flame Amber** | `#FFA726` | Secondary accents, warning badges, subtle highlight borders |
| **Deep Corporate Navy Blue** | `#0B4F8A` / `#003B73` | Primary brand color, headers, hero backgrounds, primary text |
| **High-Contrast Dark Slate** | `#1B2A38` | Dark mode surface background, secondary panels |
| **Neutral Dark** | `#0F1720` / `#18222D` | Dark mode canvas, footer backgrounds, deep shadows |
| **Neutral Light** | `#F8FAFC` / `#FFFFFF` | Light mode canvas, card surfaces, clean whitespace |
| **Accent Border** | `#E2E8F0` / `#2D3D4E` | High-contrast divider lines and card borders |

### Strict Brand Constraints
- **Absolute Color Prohibition**: Strictly **zero** shades of purple, violet, pink, or magenta anywhere in the codebase.
- **No Background Gradients**: Visual backgrounds and hero cards use solid, high-contrast corporate colors and subtle frosted glass panels (`backdrop-filter: blur()`).
- **Zero Emojis**: Replaced with FontAwesome 6 vector glyphs across all 7 pages and translation dictionaries.

---

## Interactive Technical Capabilities

### 1. Universal "Request a Quote" Modal Engine
- Invoked globally from the header CTA, footer utility bar, page hero sections, or directly from any service card.
- Automatically pre-selects the relevant service discipline when triggered from a card (e.g., Well Testing, Pipeline Pigging, Slickline).
- Client-side validation for: Operator Company Name, Contact Person, Corporate Email, Libyan Phone, Operating Basin, and Scope of Work.
- Generates an **RFC-compliant structured `mailto:` link** addressed to `inquiry@jalogroup.ly` with prefilled technical parameters.
- Built-in preview panel with a **1-click "Copy Payload to Clipboard"** button for easy pasting into WhatsApp, procurement portals, or official dispatch letters.

### 2. Interactive Basin & Project Filtering System
- Located on `projects.html`.
- Real-time client-side filtering across Libyan operational basins:
  - **All Projects**
  - **Sirte Basin** (Waha, Zelten, Raguba, Amal fields)
  - **Murzuq Basin** (Sharara, Elephant fields)
  - **Ghadames / Western Basins** (Wafa field)
  - **Coastal Terminals** (Es Sider, Ras Lanuf, Brega, Mellitah)
- **Deep Inspection Modal**: Clicking "Inspect Project Details" opens an interactive modal presenting:
  - High-resolution field operation photography.
  - Client / Operator specifications.
  - Duration, location, and operational metrics.
  - Detailed engineering scope, HSE record (e.g., "Zero LTI"), and project outcomes.

---

## Multi-Page Platform Overview

| File | Page Title | Key Sections & Capabilities |
| :--- | :--- | :--- |
| [`index.html`](index.html) | **Enterprise Home** | Hero banner with Libyan drilling rig imagery, live basin metrics, 6 institutional pillars, 11 core oilfield services preview, HSE Goal Zero commitment, recent projects matrix, and corporate CTA banner. |
| [`about.html`](about.html) | **About Us** | Corporate narrative, vision, mission, core values, Libyan local content commitment, fleet & equipment logistics, and field safety overview. |
| [`services.html`](services.html) | **Technical Services** | Comprehensive technical breakdown of all 11 disciplines, direct quote pre-selection triggers, and the **Field Operations & Technical Capabilities Showcase**. |
| [`hse.html`](hse.html) | **HSE & Quality** | Goal Zero philosophy, Golden Safety Rules, Risk Assessment Matrix, Permit-To-Work (PTW) protocols, emergency drills, and QA/QC ultrasonic flaw testing showcase. |
| [`projects.html`](projects.html) | **Operational Projects** | Interactive basin filtering, real project case studies, and full-screen project inspection modal. |
| [`certifications.html`](certifications.html) | **Standards & Compliance** | ISO 9001:2015, ISO 14001:2015, ISO 45001:2018 accreditation data, Libyan NOC qualified vendor credentials, OEM partner compliance, and QA/QC ultrasonic testing showcase. |
| [`contact.html`](contact.html) | **Contact & Dispatch** | Tripoli HQ coordinates, Benghazi & Sirte logistics hubs, 24/7 Field Dispatch showcase, official company logo identity card, and direct WhatsApp / RFC mailto integration. |

---

## Project File Hierarchy

```
jalo-group/
├── index.html                      # Enterprise Home
├── about.html                      # Corporate Story & Technical Capacity
├── services.html                   # 11 Oilfield Service Disciplines & Capabilities
├── hse.html                        # HSE Policy, Goal Zero & QA/QC Framework
├── projects.html                   # Project Showcase with Filter & Detail Modal
├── certifications.html             # ISO Accreditations & NOC Qualification
├── contact.html                    # Operational Hubs, Map Card & Contact Forms
├── LICENSE                         # Restricted Proprietary License (ZerroDevs)
├── README.md                       # Comprehensive Technical Documentation
│
├── assets/
│   ├── css/
│   │   ├── variables.css           # Brand tokens, color palettes, Light/Dark themes
│   │   ├── base.css                # CSS reset, typography scale, container, grid clamps
│   │   ├── layout.css              # Topbar, sticky header, mobile drawer, footer
│   │   ├── components.css          # Buttons, badges, cards, quote modal, form controls
│   │   ├── pages.css               # Hero banners, Goal Zero cards, map containers
│   │   └── rtl.css                 # Right-to-Left bidirectional overrides for Arabic
│   │
│   ├── js/
│   │   ├── app.js                  # Master application entrypoint & coordinator
│   │   ├── modules/
│   │   │   ├── navigation.js       # Sticky header, URL detection, mobile drawer
│   │   │   ├── theme.js            # Light/Dark mode manager & localStorage sync
│   │   │   ├── quote-modal.js      # Quote generator, validation, clipboard copy
│   │   │   └── projects.js         # Basin filter tabs & project detail modal
│   │   └── i18n/
│   │       ├── i18n-engine.js      # Live DOM scanner, LTR/RTL switcher, persistence
│   │       ├── en.js               # Complete English terminology dictionary
│   │       └── ar.js               # Authentic Arabic petroleum terminology dictionary
│   │
│   └── images/
│       ├── logo.jpeg               # Official Jalo Group corporate emblem
│       ├── hero-oilfield.jpg       # Libyan desert onshore drilling rig at golden hour
│       ├── engineer-ppe.jpg        # Petroleum engineer inspecting flowline manifold
│       ├── refinery-plant.jpg      # Gas processing facility & fractionation towers
│       ├── heavy-equipment.jpg     # Desert heavy haulage prime movers & mobile cranes
│       ├── hse-safety.jpg          # HSE safety toolbox briefing & logo billboard
│       ├── hse-qaqc.jpg            # QA/QC crew executing ultrasonic NDT flaw testing
│       └── service-operations.jpg  # Branded utility vehicle & wellhead operations
```

---

## Internationalization (i18n) & RTL Engine

The platform features an in-house **Live DOM Internationalization Engine** ([`assets/js/i18n/i18n-engine.js`](assets/js/i18n/i18n-engine.js)):

- **Default Language**: English (`dir="ltr"`, typography: `Plus Jakarta Sans`, `Inter`).
- **Secondary Language**: Arabic (`dir="rtl"`, typography: `Cairo`, `Alexandria`).
- **Dynamic DOM Translation**: Scans and updates elements matching:
  - `[data-i18n="key.path"]` (text content)
  - `[data-i18n-placeholder="key.path"]` (input placeholders)
  - `[data-i18n-title="key.path"]` (tooltips and titles)
- **Bidirectional Layout Flipping**:
  - Automatically updates `document.documentElement.dir` (`ltr` or `rtl`).
  - Automatically updates `document.documentElement.lang` (`en` or `ar`).
  - Mirrors directional chevrons, card alignments, float orders, and mobile drawer translation vectors via [`assets/css/rtl.css`](assets/css/rtl.css).
- **Persistence**: Remembers language preference across all pages via `localStorage.getItem('jalo_group_lang')`.

---

## Theme Management Engine

The visual theme is powered by CSS Custom Properties ([`assets/js/modules/theme.js`](assets/js/modules/theme.js)):

- **Light Mode**: High-contrast, clean corporate aesthetic (`:root[data-theme="light"]`).
- **Dark Mode**: High-contrast dark slate aesthetic (`:root[data-theme="dark"]`).
- **Zero Flickering**: Reads theme state synchronously on page load before DOM rendering.
- **Persistence**: Synchronizes with `localStorage.getItem('jalo_group_theme')`.

---

## Local Development & Deployment

This project requires zero package managers, build steps, or compilation. It can be served immediately using any standard static file server:

### 1. Using Python 3:
```bash
# From the repository root:
python -m http.server 8080
```
Then navigate to: `http://localhost:8080`

### 2. Using Node.js:
```bash
npx serve . -p 8080
```

### Browser Compatibility:
- Chrome 90+ (Desktop & Mobile)
- Safari 14+ (macOS & iOS)
- Firefox 88+
- Microsoft Edge 90+
- Opera 76+

---

## Restricted Proprietary License

**Copyright (c) 2024-2026 ZerroDevs (https://github.com/ZerroDevs). All Rights Reserved.**

This repository, source code, visual designs, assets, and branding implementations are strictly proprietary and confidential.

### Restrictions:
- **No Reproduction**: You may NOT clone, duplicate, copy, or redistribute this repository or any portion thereof.
- **No Commercial Use**: You may NOT sell, license, lease, rent, or commercially deploy this software or any derivative works.
- **No Modification**: You may NOT modify, adapt, reverse-engineer, decompile, or extract design systems or code components.
- **No AI Training**: You may NOT use this codebase or its contents to train artificial intelligence models, machine learning datasets, or automated scrapers.

For full terms and conditions, please consult the official [**LICENSE**](LICENSE) file or contact the owner directly:
- **Owner Profile**: [https://github.com/ZerroDevs](https://github.com/ZerroDevs)
