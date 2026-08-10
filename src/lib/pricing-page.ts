export type PricingLang = 'es' | 'en';

type L = Record<PricingLang, string>;

type Cell = string | boolean | L;

export type FeatureRow = {
  label: L;
  hob: Cell;
  pro: Cell;
  ultra: Cell;
};

export type FeatureGroup = {
  group: L;
  rows: FeatureRow[];
};

export type PricingPlan = {
  id: string;
  name: string;
  tagline: L;
  price: string | null;
  period: L;
  popular: boolean;
  cta: L;
  seats: number | null;
  credits: string | null;
  extraSeat: string | null;
  extraCredit: string | null;
  enterprise: boolean;
  enterpriseItems?: L[];
};

function row(label: L, hob: Cell, pro: Cell, ultra: Cell): FeatureRow {
  return { label, hob, pro, ultra };
}

const featureGroupsData: FeatureGroup[] = [
  {
    group: { es: 'Sesiones clínicas y recepción', en: 'Clinical sessions & reception' },
    rows: [
      row({ es: 'Scribe clínico con IA', en: 'AI clinical scribe' }, true, true, true),
      row({ es: 'Plantillas por especialidad', en: 'Specialty note templates' }, '2', '10', { es: 'Ilimitadas', en: 'Unlimited' }),
      row({ es: 'Recepcionista IA (WhatsApp 24/7)', en: 'AI receptionist (24/7 WhatsApp)' }, true, true, true),
      row({ es: 'Escalación inteligente a humanos', en: 'Smart escalation to staff' }, true, true, true),
      row({ es: 'Preparación pre-visita automatizada', en: 'Automated pre-visit prep' }, true, true, true),
      row({ es: 'Shadia Agent (copiloto del equipo)', en: 'Shadia Agent (team copilot)' }, true, true, true),
    ],
  },
  {
    group: { es: 'Citas y calendario', en: 'Appointments & calendar' },
    rows: [
      row({ es: 'Motor de citas nativo', en: 'Native appointments engine' }, true, true, true),
      row({ es: 'Agendamiento por WhatsApp', en: 'WhatsApp booking' }, true, true, true),
      row({ es: 'Recordatorios automáticos', en: 'Automatic reminders' }, true, true, true),
      row({ es: 'Reagendamiento por chat', en: 'In-chat rescheduling' }, true, true, true),
      row({ es: 'Sincronización Google Calendar', en: 'Google Calendar sync' }, true, true, true),
      row({ es: 'Tipos de cita clínica', en: 'Clinical appointment types' }, '3', '15', { es: 'Ilimitados', en: 'Unlimited' }),
      row({ es: 'Múltiples sedes / consultorios', en: 'Multi-location / offices' }, '1', '3', { es: 'Ilimitadas', en: 'Unlimited' }),
    ],
  },
  {
    group: { es: 'Canales y mensajería', en: 'Channels & messaging' },
    rows: [
      row({ es: 'WhatsApp Business API (oficial)', en: 'WhatsApp Business API (official)' }, true, true, true),
      row({ es: 'Instagram DMs y comentarios', en: 'Instagram DMs & comments' }, false, true, true),
      row({ es: 'Facebook Messenger', en: 'Facebook Messenger' }, true, true, true),
      row({ es: 'TikTok DMs', en: 'TikTok DMs' }, false, true, true),
      row({ es: 'Plantillas de WhatsApp aprobadas', en: 'Approved WhatsApp templates' }, '5', '25', { es: 'Ilimitadas', en: 'Unlimited' }),
      row({ es: 'Recordatorios y seguimiento por WhatsApp', en: 'WhatsApp reminders & follow-up' }, { es: '500/mes', en: '500/mo' }, { es: '5,000/mes', en: '5,000/mo' }, { es: 'Ilimitados', en: 'Unlimited' }),
    ],
  },
  {
    group: { es: 'Pacientes y equipo', en: 'Patients & team' },
    rows: [
      row({ es: 'Perfiles de paciente unificados', en: 'Unified patient profiles' }, true, true, true),
      row({ es: 'Pacientes en base de datos', en: 'Patients in database' }, '1,000', '10,000', { es: 'Ilimitados', en: 'Unlimited' }),
      row({ es: 'Miembros del equipo incluidos', en: 'Team members included' }, '2', '5', { es: 'A medida', en: 'Custom' }),
      row({ es: 'Miembro extra', en: 'Extra member' }, '+$12/miembro', '+$15/miembro', { es: 'A medida', en: 'Custom' }),
      row({ es: 'AI Credits incluidos/mes', en: 'AI Credits included/mo' }, '300', '1,500', { es: 'A medida', en: 'Custom' }),
      row({ es: 'On-demand (por credit extra)', en: 'On-demand (per extra credit)' }, '$0.015/credit', '$0.010/credit', { es: 'A medida', en: 'Custom' }),
      row({ es: 'Atributos personalizados del paciente', en: 'Custom patient attributes' }, '10', '50', { es: 'Ilimitados', en: 'Unlimited' }),
      row({ es: 'Enmascarado de datos sensibles', en: 'Sensitive data masking' }, false, true, true),
      row({ es: 'Control de acceso por rol (RBAC)', en: 'Role-based access (RBAC)' }, false, true, true),
    ],
  },
  {
    group: { es: 'Automatización y analítica', en: 'Automation & analytics' },
    rows: [
      row({ es: 'Flujos de bienvenida y seguimiento', en: 'Welcome & follow-up flows' }, true, true, true),
      row({ es: 'Asignación automática de conversaciones', en: 'Automatic conversation routing' }, false, true, true),
      row({ es: 'Dashboard de métricas clínicas', en: 'Clinical metrics dashboard' }, true, true, true),
      row({ es: 'Reportes de citas y no-shows', en: 'Appointment & no-show reports' }, false, true, true),
      row({ es: 'CSAT post-consulta', en: 'Post-visit CSAT' }, false, true, true),
      row({ es: 'Reportes por sede', en: 'Per-location reports' }, false, false, true),
      row({ es: 'Reportes personalizados', en: 'Custom reports' }, false, false, true),
    ],
  },
  {
    group: { es: 'Integraciones y API', en: 'Integrations & API' },
    rows: [
      row({ es: 'Integraciones nativas (Google Calendar, etc.)', en: 'Native integrations (Google Calendar, etc.)' }, '3', '10', { es: 'Ilimitadas', en: 'Unlimited' }),
      row({ es: 'API', en: 'API' }, false, true, true),
      row({ es: 'Webhooks', en: 'Webhooks' }, false, true, true),
      row({ es: 'Acceso a SDK', en: 'SDK access' }, false, false, true),
      row({ es: 'Integraciones EHR / HIS (ULTRA)', en: 'EHR / EMR integrations (ULTRA)' }, false, false, true),
    ],
  },
  {
    group: { es: 'Seguridad y soporte', en: 'Security & support' },
    rows: [
      row({ es: 'Cifrado de datos (TLS + AES-256)', en: 'Data encryption (TLS + AES-256)' }, true, true, true),
      row({ es: 'Auditoría de accesos', en: 'Access audit logs' }, false, true, true),
      row({ es: 'Retención de datos configurable', en: 'Configurable data retention' }, false, true, true),
      row({ es: 'SSO (Single Sign-On)', en: 'SSO (Single Sign-On)' }, false, false, true),
      row({ es: 'SLA de uptime', en: 'Uptime SLA' }, '99%', '99.5%', '99.9%'),
      row({ es: 'Soporte', en: 'Support' }, 'Email', { es: 'Chat prioritario', en: 'Priority chat' }, { es: 'Dedicado', en: 'Dedicated' }),
      row({ es: 'Onboarding clínico asistido', en: 'Assisted clinical onboarding' }, false, false, true),
    ],
  },
];

