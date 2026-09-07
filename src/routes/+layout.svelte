<script>
  import { base } from '$app/paths';

  let { children } = $props();

  const nav = [
    { label: 'GAMES', href: `${base}/#games` },
    { label: 'ABOUT', href: `${base}/#about` },
    { label: 'SUPPORT', href: `${base}/#support` }
  ];
</script>

<div class="shell">
  <header class="topbar">
    <div class="topbar-inner">
      <a class="brand" href="{base}/">
        GameDev<span class="brand-alt">Jug</span><span class="brand-dot">.</span>
      </a>

      <nav class="nav" aria-label="Primary">
        {#each nav as item}
          <a href={item.href}>{item.label}</a>
        {/each}
      </nav>

      <div class="topbar-right">
        <span class="pill">IN DEVELOPMENT</span>
        <span class="avatar" aria-hidden="true"></span>
      </div>
    </div>
  </header>

  <!--
    No route sniffing here. Long-form pages set their own reading column in their own `<style>` — see
    `.policy` in /privacy-policy and /terms.

    🪤 It used to be `class:article={$page.url.pathname.includes('privacy-policy')}`, and that was
    BROKEN IN THE STATIC HTML: `$page` is not resolved during prerender, so the class was absent from
    the file GitHub Pages serves and only appeared after hydration. The privacy policy therefore first
    painted edge-to-edge with zero padding and then jumped into a 48rem column. Owning the width in the
    page removes the JS dependency, the flash, and a route list that every new legal page would have to
    be added to.
  -->
  <main>
    {@render children()}
  </main>

  <footer class="foot" id="support">
    <div class="foot-inner">
      <div class="foot-col">
        <p class="foot-brand">GameDev<span class="brand-alt">Jug</span><span class="brand-dot">.</span></p>
        <p class="foot-legal">
          GameDevJug is a brand of <strong>JASPERO d.o.o.</strong>, Drniška ulica 9,
          Osijek, Croatia · OIB 38473301731
        </p>
      </div>
      <nav class="foot-links" aria-label="Legal">
        <!--
          Two privacy documents, deliberately. `/privacy-policy/` is the GAME's policy (long, goes in
          Epic's Product → EAS Brand settings); `/privacy` is the COMPANY notice (short, goes in
          Organization → General Settings, P0-EAS-5). They are different documents for different
          portal fields — do not "tidy" one away.
        -->
        <a href="{base}/privacy-policy/">Game Privacy Policy</a>
        <a href="{base}/privacy/">Company Privacy</a>
        <a href="{base}/terms/">Terms of Service</a>
        <a href="mailto:gamedevjug@gmail.com">Contact</a>
      </nav>
    </div>
    <p class="foot-tm">
      Epic, Epic Games, Epic Online Services and the Epic Games Store are trademarks of Epic Games,
      Inc., used for identification only. This site is not endorsed by or affiliated with Epic Games.
    </p>
  </footer>
</div>

<style>
  :global(:root) {
    --bg: #0b0d10;
    --bg-raised: #14181d;
    --bg-card: #171c22;
    --line: #232a32;
    --text: #f2f5f8;
    --muted: #98a2ae;
    --accent: #22e06a;
    --accent-dim: #16b855;
    --radius: 10px;
    --max: 1180px;
  }

  :global(*) { box-sizing: border-box; }

  :global(html) { scroll-behavior: smooth; }

  :global(body) {
    margin: 0;
    background: var(--bg);
    color: var(--text);
    font: 16px/1.6 "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  :global(a) { color: inherit; }

  .shell { display: flex; flex-direction: column; min-height: 100vh; }

  /* ---------- top bar ---------- */
  .topbar {
    position: sticky;
    top: 0;
    z-index: 50;
    background: rgba(11, 13, 16, .82);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--line);
  }
  .topbar-inner {
    max-width: var(--max);
    margin: 0 auto;
    padding: 0 1.25rem;
    height: 60px;
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  .brand {
    font-weight: 800;
    font-size: 1.05rem;
    letter-spacing: -.02em;
    text-decoration: none;
    white-space: nowrap;
  }
  .brand-alt { color: var(--text); }
  .brand-dot { color: var(--accent); }

  .nav { display: flex; gap: 1.5rem; flex: 1; }
  .nav a {
    font-size: .78rem;
    font-weight: 700;
    letter-spacing: .06em;
    color: var(--muted);
    text-decoration: none;
    transition: color .15s;
  }
  .nav a:hover { color: var(--text); }

  .topbar-right { display: flex; align-items: center; gap: .9rem; margin-left: auto; }
  .pill {
    background: var(--accent);
    color: #05210f;
    font-size: .68rem;
    font-weight: 800;
    letter-spacing: .08em;
    padding: .4rem .7rem;
    border-radius: 4px;
    white-space: nowrap;
  }
  .avatar {
    width: 28px; height: 28px;
    border-radius: 50%;
    border: 1px solid var(--line);
    background: linear-gradient(140deg, #22303c, #131a20);
    flex: none;
  }

  main { flex: 1; }

  /* ---------- footer ---------- */
  .foot {
    border-top: 1px solid var(--line);
    background: #080a0c;
    margin-top: 4rem;
    padding: 2.5rem 1.25rem 2rem;
  }
  .foot-inner {
    max-width: var(--max);
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem 2rem;
    align-items: flex-start;
    justify-content: space-between;
  }
  .foot-brand { font-weight: 800; margin: 0 0 .5rem; }
  .foot-legal { margin: 0; color: var(--muted); font-size: .84rem; max-width: 34rem; }
  .foot-links { display: flex; gap: 1.25rem; }
  .foot-links a {
    font-size: .84rem;
    color: var(--muted);
    text-decoration: none;
    border-bottom: 1px solid transparent;
  }
  .foot-links a:hover { color: var(--accent); border-bottom-color: var(--accent); }
  .foot-tm {
    max-width: var(--max);
    margin: 2rem auto 0;
    padding-top: 1.25rem;
    border-top: 1px solid var(--line);
    color: #6b7481;
    font-size: .74rem;
    line-height: 1.55;
  }

  @media (max-width: 720px) {
    .nav { display: none; }
    .topbar-inner { gap: 1rem; }
  }
</style>
