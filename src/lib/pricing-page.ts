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
    group: { es: 'Canales y mensajería', en: 'Channels & messaging' },
    rows: [
      row({ es: 'WhatsApp Business API (oficial)', en: 'WhatsApp Business API (official)' }, true, true, true),
      row({ es: 'Instagram DMs y comentarios', en: 'Instagram DMs & comments' }, true, true, true),
      row({ es: 'TikTok DMs', en: 'TikTok DMs' }, false, true, true),
      row({ es: 'Facebook Messenger', en: 'Facebook Messenger' }, true, true, true),
      row({ es: 'Mensajes de difusión masivos', en: 'Broadcast messages' }, { es: '500/mes', en: '500/mo' }, { es: '5,000/mes', en: '5,000/mo' }, { es: 'Ilimitados', en: 'Unlimited' }),
      row({ es: 'Plantillas de WhatsApp aprobadas', en: 'Approved WhatsApp templates' }, '5', '25', { es: 'Ilimitadas', en: 'Unlimited' }),
    ],
  },
  {
    group: { es: 'Conversaciones y equipo', en: 'Conversations & team' },
    rows: [
      row({ es: 'Conversaciones omnicanal unificadas', en: 'Unified omnichannel conversations' }, true, true, true),
      row({ es: 'Miembros del equipo incluidos', en: 'Team members included' }, '2', '5', { es: 'A medida', en: 'Custom' }),
      row({ es: 'Miembro extra', en: 'Extra member' }, '+$12/miembro', '+$15/miembro', { es: 'A medida', en: 'Custom' }),
      row({ es: 'AI Credits incluidos/mes', en: 'AI Credits included/mo' }, '300', '1,500', { es: 'A medida', en: 'Custom' }),
      row({ es: 'On-demand (por credit extra)', en: 'On-demand (per extra credit)' }, '$0.015/credit', '$0.010/credit', { es: 'A medida', en: 'Custom' }),
      row({ es: 'Conversaciones activas', en: 'Active conversations' }, { es: 'Ilimitadas', en: 'Unlimited' }, { es: 'Ilimitadas', en: 'Unlimited' }, { es: 'Ilimitadas', en: 'Unlimited' }),
      row({ es: 'Asignación automática de conversaciones', en: 'Automatic conversation assignment' }, false, true, true),
      row({ es: 'Notas internas', en: 'Internal notes' }, true, true, true),
      row({ es: 'Reacciones a mensajes', en: 'Message reactions' }, true, true, true),
      row({ es: 'Respuestas en hilo', en: 'Thread replies' }, true, true, true),
      row({ es: 'Menciones de equipo (@)', en: 'Team mentions (@)' }, true, true, true),
      row({ es: 'Presencia de equipo en tiempo real', en: 'Real-time team presence' }, false, true, true),
      row({ es: 'Adjuntos (archivos, imágenes, audio)', en: 'Attachments (files, images, audio)' }, true, true, true),
      row({ es: 'Búsqueda en conversaciones', en: 'Conversation search' }, true, true, true),
      row({ es: 'Folders y organización', en: 'Folders & organization' }, false, true, true),
      row({ es: 'Mensajes programados', en: 'Scheduled messages' }, true, true, true),
      row({ es: 'Auto-cierre por inactividad', en: 'Auto-close on inactivity' }, true, true, true),
      row({ es: 'Colaboradores en conversación', en: 'Conversation collaborators' }, false, true, true),
      row({ es: 'Modos de visualización (Full/Focus/Standard/Collaborative)', en: 'View modes (Full/Focus/Standard/Collaborative)' }, true, true, true),
    ],
  },
  {
    group: { es: 'Contactos y datos', en: 'Contacts & data' },
    rows: [
      row({ es: 'Contactos', en: 'Contacts' }, '1,000', '10,000', { es: 'Ilimitados', en: 'Unlimited' }),
      row({ es: 'Empresas y organizaciones', en: 'Companies & organizations' }, false, true, true),
      row({ es: 'Tags y etiquetas', en: 'Tags' }, '10', '50', { es: 'Ilimitadas', en: 'Unlimited' }),
      row({ es: 'Data attributes personalizados (16 tipos)', en: 'Custom data attributes (16 types)' }, '10', '50', { es: 'Ilimitados', en: 'Unlimited' }),
      row({ es: 'Sugerencias de contactos duplicados', en: 'Duplicate contact suggestions' }, false, true, true),
      row({ es: 'Notas de contactos', en: 'Contact notes' }, true, true, true),
      row({ es: 'Resource viewers', en: 'Resource viewers' }, false, true, true),
      row({ es: 'Importación y exportación de contactos', en: 'Contact import & export' }, true, true, true),
      row({ es: 'Limpieza de contactos IA (flags automáticos)', en: 'AI contact cleanup (auto flags)' }, false, true, true),
      row({ es: 'Acciones masivas (bulk actions)', en: 'Bulk actions' }, false, true, true),
      row({ es: 'Enmascarado de datos (Mask)', en: 'Data masking (Mask)' }, false, true, true),
    ],
  },
  {
    group: { es: 'IA y agentes', en: 'AI & agents' },
    rows: [
      row({ es: 'Agentes IA conversacionales', en: 'Conversational AI agents' }, '1', '3', { es: 'Ilimitados', en: 'Unlimited' }),
      row({ es: 'Shadia Agent (agente de tu equipo)', en: 'Shadia Agent (team copilot)' }, true, true, true),
      row({ es: 'AI Threads', en: 'AI Threads' }, '5', { es: 'Ilimitados', en: 'Unlimited' }, { es: 'Ilimitados', en: 'Unlimited' }),
      row({ es: 'AI Presence', en: 'AI Presence' }, true, true, true),
      row({ es: 'Motor de citas autónomo', en: 'Autonomous appointments engine' }, true, true, true),
      row({ es: 'Respuestas automáticas FAQs', en: 'Automatic FAQ responses' }, true, true, true),
      row({ es: 'Escalación inteligente a humanos', en: 'Smart escalation to humans' }, true, true, true),
      row({ es: 'Personalidad y tono de marca', en: 'Brand personality & tone' }, false, true, true),
      row({ es: 'Agentes con acceso a datos externos', en: 'Agents with external data access' }, false, false, true),
    ],
  },
  {
    group: { es: 'Citas y calendario', en: 'Appointments & calendar' },
    rows: [
      row({ es: 'Motor de citas nativo', en: 'Native appointments engine' }, true, true, true),
      row({ es: 'Sincronización Google Calendar', en: 'Google Calendar sync' }, true, true, true),
      row({ es: 'Recordatorios automáticos por WhatsApp', en: 'Automatic WhatsApp reminders' }, true, true, true),
      row({ es: 'Reagendamiento por chat', en: 'In-chat rescheduling' }, true, true, true),
      row({ es: 'Citas por múltiples ubicaciones', en: 'Multi-location appointments' }, false, true, true),
      row({ es: 'Tipos de cita personalizados', en: 'Custom appointment types' }, '3', '15', { es: 'Ilimitados', en: 'Unlimited' }),
    ],
  },
  {
    group: { es: 'Integraciones y API', en: 'Integrations & API' },
    rows: [
      row({ es: 'Integraciones nativas (Google, HubSpot, etc.)', en: 'Native integrations (Google, HubSpot, etc.)' }, '3', '10', { es: 'Ilimitadas', en: 'Unlimited' }),
      row({ es: 'API', en: 'API' }, false, true, true),
      row({ es: 'Webhooks', en: 'Webhooks' }, false, true, true),
      row({ es: 'Acceso a SDK', en: 'SDK access' }, false, false, true),
      row({ es: 'IP whitelisting', en: 'IP whitelisting' }, false, false, true),
    ],
  },
  {
    group: { es: 'Reportes y analytics', en: 'Reports & analytics' },
    rows: [
      row({ es: 'Dashboard de métricas', en: 'Metrics dashboard' }, true, true, true),
      row({ es: 'Reporte de rendimiento por miembro', en: 'Per-member performance report' }, false, true, true),
      row({ es: 'Reporte de conversiones por canal', en: 'Per-channel conversion report' }, false, true, true),
      row({ es: 'Exportación de reportes (CSV)', en: 'Report export (CSV)' }, false, true, true),
      row({ es: 'Reportes personalizados', en: 'Custom reports' }, false, false, true),
    ],
  },
  {
    group: { es: 'Seguridad y soporte', en: 'Security & support' },
    rows: [
      row({ es: 'Encriptación de datos (TLS + AES-256)', en: 'Data encryption (TLS + AES-256)' }, true, true, true),
      row({ es: 'Auditoría de accesos', en: 'Access audit logs' }, false, true, true),
      row({ es: 'Control de acceso por rol (RBAC)', en: 'Role-based access (RBAC)' }, false, true, true),
      row({ es: 'SSO (Single Sign-On)', en: 'SSO (Single Sign-On)' }, false, false, true),
      row({ es: 'SLA de uptime', en: 'Uptime SLA' }, '99%', '99.5%', '99.9%'),
      row({ es: 'Soporte', en: 'Support' }, 'Email', { es: 'Chat prioritario', en: 'Priority chat' }, { es: 'Dedicado', en: 'Dedicated' }),
      row({ es: 'Onboarding asistido', en: 'Assisted onboarding' }, false, false, true),
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
  { es: 'Miembros y AI Credits a medida', en: 'Custom members & AI Credits' },
  { es: 'SLA contractual 99.9%', en: 'Contractual 99.9% SLA' },
  { es: 'Onboarding dedicado', en: 'Dedicated onboarding' },
  { es: 'Account manager asignado', en: 'Dedicated account manager' },
  { es: 'Seguridad avanzada + SSO', en: 'Advanced security + SSO' },
  { es: 'API con límites personalizados', en: 'API with custom rate limits' },
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
      tagline: { es: 'Para negocios que arrancan', en: 'For businesses getting started' },
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
      tagline: { es: 'Para equipos que crecen', en: 'For growing teams' },
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
      tagline: { es: 'Enterprise · Ajustado a tu escala', en: 'Enterprise · Tailored to your scale' },
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
      { q: '¿Qué son los AI Credits?', a: 'Los AI Credits son el combustible de Shadia AI — se consumen en cada acción que toma la IA: responder, agendar, analizar, decidir. Funciona como los créditos de Cursor: tu plan incluye un saldo mensual y puedes recargar o activar uso on-demand cuando lo necesites.' },
      { q: '¿Qué pasa si se acaban los AI Credits?', a: 'Puedes activar el uso on-demand desde tu configuración: la IA sigue operando y los créditos extra se cobran automáticamente. También puedes comprar packs por adelantado o establecer un límite de gasto mensual.' },
      { q: '¿Puedo agregar más agentes sin cambiar de plan?', a: 'Sí. Puedes agregar asientos extra por $12/mes en HOB y $15/mes en PRO. ULTRA es enterprise y los seats se definen según la operación.' },
      { q: '¿Shadia Agent está incluido en todos los planes?', a: 'Sí. Shadia Agent — el agente IA de tu equipo para threads y operación — está incluido en todos los planes sin costo adicional.' },
      { q: '¿Tienen API para integraciones?', a: 'Sí. A partir del plan PRO tienes acceso a la API y webhooks para integrar Shadia con cualquier sistema.' },
      { q: '¿Hay un periodo de prueba?', a: 'Sí. 7 días de prueba gratuita con acceso completo al plan PRO. Sin tarjeta de crédito.' },
    ];
  }
  return [
    { q: 'What are AI Credits?', a: 'AI Credits power every action Shadia takes — responding, scheduling, analyzing, deciding. Like Cursor credits: your plan includes a monthly balance and you can top up or enable on-demand usage anytime.' },
    { q: 'What happens when I run out of AI Credits?', a: 'Enable on-demand from settings: AI keeps running and extra credits bill automatically. You can also buy packs upfront or set a monthly spend cap.' },
    { q: 'Can I add more team members without upgrading?', a: 'Yes. Extra seats are $12/mo on HOB and $15/mo on PRO. ULTRA is enterprise and seats are defined in your contract.' },
    { q: 'Is Shadia Agent included in all plans?', a: 'Yes. Shadia Agent — your team copilot for threads and operations — is included in every plan at no extra cost.' },
    { q: 'Do you offer an API for integrations?', a: 'Yes. PRO and ULTRA include API access and webhooks to integrate Shadia with your stack.' },
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
        ? 'Precios Shadia AI — HOB $49, PRO $119, ULTRA Enterprise | Shadia AI'
        : 'Pricing — HOB $49, PRO $119, ULTRA Enterprise | Shadia AI',
      description: t
        ? 'Planes con AI Credits incluidos y uso on-demand. HOB $49/mes (2 seats, 300 credits), PRO $119/mes (5 seats, 1,500 credits), ULTRA enterprise con precio a medida. 7 días gratis.'
        : 'Plans with AI Credits included and on-demand usage. HOB $49/mo (2 seats, 300 credits), PRO $119/mo (5 seats, 1,500 credits), ULTRA enterprise with custom pricing. 7-day free trial.',
      canonical: t ? 'https://shadia.ai/es/precios' : 'https://shadia.ai/en/pricing',
      ogImage: t ? undefined : '/og/pricing-en.png',
    },
    hero: {
      eyebrow: t ? 'Precios' : 'Pricing',
      title: t ? 'Simple, claro,' : 'Simple, transparent,',
      titleAccent: t ? 'sin sorpresas.' : 'no surprises.',
      lead: t ? '7 días gratis en todos los planes. Sin tarjeta de crédito.' : '7-day free trial on every plan. No credit card required.',
    },
    creditsPill: t
      ? 'AI Credits = combustible para cada acción IA. Incluidos en el plan · Recargables on-demand'
      : 'AI Credits = fuel for every AI action. Included in your plan · Rechargeable on-demand',
    popularBadge: t ? 'MÁS POPULAR' : 'MOST POPULAR',
    customPrice: t ? 'Precio a medida' : 'Custom pricing',
    customPriceSub: t ? 'Ajustado a tu operación' : 'Tailored to your operation',
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
      eyebrow: t ? 'API & Desarrolladores' : 'API & Developers',
      title: t ? 'API' : 'API',
      titleAccent: t ? 'para integraciones robustas.' : 'for robust integrations.',
      lead: t
        ? 'Shadia expone una API completa que te permite integrar toda la operación con tus sistemas internos, herramientas externas o construir aplicaciones propias sobre nuestra plataforma.'
        : 'Shadia exposes a full API to integrate your operation with internal systems, external tools, or build custom apps on our platform.',
      bullets: t
        ? [
            'Consultas y mutaciones API completas',
            'Webhooks en tiempo real',
            'Autenticación OAuth 2.0',
            'Documentación interactiva incluida',
            'Rate limits generosos (PRO/ULTRA)',
            'SDK para Node.js, Python y más (ULTRA)',
          ]
        : [
            'Full API queries and mutations',
            'Real-time webhooks',
            'OAuth 2.0 authentication',
            'Interactive documentation included',
            'Generous rate limits (PRO/ULTRA)',
            'SDK for Node.js, Python, and more (ULTRA)',
          ],
      badge: t ? 'Disponible en plan PRO y ULTRA' : 'Available on PRO and ULTRA plans',
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
        : 'Try Shadia with full PRO plan features for 7 days — no credit card required.',
    },
  };
}
