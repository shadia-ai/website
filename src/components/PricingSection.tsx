import { useState } from 'react';
import { Check, X, ArrowRight, Zap, Users, Bot } from 'lucide-react';
import EmailCapture from './EmailCapture';
import { track } from '../lib/analytics';

type Lang = 'es' | 'en';

const plans = {
  HOB: {
    price:      { monthly: 49,  annual: 39  },
    seats:      2,
    credits:    300,
    extraSeat:  12,
    extraCredit: 0.015,
  },
  PRO: {
    price:      { monthly: 119, annual: 95  },
    seats:      5,
    credits:    1500,
    extraSeat:  15,
    extraCredit: 0.010,
  },
  ULTRA: {
    price:      null,
    seats:      null,
    credits:    null,
    extraSeat:  null,
    extraCredit: null,
  },
};

type PlanKey = keyof typeof plans;

const features: Record<PlanKey, Record<Lang, { text: string; included: boolean }[]>> = {
  HOB: {
    es: [
      { text: 'WhatsApp Business API oficial', included: true },
      { text: 'Instagram + Facebook Messenger', included: true },
      { text: 'Conversaciones omnicanal unificadas', included: true },
      { text: '1 Agente IA conversacional', included: true },
      { text: 'Motor de citas nativo', included: true },
      { text: 'Shadia Agent (agente de tu equipo)', included: true },
      { text: 'Recordatorios automáticos', included: true },
      { text: 'TikTok DMs', included: false },
      { text: 'Asignación automática + equipos', included: false },
      { text: 'API & webhooks', included: false },
    ],
    en: [
      { text: 'Official WhatsApp Business API', included: true },
      { text: 'Instagram + Facebook Messenger', included: true },
      { text: 'Unified omnichannel conversations', included: true },
      { text: '1 conversational AI Agent', included: true },
      { text: 'Native appointments engine', included: true },
      { text: 'Shadia Agent (AI on your team)', included: true },
      { text: 'Automatic reminders', included: true },
      { text: 'TikTok DMs', included: false },
      { text: 'Auto-assignment & teams', included: false },
      { text: 'API & webhooks', included: false },
    ],
  },
  PRO: {
    es: [
      { text: 'Todo lo de HUB', included: true },
      { text: 'TikTok DMs incluido', included: true },
      { text: 'Hasta 3 Agentes IA', included: true },
      { text: 'Asignación automática + equipos', included: true },
      { text: 'Presencia de equipo en tiempo real', included: true },
      { text: 'Folders, tags y data attributes', included: true },
      { text: 'API & webhooks', included: true },
      { text: 'Reportes de rendimiento', included: true },
      { text: 'Soporte prioritario por chat', included: true },
      { text: 'Agentes con acceso a datos externos', included: false },
    ],
    en: [
      { text: 'Everything in HUB', included: true },
      { text: 'TikTok DMs included', included: true },
      { text: 'Up to 3 AI Agents', included: true },
      { text: 'Auto-assignment & teams', included: true },
      { text: 'Real-time team presence', included: true },
      { text: 'Folders, tags & data attributes', included: true },
      { text: 'API & webhooks', included: true },
      { text: 'Performance reports', included: true },
      { text: 'Priority chat support', included: true },
      { text: 'Agents with external data access', included: false },
    ],
  },
  ULTRA: {
    es: [
      { text: 'Todo lo de PRO', included: true },
      { text: 'Agentes IA ilimitados', included: true },
      { text: 'Agentes con acceso a datos externos', included: true },
      { text: 'SDK completo (Node.js, Python, etc.)', included: true },
      { text: 'IP whitelisting + SSO', included: true },
      { text: 'Reportes personalizados avanzados', included: true },
      { text: 'SLA 99.9% uptime', included: true },
      { text: 'Onboarding asistido dedicado', included: true },
      { text: 'Account manager', included: true },
      { text: 'Tarifa preferencial de créditos on-demand', included: true },
    ],
    en: [
      { text: 'Everything in PRO', included: true },
      { text: 'Unlimited AI Agents', included: true },
      { text: 'Agents with external data access', included: true },
      { text: 'Full SDK (Node.js, Python, etc.)', included: true },
      { text: 'IP whitelisting + SSO', included: true },
      { text: 'Advanced custom reports', included: true },
      { text: '99.9% uptime SLA', included: true },
      { text: 'Dedicated assisted onboarding', included: true },
      { text: 'Account manager', included: true },
      { text: 'Preferred on-demand credit rate', included: true },
    ],
  },
};

const taglines: Record<PlanKey, Record<Lang, string>> = {
  HOB: { es: 'Para consultorios que arrancan', en: 'For practices getting started' },
  PRO: { es: 'Para equipos que crecen', en: 'For growing teams' },
  ULTRA: { es: 'Enterprise · Ajustado a tu escala', en: 'Enterprise · Tailored to your scale' },
};

