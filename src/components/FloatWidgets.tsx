import { useState, useEffect, type ReactNode } from 'react';
import { Calendar, Bell, Check, Mic, FileText } from 'lucide-react';

const AiHint = ({ children }: { children: ReactNode }) => (
  <div className="float-ai-hint">{children}</div>
);

/* ─── Hero: aligned grid composition (app-style hints) ──────────────── */
export function HeroFloatComposition({ lang = 'es' }: { lang?: 'es' | 'en' }) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive(i => (i + 1) % 3), 3000);
    return () => clearInterval(t);
  }, []);

  const hints = lang === 'es'
    ? [
        'La IA está confirmando una cita por WhatsApp…',
        'La IA está generando el resumen de la sesión…',
        'La IA está respondiendo un DM de Instagram…',
      ]
    : [
        'AI is confirming a patient appointment…',
        'AI is drafting the visit summary…',
        'AI is answering a new-patient inquiry…',
      ];

  const cards = lang === 'es'
    ? {
        live: { label: 'Clínica activa', sub: '12 chats hoy · 2 citas nuevas' },
        wa: { name: 'María R.', msg: '¿Tienen cita para mañana en la tarde?', status: 'Cita confirmada, 4:00 PM' },
        cal: { label: 'Agenda de hoy', count: 'Consultorio casi lleno' },
        follow: { label: 'Resumen enviado', sub: 'Paciente · versión WhatsApp' },
      }
    : {
        live: { label: 'Practice live', sub: '28 chats today · 9 bookings confirmed' },
        wa: { name: 'Sarah M.', msg: 'Can I reschedule Friday?', status: 'Confirmed. Fri 3:30 PM' },
        cal: { label: "Today's schedule", count: 'Nearly full · 1 open slot' },
        follow: { label: 'Summary shared', sub: 'Patient · chat version sent' },
      };

  return (
    <div className="float-composition" aria-hidden="true">
      <div className="float-chip">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--green)', animation: 'pulse-dot 2s infinite' }} />
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--ink)' }}>{cards.live.label}</span>
        </div>
        <div style={{ fontSize: '0.6875rem', color: 'var(--ink-4)', marginBottom: '0.625rem' }}>{cards.live.sub}</div>
        <AiHint>{hints[active]}</AiHint>
      </div>

      <div className="float-chip">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#25D366', flexShrink: 0 }} />
          <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: '#128C7E' }}>WhatsApp</span>
          <span style={{ marginLeft: 'auto', fontSize: '0.6875rem', fontWeight: 500, color: 'var(--ink)' }}>{cards.wa.name}</span>
        </div>
        <p style={{ margin: '0 0 0.5rem', fontSize: '0.75rem', color: 'var(--ink-3)', lineHeight: 1.45 }}>{cards.wa.msg}</p>
        <div style={{
          fontSize: '0.6875rem', fontWeight: 500, padding: '0.4375rem 0.625rem', borderRadius: 10,
          background: 'var(--accent-bg)', color: 'var(--accent)', border: '1px solid var(--accent-ring)',
        }}>
          ✦ {cards.wa.status}
        </div>
      </div>

      <div className="float-chip">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Calendar size={15} style={{ color: 'var(--accent)', flexShrink: 0 }} />
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--ink)' }}>{cards.cal.label}</span>
        </div>
        <p style={{ margin: '0.375rem 0 0', fontSize: '0.6875rem', color: 'var(--ink-4)' }}>{cards.cal.count}</p>
      </div>

      <div className="float-chip">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', marginBottom: '0.25rem' }}>
          <Bell size={13} style={{ color: 'var(--accent)', flexShrink: 0 }} />
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--ink)' }}>{cards.follow.label}</span>
        </div>
        <p style={{ margin: 0, fontSize: '0.6875rem', color: 'var(--ink-4)' }}>{cards.follow.sub}</p>
      </div>

      <div className="float-chip float-composition__wide" style={{ textAlign: 'center', padding: '1rem' }}>
        <div className="stat-value" style={{ fontSize: '1.75rem', color: 'var(--accent)' }}>24/7</div>
        <div style={{ fontSize: '0.6875rem', color: 'var(--ink-4)', fontWeight: 500, marginTop: '0.25rem' }}>
          {lang === 'es' ? 'Atiende aunque cierres' : 'Runs while you\'re off the clock'}
        </div>
      </div>
    </div>
  );
}

