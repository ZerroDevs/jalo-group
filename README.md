# JALO GROUP for Oil & Gas Services — Enterprise Web Architecture

Enterprise-grade, modular web platform for **Jalo Group for Oil & Gas Services** (Libya), built with vanilla HTML5, CSS3 Custom Properties, and modern ES Modules JavaScript.

---

## 1. Project Directory Structure

```
/jalo-group/
├── index.html                  # Home page (Hero, Stats, Value Matrix, Core Services, HSE, Projects Preview, CTA)
├── about.html                  # Corporate Story, Vision, Mission, Core Values & Technical Capacity
├── services.html               # Comprehensive specifications for all 11 Oil & Gas service disciplines
├── hse.html                    # Dedicated Health, Safety, Environment & Quality (Goal Zero, Risk Mitigations)
├── projects.html               # Filterable Field Experience (Sirte, Murzuq, Coastal, Waha) with modal inspection
├── certifications.html         # Certifications & Standards (ISO 9001/14001/45001, NOC approvals, OEM compliance)
├── contact.html                # Operational Hubs (Tripoli), WhatsApp dispatch, Quote engine
├── assets/
│   ├── css/
│   │   ├── variables.css       # Strict brand tokens, theme variables (Light/Dark), typography scale
│   │   ├── base.css            # Modern reset, container, typography, utility classes
│   │   ├── layout.css          # Topbar, sticky header, desktop nav, mobile drawer, footer
│   │   ├── components.css      # Buttons, badges, cards, quote modal, form elements, filter tabs
│   │   ├── pages.css           # Page-specific layouts (Hero, HSE Goal Zero, Story grid, Map card)
│   │   └── rtl.css             # Right-to-Left overrides for Arabic mode (Cairo/Alexandria typography)
│   ├── js/
│   │   ├── app.js              # Application entrypoint & coordinator
│   │   ├── i18n/
│   │   │   ├── en.js           # Full English dictionary (all keys & sections)
│   │   │   ├── ar.js           # High-caliber Arabic dictionary with authentic Libyan oilfield terminology
│   │   │   └── i18n-engine.js  # Live DOM scanner, LTR/RTL attribute switching & localStorage persistence
│   │   └── modules/
│   │       ├── theme.js        # Light/Dark mode manager with instant switching & state persistence
│   │       ├── navigation.js   # Sticky header, URL-based active link detection, mobile drawer
│   │       ├── quote-modal.js  # Universal quote modal, validation, structured RFC mailto & clipboard copy
│   │       └── projects.js     # Basin/category filtering & dynamic project detail modal
│   └── images/
│       ├── logo.jpeg           # Official brand logo
│       ├── hero-oilfield.jpg   # Libyan desert oilfield drilling rig at sunset
│       ├── engineer-ppe.jpg    # Petroleum engineer in PPE inspecting pipeline manifold
│       ├── refinery-plant.jpg  # Petroleum refinery and gas separation facility
│       ├── heavy-equipment.jpg # Heavy oilfield transport convoy and cranes
│       └── hse-safety.jpg      # Field HSE safety briefing and risk assessment team
└── README.md
```

---

## 2. Brand Identity & Design System

- **Flame Orange**: `#FF7A00` / `#F56000` (Extracted directly from logo flame)
- **Industrial Flame Amber**: `#FFA726`
- **Deep Corporate Navy Blue**: `#0B4F8A` / `#003B73`
- **High-Contrast Dark Slate**: `#1B2A38`
- **Neutral Dark**: `#0F1720` / `#18222D`
- **Neutral Light**: `#F8FAFC` / `#FFFFFF`
- **Strict Prohibition**: Zero purple, violet, pink, or magenta tones.
- **Zero Background Gradients**: Backgrounds and hero sections strictly utilize clean, solid enterprise colors or subtle frosted flat panels.
- **Zero Emojis Policy**: All visual indicators use FontAwesome 6 Pro vector icons exclusively.

---

## 3. Key Functionalities

### 1-Click Internationalization (i18n & RTL)

- Primary default language is **English** (`dir="ltr"` with `Plus Jakarta Sans` / `Inter`).
- Instant toggle to **Arabic** (`dir="rtl"` with `Cairo` / `Alexandria`).
- Seamless live DOM translation without page reloading via `[data-i18n]`, `[data-i18n-placeholder]`, and `[data-i18n-title]`.
- Persists across pages using `localStorage.getItem('jalo_group_lang')`.

### Light & Dark Theme System

- Controlled via CSS Custom Properties (`:root[data-theme="light"]` and `:root[data-theme="dark"]`).
- Instant toggle button in header with Moon / Sun vector icons.
- Persists state across sessions using `localStorage.getItem('jalo_group_theme')`.

### Universal "Request a Quote" Engine

- Accessible globally from any page via the header CTA, hero action buttons, and individual service cards.
- Pre-selects service disciplines when invoked from a specific card.
- Generates an RFC-compliant structured `mailto:` payload to `inquiry@jalogroup.ly`.
- Provides an on-screen preview with an instant "Copy Payload to Clipboard" feature for WhatsApp or procurement portals.

---
