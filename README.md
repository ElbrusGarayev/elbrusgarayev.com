# elbrusgarayev.com

Static personal site. No build step, so you can deploy the folder as-is (GitHub Pages, Netlify, Cloudflare Pages, Vercel).

```
index.html              content and markup
assets/css/styles.css   design system (tokens → components → sections → motion)
assets/js/main.js       theme, nav, scroll reveal, active section, apps renderer
assets/img/favicon.svg
assets/resume/          put Elbrus-Garayev-Resume.pdf here
```

Local preview: `python3 -m http.server 4321`

## Placeholders to replace
Content was filled in from LinkedIn (Nov 2026). Still to do:
- Resume PDF: `assets/resume/Elbrus-Garayev-Resume.pdf`
- Experience highlights: the ISO 20022 (MX) bullet is from LinkedIn. The other bullets are general descriptions, so review them.

## Extending
- **Role / certification:** duplicate the commented `<li>` in `index.html`.
- **Portrait:** add `assets/img/portrait.jpg`, set it as the `src` on the `<img>` in `.hero__portrait`, and remove `hidden`. The hero then switches to two columns.
- **Apps (Phase 2):** add objects to `APPS` in `main.js`. The `#apps` section renders and appears on its own once the array has entries. Then turn the "Apps · Soon" nav items into real links to `#apps`.
- **Languages (EN · AZ · RU):** English text lives in `index.html`. To translate an element, add `data-i18n="key"` to it and put the key under `az` and `ru` in `assets/js/i18n.js`. The language comes from `?lang=`, then the visitor's saved choice, then their browser language, and falls back to English.
- **Theme:** every color lives in the `:root` tokens (light) and the two dark blocks in `styles.css`.