function cellValue(val: Cell, lang: PricingLang): string | boolean {
  if (typeof val === 'boolean') return val;
  if (typeof val === 'object') return val[lang];
  return val;
}

export function getFeatureGroups(lang: PricingLang): { group: string; rows: { label: string; hob: string | boolean; pro: string | boolean; ultra: string | boolean }[] }[] {
  return featureGroupsData.map((g) => ({
    group: g.group[lang],
    rows: g.rows.map((r) => ({
      label: r.label[lang],
      hob: cellValue(r.hob, lang),
      pro: cellValue(r.pro, lang),
      ultra: cellValue(r.ultra, lang),
    })),
  }));
}

const enterpriseItems: L[] = [
  { es: 'Red multi-sede con roles y permisos a medida', en: 'Multi-site network with custom roles & permissions' },
  { es: 'SLA contractual 99.9%', en: 'Contractual 99.9% SLA' },
  { es: 'Onboarding clínico dedicado', en: 'Dedicated clinical onboarding' },
  { es: 'Account manager asignado', en: 'Dedicated account manager' },
  { es: 'Seguridad avanzada + SSO', en: 'Advanced security + SSO' },
  { es: 'Integraciones EHR / HIS personalizadas', en: 'Custom EHR / EMR integrations' },
];

export function getPlans(lang: PricingLang): (PricingPlan & {
  taglineText: string;
  periodText: string;
  ctaText: string;
  enterpriseItemsText?: string[];
})[] {
  const plans: PricingPlan[] = [
    {
      id: 'HOB',
      name: 'HOB',
      tagline: { es: 'Para consultorios y prácticas pequeñas', en: 'For solo practices & small offices' },
      price: '$49',
      period: { es: '/mes', en: '/mo' },
      popular: false,
      cta: { es: 'Empezar con HOB', en: 'Start with HOB' },
      seats: 2,
      credits: '300',
      extraSeat: '$12',
      extraCredit: '$0.015',
      enterprise: false,
    },
    {
      id: 'PRO',
      name: 'PRO',
      tagline: { es: 'Para clínicas con equipo y varias especialidades', en: 'For clinics with staff & multiple specialties' },
      price: '$119',
      period: { es: '/mes', en: '/mo' },
      popular: true,
      cta: { es: 'Empezar con PRO', en: 'Start with PRO' },
      seats: 5,
      credits: '1,500',
      extraSeat: '$15',
      extraCredit: '$0.010',
      enterprise: false,
    },
    {
      id: 'ULTRA',
      name: 'ULTRA',
      tagline: { es: 'Redes hospitalarias · Multi-sede a escala', en: 'Hospital networks · Multi-site at scale' },
      price: null,
      period: { es: '', en: '' },
      popular: false,
      cta: { es: 'Hablar con ventas', en: 'Talk to sales' },
      seats: null,
      credits: null,
      extraSeat: null,
      extraCredit: null,
      enterprise: true,
      enterpriseItems,
    },
  ];

  return plans.map((p) => ({
    ...p,
    taglineText: p.tagline[lang],
    periodText: p.period[lang],
    ctaText: p.cta[lang],
    enterpriseItemsText: p.enterpriseItems?.map((item) => item[lang]),
  }));
}

