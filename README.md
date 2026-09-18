# GDJOS — GameDevJug studio site

Static showcase site for **GameDevJug**, the studio brand of *JASPERO d.o.o.*
(Osijek, Croatia). SvelteKit + `adapter-static`, prerendered, no runtime server.

## Routes

| Route | Purpose |
|---|---|
| `/` | Studio showcase — games grid (the WRIGGZ card links to the Epic Games Store), about, contact |
| `/games-wriggz/` | WRIGGZ detail page — modes, how it plays, store button |
| `/privacy-policy/` | WRIGGZ privacy policy (game) |
| `/privacy/` | Company privacy notice |
| `/terms/` | WRIGGZ Terms of Service |

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build      # -> ./build
```

`BASE_PATH` controls the URL prefix. GitHub Pages serves a project repo under `/<repo>/`, so the
deploy workflow sets `BASE_PATH=/gdjos`. On a custom domain, leave it unset.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and publishes to GitHub Pages.

Live at **https://gamedevjug.org** — GitHub Pages with the custom domain from `static/CNAME`
(do not delete it, or the domain unbinds on the next deploy).

## Notes

- No cookies, no analytics, no third-party scripts or fonts — stated as fact in the privacy policy,
  so keep it true. Adding any tracker means updating that page in the same commit.
- WRIGGZ key art is `static/wriggz-key-art.webp` (card and game page). The studio hero and the
  game-mode cards are still CSS gradients — decoration, not screenshots.
- WRIGGZ is released (Epic Games Store, 2026-09). The legal pages no longer carry a "pre-release"
  notice. When the game's data processing changes, update the policy and its date in the same commit.
