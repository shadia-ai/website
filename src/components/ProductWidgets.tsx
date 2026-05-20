import { useState, useEffect } from 'react';
import { MessageSquare, Calendar, Users, BarChart2, BookOpen, Mail } from 'lucide-react';

/* ─── Shared helpers ─────────────────────────────────────────────────── */
const FrameBar = ({ url = 'app.shadia.ai' }: { url?: string }) => (
  <div style={{
    display: 'flex', alignItems: 'center', gap: '0.4rem',
    padding: '0.5rem 0.875rem',
    background: 'var(--surface-raised)', borderBottom: '1px solid var(--border)',
  }}>
    {['#FF5F57','#FEBC2E','#28C840'].map((c, i) => (
      <span key={i} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />
    ))}
    <span style={{
      flex: 1, textAlign: 'center', fontSize: '0.6875rem',
      color: 'var(--ink-4)', fontWeight: 500,
    }}>{url}</span>
  </div>
);

const AvatarCircle = ({ letter, color = 'var(--accent)', size = 26 }: { letter: string; color?: string; size?: number }) => (
  <div style={{
    width: size, height: size, borderRadius: '50%', background: color,
    color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: size * 0.42, fontWeight: 700, flexShrink: 0,
  }}>{letter}</div>
);

const AiLabel = ({ text = 'Shadia' }: { text?: string }) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center', gap: '0.2rem',
    padding: '0.125rem 0.4rem', borderRadius: 6,
    background: 'var(--accent-bg)', color: 'var(--accent)',
    border: '1px solid var(--accent-ring)',
    fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase',
  }}>✦ {text}</span>
);

/* ─── INBOX WIDGET ───────────────────────────────────────────────────── */
/*
  Simplified 3-column layout:
  Left sidebar (nav) | Conversation list | Chat area
  Focused on showing the AI response pattern, not exact app structure.
*/
const convos = [
  { init: 'A', color: 'var(--accent)', msg: 'Need to reschedule my appoint...', badge: 'VIP',    ai: false },
  { init: 'S', color: '#0EA5E9', msg: 'Hi, is there availability for...', badge: null,     ai: true  },
  { init: 'M', color: '#16A34A', msg: 'Confirming tomorrow at 3pm?',    badge: 'New',    ai: false },
  { init: 'R', color: '#F59E0B', msg: 'What services do you offer?',     badge: null,     ai: true  },
  { init: 'L', color: '#EC4899', msg: 'Looking for an appointment nex...', badge: null,   ai: true  },
];

