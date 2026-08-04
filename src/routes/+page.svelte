<script>
  import { base } from '$app/paths';

  /**
   * Deliberately no fake catalogue. GameDevJug has exactly one game in development, so the card row
   * describes WRIGGZ's real modes rather than inventing titles to fill the grid — a showcase that
   * lists games that do not exist is the fastest way to lose a reader's trust.
   */
  const modes = [
    {
      tag: '1v1',
      title: 'Duel',
      body: 'Pure aim and movement. No teammates to blame, no cover to hide behind.',
      hue: 158
    },
    {
      tag: '2v2',
      title: 'Doubles',
      body: 'Coordinated pressure and cover fire. Positioning matters more than raw aim.',
      hue: 196
    },
    {
      tag: 'RANKED',
      title: 'Competitive',
      body: 'Same rules, separate pool. Only ranked moves your rating, with per-queue MMR.',
      hue: 268
    }
  ];
</script>

<svelte:head>
  <title>GameDevJug — independent game studio</title>
  <meta
    name="description"
    content="GameDevJug is an independent game studio building WRIGGZ, a fast-paced competitive arena shooter for PC."
  />
</svelte:head>

<!-- ================= HERO ================= -->
<section class="hero">
  <div class="hero-bg" aria-hidden="true"></div>
  <div class="hero-grid" aria-hidden="true"></div>
  <div class="hero-fade" aria-hidden="true"></div>

  <div class="hero-inner">
    <span class="tag">IN DEVELOPMENT · UNREAL ENGINE 5.5</span>
    <h1>WRIGGZ</h1>
    <p class="hero-copy">
      A fast-paced competitive arena shooter. Menu-first matchmaking, dedicated servers, and
      per-queue skill ratings — built so that the only thing between you and the next match is
      pressing play.
    </p>

    <div class="hero-cta">
      <span class="btn btn-primary" aria-disabled="true">COMING TO EPIC GAMES STORE</span>
      <span class="cta-note">Free to play · Wishlist opens closer to release</span>
    </div>
  </div>
</section>

<!-- ================= MODES ================= -->
<section class="section" id="games">
  <div class="section-head">
    <h2>WRIGGZ — game modes</h2>
    <p>Two queue types over the same modes. Identical rules, different pools.</p>
  </div>

  <div class="cards">
    {#each modes as m}
      <article class="card">
        <div class="card-art" style="--hue: {m.hue}" aria-hidden="true">
          <span class="card-badge">{m.tag}</span>
        </div>
        <div class="card-body">
          <h3>{m.title}</h3>
          <p>{m.body}</p>
        </div>
      </article>
    {/each}
  </div>
  <p class="art-note">
    Placeholder art — real in-game captures replace these before the store page goes live.
  </p>
</section>

<!-- ================= ABOUT ================= -->
<section class="section about" id="about">
  <div class="about-grid">
    <div>
      <h2>About the studio</h2>
      <p>
        GameDevJug is a small independent studio in Croatia. We build competitive multiplayer games
        for PC — currently WRIGGZ, an arena shooter running on dedicated servers with
        backend-driven matchmaking and progression.
      </p>
      <p class="about-legal">
        GameDevJug is a brand of <strong>Reducos Software j.d.o.o.</strong>, a company registered in
        Croatia (OIB 00684082197), Drniška ulica 9, Osijek.
      </p>
    </div>
    <dl class="facts">
      <div><dt>Studio</dt><dd>GameDevJug</dd></div>
      <div><dt>Based in</dt><dd>Croatia</dd></div>
      <div><dt>Engine</dt><dd>Unreal Engine 5.5</dd></div>
      <div><dt>Platform</dt><dd>PC · Epic Games Store</dd></div>
      <div><dt>Status</dt><dd><span class="dot"></span> In development</dd></div>
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
    See our <a href="{base}/privacy-policy/">Privacy Policy</a> for what data WRIGGZ collects and why.
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
  .cta-note { color: var(--muted); font-size: .84rem; }

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

  /* ---------- cards ---------- */
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.1rem;
  }
  .card {
    background: var(--bg-card);
    border: 1px solid var(--line);
    border-radius: var(--radius);
    overflow: hidden;
    transition: border-color .18s, transform .18s;
  }
  .card:hover { border-color: var(--accent-dim); transform: translateY(-2px); }
  .card-art {
    position: relative;
    aspect-ratio: 16 / 10;
    background:
      radial-gradient(80% 70% at 30% 25%, hsl(var(--hue) 70% 42% / .55), transparent 62%),
      linear-gradient(150deg, hsl(var(--hue) 45% 22%), #10151a 78%);
  }
  .card-badge {
    position: absolute;
    top: .7rem;
    right: .7rem;
    background: rgba(6, 9, 11, .82);
    border: 1px solid var(--accent-dim);
    color: var(--accent);
    font-size: .62rem;
    font-weight: 800;
    letter-spacing: .09em;
    padding: .24rem .48rem;
    border-radius: 3px;
  }
  .card-body { padding: 1rem 1.1rem 1.2rem; }
  .card-body h3 { margin: 0 0 .35rem; font-size: 1.02rem; }
  .card-body p { margin: 0; color: var(--muted); font-size: .88rem; }

  .art-note { margin: 1rem 0 0; color: #6b7481; font-size: .76rem; }

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
  .dot {
    display: inline-block;
    width: 7px; height: 7px;
    border-radius: 50%;
    background: var(--accent);
    margin-right: .4rem;
    vertical-align: middle;
  }

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
