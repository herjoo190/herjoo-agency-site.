# Herjoo Design & Audit Notes

This document is the source of truth for all design decisions and iterations. It ensures that if the UI breaks or moves away from the intended aesthetic, we can pinpoint exactly what was done and how to reverse it.

---

## 🏗️ Design DNA
- **Aesthetic**: Chocolaty Luxury / Elevated Minimalist.
- **Core Values**: Warmth, Professionalism, Authority, Sophistication.
- **Key Elements**: Glassmorphism, subtle micro-animations, high-contrast serif typography.
- **Accessibility Status**: ⚠️ Partial Compliance (WCAG 2.1 AA). 
    - *Strengths*: Semantic HTML, meta viewports, basic ARIA labels.
    - *Weaknesses*: Small font sizes (10px labels), contrast on glass-dark elements.
- **SEO Status**: ✅ Strategic Foundation.
    - *Hits*: Single H1, descriptive meta description, semantic headers, optimized asset loading (preconnect).
    - *Misses*: Image alt tags are present but could be more keyword-descriptive.

## 🎨 Visual Tokens (CSS Variables)
| Variable | Value | Purpose | WCAG Check |
| :--- | :--- | :--- | :--- |
| `--choc-dark` | `#1A0F0A` | Deep background / Contrast foundation | Pass (AAA) |
| `--choc-rich` | `#2C1810` | Elevated surfaces / Card backgrounds | Pass (AA) |
| `--bronze` | `#C5A059` | Primary action / Accents / Brand color | Pass (AA) |
| `--cream` | `#FDF5E6` | Primary text / High contrast soft white | Pass (AAA) |
| `--mocha` | `#E8D3C3` | Secondary text / Subtle accents | Pass (AA) |
| `--sandy-orange`| `#E67E22` | Energy / Action (as per user preference) | Pass (AA) |

## 📐 Layout Principles
- **Grid**: Mobile-first approach using Tailwind's responsive breakpoints (`sm`, `md`, `lg`).
- **Aspect Ratios**: 4:5 for portfolio items, square for narrative, 16:9 equivalent for hero.
- **Navigation**: Floating glassmorphism navbar on desktop; hidden links + hamburger on mobile.

## 📜 Audit Log (History of Changes)

### 2026-02-03: Services Dropdown Menu
- **Action**: Implemented the "Services" link as a dropdown menu for both desktop and mobile.
- **Action**: Added sub-services: Google Ads Management, Landing Page Design, Click Protect, and Competitor Analysis.
- **Action**: Implemented mobile toggle logic in `main.js`.

### 2026-02-03: Navigation Update
- **Action**: Added "Home" link to both desktop and mobile navigation systems.
- **Action**: Assigned `id="home"` to the hero section for precise smooth scrolling.

### 2026-02-03: Production Optimization (Big Change)
- **Action**: Migrated from Tailwind Play CDN to production-ready **Tailwind CLI** setup.
- **Action**: Initialized `package.json` and configured `tailwind.config.js`.
- **Action**: Implemented minified build process (`output.css`).
- **Reason**: CDN usage is not recommended for production due to performance and reliability.
- **State**: `index.html` now links to static `output.css`.

### 2026-02-03: Accessibility & SEO Audit
- **Action**: Conducted audit based on WCAG AA and Google SEO guidelines.
- **Action**: Increased minimum font size from `10px` to `12px` for better readability.
- **Action**: Verified H1 hierarchy and meta tags.
- **Result**: Updated "Accessibility Status" in Design DNA to reflect recent fixes.

### 2026-02-03: Brand Name Update
- **Action**: Changed navbar logo text from "HERJOO" to "HERJOO ONLINE SOLUTIONS" for brand consistency.

### 2026-02-03: Contact Information Update
- **Action**: Updated business phone and email address in footer.
- **Details**: Phone: `+27 079 607 2812`, Email: `info@herjoo.co.za`.

### 2026-02-03: Mobile Friendliness Patch (Big Change)
- **Action**: Implemented functional mobile navigation menu.
- **Action**: Refined responsive padding for contact form (`p-8` on mobile).
- **Reason**: Navigation links were previously inaccessible on small viewports.
- **State**: `index.html` and `main.js` updated with toggle logic and overlay container.

### 2026-02-03: System Initialization
- **Action**: Created `design_notes.md` to track design integrity.
- **State**: Verified `style.css` and `index.html` structure.
- **Note**: Identified non-functional mobile menu.

---

## 🛠️ Failure Recovery
| Symptom | Last Known Good Ref | Fix Action |
| :--- | :--- | :--- |
| Layout Horizontal Scroll | `html { overflow-x: hidden }` | Check for elements exceeding 100vw in sections. |
| Navbar Overlap | `fixed top-6` | Adjust `z-index` and `backdrop-blur` settings in `nav`. |
| Font Contrast Blur | `font-luxury` (Cormorant) | Ensure `line-height` is at least 1.2 on mobile. |
