<script>
  import { base } from '$app/paths';

  /**
   * Moved here from the landing page (2026-09-06). The studio page should describe the STUDIO; game
   * detail belongs to the game. Same content, correct home.
   */
  /** The live store page. One constant, because two buttons and a sentence point at it. */
  const storeUrl = 'https://store.epicgames.com/p/wriggz-c2e9bc';

  const modes = [
    {
      tag: '1v1',
      title: 'Duel',
      body: 'Pure aim and movement. No teammates to blame, no cover to hide behind.',
      hue: 158
    },
    {
      // Matches the game: the 2v2 button is closed and tagged COMING SOON (patch1, Title Data
      // Queue.2v2Enabled). Re-open both together.
      tag: '2v2 · COMING SOON',
      title: 'Doubles',
      body: 'Coordinated pressure and cover fire. Positioning matters more than raw aim.',
      hue: 196
    },
    {
      tag: 'RANKED',
      title: 'Competitive',
      body: 'Same rules, separate pool. Unlocks at level 20; only ranked moves your rating, with per-queue MMR.',
      hue: 268
    }
  ];

  /**
   * Only things that are true today. No player counts, no review quotes — a page that invents
   * momentum is the one thing a reader will remember when it turns out to be wrong.
   */
  const facts = [
    { k: 'Genre',    v: 'Competitive arena shooter' },
    { k: 'Engine',   v: 'Unreal Engine 5.5' },
    { k: 'Platform', v: 'PC — Epic Games Store' },
    { k: 'Players',  v: '1v1 · 2v2 coming soon' },
    { k: 'Price',    v: 'Free to play' },
    { k: 'Status',   v: 'Out now' }
  ];
</script>

<svelte:head>
  <title>WRIGGZ — GameDevJug</title>
  <meta
    name="description"
    content="WRIGGZ is a fast-paced competitive arena shooter for PC by GameDevJug, built in Unreal Engine 5.5 with dedicated servers and per-queue skill ratings."
  />
</svelte:head>

<section class="top">
  <a class="back" href="{base}/#games">← All games</a>

  <span class="tag">OUT NOW · UNREAL ENGINE 5.5</span>
  <h1>WRIGGZ</h1>
  <p class="lede">
    A fast-paced competitive arena shooter. Menu-first matchmaking, dedicated servers, and per-queue
    skill ratings — built so that the only thing between you and the next match is pressing play.
  </p>

  <div class="cta">
    <a class="btn" href={storeUrl} target="_blank" rel="noopener">GET IT ON THE EPIC GAMES STORE</a>
    <span class="note">Free to play · PC</span>
  </div>

  <img
    class="key-art"
    src="{base}/wriggz-key-art.webp"
    alt="WRIGGZ key art: a dark helmeted ball with glowing X eyes, trailing red smoke"
    width="2000"
    height="1343"
  />
</section>

<section class="section">
  <div class="section-head">
    <h2>Game modes</h2>
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
</section>