/* ─── Inbox: stacked conversation rows (app list style) ─────────────── */
export function InboxFloatPreview({ lang = 'es' }: { lang?: 'es' | 'en' }) {
  const items = lang === 'es'
    ? [
        { ch: 'WhatsApp', color: '#25D366', name: 'Ana P.', preview: '¿Cuánto cuesta la consulta?', ai: 'La IA está respondiendo y ofreciendo cita…' },
        { ch: 'WhatsApp', color: '#25D366', name: 'Luis M.', preview: 'Necesito cambiar mi cita', ai: 'La IA está reagendando…' },
        { ch: 'Instagram', color: '#E1306C', name: 'Valentina S.', preview: '¿Tienen disponible hoy?', ai: 'La IA está respondiendo el DM…' },
      ]
    : [
        { ch: 'WhatsApp', color: '#25D366', name: 'Sarah M.', preview: 'How much is the consultation?', ai: 'AI is replying and offering a time slot…' },
        { ch: 'WhatsApp', color: '#25D366', name: 'James T.', preview: 'I need to change my appointment', ai: 'AI is rescheduling…' },
        { ch: 'Instagram', color: '#E1306C', name: 'Emily R.', preview: 'Do you have anything open today?', ai: 'AI is replying to the DM…' },
      ];

  return (
    <div className="float-preview-stack">
      {items.map((item, i) => (
        <div key={i} className="float-chip">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.375rem' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: item.color, flexShrink: 0 }} />
            <span style={{ fontSize: '0.625rem', fontWeight: 600, color: item.color }}>{item.ch}</span>
            <span style={{ marginLeft: 'auto', fontSize: '0.75rem', fontWeight: 500, color: 'var(--ink)' }}>{item.name}</span>
          </div>
          <p style={{ margin: '0 0 0.375rem', fontSize: '0.75rem', color: 'var(--ink-3)', lineHeight: 1.4 }}>{item.preview}</p>
          <AiHint>{item.ai}</AiHint>
        </div>
      ))}
    </div>
  );
}

