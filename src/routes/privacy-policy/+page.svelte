<script>
  import { base } from '$app/paths';

  const updated = '18 August 2026';
</script>

<svelte:head>
  <title>WRIGGZ — Privacy Policy | GameDevJug</title>
  <meta
    name="description"
    content="What personal data the game WRIGGZ collects, why, who it is shared with, and the rights you have over it."
  />
</svelte:head>

<article class="policy">
  <p class="crumb"><a href="{base}/">&larr; GameDevJug</a></p>

  <h1>WRIGGZ — Privacy Policy</h1>
  <p class="meta">Last updated: {updated}</p>

  <div class="notice">
    <strong>Pre-release draft.</strong> WRIGGZ has not been released yet. This policy is published in
    advance for transparency and describes the data practices that will apply at launch. One feature it
    covers — <strong>anti-cheat</strong> — is not yet enabled in any build, and is marked below. This page
    will be updated, and dated, before the game becomes publicly playable.
  </div>

  <p class="lead">
    This policy explains what personal data WRIGGZ collects, why we collect it, who we share it with,
    and what rights you have over it. WRIGGZ is an online multiplayer game distributed through the
    Epic Games Store. Playing it requires an Epic Games account and an internet connection.
  </p>

  <h2>1. Who we are</h2>
  <p>
    <strong>JASPERO d.o.o.</strong> ("we", "us") &mdash; a limited liability company registered in
    Croatia, OIB 38473301731, registered office Drniška ulica 9, Osijek, Croatia &mdash; is the
    <em>data controller</em> for the personal data described in this policy.
  </p>
  <p>
    <strong>GameDevJug</strong> is the studio brand we publish under, and WRIGGZ is our game. If you
    see "GameDevJug" on a store page and "JASPERO d.o.o." in a legal notice, they refer to the same
    operation: the brand is the name, the company is the legal entity responsible for your data.
  </p>
  <p>Privacy contact: <a href="mailto:gamedevjug@gmail.com">gamedevjug@gmail.com</a></p>

  <h2>2. This website</h2>
  <p>
    This site is a static showcase. It sets <strong>no cookies</strong>, contains no analytics, no
    advertising trackers, no embedded social widgets and no third-party fonts or scripts. Visiting it
    does not create a profile of you. Our host records standard server access logs, which may include
    your IP address, for security and reliability.
  </p>
  <p>The rest of this policy is about the <em>game</em>, where we do process personal data.</p>

  <h2>3. What we collect</h2>

  <h3>3.1 Data we receive from Epic Games</h3>
  <p>
    When you sign in, we use Epic Account Services. We never see or receive your Epic password. Epic
    provides us with:
  </p>
  <ul>
    <li>
      <strong>EOS Product User ID</strong> &mdash; a game-scoped identifier that links your play
      session to your game profile. This is the identifier your player record is keyed on.
    </li>
    <li><strong>Display name</strong> &mdash; shown to other players in matches, scoreboards and menus.</li>
  </ul>
  <p>
    We request the minimum scope required to sign you in (<code>basic_profile</code>). We do not
    request your email address, friends list or presence data unless a future feature needs it, in
    which case Epic will ask for your consent separately.
  </p>

  <h3>3.2 Game account and progression data</h3>
  <p>We keep a player record, keyed to your EOS Product User ID, containing:</p>
  <table>
    <thead><tr><th>Data</th><th>Why</th></tr></thead>
    <tbody>
      <tr><td>Display name</td><td>Identify you to other players</td></tr>
      <tr><td>Skill rating (MMR) per queue</td><td>Match you with players of similar skill</td></tr>
      <tr><td>Matches played, wins, losses, in-game statistics</td><td>Show your record and drive progression</td></tr>
      <tr><td>Experience points (your level is calculated from this)</td><td>Progression and unlocks</td></tr>
      <tr><td>In-game currency balance, items and cosmetics owned</td><td>Run the in-game shop and inventory</td></tr>
      <tr><td>Champion selection and game settings</td><td>Remember your choices between sessions</td></tr>
      <tr><td>Account creation date and last sign-in time</td><td>Account security and housekeeping</td></tr>
    </tbody>
  </table>

  <h3>3.3 Technical and connection data</h3>
  <ul>
    <li>
      <strong>IP address</strong> &mdash; necessarily processed to connect you to a game server, to
      measure latency to each region, and to place you on a nearby server.
    </li>
    <li>
      <strong>Device and system information</strong> &mdash; operating system, hardware and graphics
      configuration, and game version, used for compatibility and troubleshooting.
    </li>
    <li>
      <strong>Diagnostic logs and crash reports</strong> &mdash; automatically generated if the game
      malfunctions, so we can fix it. This is handled by <strong>Sentry</strong> and covers the crash
      itself, the state of the game at that moment, and the log leading up to it — the technical
      information needed to find the fault.
      <br />
      We deliberately do <em>not</em> send your IP address or device name to Sentry, and we do not attach a
      screenshot of your screen, even though the tooling offers all three.
    </li>
    <li>
      <strong>Gameplay telemetry</strong> &mdash; queue times, match duration and similar aggregate
      events, used to balance the game and size our servers.
    </li>
  </ul>

  <h3>3.4 What we do <em>not</em> collect</h3>
  <ul>
    <li>
      We never receive your payment details. All purchases &mdash; in-game or otherwise &mdash; are
      handled entirely by the Epic Games Store under Epic's own terms. We receive only a confirmation
      that you are entitled to an item, never a card number.
    </li>
    <li>We do not collect your real name, postal address or phone number.</li>
    <li>We do not use advertising trackers, and <strong>we do not sell your data</strong>.</li>
    <li>We do not use voice or text chat, so we do not record either.</li>
  </ul>

  <h2>4. Why we process it, and our legal basis</h2>
  <table>
    <thead><tr><th>Purpose</th><th>Legal basis (GDPR Art. 6)</th></tr></thead>
    <tbody>
      <tr><td>Providing the game: authentication, matchmaking, running matches, saving progress</td><td>Performance of a contract (Art. 6(1)(b))</td></tr>
      <tr><td>Verifying that you own a purchasable item before granting it</td><td>Performance of a contract (Art. 6(1)(b))</td></tr>
      <tr><td>Preventing cheating, abuse and fraud; enforcing our rules</td><td>Legitimate interests (Art. 6(1)(f)) &mdash; keeping matches fair for all players</td></tr>
      <tr><td>Diagnosing crashes and improving stability and balance</td><td>Legitimate interests (Art. 6(1)(f))</td></tr>
      <tr><td>Responding to your support or privacy requests</td><td>Legal obligation (Art. 6(1)(c)) / legitimate interests</td></tr>
    </tbody>
  </table>

  <h2>5. Anti-cheat, enforcement and automated decisions</h2>
  <p>
    To keep competitive matches fair, WRIGGZ will use anti-cheat protection. While the game is
    running, the anti-cheat component inspects the game process and related system activity for signs
    of tampering or unauthorised third-party software. It runs only while the game is running, and
    reports only what is needed to detect cheating.
    <em>(Anti-cheat is not yet integrated — see the notice at the top.)</em>
  </p>
  <p>
    Our game servers also validate gameplay directly: actions that are physically impossible for a
    legitimate client are rejected and logged.
  </p>
  <p>
    <strong>Automated decisions.</strong> Some enforcement may be applied automatically &mdash; for
    example a detection that results in a suspension. Where an automated decision meaningfully
    affects you, you have the right to ask for human review. Email us and a person will look at it;
    we will tell you the outcome and our reasoning.
  </p>

  <h2>6. Who we share data with</h2>
  <p>We use the following service providers, who process data on our instructions:</p>
  <table>
    <thead><tr><th>Provider</th><th>Role</th></tr></thead>
    <tbody>
      <tr><td>Epic Games, Inc.</td><td>Account sign-in (Epic Account Services), store distribution, purchases, anti-cheat</td></tr>
      <tr><td>Microsoft (PlayFab)</td><td>Player account database and progression storage</td></tr>
      <tr><td>Edgegap</td><td>Game server hosting and matchmaking</td></tr>
      <tr>
        <td>Sentry (Functional Software, Inc.)</td>
        <td>
          Crash and error reporting. We use Sentry's <strong>European region</strong>, so this data is
          processed on servers inside the EU.
        </td>
      </tr>
    </tbody>
  </table>
  <p>
    Other players see only your display name, your in-match performance, and cosmetics you have
    equipped.
  </p>
  <p>
    We may also disclose data where legally required, or to establish, exercise or defend legal
    claims. We do not sell personal data and we do not share it for anyone else's advertising.
  </p>

  <h3>International transfers</h3>
  <p>
    Some of these providers are based outside the European Economic Area, including in the United
    States. Where data is transferred outside the EEA, it is protected by an appropriate safeguard
    under GDPR Chapter V &mdash; in practice, the European Commission's Standard Contractual Clauses
    or an adequacy decision.
  </p>
  <p>
    Crash reports are an exception in your favour: we use <strong>Sentry's European region</strong>, so
    that data stays inside the EU and no transfer safeguard is needed for it.
  </p>

  <h2>7. How long we keep it</h2>
  <ul>
    <li>
      <strong>Player account and progression data</strong> &mdash; for as long as your account is
      active, and for up to <strong>24 months</strong> after your last sign-in, after which it is
      deleted or anonymised.
    </li>
    <li><strong>Diagnostic logs and crash reports</strong> &mdash; up to <strong>90 days</strong>.</li>
    <li>
      <strong>Anti-cheat and ban records</strong> &mdash; retained for as long as necessary to keep an
      enforcement action effective.
    </li>
    <li>
      <strong>Records we must keep by law</strong> &mdash; where a transaction creates a legal or
      accounting obligation, we keep the minimum required for as long as that law requires, even if
      you delete your account.
    </li>
    <li>We delete your data sooner if you ask us to (see below).</li>
  </ul>

  <h2>8. Your rights</h2>
  <p>If you are in the EEA or UK, you have the right to:</p>
  <ul>
    <li>access the personal data we hold about you, and receive a copy of it;</li>
    <li>have inaccurate data corrected;</li>
    <li>have your data deleted ("right to be forgotten");</li>
    <li>restrict or object to our processing, including processing based on legitimate interests;</li>
    <li>receive your data in a portable, machine-readable format;</li>
    <li>withdraw any consent you have given, at any time;</li>
    <li>ask for human review of an automated decision that affects you (section 5);</li>
    <li>
      be informed without undue delay if a personal data breach is likely to result in a high risk to
      your rights and freedoms.
    </li>
  </ul>
  <p>
    To exercise any of these, email
    <a href="mailto:gamedevjug@gmail.com">gamedevjug@gmail.com</a> and include your in-game display
    name so we can locate your record. We respond within one month. Deleting your game account does
    not delete your Epic account &mdash; for data Epic holds, use Epic's own privacy tools.
  </p>
  <p>
    You also have the right to complain to a data protection authority. In Croatia this is the
    Personal Data Protection Agency (AZOP, <a href="https://azop.hr" rel="noopener">azop.hr</a>); you
    may also complain to the authority where you live.
  </p>

  <h3>Residents of California and other US states</h3>
  <p>
    We do not sell or share personal information as those terms are defined under the CCPA/CPRA, and
    we do not use it for cross-context behavioural advertising. You may request access to or deletion
    of your personal information using the same contact address above, and we will not discriminate
    against you for exercising those rights.
  </p>

  <h2>9. Children</h2>
  <p>
    WRIGGZ is not directed at children under 13, and we do not knowingly collect personal data from
    them. Where local law sets a higher age for children's online services, that age applies and a
    parent or guardian must consent. If you believe a child has provided us with personal data,
    contact us and we will delete it.
  </p>
  <p>
    Epic's platform-level protections &mdash; including cabined accounts and parental controls
    &mdash; govern what a minor's Epic account is permitted to do, including whether it can make
    purchases. Those settings are managed through Epic, not through us.
  </p>

  <h2>10. Security</h2>
  <p>
    Data is transmitted over encrypted connections (HTTPS/TLS) and stored with reputable providers
    under access controls. Match results, currency, item entitlements and skill ratings are written
    only by our game servers, never by the game client &mdash; so a modified game cannot award itself
    progress, currency or items. No system is perfectly secure, but we take reasonable technical and
    organisational measures to protect your data.
  </p>

  <h2>11. Marketing</h2>
  <p>
    We do not send marketing email, because we do not collect your email address. If that ever
    changes we will ask for your consent first, and every message will carry a one-click unsubscribe.
    Wishlist and release notifications on the Epic Games Store are sent by Epic under Epic's own
    settings, which you control in your Epic account.
  </p>

  <h2>12. Changes to this policy</h2>
  <p>
    We may update this policy as the game changes. The "last updated" date at the top always reflects
    the current version. If a change materially affects your rights, we will give notice in-game or
    through the store page before it takes effect.
  </p>

  <h2>13. Contact</h2>
  <p>
    Questions about this policy or your data:
    <a href="mailto:gamedevjug@gmail.com">gamedevjug@gmail.com</a>
  </p>
  <p class="addr">
    JASPERO d.o.o.<br />
    Drniška ulica 9<br />
    Osijek, Croatia<br />
    OIB 38473301731
  </p>
