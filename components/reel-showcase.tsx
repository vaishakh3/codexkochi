'use client';

import Image from 'next/image';
import { ArrowUpRight, Play, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const films = [
  {
    id: 'nightline',
    number: '02',
    kicker: 'Codex Nightline',
    title: 'The city moved. The builders kept shipping.',
    summary:
      'A two-hour sprint aboard Kochi Metro, built around one moving deadline.',
    date: '18 Jul 2026',
    proof: '100 solo builders',
    image: '/events/nightline-platform.webp',
    embed: 'https://www.instagram.com/reel/DcQSznFSiQ9/embed/',
    href: 'https://www.instagram.com/reel/DcQSznFSiQ9/',
  },
  {
    id: 'overnight',
    number: '01',
    kicker: 'Overnight hackathon',
    title: 'From 8 PM to first light.',
    summary:
      'One night at TinkerSpace, a room full of half-formed ideas, and the energy to make them real.',
    date: '06—07 Jun 2026',
    proof: 'About 45 builders',
    image: '/events/june-overnight.webp',
    embed: 'https://www.instagram.com/reel/DZagKIeSN7l/embed/',
    href: 'https://www.instagram.com/reel/DZagKIeSN7l/',
  },
] as const;

const signalBars = Array.from({ length: 18 }, (_, index) => index);

type FilmId = (typeof films)[number]['id'];

export function ReelShowcase() {
  const [activeId, setActiveId] = useState<FilmId | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const activeFilm = films.find((film) => film.id === activeId);

  useEffect(() => {
    if (!activeFilm) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusFrame = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveId(null);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      window.removeEventListener('keydown', closeOnEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeFilm]);

  return (
    <>
      <div className="film-grid">
        <button
          className="film-card film-card-primary"
          type="button"
          onClick={() => setActiveId('nightline')}
          aria-label="Watch the Codex Nightline highlight film"
        >
          <Image
            src={films[0].image}
            alt="Codex Nightline builders waiting on the Kochi Metro platform"
            fill
            sizes="(max-width: 900px) 100vw, 67vw"
          />
          <span className="film-scrim" aria-hidden="true" />
          <span className="film-topline">
            <span>{films[0].date}</span>
            <span>{films[0].proof}</span>
          </span>
          <span className="film-card-bottom">
            <span className="film-play" aria-hidden="true">
              <Play size={18} fill="currentColor" />
            </span>
            <span className="film-title-group">
              <small>
                Film {films[0].number} / {films[0].kicker}
              </small>
              <strong>{films[0].title}</strong>
            </span>
            <ArrowUpRight className="film-arrow" aria-hidden="true" size={25} />
          </span>
        </button>

        <button
          className="film-card film-card-secondary"
          type="button"
          onClick={() => setActiveId('overnight')}
          aria-label="Watch the overnight hackathon highlight film"
        >
          <Image
            src={films[1].image}
            alt="Codex Community Hackathon Kochi event artwork"
            fill
            sizes="(max-width: 900px) 100vw, 33vw"
          />
          <span className="film-scrim" aria-hidden="true" />
          <span className="film-topline">
            <span>{films[1].date}</span>
            <span>{films[1].proof}</span>
          </span>
          <span className="film-card-bottom">
            <span className="film-play" aria-hidden="true">
              <Play size={16} fill="currentColor" />
            </span>
            <span className="film-title-group">
              <small>
                Film {films[1].number} / {films[1].kicker}
              </small>
              <strong>{films[1].title}</strong>
            </span>
          </span>
        </button>

        <div className="film-proof">
          <div className="film-proof-heading">
            <span>Two nights</span>
            <span>Two formats</span>
          </div>
          <p>
            Different rooms. Same signal: people do their best work when the
            whole space is making something.
          </p>
          <div className="signal-bars" aria-hidden="true">
            {signalBars.map((index) => (
              <i key={index} />
            ))}
          </div>
          <span className="film-proof-foot">Kochi / 2026 / Press play</span>
        </div>
      </div>

      {activeFilm ? (
        <dialog
          open
          className="film-modal"
          aria-modal="true"
          aria-labelledby="film-dialog-title"
        >
          <div className="film-dialog">
            <div className="film-dialog-copy">
              <button
                ref={closeButtonRef}
                className="film-close"
                type="button"
                onClick={() => setActiveId(null)}
                aria-label="Close highlight film"
              >
                <X aria-hidden="true" size={18} />
              </button>
              <span className="film-dialog-number">
                Film {activeFilm.number} / {activeFilm.date}
              </span>
              <p>{activeFilm.kicker}</p>
              <h3 id="film-dialog-title">{activeFilm.title}</h3>
              <p className="film-dialog-summary">{activeFilm.summary}</p>
              <a href={activeFilm.href} target="_blank" rel="noreferrer">
                Open on Instagram
                <ArrowUpRight aria-hidden="true" size={15} />
              </a>
            </div>
            <div className="film-embed">
              <iframe
                src={activeFilm.embed}
                title={`${activeFilm.kicker} Instagram highlight`}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </dialog>
      ) : null}
    </>
  );
}
