import type { Lang } from '../i18n/utils';
import type { IndustryPageProps } from '../components/IndustryPageLayout.astro';
import type { CarouselSlide } from '../components/IndustryCarousel.tsx';

export type SpecialtyId = 'clinics' | 'dental' | 'mental' | 'aesthetics' | 'hospitals';

const ACCENT = '#0F766E';

// ─── Carousel slides ─────────────────────────────────────────────────────────

const clinicsCarouselEs: CarouselSlide[] = [
  {
    tag: 'Recepción',
    stat1: '60+',
    stat1Label: 'Llamadas y mensajes diarios\nen un consultorio promedio',
    stat2: '85%',
    stat2Label: 'Resueltos sin intervención\nde recepción',
    insight: 'Tu recepcionista no debería elegir entre atender al paciente en sala o contestar el teléfono.',
    detail:
      'Shadia responde consultas, confirma citas y captura datos del paciente por WhatsApp e Instagram mientras tu equipo atiende en consultorio.',
  },
  {
    tag: 'No-shows',
    stat1: '25%',
    stat1Label: 'De citas se pierden\npor ausencias sin aviso',
    stat2: '70%',
    stat2Label: 'Reducción con recordatorios\nautomáticos por WhatsApp',
    insight: 'Un hueco vacío en la agenda es ingreso que no recuperas.',
    detail:
      'Recordatorios a 24h y 2h con confirmación de un tap. Si el paciente cancela, Shadia reagenda en la misma conversación.',
  },
  {
    tag: 'Notas de sesión',
    stat1: '15 min',
    stat1Label: 'Promedio que el médico tarda\nen documentar cada consulta',
    stat2: '< 2 min',
    stat2Label: 'Con borrador automático\ngenerado por IA',
    insight: 'Documentar bien no debería costarte tiempo con el siguiente paciente esperando.',
    detail:
      'Shadia genera borradores de notas clínicas a partir de la conversación y el contexto del paciente. El médico revisa y aprueba.',
  },
];

const clinicsCarouselEn: CarouselSlide[] = [
  {
    tag: 'Front desk',
    stat1: '60+',
    stat1Label: 'Daily calls and messages\nat a typical practice',
    stat2: '85%',
    stat2Label: 'Handled without\nreception intervention',
    insight: 'Your front desk should not have to choose between the patient in the room and the ringing phone.',
    detail:
      'Shadia answers inquiries, confirms appointments and captures patient details on WhatsApp and Instagram while your team focuses on in-room care.',
  },
  {
    tag: 'No-shows',
    stat1: '25%',
    stat1Label: 'Of appointments lost\nto unannounced absences',
    stat2: '70%',
    stat2Label: 'Reduction with automated\nWhatsApp reminders',
    insight: 'An empty slot is revenue you never recover.',
    detail:
      'Reminders at 24h and 2h with one-tap confirmation. If the patient cancels, Shadia reschedules in the same conversation.',
  },
  {
    tag: 'Session notes',
    stat1: '15 min',
    stat1Label: 'Average time physicians spend\ndocumenting each visit',
    stat2: '< 2 min',
    stat2Label: 'With AI-generated\ndraft notes',
    insight: 'Good documentation should not cost you time while the next patient waits.',
    detail:
      'Shadia generates draft clinical notes from conversation context and patient history. The physician reviews and approves.',
  },
];

const dentalCarouselEs: CarouselSlide[] = [
  {
    tag: 'Agenda llena',
    stat1: '30%',
    stat1Label: 'De la agenda dental se pierde\npor no-shows',
    stat2: '40%',
    stat2Label: 'Más citas agendadas\ncon captura 24/7',
    insight: 'Cada silla vacía es un tratamiento que no se realizó.',
    detail:
      'Shadia llena huecos cancelados ofreciendo horarios disponibles al instante y reactiva pacientes inactivos con mensajes personalizados.',
  },
  {
    tag: 'Post-tratamiento',
    stat1: '3x',
    stat1Label: 'Más reseñas con seguimiento\npost-procedimiento automático',
    stat2: '48h',
    stat2Label: 'Ventana ideal para instrucciones\nde cuidado y check-in',
    insight: 'El seguimiento post-tratamiento define si el paciente regresa y si recomienda tu clínica.',
    detail:
      'Shadia envía instrucciones de cuidado, responde dudas comunes y solicita reseña en el momento de mayor satisfacción.',
  },
  {
    tag: 'Reactivación',
    stat1: '1 de 4',
    stat1Label: 'Pacientes inactivos reactivados\ncon campañas automáticas',
    stat2: '6 meses',
    stat2Label: 'Sin limpieza: umbral ideal\npara contacto proactivo',
    insight: 'Los pacientes que no regresan solos rara vez vuelven por su cuenta.',
    detail:
      'Shadia identifica pacientes sin visita reciente y envía recordatorios de limpieza o control personalizados por WhatsApp.',
  },
];

const dentalCarouselEn: CarouselSlide[] = [
  {
    tag: 'Full schedule',
    stat1: '30%',
    stat1Label: 'Of dental schedule lost\nto no-shows',
    stat2: '40%',
    stat2Label: 'More appointments booked\nwith 24/7 capture',
    insight: 'Every empty chair is a treatment that never happened.',
    detail:
      'Shadia fills cancelled slots by offering available times instantly and reactivates inactive patients with personalised outreach.',
  },
  {
    tag: 'Post-treatment',
    stat1: '3x',
    stat1Label: 'More reviews with automated\npost-procedure follow-up',
    stat2: '48h',
    stat2Label: 'Ideal window for care\ninstructions and check-in',
    insight: 'Post-treatment follow-up determines whether patients return and refer others.',
    detail:
      'Shadia sends aftercare instructions, answers common questions and requests a review at peak satisfaction.',
  },
  {
    tag: 'Reactivation',
    stat1: '1 in 4',
    stat1Label: 'Inactive patients reactivated\nwith automated campaigns',
    stat2: '6 months',
    stat2Label: 'Without cleaning: ideal threshold\nfor proactive outreach',
    insight: 'Patients who do not return on their own rarely come back without a nudge.',
    detail:
      'Shadia identifies patients without recent visits and sends personalised cleaning or check-up reminders on WhatsApp.',
  },
];

const mentalCarouselEs: CarouselSlide[] = [
  {
    tag: 'Entre sesiones',
    stat1: '72h',
    stat1Label: 'Promedio entre consulta\ny primera respuesta manual',
    stat2: '< 5 min',
    stat2Label: 'Respuesta del agente IA\nfuera de horario clínico',
    insight: 'Entre sesiones, tus pacientes necesitan seguimiento, no quedarse sin respuesta.',
    detail:
      'Shadia responde con empatía fuera de horario, escala crisis según tus protocolos y registra cada interacción para la próxima sesión.',
  },
  {
    tag: 'Documentación',
    stat1: '20 min',
    stat1Label: 'Promedio de documentación\npost-sesión por terapeuta',
    stat2: '80%',
    stat2Label: 'Del borrador generado\nrequiere solo revisión',
    insight: 'Documentar con rigor no debería competir con el tiempo terapéutico.',
    detail:
      'Shadia genera borradores estructurados de sesión con confidencialidad reforzada. El terapeuta revisa, edita y aprueba.',
  },
  {
    tag: 'Continuidad',
    stat1: '2x',
    stat1Label: 'Más adherencia al tratamiento\ncon check-ins automatizados',
    stat2: '7 días',
    stat2Label: 'Frecuencia ideal de\nseguimiento entre sesiones',
    insight: 'La continuidad del cuidado ocurre entre visitas, no solo en la consulta.',
    detail:
      'Shadia envía check-ins personalizados, recuerda tareas acordadas y detecta señales que requieren atención prioritaria.',
  },
];

const mentalCarouselEn: CarouselSlide[] = [
  {
    tag: 'Between sessions',
    stat1: '72h',
    stat1Label: 'Average wait between\npatient message and manual reply',
    stat2: '< 5 min',
    stat2Label: 'AI agent response time\noutside clinic hours',
    insight: 'Between sessions, patients need follow-up, not radio silence.',
    detail:
      'Shadia responds empathetically after hours, escalates crises per your protocols and logs every interaction for the next session.',
  },
  {
    tag: 'Documentation',
    stat1: '20 min',
    stat1Label: 'Average post-session\ndocumentation per therapist',
    stat2: '80%',
    stat2Label: 'Of AI draft notes\nneed only review',
    insight: 'Rigorous documentation should not compete with therapeutic time.',
    detail:
      'Shadia generates structured session drafts with reinforced confidentiality. The therapist reviews, edits and approves.',
  },
  {
    tag: 'Continuity',
    stat1: '2x',
    stat1Label: 'Higher treatment adherence\nwith automated check-ins',
    stat2: '7 days',
    stat2Label: 'Ideal frequency for\nbetween-session follow-up',
    insight: 'Care continuity happens between visits, not only in the room.',
    detail:
      'Shadia sends personalised check-ins, reminds patients of agreed tasks and flags signals that need priority attention.',
  },
];

