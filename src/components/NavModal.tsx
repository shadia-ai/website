import { useState, useEffect, useRef } from 'react';
import { X, ArrowRight, CheckCircle } from 'lucide-react';
import { track, identify } from '../lib/analytics';

type Lang = 'es' | 'en';

interface Props {
  lang?: Lang;
}

const copy = {
  es: {
    title: 'Empieza gratis con Shadia',
    desc: 'Ingresa tu correo y te contactamos en menos de 24h.',
    placeholder: 'tu@empresa.com',
    cta: 'Comenzar gratis',
    note: 'Sin tarjeta de crédito · Configuración en minutos',
    success_title: '¡Listo!',
    success_desc: 'Nos ponemos en contacto contigo muy pronto.',
  },
  en: {
    title: 'Get started with Shadia',
    desc: 'Enter your email and we\'ll reach out within 24h.',
    placeholder: 'you@company.com',
    cta: 'Get started free',
    note: 'No credit card · Set up in minutes',
    success_title: "You're in!",
    success_desc: "We'll be in touch very soon.",
  },
};

export default function NavModal({ lang = 'es' }: Props) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const c = copy[lang];

  /* Open from anywhere via custom event */
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('shadia:open-modal', handler);
    return () => window.removeEventListener('shadia:open-modal', handler);
  }, []);

  /* Auto-focus input when modal opens */
  useEffect(() => {
    if (open && !submitted) {
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [open, submitted]);

  /* Close on Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    track('email_captured', { email, source: 'nav_modal', lang });
    identify(email);
    setSubmitted(true);
  };

  if (!open) return null;

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.45)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1rem',
        animation: 'fadeIn 0.15s ease',
      }}
    >
      <div style={{
        background: 'var(--bg)',
        borderRadius: 24,
        padding: '2.5rem 2rem',
        width: '100%',
        maxWidth: 420,
        position: 'relative',
        
        border: '1px solid var(--border)',
        animation: 'slideUp 0.18s ease',
      }}>
        {/* Close */}
        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          style={{
            position: 'absolute', top: '1rem', right: '1rem',
            width: 32, height: 32, borderRadius: '50%',
            background: 'var(--bg-subtle)', border: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: 'var(--ink-3)', transition: 'all 0.15s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-muted)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg-subtle)')}
        >
          <X size={14} />
        </button>

        {/* Logo mark */}
        <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            width: 44, height: 44, borderRadius: 14,
            background: 'var(--ink)', display: 'flex', alignItems: 'center',
            justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '1.125rem',
          }}>S</div>
        </div>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '0.5rem 0' }}>
            <CheckCircle size={36} style={{ color: 'var(--green)', margin: '0 auto 1rem' }} />
            <h3 style={{ fontWeight: 600, fontSize: '1.25rem', margin: '0 0 0.5rem', color: 'var(--ink)' }}>{c.success_title}</h3>
            <p style={{ color: 'var(--ink-3)', fontSize: '0.9375rem', margin: 0 }}>{c.success_desc}</p>
          </div>
        ) : (
          <>
            <h2 style={{
              fontWeight: 600, fontSize: '1.375rem', textAlign: 'center',
              margin: '0 0 0.5rem', color: 'var(--ink)', letterSpacing: '-0.02em',
            }}>{c.title}</h2>
            <p style={{ textAlign: 'center', color: 'var(--ink-3)', fontSize: '0.9375rem', margin: '0 0 1.75rem' }}>{c.desc}</p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              <input
                ref={inputRef}
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder={c.placeholder}
                required
                style={{
                  background: 'var(--bg-subtle)', border: '1.5px solid var(--border)',
                  borderRadius: 12, padding: '0.8125rem 1rem', fontSize: '0.9375rem',
                  color: 'var(--ink)', fontFamily: 'var(--font-body)', outline: 'none',
                  transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
                  width: '100%', boxSizing: 'border-box',
                }}
                onFocus={e => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.boxShadow = '0 0 0 3px var(--accent-ring)';
                }}
                onBlur={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
              <button
                type="submit"
                style={{
                  background: 'var(--ink)', color: 'var(--bg)',
                  border: 'none', borderRadius: 9999,
                  padding: '0.8125rem 1.5rem', fontSize: '0.9375rem', fontWeight: 600,
                  fontFamily: 'var(--font-body)', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.375rem',
                  transition: 'opacity 0.15s ease',
                  width: '100%',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                {c.cta} <ArrowRight size={15} />
              </button>
            </form>

            <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--ink-4)', margin: '1rem 0 0' }}>{c.note}</p>
          </>
        )}
      </div>
      <style>{`
        @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
        @keyframes slideUp { from { transform:translateY(16px); opacity:0 } to { transform:translateY(0); opacity:1 } }
      `}</style>
    </div>
  );
}