<section class="section">
  <div class="section-head">
    <h2>How it plays</h2>
  </div>
  <div class="split">
    <div class="prose">
      <p>
        Nobody hosts. Every match runs on a dedicated server allocated for that match and placed by
        measured latency, so there is no host advantage and no migration when someone leaves.
      </p>
      <p>
        Matchmaking is menu-first: you pick a queue and press play. Skill ratings are tracked per
        queue, so a casual match never moves your competitive rating.
      </p>
      <p>
        Progression, currency and your champion choice live on your account rather than on one
        machine — sign in anywhere and it follows you.
      </p>
    </div>
    <dl class="facts">
      {#each facts as f}
        <div><dt>{f.k}</dt><dd>{f.v}</dd></div>
      {/each}
    </dl>
  </div>
</section>

<section class="section closing">
  <h2>Play it</h2>
  <p>
    WRIGGZ is out now and free to play on the
    <a class="mail" href={storeUrl} target="_blank" rel="noopener">Epic Games Store</a>.
    Questions: <a class="mail" href="mailto:gamedevjug@gmail.com">gamedevjug@gmail.com</a>
  </p>
  <p class="privacy-link">
    See our <a href="{base}/privacy-policy/">Privacy Policy</a> for what data WRIGGZ collects and why,
    and our <a href="{base}/terms/">Terms of Service</a> for the rules of the online services.
  </p>
</section>

<style>
  .top {
    max-width: var(--max);
    margin: 0 auto;
    padding: 3.5rem 1.25rem 2.5rem;
  }
  .back {
    display: inline-block;
    margin-bottom: 1.75rem;
    color: var(--muted);
    text-decoration: none;
    font-size: .9rem;
  }
  .back:hover { color: var(--accent); }

  .tag {
    display: inline-block;
    padding: .32rem .7rem;
    border: 1px solid var(--line);
    border-radius: 999px;
    font-size: .72rem;
    letter-spacing: .1em;
    color: var(--muted);
    margin-bottom: 1.1rem;
  }
  h1 {
    font-size: clamp(2.8rem, 9vw, 5rem);
    line-height: 1;
    margin: 0 0 1rem;
    letter-spacing: -.03em;
  }
  .lede {
    max-width: 46rem;
    color: var(--muted);
    font-size: clamp(1rem, 2.2vw, 1.15rem);
    line-height: 1.65;
    margin: 0 0 1.75rem;
  }
  .cta { display: flex; flex-wrap: wrap; align-items: center; gap: 1rem; }
  .btn {
    display: inline-block;
    padding: .8rem 1.4rem;
    border-radius: var(--radius);
    background: var(--accent);
    color: #06210f;
    font-weight: 700;
    letter-spacing: .04em;
    font-size: .88rem;
    text-decoration: none;
    transition: background .15s;
  }
  .btn:hover { background: var(--accent-dim); }
  .note { color: var(--muted); font-size: .88rem; }

  .key-art {
    display: block;
    width: 100%;
    height: auto;
    margin-top: 2.25rem;
    border: 1px solid var(--line);
    border-radius: var(--radius);
    background: #000;
  }

  .section {
    max-width: var(--max);
    margin: 0 auto;
    padding: 2.5rem 1.25rem;
    border-top: 1px solid var(--line);
  }
  .section-head h2 { font-size: 1.45rem; margin: 0 0 .35rem; letter-spacing: -.01em; }
  .section-head p { color: var(--muted); margin: 0 0 1.5rem; }

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.25rem;
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
      radial-gradient(70% 60% at 75% 75%, hsl(calc(var(--hue) + 40) 70% 38% / .40), transparent 60%),
      var(--bg-raised);
  }
  .card-badge {
    position: absolute;
    top: .7rem;
    left: .7rem;
    padding: .25rem .6rem;
    border-radius: 999px;
    background: rgba(0, 0, 0, .55);
    border: 1px solid var(--line);
    font-size: .7rem;
    letter-spacing: .08em;
    color: var(--text);
  }
  .card-body { padding: 1rem 1.1rem 1.2rem; }
  .card-body h3 { margin: 0 0 .35rem; font-size: 1.1rem; }
  .card-body p { margin: 0; color: var(--muted); font-size: .93rem; line-height: 1.55; }

  .split {
    display: grid;
    grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
    gap: 2.5rem;
    align-items: start;
  }
  @media (max-width: 780px) {
    .split { grid-template-columns: 1fr; gap: 1.75rem; }
  }
  .prose p { color: var(--muted); line-height: 1.7; margin: 0 0 1rem; }

  .facts {
    margin: 0;
    border: 1px solid var(--line);
    border-radius: var(--radius);
    background: var(--bg-raised);
    overflow: hidden;
  }
  .facts > div {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding: .8rem 1.05rem;
    border-bottom: 1px solid var(--line);
  }
  .facts > div:last-child { border-bottom: 0; }
  .facts dt { color: var(--muted); font-size: .88rem; }
  .facts dd { margin: 0; font-size: .92rem; text-align: right; }

  .closing h2 { font-size: 1.45rem; margin: 0 0 .5rem; }
  .closing p { color: var(--muted); margin: 0 0 .5rem; }
  .mail { color: var(--accent); }
  .privacy-link { font-size: .9rem; }
  .privacy-link a { color: var(--muted); }
  .privacy-link a:hover { color: var(--accent); }
</style>