</article>

<style>
  /*
   * The reading column lives HERE, not in the layout.
   *
   * 🪤 The layout used to add it from the URL (`class:article={$page.url.pathname.includes(...)}`), so
   * the class was MISSING from the prerendered HTML and only appeared after hydration — this page first
   * painted edge-to-edge with no padding at all, then jumped into a 48rem column. A static legal page
   * should not need JavaScript to be readable.
   */
  .policy {
    max-width: 48rem;
    margin: 0 auto;
    padding: 3rem 1.25rem 4rem;
    width: 100%;
    font-size: 1rem;
  }

  .crumb { margin: 0 0 2rem; font-size: .86rem; }
  .crumb a { color: var(--accent); text-decoration: none; }
  .crumb a:hover { text-decoration: underline; }

  h1 {
    font-size: clamp(1.7rem, 4vw, 2.2rem);
    letter-spacing: -.025em;
    margin: 0 0 .4rem;
    font-weight: 800;
  }
  .meta { color: var(--muted); font-size: .88rem; margin: 0 0 1.75rem; }

  .notice {
    background: rgba(34, 224, 106, .07);
    border: 1px solid rgba(34, 224, 106, .3);
    border-left: 3px solid var(--accent);
    border-radius: 6px;
    padding: .95rem 1.1rem;
    font-size: .9rem;
    color: #cfd8e2;
    margin: 0 0 2rem;
    line-height: 1.6;
  }
  .notice strong { color: var(--accent); }

  .lead { font-size: 1.05rem; color: #c8d0da; margin: 0 0 2.5rem; }

  h2 {
    font-size: 1.2rem;
    margin: 2.75rem 0 .7rem;
    letter-spacing: -.015em;
    font-weight: 700;
    padding-bottom: .45rem;
    border-bottom: 1px solid var(--line);
  }
  h3 { font-size: 1rem; margin: 1.9rem 0 .5rem; font-weight: 700; }

  p { color: #bcc5d0; margin: 0 0 1rem; }
  strong { color: var(--text); }
  em { color: var(--muted); }

  ul { padding-left: 1.35rem; margin: 0 0 1rem; color: #bcc5d0; }
  li { margin: .4rem 0; }

  a { color: var(--accent); }

  code {
    background: var(--bg-card);
    border: 1px solid var(--line);
    padding: .1rem .35rem;
    border-radius: 3px;
    font-size: .88em;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    margin: 1rem 0 1.5rem;
    font-size: .9rem;
    display: block;
    overflow-x: auto;
  }
  th, td {
    border: 1px solid var(--line);
    padding: .6rem .75rem;
    text-align: left;
    vertical-align: top;
    color: #bcc5d0;
  }
  th { background: var(--bg-card); color: var(--text); font-weight: 600; white-space: nowrap; }

  .addr {
    background: var(--bg-card);
    border: 1px solid var(--line);
    border-radius: 6px;
    padding: .9rem 1.1rem;
    font-size: .9rem;
    line-height: 1.7;
  }
</style>