export function getFaq(lang: PricingLang): { q: string; a: string }[] {
  if (lang === 'es') {
    return [
      { q: '¿Qué son los AI Credits?', a: 'Los AI Credits son el combustible de Shadia AI, se consumen en cada acción que toma la IA: documentar sesiones, responder pacientes, agendar citas, generar resúmenes. Tu plan incluye un saldo mensual y puedes recargar o activar uso on-demand cuando lo necesites.' },
      { q: '¿Qué plan necesita mi consultorio?', a: 'HOB es ideal para consultorios de 1–2 profesionales con recepcionista IA y citas por WhatsApp. PRO cubre clínicas con varios médicos, recepción, enfermería y hasta 3 sedes. ULTRA es para redes hospitalarias con múltiples centros, roles avanzados e integraciones a medida.' },
      { q: '¿Puedo agregar más miembros del equipo?', a: 'Sí. Puedes agregar asientos extra por $12/mes en HOB y $15/mes en PRO. ULTRA define seats según la operación de la red.' },
      { q: '¿El scribe clínico está incluido?', a: 'Sí. Sesiones clínicas con IA están incluidas en todos los planes. HOB incluye 2 plantillas por especialidad; PRO y ULTRA amplían según el plan.' },
      { q: '¿Tienen API para integrar con nuestro sistema?', a: 'Sí. A partir del plan PRO tienes acceso a API y webhooks. ULTRA incluye integraciones EHR/HIS personalizadas.' },
      { q: '¿Hay un periodo de prueba?', a: 'Sí. 7 días de prueba gratuita con acceso completo al plan PRO. Sin tarjeta de crédito.' },
    ];
  }
  return [
    { q: 'What are AI Credits?', a: 'AI Credits power every action Shadia takes, documenting sessions, replying to patients, booking appointments, generating summaries. Your plan includes a monthly balance and you can top up or enable on-demand usage anytime.' },
    { q: 'Which plan fits my practice?', a: 'HOB is ideal for solo or 2-provider practices with AI receptionist and WhatsApp booking. PRO covers clinics with multiple clinicians, front desk, nursing, and up to 3 locations. ULTRA is for hospital networks with multiple sites, advanced roles, and custom integrations.' },
    { q: 'Can I add more team members?', a: 'Yes. Extra seats are $12/mo on HOB and $15/mo on PRO. ULTRA defines seats based on your network operation.' },
    { q: 'Is the clinical scribe included?', a: 'Yes. AI clinical sessions are included in all plans. HOB includes 2 specialty templates; PRO and ULTRA expand based on plan.' },
    { q: 'Do you offer an API for integrations?', a: 'Yes. PRO and above include API access and webhooks. ULTRA includes custom EHR/EMR integrations.' },
    { q: 'Is there a free trial?', a: 'Yes. 7-day free trial with full PRO access. No credit card required.' },
  ];
}

