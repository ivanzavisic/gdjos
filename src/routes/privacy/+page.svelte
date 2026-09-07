<script>
  import { base } from '$app/paths';

  const updated = '7 September 2026';
</script>

<svelte:head>
  <title>Company Privacy Notice | GameDevJug</title>
  <meta
    name="description"
    content="How JASPERO d.o.o., trading as GameDevJug, handles personal data on this website and in business correspondence."
  />
</svelte:head>

<article class="policy">
  <p class="crumb"><a href="{base}/">&larr; GameDevJug</a></p>

  <h1>Company Privacy Notice</h1>
  <p class="meta">Last updated: {updated}</p>

  <div class="notice">
    <strong>This is the company notice, not the game policy.</strong> It covers this website and
    business correspondence. If you are looking for what data <strong>WRIGGZ</strong> collects when you
    play it, that is a separate and much longer document:
    <a href="{base}/privacy-policy/">the WRIGGZ Privacy Policy</a>.
  </div>

  <h2>1. Who we are</h2>
  <p>
    <strong>JASPERO d.o.o.</strong> ("we", "us") &mdash; a limited liability company registered in
    Croatia, OIB 38473301731, registered office Drniška ulica 9, Osijek, Croatia &mdash; is the
    <em>data controller</em> for the personal data described in this notice.
    <strong>GameDevJug</strong> is the studio brand we publish games under. The brand is the name; the
    company is the legal entity responsible for your data.
  </p>
  <p>Contact: <a href="mailto:gamedevjug@gmail.com">gamedevjug@gmail.com</a></p>

  <h2>2. This website</h2>
  <p>
    This site is a static showcase. It sets <strong>no cookies</strong>, and contains no analytics, no
    advertising trackers, no embedded social widgets, and no third-party fonts or scripts. Visiting it
    does not create a profile of you and there is nothing here to consent to.
  </p>
  <p>
    The site is hosted on <strong>GitHub Pages</strong> (GitHub, Inc.), which records standard server
    access logs. Those may include your IP address and are kept by GitHub for security and
    reliability. We do not have access to them as an identifiable dataset and we do not use them.
  </p>

  <h2>3. If you write to us</h2>
  <p>
    When you email us &mdash; press, business, recruitment or support &mdash; we process your email
    address, your name if you give it, and whatever you choose to tell us. We use it only to reply and
    to handle the matter you raised. Our legal basis is our <em>legitimate interest</em> in responding
    to correspondence, or the <em>performance of a contract</em> where we are already working
    together.
  </p>
  <p>
    Email reaches us through <strong>Google (Gmail)</strong>, which processes it on our behalf. We keep
    correspondence for as long as the matter is live and for up to <strong>24 months</strong>
    afterwards, then delete it &mdash; longer only where accounting or legal rules require it.
  </p>

  <h2>4. What we do not do</h2>
  <ul>
    <li>We do not sell personal data, and we do not share it for anyone else's advertising.</li>
    <li>We do not send marketing email. There is no mailing list.</li>
    <li>We make no automated decisions about you on this website.</li>
    <li>We do not collect special-category data, and we do not ask for any.</li>
  </ul>

  <h2>5. International transfers</h2>
  <p>
    GitHub and Google are based in the United States. Where personal data is transferred outside the
    European Economic Area it is protected by an appropriate safeguard under Chapter&nbsp;V of the
    GDPR &mdash; in practice the European Commission's Standard Contractual Clauses, or an adequacy
    decision.
  </p>

  <h2>6. Your rights</h2>
  <p>
    Under the GDPR you may ask us for a copy of your personal data, ask us to correct or delete it,
    ask us to restrict or stop processing it, and object to processing based on legitimate interests.
    Email us and we will respond within one month.
  </p>
  <p>
    You also have the right to complain to a supervisory authority. In Croatia that is
    <strong>AZOP</strong> (Agencija za za&scaron;titu osobnih podataka),
    <a href="https://azop.hr" rel="noreferrer">azop.hr</a>. You can complain in the EU country where
    you live or work instead.
  </p>

  <h2>7. Changes</h2>
  <p>
    If we change this notice we will update the date at the top. There is no mailing list to notify,
    so the date is the record.
  </p>

  <h2>8. Contact</h2>
  <div class="addr">
    <a href="mailto:gamedevjug@gmail.com">gamedevjug@gmail.com</a><br />
    JASPERO d.o.o., Drniška ulica 9, Osijek, Croatia &middot; OIB 38473301731
  </div>
</article>

<style>
  /*
   * The reading column lives here, not in the layout — see the note in /privacy-policy. The layout
   * used to add it from the URL, which meant it was missing from the prerendered HTML.
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

  h2 {
    font-size: 1.2rem;
    margin: 2.75rem 0 .7rem;
    letter-spacing: -.015em;
    font-weight: 700;
    padding-bottom: .45rem;
    border-bottom: 1px solid var(--line);
  }

  p { color: #bcc5d0; margin: 0 0 1rem; }
  strong { color: var(--text); }
  em { color: var(--muted); }

  ul { padding-left: 1.35rem; margin: 0 0 1rem; color: #bcc5d0; }
  li { margin: .5rem 0; line-height: 1.6; }

  a { color: var(--accent); }

  .addr {
    background: var(--bg-card);
    border: 1px solid var(--line);
    border-radius: 6px;
    padding: .9rem 1.1rem;
    font-size: .9rem;
    line-height: 1.8;
    color: #bcc5d0;
    margin: 0 0 1rem;
  }
</style>
