# Garments Export — Static Prototype

Open `index.html` or `pages/home.html` with a local server (recommended) to avoid CORS on `fetch()` for JSON/partials, e.g.:

- `python3 -m http.server 5173`
- `npx serve`

Then visit `http://localhost:5173/`.

**Structure**

- Reusable CSS in `/css`
- Partials loaded via `fetch()` (header, footer, cookie, filters, etc.)
- Data JSON in `/data`
- Page-specific JS in `/js/pages/*`
- Features in `/js/features/*` (search, price estimator, file upload)
- Light service worker for offline cache (prototype only)