export function InboxWidget({ lang = 'es' }: { lang?: 'es' | 'en' }) {
  const [active, setActive] = useState(0);
  const [typed, setTyped] = useState('');
  const fullMsg = lang === 'es'
    ? '@shadia ¿Puedes confirmar la próxima cita?'
    : '@shadia Can you confirm the next appointment?';

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      if (i <= fullMsg.length) { setTyped(fullMsg.slice(0, i)); i++; }
      else { setTimeout(() => { i = 0; setTyped(''); }, 2000); }
    }, 60);
    return () => clearInterval(t);
  }, [fullMsg]);

  const chatLines = lang === 'es'
    ? [
        { me: false, text: 'Hola, necesito reagendar mi cita del jueves.' },
        { me: true,  text: 'Claro, veo que tienes una cita el jueves a las 10am. ¿Qué día te conviene?' },
        { me: false, text: 'El viernes en la tarde, si hay disponibilidad.' },
        { me: true,  text: '✓ Cita confirmada para el viernes a las 4pm. Te envío los detalles.' },
      ]
    : [
        { me: false, text: 'Hi, I need to reschedule my Thursday appointment.' },
        { me: true,  text: 'Of course, I can see you have a slot at 10am Thursday. What day works better?' },
        { me: false, text: 'Friday afternoon would be ideal.' },
        { me: true,  text: '✓ Appointment confirmed for Friday at 4pm. Sending you the details.' },
      ];

  const allLabel    = lang === 'es' ? 'Todo' : 'All';
  const assignLabel = lang === 'es' ? 'Para mí' : 'For me';
  const aiLabel     = lang === 'es' ? '2 sin respuesta' : '2 unanswered';

  return (
    <div className="product-frame" style={{ fontSize: '0.8rem', userSelect: 'none', maxHeight: 400, overflow: 'hidden' }}>
      <FrameBar />
      <div style={{ display: 'flex', height: 356, overflow: 'hidden' }}>

        {/* Left nav */}
        <div style={{ width: 48, borderRight: '1px solid var(--border)', background: 'var(--surface-raised)', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '0.75rem', gap: '0.625rem', flexShrink: 0 }}>
          {[MessageSquare, Calendar, Users, BarChart2].map((NavIcon, i) => (
            <div key={i} style={{ width: 32, height: 32, borderRadius: 9, background: i === 0 ? 'var(--accent-bg)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'background 0.15s', color: i === 0 ? 'var(--accent)' : 'var(--ink-4)' }}>
              <NavIcon size={16} />
            </div>
          ))}
        </div>

        {/* Conversation list */}
        <div style={{ width: 200, borderRight: '1px solid var(--border)', background: 'var(--bg)', display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
          <div style={{ padding: '0.5rem 0.75rem', borderBottom: '1px solid var(--border)', display: 'flex', gap: '0.25rem' }}>
            {[allLabel, assignLabel].map((t, i) => (
              <span key={i} style={{ padding: '0.1875rem 0.625rem', borderRadius: 9999, fontSize: '0.6875rem', fontWeight: i === 0 ? 700 : 500, background: i === 0 ? 'var(--accent)' : 'transparent', color: i === 0 ? '#fff' : 'var(--ink-4)', cursor: 'pointer' }}>{t}</span>
            ))}
          </div>
          {convos.map((c, i) => (
            <div key={i} onClick={() => setActive(i)} style={{ padding: '0.5625rem 0.75rem', cursor: 'pointer', borderBottom: '1px solid var(--border)', background: active === i ? 'var(--accent-bg)' : 'transparent', transition: 'background 0.1s' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                  <AvatarCircle letter={c.init} color={c.color} size={20} />
                  <span style={{ fontWeight: 600, fontSize: '0.6875rem', color: 'var(--ink)', maxWidth: 80, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {lang === 'es' ? `Cliente ${c.init}` : `Client ${c.init}`}
                  </span>
                </div>
                <span style={{ fontSize: '0.5625rem', color: 'var(--ink-4)' }}>2m</span>
              </div>
              <div style={{ fontSize: '0.625rem', color: 'var(--ink-4)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginBottom: '0.2rem' }}>{c.msg}</div>
              <div style={{ display: 'flex', gap: '0.25rem' }}>
                {c.badge && <span style={{ padding: '0 0.3rem', background: 'var(--accent-bg)', color: 'var(--accent)', borderRadius: 4, fontSize: '0.5rem', fontWeight: 700 }}>{c.badge}</span>}
                {c.ai && <span style={{ padding: '0 0.3rem', background: 'var(--green-bg)', color: 'var(--green)', borderRadius: 4, fontSize: '0.5rem', fontWeight: 700 }}>✦ AI</span>}
              </div>
            </div>
          ))}
        </div>

        {/* Chat area */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: 'var(--bg)', minWidth: 0 }}>
          {/* Header */}
          <div style={{ padding: '0.5rem 0.875rem', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <AvatarCircle letter={convos[active].init} color={convos[active].color} size={22} />
              <span style={{ fontWeight: 700, fontSize: '0.8125rem', color: 'var(--ink)' }}>
                {lang === 'es' ? `Cliente ${convos[active].init}` : `Client ${convos[active].init}`}
              </span>
              {convos[active].ai && <AiLabel />}
            </div>
            <div style={{ display: 'flex', gap: '0.375rem' }}>
              {['◻','⋯'].map((s, i) => <span key={i} style={{ width: 26, height: 26, borderRadius: 8, background: 'var(--bg-subtle)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6875rem', cursor: 'pointer', color: 'var(--ink-3)' }}>{s}</span>)}
            </div>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, padding: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', overflowY: 'auto' }}>
            {chatLines.map((m, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: m.me ? 'flex-start' : 'flex-end' }}>
                <div style={{
                  maxWidth: '78%', padding: '0.4375rem 0.6875rem', borderRadius: 12,
                  fontSize: '0.6875rem', lineHeight: 1.5,
                  background: m.me ? 'var(--bg-subtle)' : 'var(--accent)',
                  color: m.me ? 'var(--ink-3)' : '#fff',
                  border: m.me ? '1px solid var(--border)' : 'none',
                }}>
                  {m.me && <div style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.5625rem', marginBottom: '0.15rem' }}>✦ Shadia</div>}
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div style={{ padding: '0.5rem 0.75rem', borderTop: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-subtle)', border: '1px solid var(--border)', borderRadius: 9999, padding: '0.3125rem 0.75rem' }}>
              <span style={{ fontSize: '0.5625rem', color: 'var(--accent)', fontWeight: 800 }}>✦</span>
              <span style={{ fontSize: '0.6875rem', color: typed ? 'var(--ink-3)' : 'var(--ink-4)', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {typed || (lang === 'es' ? 'Escribe un mensaje...' : 'Type a message...')}
                {typed && <span style={{ animation: 'cursor-blink 1s step-end infinite' }}>|</span>}
              </span>
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes cursor-blink{0%,100%{opacity:1}50%{opacity:0}}`}</style>
    </div>
  );
}

/* ─── CALENDAR WIDGET ────────────────────────────────────────────────── */
/*
  Simplified: shows a week view with 3-4 appointments.
  No real person names — generic labels.
*/
type Appt = { label: string; time: string; col: number; row: number; color: string };

export function CalendarWidget({ lang = 'es' }: { lang?: 'es' | 'en' }) {
  const days = lang === 'es'
    ? ['Lun', 'Mar', 'Mié', 'Jue', 'Vie']
    : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const dates = ['14', '15', '16', '17', '18'];
  const times = ['8:00', '9:00', '10:00', '11:00', '12:00'];

  const appts: Appt[] = [
    { label: 'Consulta', time: '8:00', col: 0, row: 0, color: 'var(--accent)' },
    { label: lang === 'es' ? 'Seguimiento' : 'Follow-up', time: '9:00', col: 1, row: 1, color: '#0EA5E9' },
    { label: lang === 'es' ? 'Primera visita' : 'New patient', time: '9:00', col: 2, row: 1, color: '#16A34A' },
    { label: lang === 'es' ? 'Revisión' : 'Check-up', time: '11:00', col: 3, row: 3, color: '#F59E0B' },
  ];

  const todayLabel = lang === 'es' ? 'Hoy' : 'Today';
  const monthLabel = lang === 'es' ? 'Mayo 2026' : 'May 2026';

  return (
    <div className="product-frame" style={{ fontSize: '0.75rem', userSelect: 'none', maxHeight: 380, overflow: 'hidden' }}>
      <FrameBar />
      <div style={{ height: 336, display: 'flex', flexDirection: 'column', background: 'var(--bg)' }}>
        {/* Header */}
        <div style={{ padding: '0.625rem 0.875rem', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--surface-raised)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--ink)' }}>{monthLabel}</span>
          </div>
          <div style={{ display: 'flex', gap: '0.375rem', alignItems: 'center' }}>
            <span style={{ padding: '0.1875rem 0.625rem', borderRadius: 9999, background: 'var(--accent)', color: '#fff', fontSize: '0.625rem', fontWeight: 700 }}>{todayLabel}</span>
            {['‹','›'].map((a,i) => <span key={i} style={{ width: 22, height: 22, borderRadius: 7, background: 'var(--bg-subtle)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '0.75rem', color: 'var(--ink-3)' }}>{a}</span>)}
          </div>
        </div>

        {/* Day headers */}
        <div style={{ display: 'grid', gridTemplateColumns: '44px repeat(5, 1fr)', borderBottom: '1px solid var(--border)', background: 'var(--surface-raised)' }}>
          <div />
          {days.map((d, i) => (
            <div key={i} style={{ padding: '0.4375rem 0', textAlign: 'center' }}>
              <div style={{ fontSize: '0.625rem', color: 'var(--ink-4)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{d}</div>
              <div style={{ fontSize: '0.875rem', fontWeight: 700, color: i === 0 ? 'var(--accent)' : 'var(--ink)', lineHeight: 1.2, marginTop: '0.125rem' }}>{dates[i]}</div>
            </div>
          ))}
        </div>

        {/* Grid */}
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {times.map((time, rowIdx) => (
            <div key={rowIdx} style={{ display: 'grid', gridTemplateColumns: '44px repeat(5, 1fr)', borderBottom: '1px solid var(--border)', minHeight: 44 }}>
              <div style={{ padding: '0 0.375rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <span style={{ fontSize: '0.5625rem', color: 'var(--ink-4)', fontWeight: 500 }}>{time}</span>
              </div>
              {[0,1,2,3,4].map(colIdx => {
                const appt = appts.find(a => a.col === colIdx && a.row === rowIdx);
                return (
                  <div key={colIdx} style={{ padding: '0.1875rem' }}>
                    {appt && (
                      <div style={{
                        padding: '0.3125rem 0.4375rem', borderRadius: 8,
                        background: `${appt.color}18`,
                        border: `1.5px solid ${appt.color}30`, cursor: 'pointer',
                      }}>
                        <div style={{ fontWeight: 700, color: appt.color, fontSize: '0.625rem', lineHeight: 1.2 }}>{appt.label}</div>
                        <div style={{ fontSize: '0.5625rem', color: 'var(--ink-4)', marginTop: '0.0625rem' }}>{appt.time}</div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── AGENT WIDGET ───────────────────────────────────────────────────── */
/*
  Shows an AI agent cycling through "Reading → Composing → Done" states.
  Simplified card representation — no complex sidebar.
*/
export function AgentWidget({ lang = 'es' }: { lang?: 'es' | 'en' }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setPhase(p => (p + 1) % 3), 2600);
    return () => clearInterval(t);
  }, []);

  const task = lang === 'es'
    ? 'Agendar entrevista con el equipo de ingeniería para la próxima semana'
    : 'Schedule an engineering team interview for next week';

  const phases = lang === 'es'
    ? [
        { state: 'Leyendo', Icon: BookOpen, sub: 'Calendario del equipo · 3 participantes' },
        { state: 'Analizando', Icon: BarChart2, sub: '3 slots disponibles encontrados · 45 min' },
        { state: 'Enviando', Icon: Mail, sub: 'Invitación creada · meet.google.com' },
      ]
    : [
        { state: 'Reading', Icon: BookOpen, sub: 'Team calendars · 3 participants' },
        { state: 'Analyzing', Icon: BarChart2, sub: '3 available slots found · 45 min' },
        { state: 'Sending', Icon: Mail, sub: 'Invite created · meet.google.com' },
      ];

  const slots = lang === 'es'
    ? [
        { day: 'Mar 19', time: '2:00 – 2:45 PM', free: true },
        { day: 'Mié 20', time: '11:00 – 11:45 AM', free: true, best: true },
        { day: 'Jue 21', time: '10:00 – 10:45 AM', free: false },
      ]
    : [
        { day: 'Tue 19', time: '2:00 – 2:45 PM', free: true },
        { day: 'Wed 20', time: '11:00 – 11:45 AM', free: true, best: true },
        { day: 'Thu 21', time: '10:00 – 10:45 AM', free: false },
      ];

  const availLabel = lang === 'es' ? 'Slots disponibles' : 'Available slots';
  const confirmedLabel = lang === 'es' ? 'Cita confirmada' : 'Appointment confirmed';
  const agentLabel = lang === 'es' ? 'Agente de Citas' : 'Appointments Agent';
  const bestLabel = lang === 'es' ? '✓ Mejor' : '✓ Best';
  const tentLabel = lang === 'es' ? '1 tentativa' : '1 tentative';
  const freeLabel = lang === 'es' ? 'Libre' : 'Free';

  return (
    <div className="product-frame" style={{ fontSize: '0.8125rem', userSelect: 'none', maxHeight: 380, overflow: 'hidden' }}>
      <FrameBar />
      <div style={{ padding: '1rem 1rem 0.875rem', background: 'var(--bg)', height: 336, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>

        {/* Agent header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: 34, height: 34, borderRadius: 10, background: 'linear-gradient(135deg, var(--accent), #C084FC)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '0.875rem' }}>S</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--ink)', lineHeight: 1.2 }}>{agentLabel}</div>
              <div style={{ fontSize: '0.625rem', color: 'var(--ink-4)' }}>Shadia AI</div>
            </div>
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.3rem',
            padding: '0.2rem 0.625rem', borderRadius: 9999, fontSize: '0.625rem', fontWeight: 700,
            background: phase < 2 ? 'rgba(245,158,11,0.1)' : 'var(--green-bg)',
            color: phase < 2 ? 'var(--amber)' : 'var(--green)',
          }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'currentColor', animation: 'pulse-dot 2s infinite' }} />
            {phases[phase].state}
          </div>
        </div>

        {/* Task */}
        <div style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border)', borderRadius: 12, padding: '0.625rem 0.75rem', fontSize: '0.75rem', color: 'var(--ink)', lineHeight: 1.5 }}>
          {task}
        </div>

        {/* Current action */}
        <div style={{ background: 'var(--accent-bg)', border: '1px solid var(--accent-ring)', borderRadius: 12, padding: '0.5625rem 0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {(() => { const PhaseIcon = phases[phase].Icon; return PhaseIcon ? <span style={{ color: 'var(--accent)', display: 'flex', alignItems: 'center' }}><PhaseIcon size={16} /></span> : null; })()}
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.6875rem', color: 'var(--accent)' }}>{phases[phase].state}</div>
            <div style={{ fontSize: '0.5625rem', color: 'var(--ink-4)' }}>{phases[phase].sub}</div>
          </div>
        </div>

        {/* Slots */}
        <div style={{ background: 'var(--surface-raised)', border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden' }}>
          <div style={{ padding: '0.5rem 0.75rem', borderBottom: '1px solid var(--border)', fontSize: '0.6875rem', fontWeight: 700, color: 'var(--ink)' }}>
            <Calendar size={12} style={{ display: 'inline', marginRight: '0.25rem', verticalAlign: 'middle' }} />{availLabel}
          </div>
          {slots.map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.375rem 0.75rem', borderBottom: i < 2 ? '1px solid var(--border)' : 'none' }}>
              <div>
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: s.best ? 'var(--accent)' : 'var(--ink)' }}>{s.day}</div>
                <div style={{ fontSize: '0.5625rem', color: 'var(--ink-4)' }}>{s.time}</div>
              </div>
              <span style={{ padding: '0.125rem 0.4375rem', borderRadius: 9999, fontSize: '0.5625rem', fontWeight: 700, background: s.free ? 'var(--green-bg)' : 'rgba(239,68,68,0.08)', color: s.free ? 'var(--green)' : 'var(--red)' }}>
                {s.free ? (s.best ? bestLabel : freeLabel) : tentLabel}
              </span>
            </div>
          ))}
        </div>

        {/* Confirmed state */}
        {phase === 2 && (
          <div style={{ background: 'var(--green-bg)', border: '1px solid rgba(22,163,74,0.2)', borderRadius: 12, padding: '0.625rem 0.75rem' }}>
            <div style={{ fontWeight: 700, fontSize: '0.6875rem', color: 'var(--green)', marginBottom: '0.25rem' }}>✓ {confirmedLabel}</div>
            <div style={{ fontSize: '0.5625rem', color: 'var(--ink-4)', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span>Google Calendar · invite sent</span>
              <span>meet.google.com · link ready</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── ONBOARDING WIDGET ──────────────────────────────────────────────── */
/* The simple email-first signup flow matching the product screenshots */
export function OnboardingWidget({ lang = 'es' }: { lang?: 'es' | 'en' }) {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setStep(s => (s + 1) % 4), 2200);
    return () => clearInterval(t);
  }, []);

  const msgs = lang === 'es'
    ? [
        { type: 'ai',  text: '¡Hola! Bienvenido a Shadia. ¿Cómo se llama tu negocio?' },
        { type: 'user', text: 'Mi negocio' },
        { type: 'ai',  text: '¡Perfecto! ¿Cuántos clientes atienden por semana?' },
        { type: 'user', text: 'Entre 50 y 100' },
      ]
    : [
        { type: 'ai',  text: 'Hi! Welcome to Shadia. What\'s your business name?' },
        { type: 'user', text: 'My business' },
        { type: 'ai',  text: 'Great! How many clients do you see per week?' },
        { type: 'user', text: 'Between 50 and 100' },
      ];

  const placeholder = lang === 'es' ? 'Escribe aquí...' : 'Type here...';

  return (
    <div className="product-frame" style={{ fontSize: '0.8125rem', userSelect: 'none', maxHeight: 340, overflow: 'hidden' }}>
      <FrameBar url="app.shadia.ai/setup" />
      <div style={{ padding: '1rem', height: 296, display: 'flex', flexDirection: 'column', background: 'var(--bg)' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem', overflowY: 'auto' }}>
          {msgs.slice(0, step + 1).map((m, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: m.type === 'user' ? 'flex-end' : 'flex-start' }}>
              <div style={{
                maxWidth: '82%', padding: '0.5rem 0.75rem', borderRadius: 12,
                fontSize: '0.75rem', lineHeight: 1.5,
                background: m.type === 'user' ? 'var(--accent)' : 'var(--bg-subtle)',
                color: m.type === 'user' ? '#fff' : 'var(--ink)',
                border: m.type === 'ai' ? '1px solid var(--border)' : 'none',
              }}>
                {m.type === 'ai' && <div style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.5625rem', marginBottom: '0.125rem' }}>✦ Shadia</div>}
                {m.text}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-subtle)', border: '1px solid var(--border)', borderRadius: 9999, padding: '0.375rem 0.375rem 0.375rem 0.875rem' }}>
          <span style={{ fontSize: '0.6875rem', color: 'var(--ink-4)', flex: 1 }}>{placeholder}</span>
          <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>
        </div>
      </div>
    </div>
  );
}