const aestheticsCarouselEs: CarouselSlide[] = [
  {
    tag: 'Instagram → cita',
    stat1: '65%',
    stat1Label: 'De consultas estéticas\nllegan por Instagram DM',
    stat2: '< 3 min',
    stat2Label: 'Para convertir DM\nen consulta agendada',
    insight: 'Cada DM sin respuesta es un paciente que agenda con la competencia.',
    detail:
      'Shadia responde DMs al instante, califica el interés, comparte precios orientativos y confirma la consulta en el mismo chat.',
  },
  {
    tag: 'Post-procedimiento',
    stat1: '85%',
    stat1Label: 'De pacientes satisfechos\ncon seguimiento activo post-tratamiento',
    stat2: '24h',
    stat2Label: 'Primer check-in automático\ndespués del procedimiento',
    insight: 'El cuidado post-procedimiento define la experiencia y las reseñas.',
    detail:
      'Shadia envía instrucciones de cuidado, responde dudas frecuentes y solicita fotos de evolución según tu protocolo.',
  },
  {
    tag: 'Reactivación',
    stat1: '35%',
    stat1Label: 'Más retorno de clientes\ncon campañas estacionales',
    stat2: '90 días',
    stat2Label: 'Ventana ideal para\noferta de mantenimiento',
    insight: 'El paciente que amó su resultado quiere saber qué sigue. Díselo antes de que lo olvide.',
    detail:
      'Shadia identifica clientes listos para mantenimiento o nuevo procedimiento y envía ofertas personalizadas por WhatsApp.',
  },
];

const aestheticsCarouselEn: CarouselSlide[] = [
  {
    tag: 'Instagram → booking',
    stat1: '65%',
    stat1Label: 'Of aesthetics inquiries\narrive via Instagram DM',
    stat2: '< 3 min',
    stat2Label: 'To convert a DM\ninto a booked consult',
    insight: 'Every unanswered DM is a patient booking with a competitor.',
    detail:
      'Shadia replies instantly, qualifies interest, shares indicative pricing and confirms the consult in the same thread.',
  },
  {
    tag: 'Post-procedure',
    stat1: '85%',
    stat1Label: 'Patient satisfaction with\nactive post-treatment follow-up',
    stat2: '24h',
    stat2Label: 'First automated check-in\nafter the procedure',
    insight: 'Post-procedure care defines the experience and the reviews.',
    detail:
      'Shadia sends aftercare instructions, answers common questions and collects progress photos per your protocol.',
  },
  {
    tag: 'Reactivation',
    stat1: '35%',
    stat1Label: 'More client return rate\nwith seasonal campaigns',
    stat2: '90 days',
    stat2Label: 'Ideal window for\nmaintenance offers',
    insight: 'Patients who loved their results want to know what is next. Tell them before they forget.',
    detail:
      'Shadia identifies clients ready for maintenance or a new procedure and sends personalised offers on WhatsApp.',
  },
];

const hospitalsCarouselEs: CarouselSlide[] = [
  {
    tag: 'Multi-sede',
    stat1: '5+',
    stat1Label: 'Sedes gestionadas\nen una sola plataforma',
    stat2: '1',
    stat2Label: 'Vista unificada de citas,\nequipos y conversaciones',
    insight: 'Escalar no debería significar perder control de cada sede.',
    detail:
      'Shadia centraliza operaciones multi-sede con calendarios por ubicación, roles por departamento y reportes consolidados.',
  },
  {
    tag: 'Roles y acceso',
    stat1: '12+',
    stat1Label: 'Roles configurables\npor departamento',
    stat2: '100%',
    stat2Label: 'De interacciones auditadas\ncon timestamp y usuario',
    insight: 'Cada rol ve solo lo que necesita para su trabajo.',
    detail:
      'Permisos granulares para recepción, enfermería, médicos y administración. Auditoría completa de cada acción.',
  },
  {
    tag: 'Escala',
    stat1: '10K+',
    stat1Label: 'Conversaciones mensuales\nsin degradar calidad',
    stat2: '99.9%',
    stat2Label: 'Disponibilidad del\nagente IA enterprise',
    insight: 'El volumen de un hospital exige infraestructura que un chatbot no puede ofrecer.',
    detail:
      'Shadia escala con tu operación: múltiples agentes especializados, integración con HIS/EMR y SLA enterprise.',
  },
];

const hospitalsCarouselEn: CarouselSlide[] = [
  {
    tag: 'Multi-site',
    stat1: '5+',
    stat1Label: 'Locations managed\non one platform',
    stat2: '1',
    stat2Label: 'Unified view of appointments,\nteams and conversations',
    insight: 'Scaling should not mean losing control of each location.',
    detail:
      'Shadia centralises multi-site operations with per-location calendars, department roles and consolidated reporting.',
  },
  {
    tag: 'Roles & access',
    stat1: '12+',
    stat1Label: 'Configurable roles\nper department',
    stat2: '100%',
    stat2Label: 'Of interactions audited\nwith timestamp and user',
    insight: 'Each role sees only what they need for their job.',
    detail:
      'Granular permissions for front desk, nursing, physicians and administration. Full audit trail on every action.',
  },
  {
    tag: 'Scale',
    stat1: '10K+',
    stat1Label: 'Monthly conversations\nwithout quality degradation',
    stat2: '99.9%',
    stat2Label: 'Enterprise AI agent\nuptime',
    insight: 'Hospital volume demands infrastructure a basic chatbot cannot provide.',
    detail:
      'Shadia scales with your operation: multiple specialised agents, HIS/EMR integration and enterprise SLA.',
  },
];

