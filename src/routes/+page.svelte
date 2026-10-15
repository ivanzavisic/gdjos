<script>
  import { base } from '$app/paths';

  /**
   * The studio's catalogue: one entry per game that exists — a showcase that lists games that do not
   * exist is the fastest way to lose a reader's trust. The grid takes more entries without changing
   * anything but this array, shown in its order (newest game first). An entry with no `href` is not
   * a link (no store page yet): it shows its status instead of "View game".
   */
  const games = [
    {
      title: 'AGENTOS',
      genre: 'Third-person arena shooter',
      status: 'Coming soon',
      blurb: 'Ricochet lasers, dashes, rappels and shields — 1V1 to 3V3 duels and three modes: ORB RUSH, RAMBALL, BREACH.',
      // No store page yet, so the card is not a link. The key art is the game's splash with no
      // lettering on it (Content/Data/UI/SplashZeroText1920x1080.png in the game's repo), as WRIGGZ's
      // has none - resized to 1200 x 675 WebP.
      art: '/agentos-key-art.webp',
      artFocus: '48% 40%',
      hue: 268
    },
    {
      title: 'WRIGGZ',
      genre: 'Competitive arena shooter',
      status: 'Out now',
      blurb: 'Menu-first matchmaking, dedicated servers, per-queue skill ratings.',
      // Released 2026-09: the card goes straight to the store page. `external` opens it in a new tab.
      href: 'https://store.epicgames.com/p/wriggz-c2e9bc',
      external: true,
      art: '/wriggz-key-art.webp',
      // Where the character sits in the art, so a portrait card crops around it rather than the centre.
      artFocus: '30% 45%',
      hue: 158
    }
  ];
</script>

<svelte:head>
  <title>GameDevJug — independent game studio</title>
  <meta
    name="description"
    content="GameDevJug is an independent game studio making WRIGGZ, a fast-paced competitive arena shooter for PC, and AGENTOS, a third-person robot arena shooter coming soon."
  />
</svelte:head>

<!-- ================= HERO ================= -->
<section class="hero">
  <div class="hero-bg" aria-hidden="true"></div>
  <div class="hero-grid" aria-hidden="true"></div>
  <div class="hero-fade" aria-hidden="true"></div>

  <div class="hero-inner">
    <span class="tag">INDEPENDENT GAME STUDIO · CROATIA</span>
    <h1>GameDevJug</h1>
    <p class="hero-copy">
      We build competitive multiplayer games for PC. Small team, dedicated servers, and a stubborn
      preference for games that respect the time you put into them.
    </p>

    <div class="hero-cta">
      <a class="btn btn-primary" href="#games">SEE OUR GAMES</a>
    </div>
  </div>
</section>