/* ─── Appointments product hero (grid composition) ──────────────────── */
export function AppointmentsFloatComposition({ lang = 'es' }: { lang?: 'es' | 'en' }) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive(i => (i + 1) % 3), 3200);
    return () => clearInterval(t);
  }, []);

  const hints = lang === 'es'
    ? [
        'La IA está confirmando una cita por WhatsApp…',
        'La IA está enviando recordatorio 24h antes…',
        'La IA está llenando un hueco de la lista de espera…',
      ]
    : [
        'AI is confirming an appointment on WhatsApp…',
        'AI is sending the 24h reminder…',
        'AI is filling a slot from the waitlist…',
      ];

  const copy = lang === 'es'
    ? {
        live: 'Agenda activa',
        liveSub: '6 citas hoy · 2 pendientes de confirmar',
        waName: 'Carlos M.',
        waMsg: '¿Hay espacio el viernes en la tarde?',
        waStatus: 'Cita confirmada. Vie 4:00 PM',
        week: 'Esta semana',
        reminder: 'Recordatorio 48h',
        reminderSub: '13 confirmaciones automáticas',
        stat: '85%',
        statLabel: 'Menos no-shows con recordatorios',
        days: ['L', 'M', 'X', 'J', 'V'],
        slots: [
          { day: 0, label: '10:00', title: 'Consulta' },
          { day: 2, label: '14:30', title: 'Seguimiento' },
          { day: 4, label: '16:00', title: 'Nueva cita' },
        ],
      }
    : {
        live: 'Schedule live',
        liveSub: '6 appointments today · 2 awaiting confirm',
        waName: 'James T.',
        waMsg: 'Any openings Friday afternoon?',
        waStatus: 'Confirmed. Fri 4:00 PM',
        week: 'This week',
        reminder: '48h reminder',
        reminderSub: '13 auto-confirmed',
        stat: '85%',
        statLabel: 'Fewer no-shows with reminders',
        days: ['M', 'T', 'W', 'T', 'F'],
        slots: [
          { day: 0, label: '10:00', title: 'Consult' },
          { day: 2, label: '2:30', title: 'Follow-up' },
          { day: 4, label: '4:00', title: 'New booking' },
        ],
      };

  return (
    <div className="float-composition" aria-hidden="true">
      <div className="float-chip">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--green)', animation: 'pulse-dot 2s infinite' }} />
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--ink)' }}>{copy.live}</span>
        </div>
        <div style={{ fontSize: '0.6875rem', color: 'var(--ink-4)', marginBottom: '0.625rem' }}>{copy.liveSub}</div>
        <AiHint>{hints[active]}</AiHint>
      </div>

      <div className="float-chip">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#25D366', flexShrink: 0 }} />
          <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: '#128C7E' }}>WhatsApp</span>
          <span style={{ marginLeft: 'auto', fontSize: '0.6875rem', fontWeight: 500, color: 'var(--ink)' }}>{copy.waName}</span>
        </div>
        <p style={{ margin: '0 0 0.5rem', fontSize: '0.75rem', color: 'var(--ink-3)', lineHeight: 1.45 }}>{copy.waMsg}</p>
        <div style={{
          fontSize: '0.6875rem', fontWeight: 500, padding: '0.4375rem 0.625rem', borderRadius: 10,
          background: 'var(--accent-bg)', color: 'var(--accent)', border: '1px solid var(--accent-ring)',
        }}>
          ✦ {copy.waStatus}
        </div>
      </div>

      <div className="float-chip">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.625rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
            <Calendar size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} />
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--ink)' }}>{copy.week}</span>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.25rem', marginBottom: '0.5rem' }}>
          {copy.days.map((d, i) => (
            <div key={d + i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.5625rem', fontWeight: 600, color: 'var(--ink-4)', marginBottom: '0.25rem' }}>{d}</div>
              <div style={{
                height: 28, borderRadius: 6,
                background: copy.slots.some(s => s.day === i) ? 'var(--accent-bg)' : 'var(--bg-subtle)',
                border: `1px solid ${copy.slots.some(s => s.day === i) ? 'var(--accent-ring)' : 'var(--border)'}`,
              }} />
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
          {copy.slots.map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.6875rem' }}>
              <span style={{ fontWeight: 600, color: 'var(--accent)', minWidth: 40 }}>{s.label}</span>
              <span style={{ color: 'var(--ink-3)', flex: 1 }}>{s.title}</span>
              <Check size={12} style={{ color: 'var(--green)', flexShrink: 0 }} />
            </div>
          ))}
        </div>
      </div>

      <div className="float-chip">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', marginBottom: '0.25rem' }}>
          <Bell size={13} style={{ color: 'var(--accent)', flexShrink: 0 }} />
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--ink)' }}>{copy.reminder}</span>
        </div>
        <p style={{ margin: 0, fontSize: '0.6875rem', color: 'var(--ink-4)' }}>{copy.reminderSub}</p>
      </div>

      <div className="float-chip float-composition__wide" style={{ textAlign: 'center', padding: '1rem' }}>
        <div className="stat-value" style={{ fontSize: '1.75rem', color: 'var(--accent)' }}>{copy.stat}</div>
        <div style={{ fontSize: '0.6875rem', color: 'var(--ink-4)', fontWeight: 500, marginTop: '0.25rem' }}>{copy.statLabel}</div>
      </div>
    </div>
  );
}

/* ─── Calendar preview (compact list, industry pages) ─────────────── */
export function CalendarFloatPreview({ lang = 'es' }: { lang?: 'es' | 'en' }) {
  const slots = lang === 'es'
    ? [
        { time: 'Vie 4:00 PM', label: 'Consulta confirmada' },
        { time: 'Lun 10:00 AM', label: 'Recordatorio enviado' },
        { time: 'Mar 2:30 PM', label: 'Hueco llenado automáticamente' },
      ]
    : [
        { time: 'Fri 4:00 PM', label: 'Consultation confirmed' },
        { time: 'Mon 10:00 AM', label: 'Reminder sent' },
        { time: 'Tue 2:30 PM', label: 'Slot filled automatically' },
      ];

  const title = lang === 'es' ? 'Cobertura de agenda 24/7' : '24/7 schedule coverage';

  return (
    <div className="float-preview-stack">
      <div className="float-chip" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Calendar size={16} style={{ color: 'var(--accent)', flexShrink: 0 }} />
        <span style={{ fontWeight: 600, fontSize: '0.8125rem', color: 'var(--ink)' }}>{title}</span>
      </div>
      {slots.map((s, i) => (
        <div key={i} className="float-chip" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--accent)', minWidth: 76 }}>{s.time}</span>
          <span style={{ flex: 1, fontSize: '0.75rem', fontWeight: 500, color: 'var(--ink-3)' }}>{s.label}</span>
          <Check size={14} style={{ color: 'var(--green)', flexShrink: 0 }} />
        </div>
      ))}
      <div className="float-chip" style={{ background: 'var(--accent-bg)', borderColor: 'var(--accent-ring)' }}>
        <AiHint>
          {lang === 'es'
            ? 'Un cliente cancela → la IA detecta el hueco y contacta a la lista de espera'
            : 'A client cancels → AI detects the gap and contacts the waitlist'}
        </AiHint>
      </div>
    </div>
  );
}

