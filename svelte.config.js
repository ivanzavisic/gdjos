import adapter from '@sveltejs/adapter-static';

/**
 * Static site, prerendered — it is a showcase page and a legal page, so there is nothing to render
 * per-request and nothing to run a server for. That also means it can be hosted anywhere: GitHub
 * Pages now, a real domain later (which is what Epic needs — see launch-stuff.md P0-LEGAL-2).
 *
 * BASE_PATH exists because GitHub Pages serves a project repo under /<repo>/ rather than at the
 * root. The deploy workflow sets it to /gdjos; a custom domain sets nothing and it stays ''.
 */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: true
    }),
    paths: {
      base: process.env.BASE_PATH ?? ''
    }
  }
};

export default config;