const faqEs = [
  { q: '¿Qué son los AI Credits?', a: 'Los AI Credits son el combustible de Shadia AI, se consumen cada vez que la IA procesa una conversación, genera una respuesta o toma una acción autónoma. Funciona similar a los créditos de Cursor: tu plan incluye un saldo mensual y puedes recargar o activar uso on-demand cuando lo necesites.' },
  { q: '¿Qué pasa si se acaban los AI Credits?', a: 'Puedes activar el uso on-demand desde la configuración: la IA sigue operando y los créditos extra se cobran automáticamente a la tarifa de tu plan. También puedes comprar packs de créditos por adelantado o establecer un límite de gasto mensual para tener control total.' },
  { q: '¿Puedo agregar más miembros del equipo sin cambiar de plan?', a: 'Sí. Puedes agregar miembros extra por $12/mes en HUB y $15/mes en PRO. ULTRA es enterprise y los seats se definen en el contrato.' },
  { q: '¿Puedo cambiar de plan en cualquier momento?', a: 'Sí. Los cambios aplican de inmediato y el costo se prorratea automáticamente.' },
  { q: '¿Shadia Agent está incluido en todos los planes?', a: 'Sí. Shadia Agent, el agente IA de tu equipo para threads y operación, está incluido en todos los planes sin costo adicional.' },
  { q: '¿Hay periodo de prueba?', a: 'Sí. 7 días gratis con acceso completo al plan PRO. Sin tarjeta de crédito.' },
];

const faqEn = [
  { q: 'What are AI Credits?', a: 'AI Credits are the fuel powering Shadia AI, they\'re consumed every time the AI processes a conversation, generates a response, or takes an autonomous action. Similar to how Cursor works: your plan includes a monthly credit balance and you can top up or enable on-demand usage anytime.' },
  { q: 'What happens when I run out of AI Credits?', a: 'You can enable on-demand usage from your account settings: the AI keeps running and extra credits are billed automatically at your plan\'s rate. You can also purchase credit packs in advance or set a monthly spend cap for full control.' },
  { q: 'Can I add more team members without upgrading?', a: 'Yes. Extra members are $12/mo on HUB and $15/mo on PRO. ULTRA is enterprise and seats are defined in the contract.' },
  { q: 'Can I change plans at any time?', a: 'Yes. Changes apply immediately and costs are prorated automatically.' },
  { q: 'Is Shadia Agent included in all plans?', a: 'Yes. Shadia Agent, the AI on your team for threads and operations, is included in all plans at no extra cost.' },
  { q: 'Is there a free trial?', a: 'Yes. 7 days free with full PRO plan access. No credit card required.' },
];

const comparisonRows: Record<Lang, (string | boolean)[][]> = {
  es: [
    ['AI-native desde la base', true, false, false, false],
    ['WhatsApp-native AI agents', true, 'Parcial', true, false],
    ['Motor de citas nativo', true, false, false, false],
    ['Agentes de IA reales', true, false, false, 'Básico'],
    ['AI Credits + uso on-demand', true, false, false, 'Parcial'],
    ['Instagram + TikTok', true, 'Parcial', true, false],
    ['Configuración sin código', true, false, false, false],
  ],
  en: [
    ['AI-native from the ground up', true, false, false, false],
    ['WhatsApp-native AI agents', true, 'Partial', true, false],
    ['Native appointments engine', true, false, false, false],
    ['Real AI Agents', true, false, false, 'Basic'],
    ['AI Credits + on-demand usage', true, false, false, 'Partial'],
    ['Instagram + TikTok', true, 'Partial', true, false],
    ['No-code setup', true, false, false, false],
  ],
};

interface Props {
  lang?: Lang;
}

