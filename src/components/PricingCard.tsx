import { useState } from 'react';
import { Check, ArrowRight, Zap } from 'lucide-react';
import EmailCapture from './EmailCapture';
import { track } from '../lib/analytics';

type Plan = 'HOB' | 'PRO' | 'ULTRA';
type Lang = 'es' | 'en';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface Props {
  plan: Plan;
  lang?: Lang;
  billing?: 'monthly' | 'annual';
  tagline: string;
  price: string | null;
  features: PricingFeature[];
  popular?: boolean;
  ctaLabel: string;
  ctaUltraLabel?: string;
}

export default function PricingCard({
  plan,
  lang = 'es',
  billing = 'monthly',
  tagline,
  price,
  features,
  popular = false,
  ctaLabel,
  ctaUltraLabel,
}: Props) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleCTA = () => {
    track('pricing_cta_click', { plan, billing, lang });
    setModalOpen(true);
  };

  return (
    <>
      <div
        className="card"
        style={{
          padding: '2rem',
          position: 'relative',
          border: popular
            ? '1px solid rgba(140, 90, 158, 0.4)'
            : '1px solid var(--border)',
          boxShadow: popular
            ? '0 0 32px rgba(140, 90, 158, 0.12)'
            : 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}
      >
        {popular && (
          <div style={{
            position: 'absolute',
            top: '-12px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'linear-gradient(135deg, var(--accent) 0%, #6B3D82 100%)',
            color: '#fff',
            fontSize: '0.75rem',
            fontWeight: 700,
            padding: '0.25rem 0.875rem',
            borderRadius: '9999px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            whiteSpace: 'nowrap',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}>
            <Zap size={10} fill="white" />
            {lang === 'es' ? 'Más popular' : 'Most popular'}
          </div>
        )}

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 700, letterSpacing: '-0.02em' }}>{plan}</h3>
          </div>
          <p style={{ color: 'var(--ink-3)', fontSize: '0.875rem' }}>{tagline}</p>
        </div>

        <div>
          {price ? (
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.375rem' }}>
              <span style={{ fontSize: '2.25rem', fontWeight: 700, letterSpacing: '-0.04em' }}>{price}</span>
              <span style={{ color: 'var(--ink-3)', fontSize: '0.875rem' }}>
                / {lang === 'es' ? 'mes' : 'mo'}
                {billing === 'annual' && (
                  <span style={{ color: '#22c55e', marginLeft: '0.5rem', fontSize: '0.8125rem', fontWeight: 600 }}>
                    {lang === 'es' ? '(−20%)' : '(−20%)'}
                  </span>
                )}
              </span>
            </div>
          ) : (
            <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--ink)' }}>
              {lang === 'es' ? 'Contáctanos' : 'Contact us'}
            </span>
          )}
        </div>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem', flex: 1 }}>
          {features.map((f, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', opacity: f.included ? 1 : 0.4 }}>
              <Check size={16} style={{ color: f.included ? '#22c55e' : 'var(--ink-3)', marginTop: 2, flexShrink: 0 }} />
              <span style={{ fontSize: '0.875rem', color: f.included ? 'var(--ink)' : 'var(--ink-3)' }}>
                {f.text}
              </span>
            </li>
          ))}
        </ul>

        <button
          onClick={handleCTA}
          className={popular ? 'btn-primary' : 'btn-secondary'}
          style={{
            justifyContent: 'center',
            width: '100%',
            padding: '0.75rem',
            fontSize: '0.9375rem',
            ...(popular ? {
              background: 'linear-gradient(135deg, var(--accent) 0%, #6B3D82 100%)',
              border: 'none',
            } : {}),
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
            {plan === 'ULTRA' && ctaUltraLabel ? ctaUltraLabel : `${ctaLabel} ${plan}`}
            <ArrowRight size={15} />
          </span>
        </button>
      </div>

      {modalOpen && (
        <EmailCapture
          mode="modal"
          source="pricing_page"
          plan={plan}
          lang={lang}
          trigger={<span style={{ display: 'none' }} />}
        />
      )}
    </>
  );
}
