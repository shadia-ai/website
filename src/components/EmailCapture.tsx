import { useState, useEffect, useRef } from 'react';
import { X, ArrowRight, CheckCircle } from 'lucide-react';
import { track, identify } from '../lib/analytics';

type Plan = 'HOB' | 'PRO' | 'ULTRA' | null;
type Lang = 'es' | 'en';

interface Props {
  source: string;
  plan?: Plan;
  lang?: Lang;
  mode?: 'inline' | 'modal';
  trigger?: React.ReactNode;
  buttonLabel?: string;
  buttonVariant?: 'primary' | 'secondary';
}

const copy = {
  es: {
    title: 'Comienza gratis',
    desc: 'Ingresa tu correo para acceder. Te contactamos en menos de 24h.',
    name: 'Nombre',
    email: 'Correo electrónico',
    business: 'Cuéntanos sobre tu negocio (opcional)',
    plan_label: 'Plan de interés',
    submit: 'Reservar acceso gratuito',
    success: '¡Listo! Te contactamos pronto.',
    error: 'Algo salió mal. Intenta nuevamente.',
    close: 'Cerrar',
    plan_placeholder: 'Selecciona un plan',
  },
  en: {
    title: 'Get started free',
    desc: 'Enter your email to get access. We\'ll reach out in less than 24h.',
    name: 'Name',
    email: 'Email address',
    business: 'Tell us about your business (optional)',
    plan_label: 'Plan of interest',
    submit: 'Reserve free access',
    success: 'Done! We\'ll be in touch soon.',
    error: 'Something went wrong. Please try again.',
    close: 'Close',
    plan_placeholder: 'Select a plan',
  },
};

function FormContent({
  lang,
  plan,
  source,
  onSuccess,
}: {
  lang: Lang;
  plan: Plan;
  source: string;
  onSuccess: () => void;
}) {
  const c = copy[lang];
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [business, setBusiness] = useState('');
  const [selectedPlan, setSelectedPlan] = useState<Plan>(plan);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');

    try {
      track('email_captured', { plan: selectedPlan, source, lang });
      identify(email);

      setStatus('success');
      setTimeout(onSuccess, 2000);
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
        <CheckCircle size={40} style={{ color: '#22c55e', margin: '0 auto 1rem' }} />
        <p style={{ color: 'var(--ink)', fontWeight: 600, fontSize: '1.125rem' }}>{c.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--ink-3)', marginBottom: '0.375rem' }}>
            {c.name}
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={c.name}
            className="form-input"
            style={{ fontSize: '0.9375rem' }}
          />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--ink-3)', marginBottom: '0.375rem' }}>
            {c.email} *
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="hola@minegocio.com"
            required
            className="form-input"
            style={{ fontSize: '0.9375rem' }}
          />
        </div>
      </div>

      {!plan && (
        <div>
          <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--ink-3)', marginBottom: '0.375rem' }}>
            {c.plan_label}
          </label>
          <select
            value={selectedPlan ?? ''}
            onChange={(e) => setSelectedPlan((e.target.value as Plan) || null)}
            className="form-input"
            style={{ fontSize: '0.9375rem', cursor: 'pointer' }}
          >
            <option value="">{c.plan_placeholder}</option>
            <option value="HOB">HOB</option>
            <option value="PRO">PRO</option>
            <option value="ULTRA">ULTRA</option>
          </select>
        </div>
      )}

      <div>
        <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--ink-3)', marginBottom: '0.375rem' }}>
          {c.business}
        </label>
        <textarea
          value={business}
          onChange={(e) => setBusiness(e.target.value)}
          placeholder={lang === 'es' ? 'Ej. Clínica dental en Santo Domingo con 3 dentistas...' : 'e.g. Dental clinic in Santo Domingo with 3 dentists...'}
          rows={3}
          className="form-input"
          style={{ fontSize: '0.9375rem', resize: 'none' }}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading' || !email}
        className="btn-primary"
        style={{
          justifyContent: 'center',
          width: '100%',
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          opacity: status === 'loading' ? 0.7 : 1,
        }}
      >
        {status === 'loading' ? (
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'spin 1s linear infinite' }}>
              <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" opacity="0.25"/>
              <path d="M21 12a9 9 0 00-9-9" strokeLinecap="round"/>
            </svg>
            {lang === 'es' ? 'Enviando...' : 'Sending...'}
          </span>
        ) : (
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {c.submit}
            <ArrowRight size={16} />
          </span>
        )}
      </button>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </form>
  );
}

export default function EmailCapture({
  source,
  plan = null,
  lang = 'es',
  mode = 'inline',
  trigger,
  buttonLabel,
  buttonVariant = 'primary',
}: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const c = copy[lang];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalOpen(false);
    };
    const handleOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setModalOpen(false);
      }
    };
    if (modalOpen) {
      document.addEventListener('keydown', handleKey);
      document.addEventListener('mousedown', handleOutside);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.removeEventListener('mousedown', handleOutside);
      document.body.style.overflow = '';
    };
  }, [modalOpen]);

  if (mode === 'modal') {
    return (
      <>
        <span onClick={() => setModalOpen(true)} style={{ cursor: 'pointer', display: 'inline-flex' }}>
          {trigger ?? (
            <button
              className={buttonVariant === 'secondary' ? 'btn-secondary' : 'btn-primary'}
              style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}
            >
              {buttonLabel ?? (lang === 'es' ? 'Comenzar gratis' : 'Get started free')}
            </button>
          )}
        </span>

        {modalOpen && (
          <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            background: 'rgba(22, 21, 26, 0.85)',
          }}>
            <div
              ref={modalRef}
              className="card"
              style={{
                width: '100%',
                maxWidth: 540,
                padding: '2rem',
                position: 'relative',
                border: '1px solid var(--border)',
              }}
            >
              <button
                onClick={() => setModalOpen(false)}
                aria-label={c.close}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'transparent',
                  border: '1px solid var(--border)',
                  borderRadius: 6,
                  width: 32,
                  height: 32,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'var(--ink-3)',
                }}
              >
                <X size={14} />
              </button>
              <h3 style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.375rem', paddingRight: '2rem' }}>{c.title}</h3>
              {plan && (
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '0.25rem 0.75rem',
                  background: 'var(--accent-soft)',
                  border: '1px solid rgba(140,90,158,0.3)',
                  borderRadius: 6,
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  color: 'var(--accent)',
                  marginBottom: '0.75rem',
                }}>
                  Plan {plan}
                </div>
              )}
              <p style={{ color: 'var(--ink-3)', fontSize: '0.9375rem', marginBottom: '1.5rem' }}>{c.desc}</p>
              <FormContent
                lang={lang}
                plan={plan}
                source={source}
                onSuccess={() => setModalOpen(false)}
              />
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <div className="card" style={{ padding: '2rem' }}>
      <h3 style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.375rem' }}>{c.title}</h3>
      <p style={{ color: 'var(--ink-3)', fontSize: '0.9375rem', marginBottom: '1.5rem' }}>{c.desc}</p>
      <FormContent
        lang={lang}
        plan={plan}
        source={source}
        onSuccess={() => {}}
      />
    </div>
  );
}