export default function PricingSection({ lang = 'es' }: Props) {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [modalPlan, setModalPlan] = useState<PlanKey | null>(null);

  const faqs = lang === 'es' ? faqEs : faqEn;
  const rows = comparisonRows[lang];

  const handleCTA = (plan: PlanKey) => {
    track('pricing_cta_click', { plan, billing, lang });
    setModalPlan(plan);
  };

  const fmt = (n: number) => `$${n}`;

  return (
    <>
      {/* Billing toggle */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div className="billing-toggle">
          <button className={billing === 'monthly' ? 'active' : ''} onClick={() => setBilling('monthly')}>
            {lang === 'es' ? 'Mensual' : 'Monthly'}
          </button>
          <button
            className={billing === 'annual' ? 'active' : ''}
            onClick={() => setBilling('annual')}
            style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}
          >
            {lang === 'es' ? 'Anual' : 'Annual'}
            <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#22c55e', background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.3)', padding: '0.1rem 0.375rem', borderRadius: '9999px' }}>
              {lang === 'es' ? 'Ahorra 20%' : 'Save 20%'}
            </span>
          </button>
        </div>
      </div>

      {/* AI Credit explainer pill */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.375rem 1rem', background: 'var(--bg-subtle)', border: '1px solid var(--border)', borderRadius: '9999px', fontSize: '0.8125rem', color: 'var(--ink-3)' }}>
          <Bot size={14} style={{ color: 'var(--accent)' }} />
          {lang === 'es'
            ? 'AI Credits = combustible para cada acción que toma Shadia AI. Incluidos en el plan, recargables on-demand.'
            : 'AI Credits = fuel for every action Shadia AI takes. Included in your plan, rechargeable on-demand.'}
        </span>
      </div>

      {/* Plan cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '4rem' }}>
        {(Object.keys(plans) as PlanKey[]).map((key) => {
          const p = plans[key];
          const isEnterprise = key === 'ULTRA';
          const price = !isEnterprise && p.price ? p.price[billing] : null;
          const popular = key === 'PRO';
          const planFeatures = features[key][lang];

          return (
            <div
              key={key}
              className="card"
              style={{
                padding: '2rem',
                position: 'relative',
                border: popular
                  ? '1px solid rgba(140, 90, 158, 0.4)'
                  : isEnterprise
                  ? '1px solid var(--ink)'
                  : '1px solid var(--border)',
                background: isEnterprise ? 'var(--ink)' : undefined,
                display: 'flex',
                flexDirection: 'column' as const,
                gap: '1.25rem',
              }}
            >
              {popular && (
                <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'var(--ink)', color: 'var(--bg)', fontSize: '0.6875rem', fontWeight: 700, padding: '0.2rem 0.875rem', borderRadius: '9999px', display: 'flex', alignItems: 'center', gap: '0.25rem', whiteSpace: 'nowrap' as const, letterSpacing: '0.05em', textTransform: 'uppercase' as const }}>
                  <Zap size={10} fill="currentColor" />
                  {lang === 'es' ? 'Más popular' : 'Most popular'}
                </div>
              )}

              {/* Plan name */}
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.25rem', color: isEnterprise ? '#fff' : undefined }}>{key}</h3>
                <p style={{ color: isEnterprise ? 'rgba(255,255,255,0.55)' : 'var(--ink-3)', fontSize: '0.875rem' }}>{taglines[key][lang]}</p>
              </div>

              {/* Price */}
              {isEnterprise ? (
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '0.25rem' }}>
                    {lang === 'es' ? 'Precio a medida' : 'Custom pricing'}
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.45)' }}>
                    {lang === 'es' ? 'Ajustado a tu operación' : 'Tailored to your operation'}
                  </div>
                </div>
              ) : (
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
                  <span style={{ fontSize: '2.75rem', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1 }}>{fmt(price!)}</span>
                  <span style={{ color: 'var(--ink-4)', fontSize: '0.875rem' }}>/{lang === 'es' ? 'mes' : 'mo'}</span>
                  {billing === 'annual' && (
                    <span style={{ marginLeft: '0.25rem', color: '#22c55e', fontSize: '0.8125rem', fontWeight: 600 }}>−20%</span>
                  )}
                </div>
              )}

              {/* Package summary, only for priced plans */}
              {!isEnterprise && (
                <div style={{ background: 'var(--bg-subtle)', borderRadius: '10px', padding: '0.875rem', display: 'flex', flexDirection: 'column' as const, gap: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--ink-2)' }}>
                    <Users size={13} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                    <span>
                      {p.seats} {lang === 'es' ? 'miembros incluidos' : 'members included'}
                      <span style={{ color: 'var(--ink-4)', marginLeft: '0.375rem' }}>
                        +{fmt(p.extraSeat!)}/{lang === 'es' ? 'miembro extra' : 'extra member'}
                      </span>
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--ink-2)' }}>
                    <Bot size={13} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                    <span>
                      {p.credits!.toLocaleString()} AI Credits/{lang === 'es' ? 'mes' : 'mo'}
                      <span style={{ color: 'var(--ink-4)', marginLeft: '0.375rem' }}>
                        +${p.extraCredit!.toFixed(3)}/{lang === 'es' ? 'credit extra' : 'extra credit'}
                      </span>
                    </span>
                  </div>
                </div>
              )}

              {/* Enterprise highlights instead of package summary */}
              {isEnterprise && (
                <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.5rem' }}>
                  {(lang === 'es'
                    ? ['Miembros y AI Credits a medida', 'SLA contractual 99.9%', 'Onboarding dedicado', 'Account manager', 'Seguridad avanzada + SSO', 'API con límites personalizados']
                    : ['Custom members & AI Credits', 'Contractual 99.9% SLA', 'Dedicated onboarding', 'Account manager', 'Advanced security + SSO', 'API with custom rate limits']
                  ).map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>
                      <Check size={14} style={{ color: '#22c55e', flexShrink: 0 }} />
                      {item}
                    </div>
                  ))}
                </div>
              )}

              {/* Features, only for priced plans */}
              {!isEnterprise && (
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' as const, gap: '0.5rem', flex: 1 }}>
                  {planFeatures.map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', opacity: f.included ? 1 : 0.4 }}>
                      {f.included
                        ? <Check size={14} style={{ color: '#22c55e', marginTop: 2, flexShrink: 0 }} />
                        : <X size={14} style={{ color: 'var(--ink-4)', marginTop: 2, flexShrink: 0 }} />
                      }
                      <span style={{ fontSize: '0.875rem', color: f.included ? 'var(--ink)' : 'var(--ink-3)' }}>{f.text}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* CTA */}
              <button
                onClick={() => handleCTA(key)}
                className={isEnterprise ? 'btn-secondary' : popular ? 'btn-primary' : 'btn-secondary'}
                style={{
                  justifyContent: 'center',
                  width: '100%',
                  padding: '0.75rem',
                  fontSize: '0.9375rem',
                  ...(isEnterprise ? { background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.25)', color: '#fff' } : {}),
                  marginTop: 'auto',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
                  {isEnterprise
                    ? (lang === 'es' ? 'Hablar con ventas' : 'Talk to sales')
                    : `${lang === 'es' ? 'Empezar con' : 'Start with'} ${key}`}
                  <ArrowRight size={14} />
                </span>
              </button>
            </div>
          );
        })}
      </div>

      {/* Add-on note */}
      <p style={{ textAlign: 'center', fontSize: '0.8125rem', color: 'var(--ink-4)', marginBottom: '4rem' }}>
        {lang === 'es'
          ? 'Todos los planes incluyen 7 días de prueba gratis. Sin tarjeta de crédito.'
          : 'All plans include a 7-day free trial. No credit card required.'}
      </p>

      {/* Comparison table */}
      <div style={{ marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, letterSpacing: '-0.03em', textAlign: 'center', marginBottom: '2rem' }}>
          {lang === 'es' ? 'Shadia vs la competencia' : 'Shadia vs the competition'}
        </h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '1rem 1.25rem', fontSize: '0.875rem', color: 'var(--ink-3)', fontWeight: 600, minWidth: 200 }}>
                  {lang === 'es' ? 'Función' : 'Feature'}
                </th>
                {['Shadia AI', 'Respond.io', 'Kommo', 'Intercom'].map(name => (
                  <th key={name} style={{ textAlign: 'center', padding: '1rem', fontSize: '0.875rem', fontWeight: 700, color: name === 'Shadia AI' ? 'var(--accent)' : 'var(--ink-3)', minWidth: 110 }}>
                    {name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid var(--border)', background: i % 2 === 0 ? 'transparent' : 'var(--bg-subtle)' }}>
                  <td style={{ padding: '0.875rem 1.25rem', fontSize: '0.875rem', color: 'var(--ink)', fontWeight: 500 }}>{row[0] as string}</td>
                  {row.slice(1).map((val, j) => (
                    <td key={j} style={{ textAlign: 'center', padding: '0.875rem 1rem' }}>
                      {val === true ? (
                        <Check size={18} style={{ color: '#22c55e', margin: '0 auto' }} />
                      ) : val === false ? (
                        <X size={16} style={{ color: '#ef4444', margin: '0 auto', opacity: 0.5 }} />
                      ) : (
                        <span style={{ fontSize: '0.8125rem', color: 'var(--ink-3)', fontWeight: 500 }}>{val as string}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ */}
      <div style={{ maxWidth: 720, margin: '0 auto 4rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, letterSpacing: '-0.03em', textAlign: 'center', marginBottom: '2rem' }}>
          {lang === 'es' ? 'Preguntas frecuentes' : 'Frequently asked questions'}
        </h2>
        {faqs.map((faq, i) => (
          <div key={i} className="faq-item">
            <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
              {faq.q}
              <span style={{ color: 'var(--accent)', fontSize: '1.25rem', lineHeight: 1, flexShrink: 0 }}>
                {openFaq === i ? '−' : '+'}
              </span>
            </button>
            {openFaq === i && <div className="faq-answer">{faq.a}</div>}
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalPlan && (
        <EmailCapture
          mode="modal"
          source="pricing_page"
          plan={modalPlan}
          lang={lang}
          trigger={<span style={{ display: 'none' }} />}
        />
      )}
    </>
  );
}
