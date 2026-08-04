# GDJOS — GameDevJug studio site

Static showcase site for **GameDevJug**, the studio brand of *JASPERO d.o.o.*
(Osijek, Croatia). SvelteKit + `adapter-static`, prerendered, no runtime server.

## Routes

| Route | Purpose |
|---|---|
| `/` | Studio showcase — WRIGGZ hero, game modes, about, contact |
| `/privacy-policy/` | WRIGGZ privacy policy (pre-release draft) |

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

> **GitHub Pages is a staging host only.** Epic's Developer Portal verifies domain ownership via a
> DNS TXT record, and `github.io` records cannot be edited. Before the privacy-policy URL is
> submitted to Epic, this site has to move to a real domain controlled by JASPERO d.o.o.

## Notes

- No cookies, no analytics, no third-party scripts or fonts — stated as fact in the privacy policy,
  so keep it true. Adding any tracker means updating that page in the same commit.
- Hero and card visuals are CSS gradients, not artwork. Replace with real in-game captures before
  the EGS store page goes live.