type ChannelKey = 'whatsapp' | 'instagram' | 'facebook' | 'tiktok';

const channelMeta: Record<ChannelKey, { label: string; color: string }> = {
  whatsapp: { label: 'WhatsApp', color: '#25D366' },
  instagram: { label: 'Instagram', color: '#E1306C' },
  facebook: { label: 'Messenger', color: '#0099FF' },
  tiktok: { label: 'TikTok', color: '#111111' },
};

/* ─── Channel pages: conversation preview (brand-neutral frame) ─── */
export function ChannelFloatPreview({
  lang = 'es',
  channel = 'whatsapp',
}: {
  lang?: 'es' | 'en';
  channel?: ChannelKey;
}) {
  const meta = channelMeta[channel];
  const copy = lang === 'es'
    ? {
        status: 'en línea · IA activa',
        msgs: [
          { who: 'Cliente', text: '¿Tienen disponibilidad el viernes por la tarde?', time: '10:02' },
          { who: 'Shadia', text: 'Sí, tengo 4:00 PM y 6:30 PM. ¿Cuál prefieres?', time: '10:02', ai: true },
          { who: 'Cliente', text: '4:00 PM está perfecto', time: '10:03' },
          { who: 'Shadia', text: 'Listo. Cita confirmada y recordatorio programado.', time: '10:03', ai: true },
        ],
        hint: 'La IA está confirmando la cita y enviando recordatorio…',
      }
    : {
        status: 'online · AI active',
        msgs: [
          { who: 'Customer', text: 'Do you have anything open Friday afternoon?', time: '10:02' },
          { who: 'Shadia', text: 'Yes, 4:00 PM and 6:30 PM are open. Which works?', time: '10:02', ai: true },
          { who: 'Customer', text: '4 PM works', time: '10:03' },
          { who: 'Shadia', text: 'Done. Appointment confirmed with reminder scheduled.', time: '10:03', ai: true },
        ],
        hint: 'AI is confirming the booking and scheduling a reminder…',
      };

  return (
    <div className="float-preview-stack channel-float">
      <div className="float-chip" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: meta.color, flexShrink: 0 }} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--ink)' }}>{meta.label}</div>
          <div style={{ fontSize: '0.625rem', color: 'var(--ink-4)', fontWeight: 500 }}>{copy.status}</div>
        </div>
      </div>
      {copy.msgs.map((m, i) => (
        <div
          key={i}
          className="float-chip"
          style={{
            marginLeft: m.ai ? 0 : '1.25rem',
            marginRight: m.ai ? '1.25rem' : 0,
            borderColor: m.ai ? 'var(--accent-ring)' : undefined,
          }}
        >
          <div style={{ fontSize: '0.625rem', fontWeight: 600, color: m.ai ? 'var(--accent)' : 'var(--ink-4)', marginBottom: '0.25rem' }}>
            {m.who}
          </div>
          <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--ink-3)', lineHeight: 1.45 }}>{m.text}</p>
          <div style={{ fontSize: '0.5625rem', color: 'var(--ink-4)', textAlign: 'right', marginTop: '0.25rem' }}>{m.time}</div>
        </div>
      ))}
      <div className="float-chip" style={{ background: 'var(--accent-bg)', borderColor: 'var(--accent-ring)' }}>
        <AiHint>{copy.hint}</AiHint>
      </div>
    </div>
  );
}

