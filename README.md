# RGR Power Washing – SPA

Single-page React (Vite) site for a local power washing and graffiti removal business.

## Tech
- Vite + React (JavaScript)
- CSS Modules / global CSS (no Tailwind/UI frameworks)
- Custom theme variables with light/dark mode toggle

## Structure
- `src/components`: Section components (Header, Hero, ServiceHighlights, WhyChooseUs, ServicesDetail, About with before/after slider, ServiceAreas, Reviews, ContactSection, Footer)
- `src/pages`: Stub pages for each nav route (services, info, blog, FAQ, contact) and Home
- `src/App.jsx`: Simple client-side routing using `window.history.pushState`
- `src/index.css`: Global styles + CSS variables

## Running
```bash
npm install
npm run dev
```

## Notes
- Dark mode is theme-variable driven; toggle in header (desktop and mobile).
- Routing currently uses a light custom router (no react-router-dom install).
- Footer is pinned to bottom via flex layout on `#root`.
