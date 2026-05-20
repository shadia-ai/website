import { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { track, identify } from '../lib/analytics';

type Lang = 'es' | 'en';

interface Props {
  lang?: Lang;
  source?: string;
  size?: 'default' | 'lg';
}

const copy = {
  es: {
    placeholder: 'tu@empresa.com',
    cta: 'Comenzar gratis',
    success_title: '¡Listo!',
    success_desc: 'Nos ponemos en contacto contigo pronto.',
  },
  en: {
    placeholder: 'you@company.com',
    cta: 'Get started free',
    success_title: "You're in!",
    success_desc: "We'll be in touch soon.",
  },
};

export default function SignupInput({ lang = 'es', source = 'hero', size = 'default' }: Props) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const c = copy[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    track('email_captured', { email, source, lang });
    identify(email);

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{
        display: 'flex', alignItems: 'center', gap: '0.75rem',
        padding: '0.875rem 1.375rem',
        background: 'rgba(22,163,74,0.08)', border: '1px solid rgba(22,163,74,0.2)',
        borderRadius: 9999, maxWidth: 480, width: '100%',
      }}>
        <CheckCircle size={17} style={{ color: 'var(--green)', flexShrink: 0 }} />
        <div>
          <p style={{ fontWeight: 700, fontSize: '0.875rem', margin: 0, color: 'var(--ink)', lineHeight: 1.2 }}>{c.success_title}</p>
          <p style={{ fontSize: '0.8125rem', margin: 0, color: 'var(--ink-3)', lineHeight: 1.3 }}>{c.success_desc}</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="hero-email-form" style={size === 'lg' ? { maxWidth: 480 } : undefined}>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder={c.placeholder}
        required
        className="hero-email-input"
        aria-label="Email"
      />
      <button
        type="submit"
        className="hero-email-btn"
        style={{
          display: 'flex', alignItems: 'center', gap: '0.375rem',
          ...(size === 'lg' ? { padding: '0.6875rem 1.5rem', fontSize: '0.9375rem' } : {}),
        }}
      >
        {c.cta} <ArrowRight size={14} />
      </button>
    </form>
  );
}