/* ─── Clinical sessions product hero ──────────────────────────────── */
export function SessionFloatComposition({ lang = 'es' }: { lang?: 'es' | 'en' }) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive(i => (i + 1) % 3), 3000);
    return () => clearInterval(t);
  }, []);

  const hints = lang === 'es'
    ? [
        'Grabando consulta… generando nota clínica',
        'Actualizando expediente del paciente…',
        'Enviando resumen al paciente por WhatsApp…',
      ]
    : [
        'Recording visit… drafting clinical note',
        'Updating the patient chart…',
        'Sharing patient summary on chat…',
      ];

  const copy = lang === 'es'
    ? {
        live: 'Sesión en curso',
        liveSub: 'Dr. Pérez · Consulta de seguimiento',
        noteTitle: 'Nota clínica',
        noteBody: 'Paciente refiere mejoría. Ajusta dosis. Control en 4 semanas.',
        patientTitle: 'Resumen paciente',
        patientBody: 'Hoy revisamos tu tratamiento. Próxima cita en 4 semanas.',
        waStatus: 'Resumen enviado por WhatsApp',
        pulse: 'Audio capturado',
      }
    : {
        live: 'Session in progress',
        liveSub: 'Dr. Perez · Follow-up visit',
        noteTitle: 'Clinical note',
        noteBody: 'Patient reports improvement. Adjust dose. Follow-up in 4 weeks.',
        patientTitle: 'Patient summary',
        patientBody: 'We reviewed your plan today. Next visit in 4 weeks.',
        waStatus: 'Summary shared on chat',
        pulse: 'Audio captured',
      };

  return (
    <div className="float-composition" aria-hidden="true">
      <div className="float-chip">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--red)', animation: 'pulse-dot 2s infinite' }} />
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--ink)' }}>{copy.live}</span>
        </div>
        <div style={{ fontSize: '0.6875rem', color: 'var(--ink-4)', marginBottom: '0.625rem' }}>{copy.liveSub}</div>
        <AiHint>{hints[active]}</AiHint>
      </div>

      <div className="float-chip">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.625rem' }}>
          <Mic size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} />
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--ink)' }}>{copy.pulse}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 28 }}>
          {[4, 10, 16, 8, 20, 12, 18, 6, 14, 22, 9, 15].map((h, i) => (
            <div
              key={i}
              style={{
                width: 4,
                height: h,
                borderRadius: 2,
                background: 'var(--accent)',
                opacity: 0.35 + (i % 3) * 0.2,
                animation: `pulse-dot ${1.2 + (i % 4) * 0.15}s infinite`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="float-chip">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', marginBottom: '0.375rem' }}>
          <FileText size={13} style={{ color: 'var(--accent)', flexShrink: 0 }} />
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--ink)' }}>{copy.noteTitle}</span>
        </div>
        <p style={{ margin: 0, fontSize: '0.6875rem', color: 'var(--ink-3)', lineHeight: 1.45 }}>{copy.noteBody}</p>
      </div>

      <div className="float-chip">
        <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.375rem' }}>{copy.patientTitle}</div>
        <p style={{ margin: '0 0 0.5rem', fontSize: '0.6875rem', color: 'var(--ink-3)', lineHeight: 1.45 }}>{copy.patientBody}</p>
        <div style={{
          fontSize: '0.6875rem', fontWeight: 500, padding: '0.4375rem 0.625rem', borderRadius: 10,
          background: 'var(--accent-bg)', color: 'var(--accent)', border: '1px solid var(--accent-ring)',
        }}>
          ✦ {copy.waStatus}
        </div>
      </div>
    </div>
  );
}

/* ─── Natural language / @shadia style ────────────────────────────── */
export function AgentFloatPreview({ lang = 'es' }: { lang?: 'es' | 'en' }) {
  const [line, setLine] = useState(0);
  const prompts = lang === 'es'
    ? [
        '@shadia Confirma la cita de mañana por WhatsApp.',
        '@shadia Si cancelan, ofrece el próximo hueco al paciente.',
        '@shadia Responde los DMs de Instagram con precios.',
      ]
    : [
        '@shadia Confirm tomorrow\'s appointment.',
        '@shadia Fill the opening if someone cancels.',
        '@shadia Reply to new patient inquiries with intake info.',
      ];

  useEffect(() => {
    const t = setInterval(() => setLine(l => (l + 1) % prompts.length), 3200);
    return () => clearInterval(t);
  }, [prompts.length]);

  const labels = lang === 'es'
    ? { title: 'Pregúntale a Shadia', sub: 'Lenguaje natural, sin workflows' }
    : { title: 'Ask Shadia', sub: 'Plain language, no workflows' };

  return (
    <div className="float-preview-stack">
      <div className="float-chip">
        <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.75rem' }}>{labels.title}</div>
        <div style={{
          background: 'var(--bg-subtle)', border: '1px solid var(--border)', borderRadius: 12,
          padding: '0.75rem 0.875rem', fontSize: '0.8125rem', lineHeight: 1.5, color: 'var(--ink-3)', fontWeight: 400,
        }}>
          {prompts[line]}
        </div>
        <p style={{ margin: '0.625rem 0 0', fontSize: '0.625rem', color: 'var(--ink-4)', fontWeight: 500 }}>{labels.sub}</p>
      </div>
      <div className="float-chip">
        <AiHint>
          {lang === 'es' ? 'La IA está enviando un mensaje de seguimiento…' : 'AI is sending a follow-up message…'}
        </AiHint>
      </div>
    </div>
  );
}