export function getFaqSchema(lang: PricingLang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: getFaq(lang).map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function getPricingCopy(lang: PricingLang) {
  const t = lang === 'es';
  return {
    meta: {
      title: t
        ? 'Precios Shadia AI. HOB consultorios, PRO clínicas, ULTRA redes | Shadia AI'
        : 'Pricing. HOB practices, PRO clinics, ULTRA networks | Shadia AI',
      description: t
        ? 'Planes para consultorios, clínicas y redes hospitalarias. HOB $49/mes, PRO $119/mes, ULTRA enterprise. Sesiones clínicas, recepcionista IA y citas incluidos. 7 días gratis.'
        : 'Plans for practices, clinics, and hospital networks. HOB $49/mo, PRO $119/mo, ULTRA enterprise. Clinical sessions, AI receptionist, and appointments included. 7-day free trial.',
      canonical: t ? 'https://shadia.ai/es/precios' : 'https://shadia.ai/en/pricing',
      ogImage: t ? undefined : '/og/pricing-en.png',
    },
    hero: {
      eyebrow: t ? 'Precios' : 'Pricing',
      title: t ? 'Planes para cada etapa' : 'Plans for every stage',
      titleAccent: t ? 'de tu clínica.' : 'of your practice.',
      lead: t ? 'Desde consultorios independientes hasta redes hospitalarias. 7 días gratis, sin tarjeta de crédito.' : 'From solo practices to hospital networks. 7-day free trial, no credit card required.',
    },
    creditsPill: t
      ? 'AI Credits = documentación, recepción, citas y seguimiento. Incluidos en el plan · Recargables on-demand'
      : 'AI Credits = documentation, reception, booking & follow-up. Included in your plan · Rechargeable on-demand',
    popularBadge: t ? 'MÁS POPULAR' : 'MOST POPULAR',
    customPrice: t ? 'Precio a medida' : 'Custom pricing',
    customPriceSub: t ? 'Ajustado a tu red hospitalaria' : 'Tailored to your hospital network',
    membersIncluded: t ? 'miembros incluidos' : 'members included',
    extraMember: t ? 'miembro extra' : 'extra member',
    creditsPerMonth: t ? 'AI Credits/mes' : 'AI Credits/mo',
    onDemandAvailable: t ? 'on-demand disponible' : 'on-demand available',
    trialNote: t
      ? 'Todos los planes incluyen 7 días de prueba gratis · Sin tarjeta de crédito'
      : 'All plans include a 7-day free trial · No credit card required',
    comparison: {
      eyebrow: t ? 'Comparación completa' : 'Full comparison',
      title: t ? 'Todo lo que incluye' : 'Everything included in',
      titleAccent: t ? 'cada plan.' : 'each plan.',
      perMonth: t ? '/mes' : '/mo',
    },
    api: {
      eyebrow: t ? 'API & Integraciones clínicas' : 'API & Clinical integrations',
      title: t ? 'Conecta Shadia' : 'Connect Shadia',
      titleAccent: t ? 'a tu ecosistema clínico.' : 'to your clinical stack.',
      lead: t
        ? 'Integra citas, pacientes y conversaciones con tu calendario, EHR o sistemas internos. API completa disponible en PRO; integraciones EHR/HIS a medida en ULTRA.'
        : 'Integrate appointments, patients, and conversations with your calendar, EHR, or internal systems. Full API on PRO; custom EHR/EMR integrations on ULTRA.',
      bullets: t
        ? [
            'Sincronización Google Calendar bidireccional',
            'API de pacientes, citas y conversaciones',
            'Webhooks en tiempo real',
            'Integraciones EHR/HIS personalizadas (ULTRA)',
            'Documentación interactiva incluida',
            'SDK para Node.js y Python (ULTRA)',
          ]
        : [
            'Bidirectional Google Calendar sync',
            'Patients, appointments & conversations API',
            'Real-time webhooks',
            'Custom EHR/EMR integrations (ULTRA)',
            'Interactive documentation included',
            'SDK for Node.js and Python (ULTRA)',
          ],
      badge: t ? 'API en PRO · Integraciones EHR en ULTRA' : 'API on PRO · EHR integrations on ULTRA',
    },
    faq: {
      eyebrow: t ? 'Preguntas frecuentes' : 'FAQ',
      title: t ? 'Todo lo que necesitas saber.' : 'Everything you need to know.',
    },
    cta: {
      source: 'pricing_cta',
      title: t ? '7 días gratis.' : '7 days free.',
      titleAccent: t ? 'Sin compromisos.' : 'No commitments.',
      lead: t
        ? 'Prueba Shadia con todos los features del plan PRO durante 7 días, sin tarjeta de crédito.'
        : 'Try Shadia with full PRO plan features for 7 days, no credit card required.',
    },
  };
}
