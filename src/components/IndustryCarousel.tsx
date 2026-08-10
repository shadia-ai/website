import { useState, useEffect, useCallback } from 'react';

export interface CarouselSlide {
  tag: string;
  stat1: string;
  stat1Label: string;
  stat2: string;
  stat2Label: string;
  insight: string;
  detail: string;
}

interface Props {
  slides: CarouselSlide[];
  color?: string;
  colorBg?: string;
  eyebrow?: string;
}

export default function IndustryCarousel({
  slides,
  color = '#0F766E',
  colorBg = 'rgba(15,118,110,0.08)',
  eyebrow = 'Por los números',
}: Props) {
  const [active, setActive] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Detect viewport on mount + resize
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const goTo = useCallback(
    (idx: number) => {
      if (transitioning || idx === active) return;
      setTransitioning(true);
      setVisible(false);
      setTimeout(() => {
        setActive(idx);
        setVisible(true);
        setTransitioning(false);
      }, 220);
    },
    [transitioning, active]
  );

  const prev = () => goTo((active - 1 + slides.length) % slides.length);
  const next = () => goTo((active + 1) % slides.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setActive(i => (i + 1) % slides.length);
        setVisible(true);
      }, 220);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[active];

  return (
    <div>
      {/* Eyebrow */}
      <div style={{
        textAlign: 'center',
        fontSize: '0.6875rem',
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase' as const,
        color: 'var(--ink-4)',
        marginBottom: '2rem',
      }}>
        {eyebrow}
      </div>

      {/* Main card */}
      <div style={{
        position: 'relative',
        border: '1px solid var(--border)',
        borderRadius: '16px',
        background: 'var(--bg)',
        overflow: 'hidden',
      }}>

        {/* ── DESKTOP: left/right floating arrows ── */}
        {!isMobile && (
          <>
            <ArrowBtn dir="left" onClick={prev} color={color} />
            <ArrowBtn dir="right" onClick={next} color={color} />
          </>
        )}

        {/* Inner layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '260px 1fr',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.22s ease',
        }}>

          {/* ── Stats panel ── */}
          <div style={{
            padding: isMobile ? '1.75rem 1.5rem 0' : '2.75rem 2rem 2.75rem 3rem',
            borderRight: isMobile ? 'none' : '1px solid var(--border)',
            borderBottom: isMobile ? '1px solid var(--border)' : 'none',
            display: 'flex',
            flexDirection: 'column' as const,
          }}>
            {/* Tag */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              fontSize: '0.625rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase' as const,
              color: color,
              background: colorBg,
              borderRadius: '6px',
              padding: '0.25rem 0.625rem',
              marginBottom: '1.5rem',
              alignSelf: 'flex-start',
            }}>
              {slide.tag}
            </div>

            {/* Stats: side by side on mobile, stacked on desktop */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr 1fr' : '1fr',
              gap: isMobile ? '1.25rem' : '1.5rem',
              paddingBottom: isMobile ? '1.75rem' : 0,
            }}>
              <StatBlock value={slide.stat1} label={slide.stat1Label} />
              <StatBlock value={slide.stat2} label={slide.stat2Label} />
            </div>
          </div>

          {/* ── Insight + detail ── */}
          <div style={{
            padding: isMobile
              ? '1.75rem 1.5rem'
              : '2.75rem 3.5rem 2.75rem 2.5rem',
            display: 'flex',
            flexDirection: 'column' as const,
            justifyContent: 'center',
          }}>
            <p style={{
              fontSize: isMobile ? '1.125rem' : 'clamp(1.2rem, 2vw, 1.5rem)',
              fontWeight: 600,
              letterSpacing: '-0.025em',
              color: 'var(--ink)',
              lineHeight: 1.35,
              margin: '0 0 1rem',
            }}>
              &ldquo;{slide.insight}&rdquo;
            </p>
            <p style={{
              fontSize: '0.9rem',
              color: 'var(--ink-3)',
              lineHeight: 1.7,
              margin: 0,
            }}>
              {slide.detail}
            </p>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div style={{
          borderTop: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: isMobile ? 'center' : 'space-between',
          padding: isMobile ? '0.875rem 1.5rem' : '0.875rem 2rem',
          gap: '0.75rem',
          flexWrap: 'wrap' as const,
        }}>

          {/* NEXT label — hidden on mobile */}
          {!isMobile && (
            <button
              onClick={next}
              style={{
                all: 'unset',
                cursor: 'pointer',
                fontSize: '0.6875rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase' as const,
                color: 'var(--ink-4)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.color = color}
              onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.color = 'var(--ink-4)'}
            >
              Next →
            </button>
          )}

          {/* Mobile: prev arrow + dots + next arrow */}
          {isMobile && (
            <button
              onClick={prev}
              aria-label="Previous"
              style={{
                all: 'unset',
                cursor: 'pointer',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--ink-3)',
                fontSize: '1rem',
                flexShrink: 0,
              }}
            >
              ←
            </button>
          )}

          {/* Slide indicators */}
          <div style={{
            display: 'flex',
            gap: '0.25rem',
            alignItems: 'center',
            flexWrap: 'wrap' as const,
            justifyContent: 'center',
          }}>
            {slides.map((s, i) =>
              isMobile ? (
                // Mobile: simple dots
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={s.tag}
                  style={{
                    all: 'unset',
                    cursor: 'pointer',
                    width: i === active ? '20px' : '8px',
                    height: '8px',
                    borderRadius: '9999px',
                    background: i === active ? color : 'var(--border)',
                    transition: 'width 0.3s ease, background 0.3s ease',
                  }}
                />
              ) : (
                // Desktop: tag labels
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  title={s.tag}
                  style={{
                    all: 'unset',
                    cursor: 'pointer',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase' as const,
                    color: i === active ? color : 'var(--ink-4)',
                    padding: '0.375rem 0.75rem',
                    borderRadius: '6px',
                    background: i === active ? colorBg : 'transparent',
                    transition: 'color 0.25s, background 0.25s',
                    opacity: i === active ? 1 : 0.55,
                  }}
                >
                  {s.tag}
                </button>
              )
            )}
          </div>

          {/* Mobile: next arrow */}
          {isMobile && (
            <button
              onClick={next}
              aria-label="Next"
              style={{
                all: 'unset',
                cursor: 'pointer',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--ink-3)',
                fontSize: '1rem',
                flexShrink: 0,
              }}
            >
              →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: '2.25rem',
        fontWeight: 700,
        letterSpacing: '-0.04em',
        color: 'var(--ink)',
        lineHeight: 1,
        marginBottom: '0.3rem',
      }}>
        {value}
      </div>
      <div style={{
        fontSize: '0.75rem',
        color: 'var(--ink-4)',
        lineHeight: 1.45,
        whiteSpace: 'pre-line' as const,
      }}>
        {label}
      </div>
    </div>
  );
}

function ArrowBtn({ dir, onClick, color }: { dir: 'left' | 'right'; onClick: () => void; color: string }) {
  return (
    <button
      onClick={onClick}
      aria-label={dir === 'left' ? 'Previous' : 'Next'}
      style={{
        all: 'unset',
        cursor: 'pointer',
        position: 'absolute',
        [dir]: '1rem',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 10,
        width: '38px',
        height: '38px',
        borderRadius: '50%',
        border: '1px solid var(--border)',
        background: 'var(--bg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--ink-3)',
        fontSize: '1rem',
        lineHeight: 1,
        transition: 'border-color 0.2s, color 0.2s',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLButtonElement;
        el.style.borderColor = color;
        el.style.color = color;
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLButtonElement;
        el.style.borderColor = 'var(--border)';
        el.style.color = 'var(--ink-3)';
      }}
    >
      {dir === 'left' ? '←' : '→'}
    </button>
  );
}