const pages: Record<Lang, Record<SpecialtyId, IndustryPageProps>> = {
  es: {
    clinics: {
      lang: 'es',
      title: 'IA para Clínicas y Consultorios. Recepción, Citas y Notas | Shadia AI',
      description:
        'Automatiza recepción, citas y notas de sesión en tu consultorio. Shadia atiende pacientes 24/7 por WhatsApp, reduce no-shows y libera a tu equipo.',
      canonical: 'https://shadia.ai/es/especialidades/clinicas',
      ogImage: '/og/clinicas-es.png',
      accent: ACCENT,
      badge: 'Clínicas',
      heroTitle: 'Recepción inteligente para tu consultorio.',
      heroAccent: 'Citas, seguimiento y notas de sesión.',
      heroLead:
        'Shadia automatiza la recepción digital de tu clínica: agenda citas, confirma pacientes, genera borradores de notas clínicas y responde consultas, sin saturar a tu equipo.',
      source: 'specialty_clinics_hero',
      heroHint: 'Sin tarjeta de crédito · Configuración en 24h',
      preview: 'calendar',
      stats: [
        { v: '85%', l: 'Consultas resueltas sin recepción' },
        { v: '70%', l: 'Menos no-shows' },
        { v: '3 min', l: 'Cita confirmada en' },
        { v: '24/7', l: 'Recepción disponible' },
      ],
      pain: {
        eyebrow: 'El Problema',
        title: 'La recepción manual frena tu consultorio',
        lead: 'Entre llamadas, WhatsApp y pacientes en sala, tu equipo no alcanza. Cada mensaje sin respuesta es una cita perdida.',
        items: [
          { icon: 'phone', prob: 'Recepcionista saturada', sol: 'El agente IA atiende consultas y agenda citas mientras tu equipo cuida pacientes en consultorio.' },
          { icon: 'calendar', prob: 'No-shows sin previo aviso', sol: 'Recordatorios automáticos 24h y 2h antes con confirmación de un tap por WhatsApp.' },
          { icon: 'clipboard', prob: 'Notas de sesión atrasadas', sol: 'Borradores automáticos de notas clínicas que el médico revisa y aprueba en minutos.' },
          { icon: 'smartphone', prob: 'Mensajes fuera de horario', sol: 'Respuesta inmediata 24/7 por WhatsApp e Instagram. Ningún paciente queda sin atender.' },
          { icon: 'refresh-cw', prob: 'Reagendamientos manuales', sol: 'El paciente reagenda respondiendo al recordatorio. El calendario se actualiza solo.' },
        ],
      },
      features: {
        eyebrow: 'Funcionalidades',
        title: 'Todo lo que tu consultorio necesita',
        items: [
          { icon: 'calendar', title: 'Citas automáticas', desc: 'Agenda, confirma y reagenda citas en WhatsApp e Instagram sin intervención manual.' },
          { icon: 'bell', title: 'Recordatorios inteligentes', desc: 'Confirmaciones 24h y 2h antes. El paciente responde con un tap y el calendario se actualiza.' },
          { icon: 'file-text', title: 'Notas de sesión con IA', desc: 'Borradores estructurados de consulta generados automáticamente para revisión del médico.' },
          { icon: 'smartphone', title: 'Multi-canal', desc: 'WhatsApp, Instagram y email en un solo flujo. Ningún mensaje queda sin respuesta.' },
          { icon: 'clipboard', title: 'Historial de paciente', desc: 'Visitas, procedimientos y conversaciones centralizados por paciente.' },
          { icon: 'users', title: 'Múltiples médicos', desc: 'Calendarios y disponibilidad por especialista. El agente distribuye citas en tiempo real.' },
        ],
      },
      timeline: {
        eyebrow: 'Cómo Funciona',
        title: 'Un día típico con Shadia en tu consultorio',
        items: [
          { time: '7:30 AM', icon: 'smartphone', text: 'El consultorio abre y el agente ya respondió 10 mensajes de la noche: 6 confirmaciones, 3 nuevos pacientes y 1 reagendamiento.' },
          { time: '10:00 AM', icon: 'bell', text: 'Recordatorios enviados a 12 pacientes con cita mañana. 10 confirman de inmediato, 2 reagendan sin llamar a recepción.' },
          { time: '1:00 PM', icon: 'file-text', text: 'Tras cada consulta, Shadia genera el borrador de nota clínica. El médico revisa y aprueba en menos de 2 minutos.' },
          { time: '4:00 PM', icon: 'bot', text: 'Un paciente nuevo escribe por WhatsApp preguntando por disponibilidad. El agente califica, ofrece horarios y confirma la cita.' },
          { time: '8:00 PM', icon: 'clock', text: 'El consultorio cerró, pero el agente sigue atendiendo. Tu equipo llega mañana con la agenda optimizada.' },
        ],
      },
      trust: {
        eyebrow: 'Privacidad y Seguridad',
        title: 'Diseñado para datos de salud',
        lead: 'Tus datos y los de tus pacientes están protegidos con los más altos estándares.',
        items: [
          { icon: 'lock', title: 'Encriptación E2E', desc: 'Mensajes y datos clínicos encriptados de extremo a extremo.' },
          { icon: 'clipboard', title: 'Auditoría completa', desc: 'Registro de interacciones con timestamp y usuario.' },
          { icon: 'user', title: 'Control de acceso', desc: 'Permisos por rol para que cada empleado vea solo lo necesario.' },
        ],
      },
      carousel: { eyebrow: 'Consultorios, casos reales', slides: clinicsCarouselEs },
      faqs: [
        { q: '¿Shadia cumple con normas de privacidad para datos de salud?', a: 'Sí. Implementamos encriptación end-to-end, controles de acceso por rol y auditoría completa de interacciones.' },
        { q: '¿Cuánto tarda configurarse para mi consultorio?', a: 'Menos de 24 horas. Conectas tus canales, configuras el agente con tu especialidad y empiezas a recibir citas automáticamente.' },
        { q: '¿Las notas de sesión las escribe la IA sola?', a: 'Shadia genera borradores estructurados que el médico revisa, edita y aprueba. La decisión clínica siempre es humana.' },
        { q: '¿Funciona con múltiples médicos?', a: 'Sí. Cada médico tiene su calendario y disponibilidad. El agente distribuye citas según especialidad y horarios en tiempo real.' },
      ],
      cta: {
        title: 'Tu consultorio merece',
        titleAccent: 'una recepción inteligente',
        lead: 'Automatiza citas, seguimiento y documentación. Enfoca a tu equipo en lo que importa: cuidar pacientes.',
        source: 'specialty_clinics_cta',
        hint: 'Sin tarjeta de crédito · Configuración en 24h',
      },
    },
    dental: {
      lang: 'es',
      title: 'IA para Clínicas Dentales. Agenda Llena y Sin No-Shows | Shadia AI',
      description:
        'Llena tu agenda dental, elimina no-shows y automatiza el seguimiento post-tratamiento. Shadia gestiona citas y pacientes por WhatsApp las 24 horas.',
      canonical: 'https://shadia.ai/es/especialidades/odontologia',
      ogImage: '/og/odontologia-es.png',
      accent: ACCENT,
      badge: 'Odontología',
      heroTitle: 'Agenda dental llena.',
      heroAccent: 'Sin no-shows. Con seguimiento post-tratamiento.',
      heroLead:
        'Shadia llena tu agenda, reduce ausencias con recordatorios automáticos y envía instrucciones post-tratamiento, todo por WhatsApp, sin saturar a recepción.',
      source: 'specialty_dental_hero',
      heroHint: 'Sin tarjeta de crédito · Listo en horas',
      preview: 'calendar',
      stats: [
        { v: '70%', l: 'Menos no-shows' },
        { v: '40%', l: 'Más citas agendadas' },
        { v: '3x', l: 'Más reseñas post-tratamiento' },
        { v: '24/7', l: 'Agendamiento disponible' },
      ],
      pain: {
        eyebrow: 'El Problema',
        title: 'Sillas vacías cuestan dinero',
        lead: 'No-shows, cancelaciones de última hora y pacientes que no regresan, cada hueco vacío es un tratamiento que no se realizó.',
        items: [
          { icon: 'calendar', prob: 'Agenda con huecos', sol: 'Captura citas 24/7 y llena cancelaciones ofreciendo horarios disponibles al instante.' },
          { icon: 'bell', prob: 'No-shows sin aviso', sol: 'Recordatorios 48h y 2h antes con confirmación por WhatsApp. Reagendamiento automático si cancelan.' },
          { icon: 'refresh-cw', prob: 'Pacientes inactivos', sol: 'Reactivación automática de pacientes sin limpieza en 6+ meses con mensajes personalizados.' },
          { icon: 'file-text', prob: 'Seguimiento post-tratamiento manual', sol: 'Instrucciones de cuidado enviadas automáticamente tras cada procedimiento.' },
          { icon: 'phone', prob: 'Recepción saturada en llamadas', sol: 'El agente IA confirma, reagenda y responde consultas frecuentes sin intervención manual.' },
        ],
      },
      features: {
        eyebrow: 'Funcionalidades',
        title: 'Diseñado para clínicas dentales',
        items: [
          { icon: 'calendar', title: 'Agendamiento 24/7', desc: 'Pacientes agendan por WhatsApp a cualquier hora. Shadia consulta disponibilidad y confirma al instante.' },
          { icon: 'bell', title: 'Recordatorios automáticos', desc: 'Confirmaciones 48h y 2h antes. El paciente confirma o reagenda con un solo mensaje.' },
          { icon: 'refresh-cw', title: 'Reagendamiento sin fricción', desc: 'Cuando cancelan, Shadia ofrece los próximos espacios y completa el cambio en la misma conversación.' },
          { icon: 'user-check', title: 'Reactivación de pacientes', desc: 'Identifica pacientes inactivos y envía recordatorios de limpieza o control personalizados.' },
          { icon: 'file-text', title: 'Post-tratamiento automático', desc: 'Instrucciones de cuidado, respuestas a dudas frecuentes y solicitud de reseña en el momento ideal.' },
          { icon: 'message-square', title: 'Consultas frecuentes', desc: 'Precios, tratamientos, seguros y preparación pre-procedimiento respondidos al instante.' },
        ],
      },
      lifecycle: {
        eyebrow: 'Ciclo del paciente',
        title: 'De la consulta al',
        titleAccent: 'seguimiento completo.',
        steps: [
          { n: '1', title: 'Primera consulta', desc: 'El paciente escribe por WhatsApp. Shadia califica, ofrece horarios y confirma la cita.' },
          { n: '2', title: 'Recordatorio', desc: 'Confirmación 48h y 2h antes. Reagendamiento automático si el paciente cancela.' },
          { n: '3', title: 'Tratamiento', desc: 'Recepción libre de llamadas. El equipo se enfoca en el paciente en la silla.' },
          { n: '4', title: 'Post-tratamiento', desc: 'Instrucciones de cuidado enviadas automáticamente. Dudas respondidas al instante.' },
          { n: '5', title: 'Reactivación', desc: 'Recordatorios de limpieza y control para pacientes que no han regresado.' },
        ],
      },
      trust: {
        eyebrow: 'Privacidad y Seguridad',
        title: 'Datos de pacientes protegidos',
        lead: 'Cumplimos estándares de privacidad para información de salud.',
        items: [
          { icon: 'lock', title: 'Encriptación E2E', desc: 'Todos los mensajes y datos encriptados de extremo a extremo.' },
          { icon: 'clipboard', title: 'Auditoría completa', desc: 'Registro de cada interacción con timestamp y usuario.' },
          { icon: 'shield', title: 'Control por rol', desc: 'Recepción, asistentes y dentistas ven solo lo que necesitan.' },
        ],
      },
      carousel: { eyebrow: 'Odontología, casos reales', slides: dentalCarouselEs },
      faqs: [
        { q: '¿Necesito cambiar mi sistema de agenda?', a: 'No. Shadia se conecta a Google Calendar, Calendly y sistemas propios vía API. Tu flujo no cambia.' },
        { q: '¿Cómo reduce los no-shows?', a: 'Recordatorios 48h y 2h antes con confirmación por WhatsApp. Clínicas reportan hasta 70% menos ausencias.' },
        { q: '¿Envía instrucciones post-tratamiento?', a: 'Sí. Tras cada procedimiento, Shadia envía cuidados, responde dudas frecuentes y solicita reseña en el momento ideal.' },
        { q: '¿Cuánto tarda la configuración?', a: 'La mayoría de clínicas operan en menos de 24 horas. Conectas WhatsApp, configuras agenda y entrenas al agente. Sin código.' },
      ],
      cta: {
        title: 'Tu agenda llena.',
        titleAccent: 'Desde el primer día.',
        lead: 'Conecta WhatsApp y calendario. Shadia empieza a agendar, recordar y reactivar pacientes de inmediato.',
        source: 'specialty_dental_cta',
        hint: 'Sin tarjeta de crédito · Listo en horas',
      },
    },
    mental: {
      lang: 'es',
      title: 'IA para Salud Mental. Documentación y Apoyo Entre Sesiones | Shadia AI',
      description:
        'Documentación sensible de sesiones, apoyo entre visitas y escalación de crisis. Shadia ayuda a terapeutas y psicólogos a cuidar mejor sin quemarse.',
      canonical: 'https://shadia.ai/es/especialidades/salud-mental',
      ogImage: '/og/salud-mental-es.png',
      accent: ACCENT,
      badge: 'Salud Mental',
      heroTitle: 'Apoyo entre sesiones.',
      heroAccent: 'Documentación sensible con IA.',
      heroLead:
        'Shadia documenta sesiones con confidencialidad reforzada, responde pacientes entre visitas y escala crisis según tus protocolos, para que te enfoques en la terapia.',
      source: 'specialty_mental_hero',
      heroHint: 'Confidencialidad reforzada · Configuración en 24h',
      preview: 'agent',
      stats: [
        { v: '80%', l: 'Del borrador de notas listo para revisar' },
        { v: '2x', l: 'Más adherencia al tratamiento' },
        { v: '< 5 min', l: 'Respuesta fuera de horario' },
        { v: '100%', l: 'Interacciones auditadas' },
      ],
      pain: {
        eyebrow: 'El Problema',
        title: 'La carga administrativa quema a los terapeutas',
        lead: 'Documentar, responder mensajes entre sesiones y mantener continuidad del cuidado, todo compite con el tiempo terapéutico.',
        items: [
          { icon: 'file-text', prob: 'Documentación post-sesión extensa', sol: 'Borradores estructurados generados por IA que el terapeuta revisa y aprueba en minutos.' },
          { icon: 'message-square', prob: 'Mensajes entre sesiones sin respuesta', sol: 'El agente responde con empatía fuera de horario y escala según tus protocolos de crisis.' },
          { icon: 'clock', prob: 'Pacientes que abandonan tratamiento', sol: 'Check-ins automatizados entre sesiones que refuerzan adherencia y detectan señales de alerta.' },
          { icon: 'lock', prob: 'Confidencialidad difícil de garantizar', sol: 'Encriptación E2E, acceso por rol y auditoría completa de cada interacción.' },
          { icon: 'calendar', prob: 'Reagendamientos que interrumpen', sol: 'El paciente reagenda por WhatsApp. El calendario se actualiza sin interrumpir tu sesión.' },
        ],
      },
      features: {
        eyebrow: 'Funcionalidades',
        title: 'Pensado para salud mental',
        items: [
          { icon: 'file-text', title: 'Notas de sesión con IA', desc: 'Borradores estructurados y confidenciales que el terapeuta revisa, edita y aprueba.' },
          { icon: 'heart', title: 'Apoyo entre sesiones', desc: 'Respuestas empáticas fuera de horario con escalación automática según protocolos de crisis.' },
          { icon: 'bell', title: 'Check-ins automatizados', desc: 'Seguimiento personalizado entre visitas que refuerza tareas acordadas y adherencia.' },
          { icon: 'calendar', title: 'Citas recurrentes', desc: 'Agenda sesiones semanales o quincenales con confirmación y reagendamiento automático.' },
          { icon: 'shield', title: 'Confidencialidad reforzada', desc: 'Encriptación E2E, permisos granulares y auditoría de cada acceso a datos sensibles.' },
          { icon: 'alert-triangle', title: 'Escalación de crisis', desc: 'Detección de señales de riesgo con alerta inmediata al terapeuta según reglas definidas.' },
        ],
      },
      lifecycle: {
        eyebrow: 'Ciclo terapéutico',
        title: 'Continuidad del cuidado',
        titleAccent: 'entre cada sesión.',
        steps: [
          { n: '1', title: 'Primera consulta', desc: 'El paciente contacta por WhatsApp. Shadia califica, agenda evaluación inicial y captura contexto.' },
          { n: '2', title: 'Sesión', desc: 'El terapeuta se enfoca en la terapia. Shadia genera borrador de nota al finalizar.' },
          { n: '3', title: 'Entre sesiones', desc: 'Check-ins automatizados, respuestas empáticas y recordatorio de tareas acordadas.' },
          { n: '4', title: 'Escalación', desc: 'Señales de crisis detectadas escalan al terapeuta con alerta inmediata.' },
          { n: '5', title: 'Continuidad', desc: 'Reagendamiento fácil y seguimiento de progreso a lo largo del tratamiento.' },
        ],
      },
      trust: {
        eyebrow: 'Confidencialidad',
        title: 'Privacidad como prioridad',
        lead: 'Los datos de salud mental exigen el más alto nivel de protección.',
        items: [
          { icon: 'lock', title: 'Encriptación E2E', desc: 'Conversaciones y notas clínicas encriptadas de extremo a extremo.' },
          { icon: 'eye-off', title: 'Acceso mínimo', desc: 'Cada rol ve solo la información que necesita para su función.' },
          { icon: 'clipboard', title: 'Auditoría completa', desc: 'Registro inmutable de accesos e interacciones con timestamp.' },
        ],
      },
      carousel: { eyebrow: 'Salud mental, casos reales', slides: mentalCarouselEs },
      faqs: [
        { q: '¿La IA escribe las notas de sesión sola?', a: 'Shadia genera borradores estructurados que el terapeuta revisa, edita y aprueba. La decisión clínica siempre es humana.' },
        { q: '¿Cómo maneja situaciones de crisis?', a: 'Defines protocolos de escalación. Shadia detecta señales de riesgo y alerta al terapeuta de inmediato con el contexto completo.' },
        { q: '¿Es confidencial la comunicación entre sesiones?', a: 'Sí. Encriptación E2E, acceso por rol y auditoría completa. Cumplimos estándares de privacidad para datos de salud.' },
        { q: '¿Funciona para terapia grupal o solo individual?', a: 'Ambas. Shadia gestiona citas individuales y grupales, con documentación y seguimiento adaptados a cada modalidad.' },
      ],
      cta: {
        title: 'Menos carga administrativa.',
        titleAccent: 'Más tiempo terapéutico.',
        lead: 'Documenta, da seguimiento y apoya a tus pacientes entre sesiones, sin quemarte.',
        source: 'specialty_mental_cta',
        hint: 'Confidencialidad reforzada · Configuración en 24h',
      },
    },
    aesthetics: {
      lang: 'es',
      title: 'IA para Estética. De Instagram a Consulta Agendada | Shadia AI',
      description:
        'Convierte DMs de Instagram en consultas agendadas y automatiza el seguimiento post-procedimiento. Shadia para clínicas de estética y medicina estética.',
      canonical: 'https://shadia.ai/es/especialidades/estetica',
      ogImage: '/og/estetica-es.png',
      accent: ACCENT,
      badge: 'Estética',
      heroTitle: 'De Instagram a consulta agendada.',
      heroAccent: 'Seguimiento post-procedimiento incluido.',
      heroLead:
        'Shadia convierte DMs en citas confirmadas, responde consultas de precios al instante y envía seguimiento post-procedimiento, todo sin perder un lead.',
      source: 'specialty_aesthetics_hero',
      heroHint: 'Instagram + WhatsApp · Configuración en 24h',
      preview: 'conversations',
      stats: [
        { v: '< 3 min', l: 'DM convertido en cita' },
        { v: '65%', l: 'Consultas vía Instagram' },
        { v: '85%', l: 'Satisfacción post-tratamiento' },
        { v: '35%', l: 'Más retorno de clientes' },
      ],
      pain: {
        eyebrow: 'El Problema',
        title: 'Cada DM sin respuesta es un paciente perdido',
        lead: 'Tus pacientes llegan por Instagram, pero responder tarde o mal convierte interés en oportunidad perdida.',
        items: [
          { icon: 'instagram', prob: 'DMs sin responder', sol: 'Respuesta instantánea en Instagram y WhatsApp con calificación y agendamiento en el mismo chat.' },
          { icon: 'dollar-sign', prob: 'Consultas de precio sin seguimiento', sol: 'El agente comparte rangos orientativos y convierte la consulta en cita confirmada.' },
          { icon: 'camera', prob: 'Seguimiento post-procedimiento manual', sol: 'Instrucciones de cuidado y check-ins automáticos a 24h, 48h y 7 días post-tratamiento.' },
          { icon: 'star', prob: 'Pocas reseñas y referidos', sol: 'Solicitud de reseña en el momento de mayor satisfacción post-resultado.' },
          { icon: 'refresh-cw', prob: 'Clientes que no regresan', sol: 'Campañas de mantenimiento y reactivación personalizadas según historial de tratamientos.' },
        ],
      },
      features: {
        eyebrow: 'Funcionalidades',
        title: 'Diseñado para clínicas estéticas',
        items: [
          { icon: 'instagram', title: 'Instagram → cita', desc: 'Responde DMs al instante, califica interés y confirma consulta en el mismo hilo.' },
          { icon: 'calendar', title: 'Agendamiento multi-canal', desc: 'Citas por Instagram, WhatsApp y web con calendario sincronizado por especialista.' },
          { icon: 'message-square', title: 'Consultas de precio', desc: 'Rangos orientativos y preguntas frecuentes respondidas al instante, 24/7.' },
          { icon: 'camera', title: 'Seguimiento post-procedimiento', desc: 'Instrucciones de cuidado, check-ins y recolección de fotos de evolución automatizados.' },
          { icon: 'star', title: 'Reseñas y referidos', desc: 'Solicitud de reseña en el momento ideal y campañas de referido personalizadas.' },
          { icon: 'refresh-cw', title: 'Reactivación inteligente', desc: 'Ofertas de mantenimiento y nuevos procedimientos según historial del cliente.' },
        ],
      },
      lifecycle: {
        eyebrow: 'Viaje del paciente',
        title: 'Del DM al',
        titleAccent: 'resultado y retorno.',
        steps: [
          { n: '1', title: 'Descubrimiento', desc: 'El paciente escribe por Instagram. Shadia responde al instante con información y horarios.' },
          { n: '2', title: 'Consulta', desc: 'Cita confirmada con recordatorio automático. Recepción libre para atender en clínica.' },
          { n: '3', title: 'Procedimiento', desc: 'El equipo se enfoca en el tratamiento. Shadia prepara el seguimiento post-procedimiento.' },
          { n: '4', title: 'Post-tratamiento', desc: 'Instrucciones de cuidado, check-ins y recolección de evolución automatizados.' },
          { n: '5', title: 'Retorno', desc: 'Campañas de mantenimiento y nuevos procedimientos según historial del cliente.' },
        ],
      },
      trust: {
        eyebrow: 'Privacidad',
        title: 'Datos de pacientes protegidos',
        lead: 'Información estética y clínica protegida con los más altos estándares.',
        items: [
          { icon: 'lock', title: 'Encriptación E2E', desc: 'Conversaciones y datos de pacientes encriptados de extremo a extremo.' },
          { icon: 'camera-off', title: 'Fotos seguras', desc: 'Imágenes de evolución almacenadas con acceso controlado por rol.' },
          { icon: 'clipboard', title: 'Auditoría completa', desc: 'Registro de accesos e interacciones con timestamp.' },
        ],
      },
      carousel: { eyebrow: 'Estética, casos reales', slides: aestheticsCarouselEs },
      faqs: [
        { q: '¿Funciona con Instagram DMs?', a: 'Sí. Shadia responde DMs al instante, califica interés y agenda consultas directamente en Instagram o redirige a WhatsApp.' },
        { q: '¿Puede dar precios orientativos?', a: 'Sí. Configuras rangos y condiciones. El agente responde con información precisa y convierte la consulta en cita.' },
        { q: '¿Envía seguimiento post-procedimiento?', a: 'Sí. Instrucciones de cuidado, check-ins a 24h/48h/7 días y recolección de fotos de evolución según tu protocolo.' },
        { q: '¿Funciona con múltiples especialistas?', a: 'Sí. Calendario y disponibilidad por médico o esteticista. El agente distribuye citas según especialidad.' },
      ],
      cta: {
        title: 'Convierte cada DM',
        titleAccent: 'en una consulta agendada.',
        lead: 'Conecta Instagram y WhatsApp. Shadia responde, califica y agenda mientras tu equipo se enfoca en resultados.',
        source: 'specialty_aesthetics_cta',
        hint: 'Instagram + WhatsApp · Configuración en 24h',
      },
    },
    hospitals: {
      lang: 'es',
      title: 'IA para Hospitales. Multi-Sede, Roles y Escala Enterprise | Shadia AI',
      description:
        'Plataforma enterprise para hospitales y redes de salud. Multi-sede, roles por departamento, integración HIS/EMR y escala sin límites.',
      canonical: 'https://shadia.ai/es/especialidades/hospitales',
      ogImage: '/og/hospitales-es.png',
      accent: ACCENT,
      badge: 'Hospitales',
      heroTitle: 'IA enterprise para redes de salud.',
      heroAccent: 'Multi-sede, roles y escala.',
      heroLead:
        'Shadia centraliza operaciones multi-sede con agentes especializados por departamento, permisos granulares e integración con HIS/EMR, a escala hospitalaria.',
      source: 'specialty_hospitals_hero',
      heroHint: 'Enterprise · SLA 99.9% · Implementación guiada',
      preview: 'agent',
      stats: [
        { v: '5+', l: 'Sedes en una plataforma' },
        { v: '10K+', l: 'Conversaciones mensuales' },
        { v: '12+', l: 'Roles configurables' },
        { v: '99.9%', l: 'Disponibilidad SLA' },
      ],
      pain: {
        eyebrow: 'El Problema',
        title: 'Escalar sin perder control',
        lead: 'Múltiples sedes, departamentos y roles, coordinar la atención al paciente a escala hospitalaria exige más que un chatbot.',
        items: [
          { icon: 'building', prob: 'Operaciones fragmentadas por sede', sol: 'Vista unificada de citas, conversaciones y equipos con calendarios por ubicación.' },
          { icon: 'users', prob: 'Roles y permisos complejos', sol: 'Permisos granulares por departamento: recepción, enfermería, médicos y administración.' },
          { icon: 'bar-chart', prob: 'Sin visibilidad operativa', sol: 'Reportes consolidados por sede, departamento y tipo de interacción en tiempo real.' },
          { icon: 'link', prob: 'Integración con HIS/EMR', sol: 'Conexión con sistemas hospitalarios vía API para datos de pacientes y citas sincronizados.' },
          { icon: 'shield', prob: 'Cumplimiento y auditoría', sol: 'Auditoría completa, encriptación E2E y controles de acceso enterprise.' },
        ],
      },
      features: {
        eyebrow: 'Funcionalidades',
        title: 'Enterprise para hospitales',
        items: [
          { icon: 'building', title: 'Multi-sede', desc: 'Gestiona 5+ ubicaciones con calendarios, equipos y reportes centralizados.' },
          { icon: 'users', title: 'Roles y permisos', desc: '12+ roles configurables por departamento con acceso mínimo necesario.' },
          { icon: 'bot', title: 'Agentes especializados', desc: 'Agentes por departamento: citas, triage, resultados, admisiones y más.' },
          { icon: 'link', title: 'Integración HIS/EMR', desc: 'Conexión con sistemas hospitalarios para datos de pacientes y citas sincronizados.' },
          { icon: 'bar-chart', title: 'Reportes enterprise', desc: 'Dashboards por sede, departamento y volumen con métricas operativas en tiempo real.' },
          { icon: 'shield', title: 'SLA y soporte dedicado', desc: '99.9% uptime, implementación guiada y soporte prioritario enterprise.' },
        ],
      },
      timeline: {
        eyebrow: 'Implementación',
        title: 'De piloto a operación completa',
        items: [
          { time: 'Semana 1', icon: 'search', text: 'Diagnóstico de operaciones, mapeo de departamentos y definición de roles y permisos.' },
          { time: 'Semana 2-3', icon: 'link', text: 'Integración con HIS/EMR, configuración de calendarios multi-sede y entrenamiento de agentes.' },
          { time: 'Semana 4', icon: 'play', text: 'Piloto en una sede o departamento con monitoreo y ajustes en tiempo real.' },
          { time: 'Mes 2', icon: 'building', text: 'Expansión a sedes adicionales con plantillas replicables y onboarding de equipos.' },
          { time: 'Mes 3+', icon: 'bar-chart', text: 'Operación completa con reportes consolidados, optimización continua y soporte dedicado.' },
        ],
      },
      trust: {
        eyebrow: 'Enterprise',
        title: 'Seguridad a escala hospitalaria',
        lead: 'Infraestructura y cumplimiento diseñados para redes de salud.',
        items: [
          { icon: 'shield', title: 'Cumplimiento enterprise', desc: 'Encriptación E2E, auditoría inmutable y controles de acceso granulares.' },
          { icon: 'lock', title: 'Datos en reposo y tránsito', desc: 'Protección completa de PHI con estándares hospitalarios.' },
          { icon: 'headphones', title: 'Soporte dedicado', desc: 'Implementación guiada, SLA 99.9% y equipo de soporte prioritario.' },
        ],
      },
      carousel: { eyebrow: 'Hospitales, casos reales', slides: hospitalsCarouselEs },
      faqs: [
        { q: '¿Cuántas sedes puede gestionar?', a: 'Sin límite práctico. Shadia centraliza operaciones multi-sede con calendarios, roles y reportes por ubicación.' },
        { q: '¿Se integra con nuestro HIS/EMR?', a: 'Sí. Conectamos vía API con los principales sistemas hospitalarios para sincronizar pacientes, citas y resultados.' },
        { q: '¿Cómo funciona la implementación?', a: 'Implementación guiada en fases: diagnóstico, integración, piloto en una sede y expansión gradual con soporte dedicado.' },
        { q: '¿Qué SLA ofrecen?', a: '99.9% uptime con soporte prioritario enterprise, monitoreo proactivo y equipo dedicado post-implementación.' },
      ],
      cta: {
        title: 'Escala tu red de salud',
        titleAccent: 'sin perder control.',
        lead: 'Agenda una demo enterprise. Te mostramos cómo Shadia centraliza operaciones multi-sede con roles, integración y escala.',
        source: 'specialty_hospitals_cta',
        hint: 'Enterprise · Implementación guiada',
      },
    },
  },
  en: {
    clinics: {
      lang: 'en',
      title: 'AI for Medical Clinics. Reception, Appointments & Session Notes | Shadia AI',
      description:
        'Automate front desk, appointments and session notes for your practice. Shadia handles patients 24/7 on WhatsApp, reduces no-shows and frees your team.',
      canonical: 'https://shadia.ai/en/specialties/clinics',
      ogImage: '/og/clinics-en.png',
      accent: ACCENT,
      badge: 'Clinics',
      heroTitle: 'Smart front desk for your practice.',
      heroAccent: 'Appointments, follow-up and session notes.',
      heroLead:
        'Shadia automates your clinic reception: books appointments, confirms patients, generates clinical note drafts and answers inquiries, without overwhelming your team.',
      source: 'specialty_clinics_hero',
      heroHint: 'No credit card required · Setup in 24h',
      preview: 'calendar',
      stats: [
        { v: '85%', l: 'Inquiries handled without front desk' },
        { v: '70%', l: 'Fewer no-shows' },
        { v: '3 min', l: 'Appointment confirmed in' },
        { v: '24/7', l: 'Reception available' },
      ],
      pain: {
        eyebrow: 'The Problem',
        title: 'Manual front desk slows your practice down',
        lead: 'Between calls, WhatsApp and patients in the room, your team cannot keep up. Every unanswered message is a lost appointment.',
        items: [
          { icon: 'phone', prob: 'Overwhelmed front desk', sol: 'The AI agent handles inquiries and books appointments while your team cares for in-room patients.' },
          { icon: 'calendar', prob: 'Unannounced no-shows', sol: 'Automated reminders 24h and 2h before with one-tap WhatsApp confirmation.' },
          { icon: 'clipboard', prob: 'Delayed session notes', sol: 'Automatic clinical note drafts the physician reviews and approves in minutes.' },
          { icon: 'smartphone', prob: 'After-hours messages', sol: 'Immediate 24/7 response on WhatsApp and Instagram. No patient left unattended.' },
          { icon: 'refresh-cw', prob: 'Manual rescheduling', sol: 'Patients reschedule by replying to the reminder. The calendar updates automatically.' },
        ],
      },
      features: {
        eyebrow: 'Capabilities',
        title: 'Everything your practice needs',
        items: [
          { icon: 'calendar', title: 'Automatic appointments', desc: 'Books, confirms and reschedules on WhatsApp and Instagram without manual intervention.' },
          { icon: 'bell', title: 'Smart reminders', desc: '24h and 2h confirmations. Patients reply with one tap and the calendar updates.' },
          { icon: 'file-text', title: 'AI session notes', desc: 'Structured visit drafts generated automatically for physician review.' },
          { icon: 'smartphone', title: 'Multi-channel', desc: 'WhatsApp, Instagram and email in one flow. No message goes unanswered.' },
          { icon: 'clipboard', title: 'Patient history', desc: 'Visits, procedures and conversations centralized per patient.' },
          { icon: 'users', title: 'Multiple providers', desc: 'Calendars and availability per specialist. The agent distributes appointments in real time.' },
        ],
      },
      timeline: {
        eyebrow: 'How It Works',
        title: 'A typical day with Shadia at your practice',
        items: [
          { time: '7:30 AM', icon: 'smartphone', text: 'The practice opens and the agent already handled 10 overnight messages: 6 confirmations, 3 new patients and 1 reschedule.' },
          { time: '10:00 AM', icon: 'bell', text: 'Reminders sent to 12 patients with appointments tomorrow. 10 confirm immediately, 2 reschedule without calling front desk.' },
          { time: '1:00 PM', icon: 'file-text', text: 'After each visit, Shadia generates the clinical note draft. The physician reviews and approves in under 2 minutes.' },
          { time: '4:00 PM', icon: 'bot', text: 'A new patient writes on WhatsApp asking about availability. The agent qualifies, offers times and confirms the appointment.' },
          { time: '8:00 PM', icon: 'clock', text: 'The practice is closed, but the agent keeps working. Your team arrives tomorrow with an optimized schedule.' },
        ],
      },
      trust: {
        eyebrow: 'Privacy & Security',
        title: 'Built for health data',
        lead: 'Your data and your patients\' data are protected with the highest standards.',
        items: [
          { icon: 'lock', title: 'E2E encryption', desc: 'Messages and clinical data encrypted end-to-end.' },
          { icon: 'clipboard', title: 'Full audit trail', desc: 'Every interaction logged with timestamp and user.' },
          { icon: 'user', title: 'Role-based access', desc: 'Permissions per role so each employee sees only what they need.' },
        ],
      },
      carousel: { eyebrow: 'Medical practices, real scenarios', slides: clinicsCarouselEn },
      faqs: [
        { q: 'Does Shadia comply with health data privacy regulations?', a: 'Yes. We implement end-to-end encryption, role-based access controls and full audit logs of all interactions.' },
        { q: 'How long does setup take for my practice?', a: 'Less than 24 hours. Connect your channels, configure the agent with your specialty and start receiving appointments automatically.' },
        { q: 'Does the AI write session notes on its own?', a: 'Shadia generates structured drafts the physician reviews, edits and approves. Clinical decisions always remain human.' },
        { q: 'Does it work with multiple providers?', a: 'Yes. Each provider has their own calendar and availability. The agent distributes appointments by specialty and real-time schedules.' },
      ],
      cta: {
        title: 'Your practice deserves',
        titleAccent: 'a smart front desk',
        lead: 'Automate appointments, follow-up and documentation. Focus your team on what matters: patient care.',
        source: 'specialty_clinics_cta',
        hint: 'No credit card required · Setup in 24h',
      },
    },
    dental: {
      lang: 'en',
      title: 'AI for Dental Clinics. Full Schedule, Fewer No-Shows | Shadia AI',
      description:
        'Fill your dental schedule, eliminate no-shows and automate post-treatment follow-up. Shadia manages appointments and patients on WhatsApp around the clock.',
      canonical: 'https://shadia.ai/en/specialties/dental',
      ogImage: '/og/dental-en.png',
      accent: ACCENT,
      badge: 'Dental',
      heroTitle: 'A full dental schedule.',
      heroAccent: 'Fewer no-shows. Post-treatment follow-up included.',
      heroLead:
        'Shadia fills your schedule, reduces absences with automated reminders and sends post-treatment instructions, all on WhatsApp, without overwhelming front desk.',
      source: 'specialty_dental_hero',
      heroHint: 'No credit card required · Live in hours',
      preview: 'calendar',
      stats: [
        { v: '70%', l: 'Fewer no-shows' },
        { v: '40%', l: 'More appointments booked' },
        { v: '3x', l: 'More post-treatment reviews' },
        { v: '24/7', l: 'Booking available' },
      ],
      pain: {
        eyebrow: 'The Problem',
        title: 'Empty chairs cost money',
        lead: 'No-shows, last-minute cancellations and patients who never return, every empty slot is a treatment that never happened.',
        items: [
          { icon: 'calendar', prob: 'Schedule gaps', sol: 'Capture appointments 24/7 and fill cancellations by offering available times instantly.' },
          { icon: 'bell', prob: 'Unannounced no-shows', sol: 'Reminders 48h and 2h before with WhatsApp confirmation. Automatic rescheduling if they cancel.' },
          { icon: 'refresh-cw', prob: 'Inactive patients', sol: 'Automatic reactivation of patients without a cleaning in 6+ months with personalised messages.' },
          { icon: 'file-text', prob: 'Manual post-treatment follow-up', sol: 'Aftercare instructions sent automatically after every procedure.' },
          { icon: 'phone', prob: 'Front desk buried in calls', sol: 'The AI agent confirms, reschedules and answers common questions without manual intervention.' },
        ],
      },
      features: {
        eyebrow: 'Capabilities',
        title: 'Built for dental practices',
        items: [
          { icon: 'calendar', title: '24/7 booking', desc: 'Patients book on WhatsApp at any time. Shadia checks availability and confirms instantly.' },
          { icon: 'bell', title: 'Automatic reminders', desc: '48h and 2h confirmations. Patients confirm or reschedule with a single reply.' },
          { icon: 'refresh-cw', title: 'Seamless rescheduling', desc: 'When patients cancel, Shadia offers the next available slots in the same conversation.' },
          { icon: 'user-check', title: 'Patient reactivation', desc: 'Identifies inactive patients and sends personalised cleaning or check-up reminders.' },
          { icon: 'file-text', title: 'Automated post-treatment', desc: 'Aftercare instructions, common question answers and review requests at the ideal moment.' },
          { icon: 'message-square', title: 'Common inquiries', desc: 'Pricing, treatments, insurance and pre-procedure prep answered instantly.' },
        ],
      },
      lifecycle: {
        eyebrow: 'Patient journey',
        title: 'From consult to',
        titleAccent: 'complete follow-up.',
        steps: [
          { n: '1', title: 'First consult', desc: 'The patient writes on WhatsApp. Shadia qualifies, offers times and confirms the appointment.' },
          { n: '2', title: 'Reminder', desc: '48h and 2h confirmation. Automatic rescheduling if the patient cancels.' },
          { n: '3', title: 'Treatment', desc: 'Front desk free of calls. The team focuses on the patient in the chair.' },
          { n: '4', title: 'Post-treatment', desc: 'Aftercare instructions sent automatically. Questions answered instantly.' },
          { n: '5', title: 'Reactivation', desc: 'Cleaning and check-up reminders for patients who have not returned.' },
        ],
      },
      trust: {
        eyebrow: 'Privacy & Security',
        title: 'Patient data protected',
        lead: 'We meet privacy standards for health information.',
        items: [
          { icon: 'lock', title: 'E2E encryption', desc: 'All messages and data encrypted end-to-end.' },
          { icon: 'clipboard', title: 'Full audit trail', desc: 'Every interaction logged with timestamp and user.' },
          { icon: 'shield', title: 'Role-based control', desc: 'Front desk, assistants and dentists see only what they need.' },
        ],
      },
      carousel: { eyebrow: 'Dental practices, real scenarios', slides: dentalCarouselEn },
      faqs: [
        { q: 'Do I need to change my booking system?', a: 'No. Shadia connects to Google Calendar, Calendly and proprietary systems via API. Your workflow stays the same.' },
        { q: 'How does it reduce no-shows?', a: 'Reminders 48h and 2h before with WhatsApp confirmation. Practices report up to 70% fewer absences.' },
        { q: 'Does it send post-treatment instructions?', a: 'Yes. After each procedure, Shadia sends aftercare, answers common questions and requests a review at peak satisfaction.' },
        { q: 'How long does setup take?', a: 'Most practices are live in under 24 hours. Connect WhatsApp, configure your calendar and train the agent. No code required.' },
      ],
      cta: {
        title: 'A full schedule.',
        titleAccent: 'From day one.',
        lead: 'Connect WhatsApp and calendar. Shadia starts booking, reminding and reactivating patients immediately.',
        source: 'specialty_dental_cta',
        hint: 'No credit card required · Live in hours',
      },
    },
    mental: {
      lang: 'en',
      title: 'AI for Mental Health. Session Documentation & Between-Visit Support | Shadia AI',
      description:
        'Sensitive session documentation, between-visit support and crisis escalation. Shadia helps therapists and psychologists deliver better care without burning out.',
      canonical: 'https://shadia.ai/en/specialties/mental-health',
      ogImage: '/og/mental-health-en.png',
      accent: ACCENT,
      badge: 'Mental Health',
      heroTitle: 'Support between sessions.',
      heroAccent: 'Sensitive documentation with AI.',
      heroLead:
        'Shadia documents sessions with reinforced confidentiality, responds to patients between visits and escalates crises per your protocols, so you can focus on therapy.',
      source: 'specialty_mental_hero',
      heroHint: 'Reinforced confidentiality · Setup in 24h',
      preview: 'agent',
      stats: [
        { v: '80%', l: 'Of note drafts ready for review' },
        { v: '2x', l: 'Higher treatment adherence' },
        { v: '< 5 min', l: 'After-hours response time' },
        { v: '100%', l: 'Interactions audited' },
      ],
      pain: {
        eyebrow: 'The Problem',
        title: 'Administrative burden burns out therapists',
        lead: 'Documentation, between-session messages and care continuity, all compete with therapeutic time.',
        items: [
          { icon: 'file-text', prob: 'Lengthy post-session documentation', sol: 'Structured AI-generated drafts the therapist reviews and approves in minutes.' },
          { icon: 'message-square', prob: 'Between-session messages unanswered', sol: 'The agent responds empathetically after hours and escalates per your crisis protocols.' },
          { icon: 'clock', prob: 'Patients dropping out of treatment', sol: 'Automated between-session check-ins that reinforce adherence and flag warning signs.' },
          { icon: 'lock', prob: 'Confidentiality hard to guarantee', sol: 'E2E encryption, role-based access and full audit of every interaction.' },
          { icon: 'calendar', prob: 'Rescheduling that interrupts flow', sol: 'Patients reschedule on WhatsApp. The calendar updates without interrupting your session.' },
        ],
      },
      features: {
        eyebrow: 'Capabilities',
        title: 'Built for mental health',
        items: [
          { icon: 'file-text', title: 'AI session notes', desc: 'Structured, confidential drafts the therapist reviews, edits and approves.' },
          { icon: 'heart', title: 'Between-session support', desc: 'Empathetic after-hours responses with automatic escalation per crisis protocols.' },
          { icon: 'bell', title: 'Automated check-ins', desc: 'Personalised between-visit follow-up that reinforces agreed tasks and adherence.' },
          { icon: 'calendar', title: 'Recurring appointments', desc: 'Books weekly or biweekly sessions with automatic confirmation and rescheduling.' },
          { icon: 'shield', title: 'Reinforced confidentiality', desc: 'E2E encryption, granular permissions and audit of every access to sensitive data.' },
          { icon: 'alert-triangle', title: 'Crisis escalation', desc: 'Risk signal detection with immediate alert to the therapist per defined rules.' },
        ],
      },
      lifecycle: {
        eyebrow: 'Therapeutic cycle',
        title: 'Care continuity',
        titleAccent: 'between every session.',
        steps: [
          { n: '1', title: 'First consult', desc: 'The patient contacts via WhatsApp. Shadia qualifies, books the initial evaluation and captures context.' },
          { n: '2', title: 'Session', desc: 'The therapist focuses on therapy. Shadia generates a note draft when the session ends.' },
          { n: '3', title: 'Between sessions', desc: 'Automated check-ins, empathetic responses and reminders of agreed tasks.' },
          { n: '4', title: 'Escalation', desc: 'Crisis signals detected escalate to the therapist with immediate alert.' },
          { n: '5', title: 'Continuity', desc: 'Easy rescheduling and progress tracking throughout treatment.' },
        ],
      },
      trust: {
        eyebrow: 'Confidentiality',
        title: 'Privacy as a priority',
        lead: 'Mental health data demands the highest level of protection.',
        items: [
          { icon: 'lock', title: 'E2E encryption', desc: 'Conversations and clinical notes encrypted end-to-end.' },
          { icon: 'eye-off', title: 'Minimum access', desc: 'Each role sees only the information needed for their function.' },
          { icon: 'clipboard', title: 'Full audit trail', desc: 'Immutable log of access and interactions with timestamps.' },
        ],
      },
      carousel: { eyebrow: 'Mental health, real scenarios', slides: mentalCarouselEn },
      faqs: [
        { q: 'Does the AI write session notes on its own?', a: 'Shadia generates structured drafts the therapist reviews, edits and approves. Clinical decisions always remain human.' },
        { q: 'How does it handle crisis situations?', a: 'You define escalation protocols. Shadia detects risk signals and alerts the therapist immediately with full context.' },
        { q: 'Is between-session communication confidential?', a: 'Yes. E2E encryption, role-based access and full audit logs. We meet health data privacy standards.' },
        { q: 'Does it work for group therapy or only individual?', a: 'Both. Shadia manages individual and group appointments with documentation and follow-up adapted to each modality.' },
      ],
      cta: {
        title: 'Less admin burden.',
        titleAccent: 'More therapeutic time.',
        lead: 'Document, follow up and support patients between sessions, without burning out.',
        source: 'specialty_mental_cta',
        hint: 'Reinforced confidentiality · Setup in 24h',
      },
    },
    aesthetics: {
      lang: 'en',
      title: 'AI for Aesthetics. From Instagram DM to Booked Consult | Shadia AI',
      description:
        'Convert Instagram DMs into booked consults and automate post-procedure follow-up. Shadia for aesthetics clinics and medical spas.',
      canonical: 'https://shadia.ai/en/specialties/aesthetics',
      ogImage: '/og/aesthetics-en.png',
      accent: ACCENT,
      badge: 'Aesthetics',
      heroTitle: 'From Instagram DM to booked consult.',
      heroAccent: 'Post-procedure follow-up included.',
      heroLead:
        'Shadia converts DMs into confirmed appointments, answers pricing inquiries instantly and sends post-procedure follow-up, without losing a single lead.',
      source: 'specialty_aesthetics_hero',
      heroHint: 'Instagram + WhatsApp · Setup in 24h',
      preview: 'conversations',
      stats: [
        { v: '< 3 min', l: 'DM converted to appointment' },
        { v: '65%', l: 'Inquiries via Instagram' },
        { v: '85%', l: 'Post-treatment satisfaction' },
        { v: '35%', l: 'Higher client return rate' },
      ],
      pain: {
        eyebrow: 'The Problem',
        title: 'Every unanswered DM is a lost patient',
        lead: 'Your patients arrive via Instagram, but slow or poor responses turn interest into missed opportunity.',
        items: [
          { icon: 'instagram', prob: 'Unanswered DMs', sol: 'Instant response on Instagram and WhatsApp with qualification and booking in the same thread.' },
          { icon: 'dollar-sign', prob: 'Pricing inquiries without follow-up', sol: 'The agent shares indicative ranges and converts the inquiry into a confirmed appointment.' },
          { icon: 'camera', prob: 'Manual post-procedure follow-up', sol: 'Automated aftercare instructions and check-ins at 24h, 48h and 7 days post-treatment.' },
          { icon: 'star', prob: 'Few reviews and referrals', sol: 'Review requests at peak post-result satisfaction.' },
          { icon: 'refresh-cw', prob: 'Clients who never return', sol: 'Personalised maintenance and reactivation campaigns based on treatment history.' },
        ],
      },
      features: {
        eyebrow: 'Capabilities',
        title: 'Built for aesthetics clinics',
        items: [
          { icon: 'instagram', title: 'Instagram → booking', desc: 'Replies to DMs instantly, qualifies interest and confirms consults in the same thread.' },
          { icon: 'calendar', title: 'Multi-channel booking', desc: 'Appointments via Instagram, WhatsApp and web with synced calendars per specialist.' },
          { icon: 'message-square', title: 'Pricing inquiries', desc: 'Indicative ranges and FAQs answered instantly, 24/7.' },
          { icon: 'camera', title: 'Post-procedure follow-up', desc: 'Automated aftercare, check-ins and progress photo collection.' },
          { icon: 'star', title: 'Reviews and referrals', desc: 'Review requests at the ideal moment and personalised referral campaigns.' },
          { icon: 'refresh-cw', title: 'Smart reactivation', desc: 'Maintenance offers and new procedures based on client history.' },
        ],
      },
      lifecycle: {
        eyebrow: 'Patient journey',
        title: 'From DM to',
        titleAccent: 'result and return.',
        steps: [
          { n: '1', title: 'Discovery', desc: 'The patient writes on Instagram. Shadia responds instantly with information and available times.' },
          { n: '2', title: 'Consult', desc: 'Appointment confirmed with automatic reminder. Front desk free to focus on in-clinic care.' },
          { n: '3', title: 'Procedure', desc: 'The team focuses on treatment. Shadia prepares post-procedure follow-up.' },
          { n: '4', title: 'Post-treatment', desc: 'Automated aftercare, check-ins and progress collection.' },
          { n: '5', title: 'Return', desc: 'Maintenance and new procedure campaigns based on client history.' },
        ],
      },
      trust: {
        eyebrow: 'Privacy',
        title: 'Patient data protected',
        lead: 'Aesthetic and clinical information protected with the highest standards.',
        items: [
          { icon: 'lock', title: 'E2E encryption', desc: 'Patient conversations and data encrypted end-to-end.' },
          { icon: 'camera-off', title: 'Secure photos', desc: 'Progress images stored with role-controlled access.' },
          { icon: 'clipboard', title: 'Full audit trail', desc: 'Access and interaction logs with timestamps.' },
        ],
      },
      carousel: { eyebrow: 'Aesthetics, real scenarios', slides: aestheticsCarouselEn },
      faqs: [
        { q: 'Does it work with Instagram DMs?', a: 'Yes. Shadia replies to DMs instantly, qualifies interest and books consults directly on Instagram or redirects to WhatsApp.' },
        { q: 'Can it provide indicative pricing?', a: 'Yes. You configure ranges and conditions. The agent responds with accurate information and converts the inquiry into an appointment.' },
        { q: 'Does it send post-procedure follow-up?', a: 'Yes. Aftercare instructions, check-ins at 24h/48h/7 days and progress photo collection per your protocol.' },
        { q: 'Does it work with multiple specialists?', a: 'Yes. Calendar and availability per physician or aesthetician. The agent distributes appointments by specialty.' },
      ],
      cta: {
        title: 'Turn every DM',
        titleAccent: 'into a booked consult.',
        lead: 'Connect Instagram and WhatsApp. Shadia responds, qualifies and books while your team focuses on results.',
        source: 'specialty_aesthetics_cta',
        hint: 'Instagram + WhatsApp · Setup in 24h',
      },
    },
    hospitals: {
      lang: 'en',
      title: 'AI for Hospitals. Multi-Site, Roles & Enterprise Scale | Shadia AI',
      description:
        'Enterprise platform for hospitals and health networks. Multi-site, department roles, HIS/EMR integration and unlimited scale.',
      canonical: 'https://shadia.ai/en/specialties/hospitals',
      ogImage: '/og/hospitals-en.png',
      accent: ACCENT,
      badge: 'Hospitals',
      heroTitle: 'Enterprise AI for health networks.',
      heroAccent: 'Multi-site, roles and scale.',
      heroLead:
        'Shadia centralises multi-site operations with department-specialised agents, granular permissions and HIS/EMR integration, at hospital scale.',
      source: 'specialty_hospitals_hero',
      heroHint: 'Enterprise · 99.9% SLA · Guided implementation',
      preview: 'agent',
      stats: [
        { v: '5+', l: 'Locations on one platform' },
        { v: '10K+', l: 'Monthly conversations' },
        { v: '12+', l: 'Configurable roles' },
        { v: '99.9%', l: 'SLA uptime' },
      ],
      pain: {
        eyebrow: 'The Problem',
        title: 'Scaling without losing control',
        lead: 'Multiple locations, departments and roles, coordinating patient care at hospital scale demands more than a chatbot.',
        items: [
          { icon: 'building', prob: 'Fragmented operations by location', sol: 'Unified view of appointments, conversations and teams with per-location calendars.' },
          { icon: 'users', prob: 'Complex roles and permissions', sol: 'Granular permissions by department: front desk, nursing, physicians and administration.' },
          { icon: 'bar-chart', prob: 'No operational visibility', sol: 'Consolidated reports by location, department and interaction type in real time.' },
          { icon: 'link', prob: 'HIS/EMR integration', sol: 'Connection to hospital systems via API for synced patient data and appointments.' },
          { icon: 'shield', prob: 'Compliance and audit', sol: 'Full audit trail, E2E encryption and enterprise access controls.' },
        ],
      },
      features: {
        eyebrow: 'Capabilities',
        title: 'Enterprise for hospitals',
        items: [
          { icon: 'building', title: 'Multi-site', desc: 'Manage 5+ locations with centralised calendars, teams and reporting.' },
          { icon: 'users', title: 'Roles and permissions', desc: '12+ configurable roles by department with least-privilege access.' },
          { icon: 'bot', title: 'Specialised agents', desc: 'Department agents: appointments, triage, results, admissions and more.' },
          { icon: 'link', title: 'HIS/EMR integration', desc: 'Connection to hospital systems for synced patient data and appointments.' },
          { icon: 'bar-chart', title: 'Enterprise reporting', desc: 'Dashboards by location, department and volume with real-time operational metrics.' },
          { icon: 'shield', title: 'SLA and dedicated support', desc: '99.9% uptime, guided implementation and priority enterprise support.' },
        ],
      },
      timeline: {
        eyebrow: 'Implementation',
        title: 'From pilot to full operation',
        items: [
          { time: 'Week 1', icon: 'search', text: 'Operations assessment, department mapping and role and permission definition.' },
          { time: 'Week 2-3', icon: 'link', text: 'HIS/EMR integration, multi-site calendar setup and agent training.' },
          { time: 'Week 4', icon: 'play', text: 'Pilot at one location or department with real-time monitoring and adjustments.' },
          { time: 'Month 2', icon: 'building', text: 'Expansion to additional locations with replicable templates and team onboarding.' },
          { time: 'Month 3+', icon: 'bar-chart', text: 'Full operation with consolidated reporting, continuous optimisation and dedicated support.' },
        ],
      },
      trust: {
        eyebrow: 'Enterprise',
        title: 'Security at hospital scale',
        lead: 'Infrastructure and compliance designed for health networks.',
        items: [
          { icon: 'shield', title: 'Enterprise compliance', desc: 'E2E encryption, immutable audit logs and granular access controls.' },
          { icon: 'lock', title: 'Data at rest and in transit', desc: 'Full PHI protection with hospital-grade standards.' },
          { icon: 'headphones', title: 'Dedicated support', desc: 'Guided implementation, 99.9% SLA and priority support team.' },
        ],
      },
      carousel: { eyebrow: 'Hospitals, real scenarios', slides: hospitalsCarouselEn },
      faqs: [
        { q: 'How many locations can it manage?', a: 'No practical limit. Shadia centralises multi-site operations with calendars, roles and reports per location.' },
        { q: 'Does it integrate with our HIS/EMR?', a: 'Yes. We connect via API with major hospital systems to sync patients, appointments and results.' },
        { q: 'How does implementation work?', a: 'Guided phased implementation: assessment, integration, pilot at one location and gradual expansion with dedicated support.' },
        { q: 'What SLA do you offer?', a: '99.9% uptime with priority enterprise support, proactive monitoring and a dedicated post-implementation team.' },
      ],
      cta: {
        title: 'Scale your health network',
        titleAccent: 'without losing control.',
        lead: 'Book an enterprise demo. We show you how Shadia centralises multi-site operations with roles, integration and scale.',
        source: 'specialty_hospitals_cta',
        hint: 'Enterprise · Guided implementation',
      },
    },
  },
};

export function getSpecialtyPage(lang: Lang, id: SpecialtyId): IndustryPageProps {
  return pages[lang][id];
}