<!-- ================= GAMES ================= -->
<section class="section" id="games">
  <div class="section-head">
    <h2>Games</h2>
  </div>

  <div class="games">
    {#each games as g}
      <svelte:element
        this={g.href ? 'a' : 'article'}
        class="game-card"
        class:soon={!g.href}
        href={g.href ? (g.external ? g.href : `${base}${g.href}`) : undefined}
        target={g.href && g.external ? '_blank' : undefined}
        rel={g.href && g.external ? 'noopener' : undefined}
        style="--hue: {g.hue}"
      >
        {#if g.art}
          <img
            class="game-art game-img"
            src="{base}{g.art}"
            alt=""
            loading="lazy"
            style="object-position: {g.artFocus ?? 'center'}"
          />
        {:else}
          <span class="game-art" aria-hidden="true"><span class="game-mark">{g.title}</span></span>
        {/if}
        <span class="game-status">{g.status}</span>
        <span class="game-body">
          <span class="game-title">{g.title}</span>
          <span class="game-genre">{g.genre}</span>
          <span class="game-blurb">{g.blurb}</span>
          {#if g.href}
            <span class="game-more">View game →</span>
          {:else}
            <span class="game-more">No store page yet</span>
          {/if}
        </span>
      </svelte:element>
    {/each}
  </div>
</section>

<!-- ================= ABOUT ================= -->
<section class="section about" id="about">
  <div class="about-grid">
    <div>
      <h2>About the studio</h2>
      <p>
        GameDevJug is a small independent studio in Croatia. We build competitive multiplayer games
        for PC.
      </p>
      <p class="about-legal">
        GameDevJug is a brand of <strong>JASPERO d.o.o.</strong>, a company registered in
        Croatia (OIB 38473301731), Drniška ulica 9, Osijek.
      </p>
    </div>
    <dl class="facts">
      <div><dt>Studio</dt><dd>GameDevJug</dd></div>
      <div><dt>Based in</dt><dd>Croatia</dd></div>
      <div><dt>Engine</dt><dd>Unreal Engine 5.5</dd></div>
      <div><dt>Platform</dt><dd>PC · Epic Games Store</dd></div>
    </dl>
  </div>
</section>

<!-- ================= CONTACT ================= -->
<section class="section contact">
  <h2>Get in touch</h2>
  <p>
    Press, business or player support:
    <a class="mail" href="mailto:gamedevjug@gmail.com">gamedevjug@gmail.com</a>
  </p>
  <p class="privacy-link">
    See our <a href="{base}/privacy-policy/">Privacy Policy</a> for what data our games collect and why,
    and our <a href="{base}/terms/">Terms of Service</a> for the rules of the online services.
  </p>
</section>

<style>
  /* ---------- hero ---------- */
  .hero {
    position: relative;
    min-height: min(78vh, 640px);
    display: flex;
    align-items: center;
    overflow: hidden;
    border-bottom: 1px solid var(--line);
  }
  .hero-bg {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(120% 90% at 72% 38%, rgba(34, 224, 106, .16), transparent 58%),
      radial-gradient(90% 80% at 18% 80%, rgba(56, 130, 246, .14), transparent 60%),
      linear-gradient(135deg, #10161c 0%, #0b0f13 48%, #0a0c0f 100%);
  }
  .hero-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255, 255, 255, .035) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, .035) 1px, transparent 1px);
    background-size: 56px 56px;
    mask-image: radial-gradient(70% 70% at 60% 45%, #000 20%, transparent 78%);
  }
  .hero-fade {
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, var(--bg) 6%, rgba(11, 13, 16, .72) 42%, transparent 78%);
  }
  .hero-inner {
    position: relative;
    max-width: var(--max);
    margin: 0 auto;
    padding: 3.5rem 1.25rem;
    width: 100%;
  }

  .tag {
    display: inline-block;
    background: var(--accent);
    color: #05210f;
    font-size: .66rem;
    font-weight: 800;
    letter-spacing: .1em;
    padding: .34rem .6rem;
    border-radius: 3px;
    margin-bottom: 1.1rem;
  }
  h1 {
    margin: 0 0 1rem;
    font-size: clamp(3rem, 9vw, 5.6rem);
    line-height: .95;
    letter-spacing: -.035em;
    font-weight: 900;
  }
  .hero-copy {
    max-width: 34rem;
    color: #c2cad4;
    font-size: 1.02rem;
    margin: 0 0 2rem;
  }
  .hero-cta { display: flex; align-items: center; gap: 1.25rem; flex-wrap: wrap; }
  .btn {
    display: inline-block;
    padding: .95rem 1.9rem;
    border-radius: 5px;
    font-weight: 800;
    font-size: .82rem;
    letter-spacing: .05em;
    text-decoration: none;
  }
  .btn-primary {
    background: var(--accent);
    color: #05210f;
    cursor: default;
  }

  /* ---------- sections ---------- */
  .section {
    max-width: var(--max);
    margin: 0 auto;
    padding: 4rem 1.25rem 0;
  }
  .section-head { margin-bottom: 1.75rem; }
  h2 {
    font-size: 1.5rem;
    letter-spacing: -.02em;
    margin: 0 0 .5rem;
    font-weight: 800;
  }
  .section-head p { margin: 0; color: var(--muted); font-size: .95rem; }

  /* ---------- games grid ---------- */
  /*
   * 400 wide, as specified; `max-width: 100%` keeps it from overflowing a phone, where a fixed 400px
   * would force the whole page to scroll sideways. No fixed height: every card's art is the SAME
   * square (below), the row stretches the cards to one height, and "View game" sits on the bottom
   * edge - so two cards line up whatever their art's own shape or their blurb's length.
   */
  .games {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
  .game-card {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 400px;
    max-width: 100%;
    background: var(--bg-card);
    border: 1px solid var(--line);
    border-radius: var(--radius);
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    transition: border-color .18s, transform .18s;
  }
  .game-card:hover,
  .game-card:focus-visible {
    border-color: var(--accent-dim);
    transform: translateY(-3px);
  }
  .game-art {
    flex: none;
    width: 100%;
    aspect-ratio: 1 / 1;
    background:
      radial-gradient(75% 65% at 32% 28%, hsl(var(--hue) 70% 42% / .55), transparent 62%),
      radial-gradient(70% 60% at 72% 72%, hsl(calc(var(--hue) + 40) 70% 38% / .40), transparent 60%),
      var(--bg-raised);
  }
  /* Real key art. Takes the same square as the gradient it replaces; `object-fit: cover` crops the
     landscape image around `artFocus` instead of squashing it. */
  .game-img {
    display: block;
    object-fit: cover;
    background: #000;
  }
  .game-status {
    position: absolute;
    top: .9rem;
    left: .9rem;
    display: inline-flex;
    align-items: center;
    gap: .45rem;
    padding: .3rem .65rem;
    border-radius: 999px;
    background: rgba(0, 0, 0, .55);
    border: 1px solid var(--line);
    font-size: .72rem;
    letter-spacing: .08em;
    text-transform: uppercase;
    color: var(--muted);
  }
  .game-body {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    gap: .4rem;
    padding: 1.15rem 1.25rem 1.35rem;
    border-top: 1px solid var(--line);
    background: var(--bg-card);
  }
  .game-title { font-size: 1.5rem; font-weight: 700; letter-spacing: -.01em; }
  .game-genre { font-size: .82rem; letter-spacing: .06em; text-transform: uppercase; color: var(--accent); }
  .game-blurb { color: var(--muted); font-size: .95rem; line-height: 1.5; }
  .game-more { margin-top: auto; padding-top: .35rem; font-size: .88rem; color: var(--text); opacity: .75; }
  .game-card:hover .game-more { opacity: 1; }

  /* A game with no page to go to yet: not a link, so it does not lift or light up on hover. */
  .game-card.soon:hover { border-color: var(--line); transform: none; }
  .soon .game-more { color: var(--muted); }
  /* The placeholder's wordmark, until there is key art: faint, so it reads as art and not as a title. */
  .game-art { position: relative; display: block; overflow: hidden; }
  .game-mark {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3.4rem;
    font-weight: 900;
    letter-spacing: -.03em;
    color: rgba(255, 255, 255, .07);
    user-select: none;
  }

  /*
   * The `.cards` / `.card-*` rules that used to sit here were dead: the game-mode cards they styled
   * moved to /games-wriggz in the studio rework, and only the CSS stayed behind. Svelte was reporting
   * eight unused selectors on every build — deleted rather than silenced, since the live copy lives in
   * the game page's own stylesheet.
   */

  /* ---------- about ---------- */
  .about-grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 2.5rem;
    align-items: start;
  }
  .about p { color: #c2cad4; margin: 0 0 1rem; max-width: 38rem; }
  .about-legal { color: var(--muted) !important; font-size: .88rem; }
  .facts {
    margin: 0;
    background: var(--bg-raised);
    border: 1px solid var(--line);
    border-radius: var(--radius);
    padding: 1.1rem 1.25rem;
  }
  .facts > div {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding: .55rem 0;
    border-bottom: 1px solid var(--line);
    font-size: .88rem;
  }
  .facts > div:last-child { border-bottom: 0; }
  .facts dt { color: var(--muted); }
  .facts dd { margin: 0; font-weight: 600; text-align: right; }

  /* ---------- contact ---------- */
  .contact p { color: #c2cad4; margin: 0 0 .5rem; }
  .mail { color: var(--accent); text-decoration: none; border-bottom: 1px solid transparent; }
  .mail:hover { border-bottom-color: var(--accent); }
  .privacy-link { color: var(--muted) !important; font-size: .9rem; }
  .privacy-link a { color: var(--accent); text-decoration: none; }
  .privacy-link a:hover { text-decoration: underline; }

  @media (max-width: 860px) {
    .about-grid { grid-template-columns: 1fr; }
  }
</style>
