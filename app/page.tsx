import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
} from 'lucide-react';

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Codex Kochi home">
          <span className="brand-mark" aria-hidden="true">
            C<span>/</span>K
          </span>
          <span className="brand-name">Codex Kochi</span>
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#story">Story</a>
          <a href="#nightline">Nightline</a>
          <a href="#community">Community</a>
        </nav>

        <a
          className="header-cta"
          href="https://wa.me/917907649864"
          target="_blank"
          rel="noreferrer"
        >
          Join the community
          <ArrowUpRight aria-hidden="true" size={15} strokeWidth={1.8} />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="pulse-dot" />
            OpenAI Codex community · Kochi
          </p>
          <h1>
            Kochi builds
            <br />
            <em>in motion.</em>
          </h1>
          <p className="hero-intro">
            A community for the curious, the technical, and the people who
            simply want to make something useful with AI.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#nightline">
              Explore Nightline
              <ArrowDownRight aria-hidden="true" size={18} />
            </a>
            <a className="text-link" href="#community">
              Meet the community <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div
          className="hero-visual"
          aria-label="Codex Nightline community at Kochi Metro"
        >
          <div className="photo-frame">
            <img
              src="/events/nightline-platform.webp"
              alt="Codex Nightline builders gathered beside a Kochi Metro train"
            />
            <div className="photo-wash" />
            <p className="photo-index">Field note / 001</p>
            <p className="photo-caption">Vyttila · 18 July 2026 · 04:52</p>
          </div>

          <div className="event-ticket">
            <p className="ticket-kicker">Our latest build</p>
            <div>
              <h2>Codex Nightline</h2>
              <p>
                The world&apos;s first AI build sprint aboard a moving metro.
              </p>
            </div>
            <div className="ticket-stats">
              <span>
                <strong>100</strong>
                builders
              </span>
              <span>
                <strong>01</strong>
                train
              </span>
              <span>
                <strong>02h</strong>
                to build
              </span>
            </div>
          </div>
        </div>

        <div className="route-line" aria-hidden="true">
          <span className="route-label route-label-start">Vyttila</span>
          <span className="route-dot route-dot-one" />
          <span className="route-dot route-dot-two" />
          <span className="route-dot route-dot-three" />
          <span className="route-label route-label-end">Thrippunithura</span>
          <span className="route-train">→</span>
        </div>
      </section>

      <section className="manifesto" id="story">
        <div className="manifesto-top">
          <p className="section-label light">01 / Why we gather</p>
          <p className="manifesto-aside">
            Community is a practice.
            <br />
            So is making.
          </p>
        </div>
        <h2>
          More making.
          <br />
          <em>Less watching.</em>
        </h2>
        <div className="manifesto-bottom">
          <p>
            Codex Kochi is a place to get out of the demo loop and into the
            work: ideas with edges, prototypes with purpose, and people willing
            to help one another ship.
          </p>
          <div className="principles">
            <span>Show up curious</span>
            <span>Build in public</span>
            <span>Share the lift</span>
          </div>
        </div>
        <div className="manifesto-orbit" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </section>

      <section className="nightline" id="nightline">
        <div className="section-heading">
          <p className="section-label">02 / Field note</p>
          <div>
            <h2>
              We turned a Metro line
              <br />
              into a <em>deadline.</em>
            </h2>
            <p>
              On 18 July 2026, one hundred solo builders boarded an after-hours
              Kochi Metro train. They had one round trip—and two hours—to turn
              an idea into something real.
            </p>
            <a
              className="text-link nightline-link"
              href="https://www.codexnightline.in/"
              target="_blank"
              rel="noreferrer"
            >
              Relive the full Nightline story <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        <div className="gallery-grid">
          <figure className="gallery-main">
            <img
              src="/events/nightline-onboard.webp"
              alt="Participants building with laptops inside the moving Kochi Metro train"
            />
            <figcaption>
              <span>01</span>
              Building between stations
            </figcaption>
          </figure>
          <figure className="gallery-side gallery-side-top">
            <img
              src="/events/nightline-collaboration.webp"
              alt="Two Codex Nightline builders collaborating on a laptop"
            />
            <figcaption>
              <span>02</span>
              Ideas in motion
            </figcaption>
          </figure>
          <figure className="gallery-side gallery-side-bottom">
            <img
              src="/events/nightline-opening.webp"
              alt="Vaishakh Suresh speaking at the Codex Nightline opening"
            />
            <figcaption>
              <span>03</span>
              Before the doors closed
            </figcaption>
          </figure>
          <p className="gallery-note">
            Not a simulation.
            <br />
            Not a keynote.
            <br />
            A room that moved.
          </p>
        </div>

        <div className="ride-log">
          <div className="ride-copy">
            <p className="section-label">The loop / 23:00—01:00</p>
            <h3>Four stops. One continuous build.</h3>
          </div>
          <ol className="route-stops">
            <li>
              <span className="stop-dot active" />
              <p>Vyttila</p>
              <small>Board + begin</small>
            </li>
            <li>
              <span className="stop-dot" />
              <p>Aluva</p>
              <small>Build northbound</small>
            </li>
            <li>
              <span className="stop-dot" />
              <p>Thrippunithura</p>
              <small>Turn + refine</small>
            </li>
            <li>
              <span className="stop-dot active" />
              <p>Vyttila</p>
              <small>Deboard + demo</small>
            </li>
          </ol>
        </div>

        <div className="big-statement">
          <p>
            100 builders. <span>Zero teams.</span> One moving deadline.
          </p>
          <img
            src="/events/nightline-detail.webp"
            alt="Hands typing on a laptop during the Codex Nightline sprint"
          />
        </div>
      </section>

      <section className="community" id="community">
        <div className="community-glow" aria-hidden="true" />
        <p className="section-label">03 / The next stop</p>
        <div className="community-grid">
          <h2>
            Your next useful idea
            <br />
            shouldn&apos;t stay in your notes.
          </h2>
          <div className="community-copy">
            <p>
              Come with a problem, a half-formed prototype, or just the instinct
              that you want to build. Codex Kochi is for practitioners at every
              level who learn best by making.
            </p>
            <a
              className="button button-light"
              href="https://wa.me/917907649864"
              target="_blank"
              rel="noreferrer"
            >
              Join on WhatsApp
              <MessageCircle aria-hidden="true" size={17} />
            </a>
          </div>
        </div>

        <div className="ways-to-show-up">
          <article>
            <span>01</span>
            <h3>Working sessions</h3>
            <p>
              Bring the thing you are building. Leave with it meaningfully
              further along.
            </p>
            <ArrowRight aria-hidden="true" size={20} />
          </article>
          <article>
            <span>02</span>
            <h3>Practical learning</h3>
            <p>Less theatre, more honest notes from people doing the work.</p>
            <ArrowRight aria-hidden="true" size={20} />
          </article>
          <article>
            <span>03</span>
            <h3>Unusual rooms</h3>
            <p>
              From studios to moving trains—format is part of the experiment.
            </p>
            <ArrowRight aria-hidden="true" size={20} />
          </article>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <span className="brand-mark footer-mark" aria-hidden="true">
            C<span>/</span>K
          </span>
          <p>
            Codex Kochi
            <small>Build what moves the city.</small>
          </p>
        </div>
        <div className="footer-meta">
          <p>
            Community-led by Vaishakh Suresh
            <br />
            OpenAI Codex Ambassador · Kochi, Kerala
          </p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/vaishakh3/"
              target="_blank"
              rel="noreferrer"
              aria-label="Vaishakh Suresh on LinkedIn"
            >
              <span aria-hidden="true">in</span>
            </a>
            <a
              href="https://www.instagram.com/soulcastor/"
              target="_blank"
              rel="noreferrer"
              aria-label="Vaishakh Suresh on Instagram"
            >
              <span aria-hidden="true">ig</span>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Codex Kochi</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
