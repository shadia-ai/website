import type { Lang } from '../i18n/utils';
import type { IndustryPageProps } from '../components/IndustryPageLayout.astro';
import type { CarouselSlide } from '../components/IndustryCarousel.tsx';

export type IndustryId =
  | 'healthcare'
  | 'ecommerce'
  | 'sales'
  | 'support'
  | 'agencies'
  | 'dental'
  | 'beauty';

const healthcareFaqSchemaEs = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Shadia cumple con normativas de privacidad para datos de salud?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Shadia implementa encriptación end-to-end, controles de acceso por rol y auditoría completa de todas las interacciones para cumplir con los estándares de privacidad.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tarda en configurarse para una clínica?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Menos de 24 horas. Conectas tus canales, configuras el agente con tu especialidad y protocolos, y empiezas a recibir citas automáticamente.',
      },
    },
  ],
};

const healthcareFaqSchemaEn = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does Shadia comply with health data privacy regulations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Shadia implements end-to-end encryption, role-based access controls and full audit logs of all interactions to meet privacy standards.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to set up for a clinic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Less than 24 hours. Connect your channels, tell Shadia about your specialty and protocols, and you start receiving automated appointments.',
      },
    },
  ],
};

const ecommerceCarouselEs: CarouselSlide[] = [
  {
    tag: 'Carrito abandonado',
    stat1: '70%',
    stat1Label: 'De los carritos se abandonan\nantes del pago',
    stat2: '35%',
    stat2Label: 'Tasa de recuperación con\ncontacto por WhatsApp',
    insight:
      'El cliente ya eligió tus productos. Lo único que faltó fue el empujón en el momento correcto.',
    detail:
      'Shadia detecta el abandono y envía un mensaje en WhatsApp en menos de 30 minutos, referenciando los productos exactos del carrito. Sin descuentos automáticos — solo el contexto adecuado en el momento ideal.',
  },
  {
    tag: 'Soporte repetitivo',
    stat1: '80%',
    stat1Label: 'De los tickets son preguntas\nrepetitivas de estado y envío',
    stat2: '< 90 s',
    stat2Label: 'Tiempo de resolución del\nagente IA sin intervención humana',
    insight:
      '¿Dónde está mi pedido? ¿Cómo hago una devolución? Tu equipo no debería responder esto nunca más.',
    detail:
      'El agente IA consulta tu sistema en tiempo real y responde con información precisa. Tu equipo solo ve los casos que realmente lo necesitan — los complejos, los de retención, los de valor.',
  },
  {
    tag: 'Post-compra',
    stat1: '6x',
    stat1Label: 'Más reseñas generadas\ntras el seguimiento de IA',
    stat2: '4.8★',
    stat2Label: 'Calificación promedio de tiendas\ncon seguimiento post-entrega activo',
    insight:
      'El momento después de la entrega es oro. La mayoría de las marcas lo desperdicia con silencio.',
    detail:
      'Shadia envía el mensaje de seguimiento en el momento exacto de mayor satisfacción: cuando el cliente acaba de recibir su pedido. Una pregunta simple en WhatsApp genera 6 veces más reseñas que cualquier campaña de email.',
  },
  {
    tag: 'Recompra',
    stat1: '2.4x',
    stat1Label: 'Más recompras en los primeros\n90 días con seguimiento activo',
    stat2: '30 días',
    stat2Label: 'Ventana de mayor probabilidad\nde segunda compra',
    insight:
      'El cliente que compró una vez ya confía en ti. El segundo pedido cuesta diez veces menos que el primero.',
    detail:
      'Shadia identifica la ventana de recompra de cada cliente y lanza campañas de upsell y reactivación personalizadas. Basadas en historial real, no en segmentos genéricos.',
  },
];

const ecommerceCarouselEn: CarouselSlide[] = [
  {
    tag: 'Abandoned cart',
    stat1: '70%',
    stat1Label: 'Of carts abandoned\nbefore checkout',
    stat2: '35%',
    stat2Label: 'Recovery rate with\nWhatsApp follow-up',
    insight:
      'The customer already chose your products. All they needed was the right nudge at exactly the right moment.',
    detail:
      'Shadia detects abandonment and sends a WhatsApp message within 30 minutes, referencing the exact items in the cart. No automatic discounts — just the right context at the right time.',
  },
  {
    tag: 'Support volume',
    stat1: '80%',
    stat1Label: 'Of tickets are repetitive\norder and shipping queries',
    stat2: '< 90 s',
    stat2Label: 'AI resolution time\nwithout human escalation',
    insight: '"Where is my order?" Your team should never have to answer that question again.',
    detail:
      'The AI agent queries your system in real time and responds with precise information. Your team only sees the cases that genuinely need human judgement — complex issues, retention moments, high-value accounts.',
  },
  {
    tag: 'Post-purchase',
    stat1: '6x',
    stat1Label: 'More reviews generated\nafter AI follow-up',
    stat2: '4.8★',
    stat2Label: 'Average rating for stores\nwith active post-delivery follow-up',
    insight: 'The moment after delivery is gold. Most brands waste it with silence.',
    detail:
      'Shadia sends the follow-up at the exact peak of customer satisfaction: when the order just arrived. A simple WhatsApp message generates 6x more reviews than any email campaign.',
  },
  {
    tag: 'Repeat purchase',
    stat1: '2.4x',
    stat1Label: 'More repeat purchases\nin the first 90 days',
    stat2: '30 days',
    stat2Label: 'Window of highest\nsecond-purchase probability',
    insight:
      'A customer who has bought once already trusts you. The second sale costs ten times less than the first.',
    detail:
      'Shadia identifies the repurchase window for each customer and triggers personalised upsell and reactivation campaigns — based on real purchase history, not generic segments.',
  },
];

const supportCarouselEs: CarouselSlide[] = [
  {
    tag: 'Resolución autónoma',
    stat1: '80%',
    stat1Label: 'De tickets resueltos sin\nintervención de tu equipo',
    stat2: '< 2 min',
    stat2Label: 'Tiempo de primera respuesta\ndel agente IA, 24/7',
    insight:
      'La mayoría de los tickets no necesita a tu equipo. Necesita acceso a la información correcta, en el momento correcto.',
    detail:
      'Shadia accede a tus sistemas en tiempo real — historial de pedidos, estados, políticas — y resuelve sin escalar. Tu equipo solo ve lo que realmente requiere criterio humano.',
  },
  {
    tag: 'Capacidad del equipo',
    stat1: '3x',
    stat1Label: 'Más volumen gestionado\nsin contratar más personas',
    stat2: '0',
    stat2Label: 'Contrataciones adicionales\npara triplicar la capacidad',
    insight: 'Escalar el equipo de soporte para escalar el negocio es el modelo que ya no funciona.',
    detail:
      'Cuando la IA absorbe el 80% de los tickets rutinarios, tu equipo actual puede gestionar el triple del volumen. La escala deja de depender del headcount y empieza a depender de la IA.',
  },
  {
    tag: 'CSAT',
    stat1: '91%',
    stat1Label: 'Satisfacción promedio con\nsoporte asistido por IA',
    stat2: '+19 pts',
    stat2Label: 'Mejora de CSAT al implementar\nresolución autónoma',
    insight:
      'Velocidad y calidad no son opuestos cuando la IA se encarga de lo predecible y los humanos de lo complejo.',
    detail:
      'Los clientes esperan respuestas rápidas para lo simple y empatía real para lo difícil. Shadia garantiza ambas. El resultado: un CSAT que sube sin que tu equipo trabaje el doble.',
  },
  {
    tag: 'Horario continuo',
    stat1: '24/7',
    stat1Label: 'Cobertura de soporte sin\nturno nocturno ni fines de semana',
    stat2: '60%',
    stat2Label: 'De consultas ocurren fuera\ndel horario laboral habitual',
    insight:
      'Más de la mitad de tus clientes necesitan ayuda cuando tu equipo no está. Eso no puede quedar sin respuesta.',
    detail:
      'Shadia opera sin interrupciones, cubre todos los canales y responde con el mismo nivel de contexto y precisión a las 3am que a las 3pm. Sin costos de turno extra, sin calidad degradada.',
  },
];

const supportCarouselEn: CarouselSlide[] = [
  {
    tag: 'Autonomous resolution',
    stat1: '80%',
    stat1Label: 'Of tickets resolved\nwithout team involvement',
    stat2: '< 2 min',
    stat2Label: 'AI first response time\n24 hours a day',
    insight:
      'Most tickets do not need your team. They need access to the right information at the right moment.',
    detail:
      'Shadia accesses your systems in real time — order history, statuses, policies — and resolves without escalating. Your team only sees what genuinely requires human judgement.',
  },
  {
    tag: 'Team capacity',
    stat1: '3x',
    stat1Label: 'More volume handled\nwithout additional headcount',
    stat2: '0',
    stat2Label: 'New hires needed\nto triple capacity',
    insight:
      'Scaling your support team every time the business grows is the model that no longer works.',
    detail:
      'When AI absorbs 80% of routine tickets, your existing team handles triple the volume. Scale becomes a function of AI capacity, not headcount.',
  },
  {
    tag: 'CSAT',
    stat1: '91%',
    stat1Label: 'Average satisfaction\nwith AI-assisted support',
    stat2: '+19 pts',
    stat2Label: 'CSAT improvement after\ndeploying autonomous resolution',
    insight:
      'Speed and quality are not opposites — when AI handles the predictable and humans handle the complex.',
    detail:
      'Customers want fast answers for simple questions and real empathy for difficult ones. Shadia delivers both. CSAT goes up without your team working any harder.',
  },
  {
    tag: 'Always-on',
    stat1: '24/7',
    stat1Label: 'Support coverage without\nnight shifts or weekend rotas',
    stat2: '60%',
    stat2Label: 'Of queries arrive outside\nstandard business hours',
    insight:
      'More than half your customers need help when your team is offline. That cannot go unanswered.',
    detail:
      'Shadia operates without interruption across all channels, responding with the same context and accuracy at 3am as at 3pm. No overtime costs, no degraded quality.',
  },
];

const dentalCarouselEs: CarouselSlide[] = [
  {
    tag: 'No-shows',
    stat1: '30%',
    stat1Label: 'De la agenda perdida\npor ausencias sin aviso',
    stat2: '70%',
    stat2Label: 'Reducción en no-shows\ncon recordatorios automáticos',
    insight: 'Una cita cancelada sin aviso no es solo inconveniencia — es ingreso que no regresa.',
    detail:
      'Shadia envía recordatorios automáticos a 48h y 2h antes de cada cita, con confirmación por WhatsApp. Si el paciente no confirma, el agente IA reagenda antes de que el hueco quede vacío.',
  },
  {
    tag: 'Recepción',
    stat1: '3 hrs',
    stat1Label: 'Diarias en llamadas de\nrecordatorio y confirmación',
    stat2: '0',
    stat2Label: 'Llamadas manuales necesarias\ncon Shadia activo',
    insight:
      'Tu recepcionista vale demasiado para pasar el día haciendo llamadas que una IA puede manejar.',
    detail:
      'Shadia automatiza el flujo completo: confirmación, recordatorio, reagendamiento y bienvenida. Tu equipo se enfoca en los pacientes presentes, no en los que aún no llegaron.',
  },
  {
    tag: 'Horario 24/7',
    stat1: '40%',
    stat1Label: 'De las citas se solicitan\nfuera del horario de atención',
    stat2: '< 30 s',
    stat2Label: 'Tiempo de respuesta del\nagente IA en cualquier hora',
    insight:
      'Casi la mitad de tus pacientes intenta agendar cuando tu clínica está cerrada. Shadia nunca cierra.',
    detail:
      'El agente IA captura cada solicitud en tiempo real, consulta disponibilidad y confirma la cita — sin importar si son las 11 de la noche o un domingo. Cero llamadas sin atender.',
  },
  {
    tag: 'Reactivación',
    stat1: '1 de 4',
    stat1Label: 'Pacientes inactivos reactivados\ncon campañas automáticas',
    stat2: '+6 meses',
    stat2Label: 'Sin visita: el umbral ideal\npara activar reactivación',
    insight:
      'Los pacientes que no regresan en 6 meses raramente lo hacen solos. El silencio no es lealtad.',
    detail:
      'Shadia identifica pacientes sin citas recientes y lanza mensajes de reactivación personalizados por WhatsApp. Sin generics, sin spam — mensajes que suenan como una clínica que se preocupa.',
  },
];

const dentalCarouselEn: CarouselSlide[] = [
  {
    tag: 'No-shows',
    stat1: '30%',
    stat1Label: 'Of your schedule lost\nto missed appointments',
    stat2: '70%',
    stat2Label: 'Reduction in no-shows\nwith automated reminders',
    insight:
      'A missed appointment is not just an inconvenience — it is a slot you cannot recover and revenue you never see.',
    detail:
      'Shadia sends automated reminders 48h and 2h before each appointment, with WhatsApp confirmation. If the patient does not confirm, the AI agent reschedules before the gap stays empty.',
  },
  {
    tag: 'Front desk',
    stat1: '3 hrs',
    stat1Label: 'Per day on reminder and\nconfirmation calls',
    stat2: '0',
    stat2Label: 'Manual calls needed\nwith Shadia active',
    insight:
      'Your front desk team is worth more than spending their day on calls that AI can handle completely.',
    detail:
      'Shadia automates the full flow: confirmation, reminder, rescheduling and welcome. Your team focuses on in-practice patients — not the ones who have not arrived yet.',
  },
  {
    tag: '24/7 booking',
    stat1: '40%',
    stat1Label: 'Of appointment requests\ncome outside opening hours',
    stat2: '< 30 s',
    stat2Label: 'AI response time\nat any hour',
    insight: 'Nearly half your patients try to book when your practice is closed. Shadia never closes.',
    detail:
      'The AI agent captures every request in real time, checks availability and confirms the appointment — whether it is 11pm or a Sunday. Zero missed booking opportunities.',
  },
  {
    tag: 'Reactivation',
    stat1: '1 in 4',
    stat1Label: 'Inactive patients reactivated\nwith automated campaigns',
    stat2: '6+ months',
    stat2Label: 'Without a visit: the ideal\nthreshold to trigger reactivation',
    insight:
      'Patients who have not visited in 6 months rarely return on their own. Silence is not loyalty.',
    detail:
      'Shadia identifies patients with no recent appointments and launches personalised reactivation messages on WhatsApp. Not generic blasts — messages that feel like a practice that genuinely cares.',
  },
];

const pages: Record<Lang, Record<IndustryId, IndustryPageProps>> = {
  es: {
    healthcare: {
      lang: 'es',
      title: 'IA para Clínicas y Consultorios — Automatiza tu Agenda | Shadia AI',
      description:
        'Automatiza citas, recordatorios y seguimientos de pacientes con IA. Reduce no-shows, reactiva pacientes inactivos y elimina el trabajo manual de tu recepción.',
      canonical: 'https://shadia.ai/es/industrias/salud',
      ogImage: '/og/salud-es.png',
      jsonLd: healthcareFaqSchemaEs,
      accent: '#22c55e',
      badge: 'Salud',
      heroTitle: 'Recepción con agentes IA.',
      heroAccent: 'Citas y seguimiento sin carga manual.',
      heroLead:
        'Shadia automatiza la recepción digital de tu clínica o consultorio. Citas, confirmaciones, recordatorios y reactivación de pacientes — todo sin esfuerzo manual.',
      source: 'industry_salud_hero',
      heroHint: 'Sin tarjeta de crédito · Configuración en 24h',
      preview: 'calendar',
      stats: [
        { v: '85%', l: 'Reducción de no-shows' },
        { v: '3 min', l: 'Cita confirmada en' },
        { v: '40%', l: 'Más pacientes atendidos' },
        { v: '24/7', l: 'Recepción disponible' },
      ],
      pain: {
        eyebrow: 'El Problema',
        title: 'El caos de agenda cuesta dinero y pacientes',
        lead: 'Cada no-show, cada cita perdida por falta de respuesta rápida, cada paciente que no regresa — es dinero que deja tu negocio.',
        items: [
          { icon: '', prob: 'No-shows sin previo aviso', sol: 'Recordatorios automáticos 24h y 1h antes por WhatsApp con confirmación de un tap.' },
          { icon: 'clock', prob: 'Recepcionista saturada', sol: 'El agente IA recibe y confirma citas automáticamente. Tu equipo atiende pacientes, no teléfonos.' },
          { icon: 'dollar-sign', prob: 'Pacientes que no regresan', sol: 'Reactivación automática de pacientes inactivos con mensajes personalizados según su historial.' },
          { icon: 'smartphone', prob: 'Mensajes sin respuesta', sol: 'Respuesta inmediata las 24 horas por WhatsApp, Instagram o Email. Nunca más un paciente sin atender.' },
          { icon: 'clipboard', prob: 'Sin historial centralizado', sol: 'Historial de paciente integrado con historial completo de visitas, procedimientos y conversaciones.' },
          { icon: 'refresh-cw', prob: 'Reagendamientos manuales', sol: 'El paciente reagenda respondiendo al recordatorio. El calendario se actualiza solo.' },
        ],
      },
      features: {
        eyebrow: 'Funcionalidades',
        title: 'Automatización pensada para clínicas',
        items: [
          { icon: 'calendar', title: 'Citas automáticas', desc: 'El agente agenda, confirma y reagenda citas en WhatsApp e Instagram sin intervención manual.' },
          { icon: 'bell', title: 'Recordatorios inteligentes', desc: 'Confirmaciones 24h y 1h antes. El paciente responde con un tap y el calendario se actualiza.' },
          { icon: 'refresh-cw', title: 'Reactivación de pacientes', desc: 'Detecta pacientes inactivos y envía mensajes personalizados para traerlos de vuelta.' },
          { icon: 'smartphone', title: 'Multi-canal', desc: 'WhatsApp, Instagram y email en un solo flujo. Ningún mensaje queda sin respuesta.' },
          { icon: 'clipboard', title: 'Historial de paciente', desc: 'Historial de visitas, procedimientos y conversaciones centralizado por paciente.' },
          { icon: 'users', title: 'Múltiples doctores', desc: 'Calendarios y disponibilidad por especialista. El agente distribuye citas en tiempo real.' },
        ],
      },
      grid: {
        eyebrow: 'Especialidades',
        title: 'Diseñado para cada especialidad médica',
        cols: 4,
        items: [
          { icon: 'tooth', name: 'Odontología', desc: 'Citas, recordatorios de limpieza anual y planes de tratamiento.' },
          { icon: 'lightbulb', name: 'Psicología', desc: 'Sesiones recurrentes, seguimiento de pacientes y confidencialidad.' },
          { icon: 'pill', name: 'Medicina General', desc: 'Consultas, exámenes, resultados y seguimientos post-consulta.' },
          { icon: 'activity', name: 'Fisioterapia', desc: 'Sesiones múltiples por semana, progreso de tratamiento y ejercicios en casa.' },
          { icon: 'leaf', name: 'Nutrición', desc: 'Control de evolución, planes de alimentación y recordatorios de pesaje.' },
          { icon: 'eye', name: 'Oftalmología', desc: 'Exámenes anuales, recordatorios de anteojos y cirugías láser.' },
          { icon: 'activity', name: 'Cardiología', desc: 'Controles periódicos, medicamentos y emergencias.' },
          { icon: 'heart', name: 'Ginecología', desc: 'Controles prenatales, chequeos anuales y recordatorios de vacunas.' },
        ],
      },
      timeline: {
        eyebrow: 'Cómo Funciona',
        title: 'Un día típico con Shadia en tu clínica',
        items: [
          { time: '8:00 AM', icon: 'smartphone', text: 'La clínica abre y el agente ya respondió 12 mensajes durante la noche: 8 confirmaciones de citas, 3 nuevos pacientes y 1 reagendamiento.' },
          { time: '10:00 AM', icon: 'bell', text: 'Recordatorios automáticos enviados a 15 pacientes con cita el día de mañana. 13 confirman de inmediato, 2 reagendan sin contactar recepción.' },
          { time: '2:00 PM', icon: 'bot', text: 'Una paciente nueva escribe por Instagram preguntando por limpieza dental. El agente responde, califica su caso, ofrece horarios disponibles y confirma la cita.' },
          { time: '5:00 PM', icon: 'bar-chart', text: 'El agente detecta 8 pacientes que no han vuelto en 6 meses. Envía mensajes de reactivación personalizados. 3 agendan cita esa semana.' },
          { time: '8:00 PM', icon: 'clock', text: 'La clínica cerró, pero el agente sigue atendiendo. Recibe 5 solicitudes más para mañana. Tu equipo llega a un calendario ya optimizado.' },
        ],
      },
      trust: {
        eyebrow: 'Privacidad y Seguridad',
        title: 'Diseñado con la privacidad del paciente en mente',
        lead: 'Tus datos y los de tus pacientes están protegidos con los más altos estándares de seguridad.',
        items: [
          { icon: 'lock', title: 'Encriptación E2E', desc: 'Todos los mensajes y datos clínicos encriptados de extremo a extremo.' },
          { icon: 'clipboard', title: 'Auditoría completa', desc: 'Registro de todas las interacciones con timestamp y usuario.' },
          { icon: 'user', title: 'Control de acceso', desc: 'Permisos por rol para que cada empleado vea solo lo que necesita.' },
        ],
      },
      faqs: [
        { q: '¿Shadia cumple con normas de privacidad para datos de salud?', a: 'Sí. Implementamos encriptación end-to-end, controles de acceso por rol y auditoría completa de todas las interacciones.' },
        { q: '¿Cuánto tarda configurarse para mi clínica?', a: 'Menos de 24 horas. Conectas tus canales, configuras el agente con tu especialidad y empiezas a recibir citas automáticamente.' },
        { q: '¿Funciona si tengo múltiples doctores?', a: 'Sí. Cada médico tiene su propio calendario y disponibilidad. El agente distribuye las citas según la especialidad y disponibilidad en tiempo real.' },
        { q: '¿Qué pasa si un paciente escribe con urgencia?', a: 'Defines las reglas de escalación. El agente detecta urgencias y escala de inmediato al médico o recepcionista correcto con alerta en tiempo real.' },
      ],
      cta: {
        title: 'Tu clínica merece',
        titleAccent: 'una recepción inteligente',
        lead: 'Automatiza tu agenda hoy y enfoca a tu equipo en lo que más importa: cuidar pacientes.',
        source: 'industry_salud_cta',
      },
    },
    ecommerce: {
      lang: 'es',
      title: 'IA para Ecommerce — Recupera Carritos y Resuelve Pedidos en WhatsApp | Shadia AI',
      description:
        'Agentes IA para tiendas online: recupera carritos abandonados, resuelve consultas de pedidos, gestiona devoluciones y activa recompras — todo en WhatsApp. Sin flujos manuales.',
      canonical: 'https://shadia.ai/es/industrias/ecommerce',
      accent: '#10B981',
      badge: 'Ecommerce',
      heroTitle: 'Agentes IA que recuperan ventas',
      heroAccent: 'y resuelven pedidos al instante.',
      heroLead:
        'Agentes IA que recuperan carritos abandonados, responden consultas de pedidos, gestionan devoluciones y activan recompras en WhatsApp — de forma autónoma, a cualquier volumen.',
      source: 'industry_ecommerce_hero',
      heroHint: 'Sin tarjeta de crédito · Configuración en 24h',
      preview: 'conversations',
      stats: [
        { v: '35%', l: 'Carritos recuperados' },
        { v: '< 90s', l: 'Tiempo de primera respuesta' },
        { v: '80%', l: 'Consultas resueltas sin humano' },
        { v: '24/7', l: 'Atención post-compra' },
      ],
      split: {
        eyebrow: 'El problema real',
        title: 'Tienes volumen. Pero el soporte no escala con tu tienda.',
        lead: 'A medida que tu tienda crece, los tickets crecen más rápido. El 70% de esas consultas son repetitivas: "¿dónde está mi paquete?", "¿cómo devuelvo?", "¿tienen talla X?". Responderlas manualmente no escala.',
        lead2: 'Mientras tanto, los carritos abandonados se enfrían, los clientes insatisfechos dejan reseñas negativas y el equipo de soporte se agota en preguntas que una IA podría resolver en segundos.',
        negatives: [
          '70% de tickets son consultas repetitivas y resolvibles',
          'Carritos abandonados sin seguimiento personalizado = ingresos perdidos',
          'Tiempo de respuesta lento → cliente compra en la competencia',
          'Equipo de soporte agotado en tareas de bajo valor',
        ],
        positives: [
          'Carrito abandonado → mensaje personalizado en < 30 minutos',
          '"¿Dónde está mi pedido?" → respondido en 10 segundos con datos reales',
          'Solicitud de devolución → procesada automáticamente en la conversación',
          'Post-entrega → solicitud de reseña en el momento justo',
          'Comprador anterior → reactivación con producto relevante',
        ],
      },
      features: {
        eyebrow: 'Capacidades',
        title: 'Qué resuelve Shadia en tu tienda',
        items: [
          { icon: 'shopping-bag', title: 'Recuperación de carritos', desc: 'Detecta el abandono y contacta al cliente en WhatsApp con un mensaje personalizado referenciando los productos exactos que dejó.' },
          { icon: 'message-square', title: 'Consultas de pedidos', desc: '¿Dónde está mi paquete? ¿Cómo lo devuelvo? El agente responde al instante con información real de tu sistema de pedidos.' },
          { icon: 'refresh-cw', title: 'Devoluciones y cambios', desc: 'Valida la política, recoge la información necesaria, envía instrucciones y registra la solicitud — todo en una conversación.' },
          { icon: 'bell', title: 'Notificaciones proactivas', desc: 'Informa sobre envíos, retrasos y confirmaciones antes de que el cliente pregunte. Reduce el volumen de tickets entrantes.' },
          { icon: 'star', title: 'Solicitud de reseñas', desc: 'Post-entrega, el agente pide la reseña en el momento de mayor satisfacción. Más reseñas positivas, menos fricciones.' },
          { icon: 'trending-up', title: 'Upsell y recompra', desc: 'Detecta el momento correcto para sugerir complementos o activar la siguiente compra con base en el historial del cliente.' },
        ],
      },
      lifecycle: {
        eyebrow: 'El ciclo del cliente',
        title: 'Cada etapa del cliente,',
        titleAccent: 'cubierta automáticamente.',
        steps: [
          { n: '1', title: 'Consulta pre-compra', desc: 'El agente responde dudas sobre el producto, tallas, disponibilidad y envíos antes de la compra.' },
          { n: '2', title: 'Carrito abandonado', desc: 'Mensaje personalizado en WhatsApp con los productos exactos que dejó. En menos de 30 minutos.' },
          { n: '3', title: 'Post-compra', desc: 'Confirmación de pedido, datos de envío y actualización de seguimiento en tiempo real.' },
          { n: '4', title: 'Entrega', desc: 'Notificación de entrega y solicitud de reseña en el momento de mayor satisfacción.' },
          { n: '5', title: 'Reactivación', desc: 'Pasados 30/60 días, el agente propone la siguiente compra con productos relevantes.' },
        ],
      },
      integrations: {
        eyebrow: 'Integraciones',
        title: 'Conecta tu tienda en minutos.',
        lead: 'Shadia se integra con Shopify, WooCommerce y cualquier plataforma vía API. El agente consulta pedidos, inventario y datos del cliente en tiempo real — sin intermediarios.',
        bullets: ['Shopify', 'WooCommerce', 'VTEX', 'API REST propia', 'WhatsApp Business API', 'Webhooks en tiempo real'],
        rows: [
          { label: 'Estado del pedido', val: 'Consulta en tiempo real vía API' },
          { label: 'Recuperación de carrito', val: 'Evento Shopify → WhatsApp en < 30min' },
          { label: 'Devoluciones', val: 'Validación automática por política' },
          { label: 'Inventario', val: 'Consulta en tiempo real antes de vender' },
        ],
      },
      carousel: { eyebrow: 'Ecommerce — casos reales', slides: ecommerceCarouselEs },
      faqs: [
        { q: '¿Con qué plataformas de ecommerce se integra Shadia?', a: 'Shadia se integra con Shopify, WooCommerce, VTEX, Magento y cualquier plataforma vía API REST. El agente consulta el estado de pedidos, inventario y datos del cliente en tiempo real.' },
        { q: '¿Cómo funciona la recuperación de carritos?', a: 'Cuando un cliente abandona el carrito, tu plataforma envía un evento a Shadia. El agente contacta al cliente en WhatsApp con un mensaje personalizado — no una plantilla genérica — referenciando los productos exactos que dejó.' },
        { q: '¿Puede el agente procesar devoluciones o cambios?', a: 'Sí. El agente verifica el pedido, valida la política de devoluciones, envía las instrucciones al cliente y registra la solicitud en tu sistema. Sin que tu equipo tenga que intervenir en casos estándar.' },
        { q: '¿El agente puede hacer upsell y cross-sell?', a: 'Sí. Puedes entrenar al agente con lógica de productos relacionados. Detecta el momento adecuado de la conversación para sugerir complementos — post-compra, post-entrega o cuando el cliente consulta sobre un producto.' },
        { q: '¿Funciona para tiendas con alto volumen de pedidos?', a: 'Especialmente para eso. El agente escala sin límite de volumen — atiende el mismo número de conversaciones simultáneas sin degradar la calidad o la velocidad de respuesta.' },
      ],
      cta: {
        title: 'Más ventas. Menos tickets.',
        titleAccent: 'Desde el primer día.',
        lead: 'Conecta tu tienda y WhatsApp. El agente empieza a recuperar carritos, resolver pedidos y reactivar clientes de inmediato.',
        source: 'industry_ecommerce_footer',
        hint: 'Sin tarjeta de crédito · Configuración en 24h',
      },
    },
    sales: {
      lang: 'es',
      title: 'IA para Equipos de Ventas — Automatiza WhatsApp Sales | Shadia AI',
      description:
        'Calificación de leads, seguimientos automáticos y aceleración de pipeline sin herramientas externas de contactos. Shadia es el copiloto de ventas para equipos que venden por WhatsApp.',
      canonical: 'https://shadia.ai/es/industrias/ventas',
      ogImage: '/og/ventas-es.png',
      accent: '#3B82F6',
      badge: 'Ventas',
      heroTitle: 'Un agente IA califica leads y hace seguimiento.',
      heroAccent: 'Tu equipo solo cierra.',
      heroLead:
        'Shadia califica tus leads automáticamente, da seguimiento persistente y pasa al vendedor el prospecto caliente en el momento perfecto. Tu equipo cierra, la IA prospecta.',
      source: 'industry_ventas_hero',
      heroHint: 'Sin tarjeta de crédito · Configuración en 24h',
      preview: 'agent',
      stats: [
        { v: '4x', l: 'Más leads calificados' },
        { v: '< 1 min', l: 'Tiempo de respuesta' },
        { v: '35%', l: 'Más tasa de cierre' },
        { v: '100%', l: 'Leads sin seguimiento' },
      ],
      features: {
        eyebrow: 'Funcionalidades',
        title: 'Tu equipo de ventas, amplificado por IA',
        items: [
          { icon: 'target', title: 'Calificación automática de leads', desc: 'El agente hace las preguntas correctas, determina el nivel de interés y pasa al vendedor solo los leads listos para cerrar.' },
          { icon: 'refresh-cw', title: 'Seguimiento persistente', desc: 'Nunca pierdas un lead por falta de follow-up. El agente sigue hasta obtener una respuesta o una fecha de cierre.' },
          { icon: 'smartphone', title: 'Ventas por WhatsApp', desc: 'El canal donde tus clientes ya están. Envía propuestas, catálogos, videos y links de pago desde la misma conversación.' },
          { icon: 'bar-chart', title: 'Pipeline visible', desc: 'Visualiza cada lead en su etapa del funnel. Sabe en tiempo real dónde hay oportunidades y cuellos de botella.' },
          { icon: 'handshake', title: 'Handoff perfecto', desc: 'Cuando el lead está caliente, el agente pasa todo el contexto al vendedor para que cierre sin repetir preguntas.' },
          { icon: 'trending-up', title: 'Analytics de ventas', desc: 'Conversión por canal, tiempo de respuesta, tasa de cierre y valor de pipeline. Datos para optimizar.' },
        ],
      },
      grid: {
        eyebrow: 'Tipos de Equipo',
        title: 'Para cada tipo de equipo comercial',
        cols: 4,
        items: [
          { icon: 'car', name: 'Automotriz', desc: 'Test drives, cotizaciones, financiamiento y seguimiento post-visita.' },
          { icon: 'pill', name: 'Farma y Medical', desc: 'Visitas médicas, muestras y seguimiento de cuentas clave.' },
          { icon: 'building', name: 'B2B y SaaS', desc: 'Calificación inbound, demos agendadas y seguimiento de pipeline.' },
          { icon: 'package', name: 'E-commerce', desc: 'Recuperación de carritos, post-compra y reactivación de compradores.' },
          { icon: 'star', name: 'Eventos', desc: 'Venta de tickets, inscripciones y gestión de asistentes.' },
          { icon: 'building', name: 'Servicios financieros', desc: 'Préstamos, seguros e inversiones con seguimiento personalizado.' },
          { icon: 'handshake', name: 'Agencias', desc: 'Cierra proyectos más rápido con propuestas automáticas y seguimiento.' },
        ],
      },
      faqs: [
        { q: '¿Necesito otra herramienta de contactos para usar Shadia en ventas?', a: 'No. Shadia integra historial completo, etapas del pipeline y notas. También puedes conectar tus sistemas existentes vía API.' },
        { q: '¿El agente puede enviar propuestas y catálogos?', a: 'Sí. El agente puede enviar PDFs, imágenes, videos y links de pago directamente en la conversación de WhatsApp.' },
        { q: '¿Cómo sabe el agente cuándo pasar el lead al vendedor?', a: 'Defines los criterios de calificación. Cuando el lead cumple los criterios, el agente notifica al vendedor y transfiere el contexto completo.' },
        { q: '¿Funciona para equipos de ventas grandes?', a: 'Sí. El plan ULTRA no tiene límite de agentes. Define territorios, segmentos y el sistema distribuye leads automáticamente.' },
      ],
      cta: {
        title: 'Cierra más,',
        titleAccent: 'trabaja mejor',
        lead: 'Activa tu agente de ventas hoy y deja que la IA prospecto mientras tu equipo cierra.',
        source: 'industry_ventas_cta',
      },
    },
    support: {
      lang: 'es',
      title: 'IA para Equipos de Soporte — Resuelve el 80% sin Intervención Humana | Shadia AI',
      description:
        'Agentes IA que resuelven el 80% de los tickets en WhatsApp de forma autónoma. Tu equipo de soporte se enfoca en casos complejos. Sin respuestas enlatadas. Sin bots de flujos.',
      canonical: 'https://shadia.ai/es/industrias/soporte',
      accent: '#6366F1',
      badge: 'Soporte al Cliente',
      heroTitle: 'Agentes IA resuelven el 80%.',
      heroAccent: 'Tu equipo atiende lo que realmente importa.',
      heroLead:
        'Agentes IA que entienden contexto, acceden a tus sistemas y resuelven en WhatsApp — no deflectan ni envían respuestas genéricas. Tu equipo de soporte solo ve los casos que requieren criterio humano.',
      source: 'industry_soporte_hero',
      heroHint: 'Sin tarjeta de crédito · Operando en horas',
      preview: 'conversations',
      stats: [
        { v: '80%', l: 'Tickets resueltos sin humano' },
        { v: '< 2 min', l: 'Tiempo de primera respuesta' },
        { v: '3x', l: 'Más capacidad del equipo' },
        { v: '24/7', l: 'Cobertura sin costo adicional' },
      ],
      compare: {
        eyebrow: 'La diferencia que importa',
        title: 'Resolución, no solo routing.',
        lead: 'La mayoría de los sistemas de soporte gestionan conversaciones: las asignan, las etiquetan, las ponen en cola. Pero alguien de tu equipo igual tiene que responderlas.',
        lead2: 'Shadia resuelve. El agente accede a tus sistemas, entiende el contexto completo y da una respuesta precisa. Sin que nadie en tu equipo tenga que abrir el ticket.',
        withoutLabel: 'Sin Shadia',
        withLabel: 'Con Shadia',
        withoutSteps: ['Ticket creado', 'Asignado manualmente', 'Agente lee contexto', 'Agente responde', 'Cliente espera'],
        withSteps: ['Cliente escribe', 'Agente IA entiende', 'Consulta el sistema', 'Resuelve en segundos', 'Tu equipo libre'],
      },
      features: {
        eyebrow: 'Capacidades',
        title: 'Soporte que realmente resuelve',
        items: [
          { icon: 'bot', title: 'Resolución autónoma', desc: 'El agente accede a tus sistemas, consulta datos reales y responde con precisión. No respuestas genéricas ni FAQs estáticas.' },
          { icon: 'users', title: 'Escalación inteligente', desc: 'Detecta frustración, urgencia o complejidad y escala al miembro del equipo correcto — con contexto completo de la conversación.' },
          { icon: 'tag', title: 'Clasificación automática', desc: 'Cada conversación se clasifica por tipo, prioridad e intención. Tu equipo entra con todo el contexto ya organizado.' },
          { icon: 'clock', title: 'SLA sin esfuerzo', desc: 'El agente prioriza por urgencia y garantiza tiempos de respuesta consistentes — sin supervisión manual ni alertas.' },
          { icon: 'bar-chart', title: 'Analítica de resolución', desc: 'Ve exactamente qué resuelve el agente, qué no y por qué. Mejora continua basada en datos reales de tus conversaciones.' },
          { icon: 'globe', title: 'Multiidioma', desc: 'Responde en español, inglés y más idiomas — con el mismo agente, sin configuración extra, con la misma calidad.' },
        ],
      },
      team: {
        eyebrow: 'Tu equipo humano',
        title: 'La IA absorbe el volumen.',
        titleAccent: 'Tu equipo se enfoca en el valor.',
        lead: 'Cuando el agente escala, tu equipo recibe la conversación con el historial completo, la intención identificada y el contexto del sistema. Sin tener que preguntar de nuevo. Sin repetir.',
        highlights: [
          { icon: 'zap', title: 'Contexto listo', desc: 'Al recibir la conversación, tu agente humano ya sabe quién es el cliente, qué quería y qué intentó el agente IA.' },
          { icon: 'shield', title: 'Sin riesgo de respuesta incorrecta', desc: 'Los guardianes de calidad del agente previenen respuestas fuera de política antes de que lleguen al cliente.' },
          { icon: 'bar-chart', title: 'Métricas por miembro', desc: 'Ve el rendimiento individual de tu equipo: tiempos de respuesta, satisfacción y casos resueltos.' },
        ],
        metrics: [
          { metric: 'Tickets diarios por agente', before: '80–100', after: '20–25' },
          { metric: 'Tiempo promedio de resolución', before: '4–6 horas', after: '< 2 minutos' },
          { metric: 'Satisfacción del cliente (CSAT)', before: '72%', after: '91%' },
          { metric: 'Cobertura de atención', before: 'Horas de oficina', after: '24/7' },
        ],
      },
      carousel: { eyebrow: 'Equipos de soporte — casos reales', slides: supportCarouselEs },
      faqs: [
        { q: '¿Cómo sabe el agente cuándo escalar a un humano?', a: 'Configuras los criterios de escalación: frustración detectada, urgencia, términos específicos o temas que requieren criterio humano. El agente escala automáticamente con todo el contexto de la conversación — sin que el cliente tenga que repetir nada.' },
        { q: '¿El agente accede a mis sistemas internos?', a: 'Sí. Puedes conectar Shadia a tu base de conocimiento, ERP, sistema de pedidos, sistemas de contacto o cualquier sistema vía API. El agente consulta datos en tiempo real para dar respuestas precisas — no respuestas genéricas.' },
        { q: '¿Funciona para equipos de soporte técnico?', a: 'Sí. Puedes entrenarlo con documentación técnica, guías de solución de problemas y flujos de diagnóstico. El agente puede guiar al cliente paso a paso, y escala cuando el problema supera su capacidad.' },
        { q: '¿Cómo mido el rendimiento del agente?', a: 'Shadia te da analítica de resolución: tasa de resolución autónoma, tiempo de primera respuesta, temas más frecuentes, conversaciones escaladas y razones de escalación. Todo visible en tu dashboard.' },
        { q: '¿Puedo tener múltiples agentes especializados?', a: 'Sí. Puedes crear agentes especializados por área: técnico, facturación, ventas, posventa. Cada uno con su propio conjunto de conocimiento y criterios de escalación.' },
      ],
      cta: {
        title: 'Escala tu soporte.',
        titleAccent: 'Sin escalar tu equipo.',
        lead: 'Conecta Shadia a tu base de conocimiento y tus sistemas. El agente empieza a resolver desde el primer mensaje — en WhatsApp y todos tus canales.',
        source: 'industry_soporte_footer',
        hint: 'Sin tarjeta de crédito · Operando en horas',
      },
    },
    agencies: {
      lang: 'es',
      title: 'IA para Agencias Digitales — Todos tus clientes, un solo agente | Shadia AI',
      description:
        'Shadia permite a las agencias digitales gestionar la atención de todos sus clientes desde una sola plataforma con agentes IA. Sin herramientas separadas por cliente.',
      canonical: 'https://shadia.ai/es/industrias/agencias',
      accent: '#F59E0B',
      badge: 'Agencias Digitales',
      heroTitle: 'Agentes IA para cada cliente.',
      heroAccent: 'Un solo panel de control.',
      heroLead:
        'Gestiona la comunicación de todos tus clientes desde un solo lugar. Cada workspace aislado, cada agente personalizado, toda la analítica centralizada.',
      source: 'industry_agencias_hero',
      heroHint: 'Sin tarjeta de crédito · Onboarding en horas',
      preview: 'conversations',
      stats: [
        { v: '10x', l: 'Más clientes con el mismo equipo' },
        { v: '1', l: 'Plataforma para todos los clientes' },
        { v: '∞', l: 'Canales conectados' },
        { v: '24/7', l: 'Atención para cada cliente' },
      ],
      features: {
        title: 'Construido para agencias que escalan',
        items: [
          { icon: 'layers', title: 'Canales por cliente', desc: 'Conecta un canal de WhatsApp, Instagram o Facebook por cada cliente. Todo en una cuenta, perfectamente organizado por equipos y carpetas.' },
          { icon: 'bot', title: 'Agentes por marca', desc: 'Cada negocio tiene su propio agente IA entrenado con su tono, datos y casos de uso específicos.' },
          { icon: 'bar-chart', title: 'Analítica consolidada', desc: 'Ve el rendimiento de todos tus clientes desde un panel. Identifica qué negocios necesitan atención.' },
          { icon: 'users', title: 'Equipos compartidos', desc: 'Asigna miembros de tu agencia a múltiples workspaces con roles y permisos diferenciados.' },
          { icon: 'zap', title: 'Onboarding rápido', desc: 'Configura un nuevo cliente en horas. Conecta su WhatsApp Business, entrena el agente y listo.' },
          { icon: 'file-text', title: 'Reportes por cliente', desc: 'Genera reportes de conversaciones, resoluciones y satisfacción para compartir con cada cliente.' },
        ],
      },
      faqs: [
        { q: '¿Puedo gestionar múltiples clientes desde una sola cuenta?', a: 'Sí. Cada cliente tiene su workspace aislado con canales, agentes y permisos propios. Todo centralizado en un panel para tu agencia.' },
        { q: '¿Cuánto tarda configurar un cliente nuevo?', a: 'En horas. Conectas su WhatsApp Business, entrenas el agente con el tono y datos del negocio, y empiezas a operar el mismo día.' },
        { q: '¿Puedo compartir reportes con mis clientes?', a: 'Sí. Generas reportes de conversaciones, resoluciones y satisfacción por cliente para demostrar el valor del servicio que ofreces.' },
      ],
      cta: {
        title: 'Crece tu agencia',
        titleAccent: 'con el mismo equipo',
        lead: 'Ofrece atención IA a todos tus clientes como servicio adicional. Shadia es el motor detrás.',
        source: 'industry_agencias_cta',
      },
    },
    dental: {
      lang: 'es',
      title: 'IA para Clínicas Dentales — Agenda, Recordatorios y Reactivación | Shadia AI',
      description:
        'Agentes IA que llenan tu agenda dental, eliminan los no-shows y reactivan pacientes inactivos en WhatsApp. Sin recepcionistas sobrecargadas. Sin llamadas perdidas.',
      canonical: 'https://shadia.ai/es/industrias/odontologia',
      accent: '#14B8A6',
      badge: 'Clínicas Dentales',
      heroTitle: 'Agente IA para tu clínica dental.',
      heroAccent: 'Agenda, recordatorios y reactivación.',
      heroLead:
        'Agentes IA que atienden pacientes en WhatsApp las 24 horas — agenda citas, envía recordatorios, gestiona reagendamientos y reactiva pacientes inactivos. Sin llamadas perdidas. Sin recepcionista saturada.',
      source: 'industry_odontologia_hero',
      heroHint: 'Sin tarjeta de crédito · Listo en horas',
      preview: 'calendar',
      stats: [
        { v: '70%', l: 'Reducción de no-shows' },
        { v: '40%', l: 'Más citas agendadas' },
        { v: '24/7', l: 'Atención a pacientes' },
        { v: '< 5 min', l: 'Para agendar por WhatsApp' },
      ],
      features: {
        eyebrow: 'Capacidades',
        title: 'Lo que Shadia hace por tu clínica',
        items: [
          { icon: 'calendar', title: 'Agendamiento 24/7', desc: 'Pacientes pueden solicitar cita en WhatsApp a cualquier hora. Shadia consulta tu agenda en tiempo real y confirma al instante.' },
          { icon: 'bell', title: 'Recordatorios automáticos', desc: 'El agente envía recordatorios 48h y 2h antes de cada cita. El paciente confirma o reagenda con un solo mensaje — sin llamadas.' },
          { icon: 'refresh-cw', title: 'Reagendamiento sin fricciones', desc: 'Cuando un paciente cancela, Shadia le ofrece los próximos espacios disponibles y completa el cambio en la misma conversación.' },
          { icon: 'user-check', title: 'Reactivación de pacientes', desc: 'Identifica pacientes que no regresan hace 3, 6 o 12 meses y les envía mensajes personalizados para traerlos de vuelta.' },
          { icon: 'message-square', title: 'Consultas frecuentes', desc: 'Precios, tratamientos, seguros aceptados, preparación para procedimientos. El agente responde correctamente al instante.' },
          { icon: 'file-text', title: 'Instrucciones post-tratamiento', desc: 'Envía automáticamente las indicaciones de cuidado post-procedimiento y solicita una reseña en el momento ideal.' },
        ],
      },
      carousel: { eyebrow: 'Clínicas dentales — casos reales', slides: dentalCarouselEs },
      faqs: [
        { q: '¿Necesito cambiar mi sistema de agenda actual?', a: 'No. Shadia se conecta a Google Calendar, Calendly y sistemas de agenda propios vía API. Tu flujo de trabajo no cambia — el agente IA simplemente actúa sobre él.' },
        { q: '¿Qué pasa si el paciente quiere reagendar a última hora?', a: 'El agente gestiona el reagendamiento en tiempo real: le ofrece las opciones disponibles, confirma la nueva cita y libera el espacio original automáticamente para otro paciente.' },
        { q: '¿Cómo reduce los no-shows?', a: 'Shadia envía recordatorios a las 48h y 2h antes de la cita. El paciente confirma o reagenda con un solo mensaje. Clínicas que usan Shadia reportan una reducción de hasta el 70% en ausencias.' },
        { q: '¿El agente puede responder preguntas sobre precios o tratamientos?', a: 'Sí. Le das al agente la información de tu clínica: tarifas, tratamientos disponibles, seguros aceptados, preparación pre-procedimiento. El agente responde al instante con información precisa.' },
        { q: '¿Cuánto tiempo toma la configuración inicial?', a: 'La mayoría de las clínicas están operando en menos de 24 horas. Conectas tu WhatsApp, configuras tu agenda y entrenas al agente con la información de tu clínica. Sin código, sin IT.' },
      ],
      cta: {
        title: 'Tu agenda llena.',
        titleAccent: 'Desde el primer día.',
        lead: 'Conecta tu WhatsApp y tu calendario. El agente empieza a agendar citas, enviar recordatorios y reactivar pacientes de inmediato.',
        source: 'industry_odontologia_footer',
        hint: 'Sin tarjeta de crédito · Listo en horas',
      },
    },
    beauty: {
      lang: 'es',
      title: 'IA para Salones de Belleza y Spas — Automatiza tu Agenda | Shadia AI',
      description:
        'Confirma citas, reduce ausencias y reactiva clientes automáticamente. Shadia es el asistente IA para salones de belleza, spas y centros de estética.',
      canonical: 'https://shadia.ai/es/industrias/belleza',
      ogImage: '/og/belleza-es.png',
      accent: '#EC4899',
      badge: 'Belleza',
      heroTitle: 'Un agente IA para tu negocio de belleza.',
      heroAccent: 'Citas, recordatorios y reactivación.',
      heroLead:
        'Shadia gestiona la agenda de tu salón, confirma citas por WhatsApp y reactiva clientes que no han vuelto. Tu equipo se enfoca en lo que hace bien: hacer sentir especiales a tus clientes.',
      source: 'industry_belleza_hero',
      heroHint: 'Sin tarjeta de crédito · Configuración en 24h',
      preview: 'conversations',
      stats: [
        { v: '80%', l: 'Menos no-shows' },
        { v: '3x', l: 'Más reactivaciones' },
        { v: '24/7', l: 'Agenda disponible' },
        { v: '2 min', l: 'Para confirmar cita' },
      ],
      features: {
        eyebrow: 'Funcionalidades',
        title: 'Todo lo que tu salón necesita para crecer',
        items: [
          { icon: 'calendar', title: 'Agenda automática', desc: 'Clientes reservan cita por WhatsApp en cualquier momento. El agente verifica disponibilidad y confirma al instante.' },
          { icon: 'bell', title: 'Recordatorios que funcionan', desc: 'WhatsApp 24h y 2h antes. El cliente confirma con un emoji. No-shows eliminados.' },
          { icon: 'mail', title: 'Reactivación de clientas', desc: 'Detecta clientas que no han vuelto en 30, 60 o 90 días y envía mensajes personalizados automáticamente.' },
          { icon: 'star', title: 'Solicitud de reseñas', desc: 'Post-servicio, el agente solicita reseña en Google Maps. Más estrellas, más visibilidad.' },
          { icon: 'camera', title: 'Instagram integrado', desc: 'Responde DMs de Instagram automáticamente y convierte seguidores en clientas.' },
          { icon: 'gift', title: 'Promociones automáticas', desc: 'Envía ofertas de temporada y cumpleaños a tus clientas en el momento perfecto.' },
        ],
      },
      grid: {
        eyebrow: 'Servicios',
        title: 'Perfecto para cualquier servicio de belleza',
        cols: 4,
        items: [
          { icon: 'scissors', name: 'Peluquería', desc: 'Cortes, tintes, peinados y tratamientos.' },
          { icon: 'leaf', name: 'Spa y masajes', desc: 'Sesiones relajantes, terapéuticas y faciales.' },
          { icon: 'scissors', name: 'Manicure y pedicure', desc: 'Uñas acrílicas, gel, nail art y más.' },
          { icon: 'leaf', name: 'Estética avanzada', desc: 'Depilación láser, tratamientos faciales y corporales.' },
          { icon: 'eye', name: 'Pestañas y cejas', desc: 'Extensiones, laminado y microblading.' },
          { icon: 'activity', name: 'Bienestar corporal', desc: 'Masajes, tratamientos reductores y drenajes.' },
          { icon: 'heart', name: 'Maquillaje', desc: 'Novias, eventos y clases individuales.' },
          { icon: 'leaf', name: 'Depilación', desc: 'Cera, hilo y otros métodos.' },
        ],
      },
      beforeAfter: {
        eyebrow: 'Antes y Después',
        title: 'La diferencia es real',
        without: [
          'Clientas que no aparecen sin avisar',
          'Horas perdidas confirmando citas por teléfono',
          'Clientas que no vuelven porque nadie las contacta',
          'DMs de Instagram sin responder = ventas perdidas',
          'Agenda con huecos que cuestan dinero',
        ],
        with: [
          '80% menos no-shows con recordatorios automáticos',
          'Agenda 24/7 sin que tú intervengas',
          'Reactivación automática de clientas inactivas',
          'Instagram DMs respondidos en segundos',
          'Calendario siempre lleno y optimizado',
        ],
      },
      faqs: [
        { q: '¿Funciona para salones con múltiples estilistas?', a: 'Sí. Cada estilista tiene su propio calendario. Las clientas pueden reservar con su estilista favorita o con quien esté disponible.' },
        { q: '¿Cómo maneja servicios de diferentes duraciones?', a: 'Defines la duración de cada servicio. El agente solo ofrece slots disponibles según la duración y no crea conflictos de horario.' },
        { q: '¿Funciona con Instagram?', a: 'Sí. Conecta tu cuenta de Instagram Business y el agente responde DMs automáticamente y agenda citas desde la conversación.' },
        { q: '¿Qué pasa si una clienta quiere cancelar?', a: 'El agente gestiona la cancelación, libera el slot y puede ofrecer una nueva fecha. Notifica a tu equipo en tiempo real.' },
      ],
      cta: {
        title: 'Tu salón, siempre lleno',
        lead: 'Automatiza tu agenda hoy y enfoca a tu equipo en lo que mejor hacen.',
        source: 'industry_belleza_cta',
      },
    },
  },
  en: {
    healthcare: {
      lang: 'en',
      title: 'AI for Clinics & Medical Practices — Automate Your Schedule | Shadia AI',
      description:
        'Automate appointments, reminders and patient follow-ups with AI. Reduce no-shows, reactivate inactive patients and eliminate manual admin from your front desk.',
      canonical: 'https://shadia.ai/en/industries/healthcare',
      ogImage: '/og/salud-es.png',
      jsonLd: healthcareFaqSchemaEn,
      accent: '#22c55e',
      badge: 'Health',
      heroTitle: 'AI-agent front desk.',
      heroAccent: 'Scheduling and follow-ups on autopilot.',
      heroLead:
        'AI agents that handle the entire appointment lifecycle — booking, confirmation, reminders and reactivation. Your clinical staff focuses on patients, not admin queues.',
      source: 'industry_health_hero',
      heroHint: 'No credit card required · Setup in 24h',
      preview: 'calendar',
      stats: [
        { v: '85%', l: 'Reduction in no-shows' },
        { v: '3 min', l: 'Appointment confirmed in' },
        { v: '40%', l: 'More patients seen' },
        { v: '24/7', l: 'Front desk available' },
      ],
      pain: {
        eyebrow: 'The Problem',
        title: 'Schedule chaos costs money and patients',
        lead: "Every no-show, every missed appointment due to slow response, every patient who doesn't return — is money leaving your business.",
        items: [
          { icon: '', prob: 'No-shows without warning', sol: 'Automatic reminders 24h and 1h before via WhatsApp with one-tap confirmation.' },
          { icon: 'clock', prob: 'Overwhelmed receptionist', sol: 'The AI agent receives and confirms appointments automatically. Your team sees patients, not phones.' },
          { icon: 'dollar-sign', prob: "Patients who don't return", sol: 'Automatic reactivation of inactive patients with personalized messages based on their history.' },
          { icon: 'smartphone', prob: 'Unanswered messages', sol: '24-hour immediate response on WhatsApp, Instagram or Email. Never leave a patient unattended again.' },
          { icon: 'clipboard', prob: 'No centralized history', sol: 'Integrated patient history with complete history of visits, procedures and conversations.' },
          { icon: 'refresh-cw', prob: 'Manual rescheduling', sol: 'Patient reschedules by replying to reminder. Calendar updates automatically.' },
        ],
      },
      features: {
        eyebrow: 'Capabilities',
        title: 'Built for clinic operations',
        items: [
          { icon: 'calendar', title: 'Automatic appointments', desc: 'The agent books, confirms and reschedules on WhatsApp and Instagram without manual work.' },
          { icon: 'bell', title: 'Smart reminders', desc: '24h and 1h confirmations. Patients reply with one tap and the calendar updates.' },
          { icon: 'refresh-cw', title: 'Patient reactivation', desc: 'Detects inactive patients and sends personalized messages to bring them back.' },
          { icon: 'smartphone', title: 'Multi-channel', desc: 'WhatsApp, Instagram and email in one flow. No message goes unanswered.' },
          { icon: 'clipboard', title: 'Patient records', desc: 'Visit history, procedures and conversations centralized per patient.' },
          { icon: 'users', title: 'Multiple doctors', desc: 'Calendars and availability per specialist. The agent distributes appointments in real time.' },
        ],
      },
      grid: {
        eyebrow: 'Specialties',
        title: 'Designed for every medical specialty',
        cols: 4,
        items: [
          { icon: 'tooth', name: 'Dentistry', desc: 'Appointments, annual cleaning reminders and treatment plans.' },
          { icon: 'lightbulb', name: 'Psychology', desc: 'Recurring sessions, patient follow-ups and confidentiality.' },
          { icon: 'pill', name: 'General Medicine', desc: 'Consultations, exams, results and post-appointment follow-ups.' },
          { icon: 'activity', name: 'Physiotherapy', desc: 'Multiple sessions per week, treatment progress and home exercises.' },
          { icon: 'leaf', name: 'Nutrition', desc: 'Progress tracking, meal plans and weigh-in reminders.' },
          { icon: 'eye', name: 'Ophthalmology', desc: 'Annual exams, eyewear reminders and laser surgery.' },
          { icon: 'activity', name: 'Cardiology', desc: 'Periodic check-ups, medication and emergencies.' },
          { icon: 'heart', name: 'Gynecology', desc: 'Prenatal check-ups, annual exams and vaccine reminders.' },
        ],
      },
      timeline: {
        eyebrow: 'How It Works',
        title: 'A typical day with Shadia in your clinic',
        items: [
          { time: '8:00 AM', icon: 'smartphone', text: 'The clinic opens and the agent already responded to 12 messages overnight: 8 appointment confirmations, 3 new patients and 1 reschedule.' },
          { time: '10:00 AM', icon: 'bell', text: 'Automatic reminders sent to 15 patients with appointments tomorrow. 13 confirm immediately, 2 reschedule without contacting reception.' },
          { time: '2:00 PM', icon: 'bot', text: 'A new patient writes via Instagram asking about a dental cleaning. The agent responds, qualifies the case, offers available times and confirms the appointment.' },
          { time: '5:00 PM', icon: 'bar-chart', text: "The agent detects 8 patients who haven't been back in 6 months. Sends personalized reactivation messages. 3 book appointments that week." },
          { time: '8:00 PM', icon: 'clock', text: 'The clinic closed, but the agent keeps attending. Receives 5 more requests for tomorrow. Your team arrives to an already-optimized calendar.' },
        ],
      },
      trust: {
        eyebrow: 'Privacy & Security',
        title: 'Designed with patient privacy in mind',
        lead: "Your data and your patients' data are protected with the highest security standards.",
        items: [
          { icon: 'lock', title: 'E2E Encryption', desc: 'All messages and clinical data encrypted end-to-end.' },
          { icon: 'clipboard', title: 'Full audit', desc: 'Log of all interactions with timestamp and user.' },
          { icon: 'user', title: 'Access control', desc: 'Role-based permissions so each employee sees only what they need.' },
        ],
      },
      faqs: [
        { q: 'Does Shadia comply with health data privacy standards?', a: 'Yes. We implement end-to-end encryption, role-based access controls and full audit logs of all interactions.' },
        { q: 'How long does setup take for my clinic?', a: 'Less than 24 hours. Connect your channels, configure the agent with your specialty and start receiving appointments automatically.' },
        { q: 'Does it work with multiple doctors?', a: 'Yes. Each doctor has their own calendar and availability. The agent distributes appointments by specialty and real-time availability.' },
        { q: 'What happens if a patient writes with an emergency?', a: 'You define escalation rules. The agent detects urgencies and immediately escalates to the right doctor or receptionist with a real-time alert.' },
      ],
      cta: {
        title: 'Your clinic deserves',
        titleAccent: 'an intelligent front desk',
        lead: 'Automate your schedule today and focus your team on what matters most: caring for patients.',
        source: 'industry_health_cta',
      },
    },
    ecommerce: {
      lang: 'en',
      title: 'AI for Ecommerce — Recover Carts and Resolve Orders on WhatsApp | Shadia AI',
      description:
        'AI agents for online stores: recover abandoned carts, resolve order queries, handle returns and drive repeat purchases — all on WhatsApp. No manual flows. No overloaded support teams.',
      canonical: 'https://shadia.ai/en/industries/ecommerce',
      accent: '#10B981',
      badge: 'Ecommerce',
      heroTitle: 'AI agents that recover revenue',
      heroAccent: 'and resolve orders instantly.',
      heroLead:
        'AI agents that handle order status, recover abandoned carts and run post-purchase follow-ups — automatically, at any volume. Your team focuses on the 20% that actually needs a human.',
      source: 'industry_ecommerce_hero',
      heroHint: 'No credit card required · Up and running in 24h',
      preview: 'conversations',
      stats: [
        { v: '35%', l: 'Abandoned carts recovered' },
        { v: '< 90s', l: 'First response time' },
        { v: '80%', l: 'Queries resolved without a human' },
        { v: '24/7', l: 'Post-purchase support' },
      ],
      split: {
        eyebrow: 'The real problem',
        title: "You have the volume. But support doesn't scale with your store.",
        lead: 'As your store grows, tickets grow faster. 70% of those queries are repetitive: "where\'s my order?", "how do I return this?", "do you have size X?". Answering them manually doesn\'t scale.',
        lead2: 'Meanwhile, abandoned carts go cold, frustrated customers leave bad reviews and your support team burns out on questions that AI could resolve in seconds.',
        negatives: [
          '70% of tickets are repetitive and resolvable',
          'Abandoned carts without personalised follow-up = lost revenue',
          'Slow response time → customer buys from a competitor',
          'Support team exhausted on low-value, repetitive tasks',
        ],
        positives: [
          'Abandoned cart → personalised WhatsApp message in < 30 minutes',
          '"Where is my order?" → answered in 10 seconds with live data',
          'Return request → processed automatically in the conversation',
          'Post-delivery → review request at exactly the right moment',
          'Previous buyer → reactivated with a relevant product suggestion',
        ],
      },
      features: {
        eyebrow: 'Capabilities',
        title: 'What Shadia resolves for your store',
        items: [
          { icon: 'shopping-bag', title: 'Cart recovery', desc: 'Detects abandonment and reaches the customer on WhatsApp with a personalised message referencing the exact products they left.' },
          { icon: 'message-square', title: 'Order queries', desc: "Where's my parcel? How do I return it? The agent answers instantly with real data from your order management system." },
          { icon: 'refresh-cw', title: 'Returns and exchanges', desc: 'Validates your policy, collects the necessary details, sends instructions and logs the request — entirely in conversation.' },
          { icon: 'bell', title: 'Proactive notifications', desc: 'Informs customers about dispatch, delays and delivery before they ask. Fewer inbound tickets, higher satisfaction.' },
          { icon: 'star', title: 'Review requests', desc: 'Post-delivery, the agent asks for a review at peak satisfaction. More positive reviews, less friction.' },
          { icon: 'trending-up', title: 'Upsell and repeat purchase', desc: 'Detects the right moment to suggest complementary products or trigger the next purchase based on customer history.' },
        ],
      },
      lifecycle: {
        eyebrow: 'Customer lifecycle',
        title: 'Every stage of the customer journey,',
        titleAccent: 'covered automatically.',
        steps: [
          { n: '1', title: 'Pre-purchase', desc: 'The agent answers product questions, sizing, availability and delivery times before purchase.' },
          { n: '2', title: 'Abandoned cart', desc: 'Personalised WhatsApp message with the exact products they left — in under 30 minutes.' },
          { n: '3', title: 'Post-purchase', desc: 'Order confirmation, dispatch details and live tracking updates in real time.' },
          { n: '4', title: 'Delivery', desc: 'Delivery notification and review request at the moment of highest satisfaction.' },
          { n: '5', title: 'Reactivation', desc: 'After 30/60 days, the agent suggests the next purchase with relevant products.' },
        ],
      },
      integrations: {
        eyebrow: 'Integrations',
        title: 'Connect your store in minutes.',
        lead: 'Shadia integrates with Shopify, WooCommerce and any platform via API. The agent queries orders, inventory and customer data in real time — no middleware, no manual sync.',
        bullets: ['Shopify', 'WooCommerce', 'VTEX', 'Custom REST API', 'WhatsApp Business API', 'Real-time webhooks'],
        rows: [
          { label: 'Order status', val: 'Real-time query via API' },
          { label: 'Cart recovery', val: 'Shopify event → WhatsApp in < 30min' },
          { label: 'Returns', val: 'Automatic policy validation' },
          { label: 'Inventory', val: 'Real-time check before recommending' },
        ],
      },
      carousel: { eyebrow: 'Ecommerce — real scenarios', slides: ecommerceCarouselEn },
      faqs: [
        { q: 'Which ecommerce platforms does Shadia integrate with?', a: 'Shadia integrates with Shopify, WooCommerce, VTEX, Magento and any platform via REST API. The agent queries order status, inventory and customer data in real time.' },
        { q: 'How does abandoned cart recovery work?', a: "When a customer abandons their cart, your platform sends an event to Shadia. The agent reaches out on WhatsApp with a personalised message — not a generic template — referencing the exact products they left behind." },
        { q: 'Can the agent handle returns and exchanges?', a: 'Yes. The agent verifies the order, validates your returns policy, sends the customer instructions and logs the request in your system — without your team needing to step in for standard cases.' },
        { q: 'Can the agent do upsell and cross-sell?', a: 'Yes. You train the agent with your product logic. It detects the right moment in the conversation to suggest complementary items — post-purchase, post-delivery or when the customer asks about a product.' },
        { q: 'Does it work for high-volume stores?', a: 'Especially so. The agent scales without any volume limit — it handles the same number of simultaneous conversations without degrading quality or response speed.' },
      ],
      cta: {
        title: 'More revenue. Fewer tickets.',
        titleAccent: 'From day one.',
        lead: 'Connect your store and WhatsApp. The agent starts recovering carts, resolving orders and reactivating customers immediately.',
        source: 'industry_ecommerce_footer',
        hint: 'No credit card required · Up and running in 24h',
      },
    },
    sales: {
      lang: 'en',
      title: 'AI for Sales Teams — Automate WhatsApp Sales | Shadia AI',
      description:
        'Lead qualification, automatic follow-ups and pipeline acceleration without external contact tools. Shadia is the AI sales copilot for teams that sell via WhatsApp.',
      canonical: 'https://shadia.ai/en/industries/sales',
      ogImage: '/og/ventas-es.png',
      accent: '#3B82F6',
      badge: 'Sales',
      heroTitle: 'An AI agent qualifies leads and follows up.',
      heroAccent: 'Your team just closes.',
      heroLead:
        'AI agents that qualify inbound leads, run follow-up sequences and hand off ready-to-buy prospects at exactly the right moment. Your reps close deals — not chase cold threads.',
      source: 'industry_sales_hero',
      heroHint: 'No credit card required · Setup in 24h',
      preview: 'agent',
      stats: [
        { v: '4x', l: 'More qualified leads' },
        { v: '< 1 min', l: 'Response time' },
        { v: '35%', l: 'Higher close rate' },
        { v: '100%', l: 'Leads followed up' },
      ],
      features: {
        eyebrow: 'Features',
        title: 'Your sales team, amplified by AI',
        items: [
          { icon: 'target', title: 'Automatic lead qualification', desc: 'The agent asks the right questions, determines interest level and only passes sales-ready leads to the salesperson.' },
          { icon: 'refresh-cw', title: 'Persistent follow-up', desc: 'Never lose a lead due to lack of follow-up. The agent persists until getting a response or a closing date.' },
          { icon: 'smartphone', title: 'WhatsApp sales', desc: 'The channel where your clients already are. Send proposals, catalogs, videos and payment links from the same conversation.' },
          { icon: 'bar-chart', title: 'Visible pipeline', desc: 'See each lead at its funnel stage. Know in real time where there are opportunities and bottlenecks.' },
          { icon: 'handshake', title: 'Perfect handoff', desc: 'When the lead is hot, the agent transfers full context to the salesperson so they can close without repeating questions.' },
          { icon: 'trending-up', title: 'Sales analytics', desc: 'Conversion by channel, response time, close rate and pipeline value. Data to optimize.' },
        ],
      },
      grid: {
        eyebrow: 'Team Types',
        title: 'For every type of sales team',
        cols: 4,
        items: [
          { icon: 'car', name: 'Automotive', desc: 'Test drives, quotes, financing and post-visit follow-up.' },
          { icon: 'pill', name: 'Pharma & Medical', desc: 'Medical visits, samples and key account follow-up.' },
          { icon: 'building', name: 'B2B & SaaS', desc: 'Inbound qualification, scheduled demos and pipeline follow-up.' },
          { icon: 'package', name: 'E-commerce', desc: 'Cart recovery, post-purchase and buyer reactivation.' },
          { icon: 'star', name: 'Events', desc: 'Ticket sales, registrations and attendee management.' },
          { icon: 'building', name: 'Financial services', desc: 'Loans, insurance and investments with personalized follow-up.' },
          { icon: 'handshake', name: 'Agencies', desc: 'Close projects faster with automatic proposals and follow-up.' },
        ],
      },
      faqs: [
        { q: 'Do I need separate contact software to use Shadia for sales?', a: 'No. Shadia has built-in contact records with full history, pipeline stages and notes. You can also connect your existing systems via API.' },
        { q: 'Can the agent send proposals and catalogs?', a: 'Yes. The agent can send PDFs, images, videos and payment links directly in the WhatsApp conversation.' },
        { q: 'How does the agent know when to hand off the lead?', a: 'You define the qualification criteria. When the lead meets the criteria, the agent notifies the salesperson and transfers full context.' },
        { q: 'Does it work for large sales teams?', a: 'Yes. The ULTRA plan has no agent limit. Define territories, segments and the system distributes leads automatically.' },
      ],
      cta: {
        title: 'Close more,',
        titleAccent: 'work smarter',
        lead: 'Activate your sales agent today and let AI prospect while your team closes.',
        source: 'industry_sales_cta',
      },
    },
    support: {
      lang: 'en',
      title: 'AI for Customer Support Teams — Resolve 80% Without Human Intervention | Shadia AI',
      description:
        'AI agents that resolve 80% of support tickets on WhatsApp autonomously. Your support team focuses on complex cases. No canned responses. No flow-based bots.',
      canonical: 'https://shadia.ai/en/industries/support',
      accent: '#6366F1',
      badge: 'Customer Support',
      heroTitle: 'AI agents resolve 80%.',
      heroAccent: 'Your team handles what actually matters.',
      heroLead:
        'AI agents that understand context, access your systems and resolve — not deflect. Your support team handles escalations and complex cases. Everything else is resolved before it lands in their queue.',
      source: 'industry_support_hero',
      heroHint: 'No credit card required · Up and running in hours',
      preview: 'conversations',
      stats: [
        { v: '80%', l: 'Tickets resolved without a human' },
        { v: '< 2 min', l: 'First response time' },
        { v: '3x', l: 'More team capacity' },
        { v: '24/7', l: 'Coverage at no extra cost' },
      ],
      compare: {
        eyebrow: 'The difference that matters',
        title: 'Resolution, not routing.',
        lead: 'Most support platforms manage conversations: they assign them, tag them, put them in a queue. But someone on your team still has to answer.',
        lead2: 'Shadia resolves. The agent accesses your systems, understands the full context and gives an accurate answer. Without anyone on your team having to open the ticket.',
        withoutLabel: 'Without Shadia',
        withLabel: 'With Shadia',
        withoutSteps: ['Ticket created', 'Assigned manually', 'Agent reads context', 'Agent responds', 'Customer waits'],
        withSteps: ['Customer writes', 'AI agent understands', 'Queries the system', 'Resolves in seconds', 'Your team is free'],
      },
      features: {
        eyebrow: 'Capabilities',
        title: 'Support that actually resolves',
        items: [
          { icon: 'bot', title: 'Autonomous resolution', desc: 'The agent queries your systems, accesses real data and responds accurately. No generic answers, no static FAQs.' },
          { icon: 'users', title: 'Intelligent escalation', desc: 'Detects frustration, urgency or complexity and escalates to the right team member — with the full conversation context already included.' },
          { icon: 'tag', title: 'Automatic classification', desc: 'Every conversation is classified by type, priority and intent. Your team joins with everything already organised.' },
          { icon: 'clock', title: 'SLA without the manual work', desc: 'The agent prioritises by urgency and maintains consistent response times — no manual supervision, no alerts.' },
          { icon: 'bar-chart', title: 'Resolution analytics', desc: "See exactly what the agent resolves, what it doesn't, and why. Continuous improvement based on real conversation data." },
          { icon: 'globe', title: 'Multilingual', desc: 'Responds in English, Spanish and more languages — with the same agent, no extra configuration, same quality.' },
        ],
      },
      team: {
        eyebrow: 'Your human team',
        title: 'AI absorbs the volume.',
        titleAccent: 'Your team focuses on what matters.',
        lead: 'When the agent escalates, your team receives the conversation with the full history, identified intent and system context already in place. No asking twice. No repeated explanations.',
        highlights: [
          { icon: 'zap', title: 'Context already loaded', desc: 'When a conversation reaches your team, they already know who the customer is, what they needed and what the AI agent tried.' },
          { icon: 'shield', title: 'No risk of incorrect response', desc: "The agent's quality guardrails prevent off-policy responses before they ever reach the customer." },
          { icon: 'bar-chart', title: 'Per-member metrics', desc: 'Track individual team performance: response times, customer satisfaction and cases resolved.' },
        ],
        metrics: [
          { metric: 'Daily tickets per agent', before: '80–100', after: '20–25' },
          { metric: 'Average resolution time', before: '4–6 hours', after: '< 2 minutes' },
          { metric: 'Customer satisfaction (CSAT)', before: '72%', after: '91%' },
          { metric: 'Support coverage', before: 'Office hours', after: '24/7' },
        ],
      },
      carousel: { eyebrow: 'Support teams — real scenarios', slides: supportCarouselEn },
      faqs: [
        { q: 'How does the agent know when to escalate to a human?', a: 'You configure escalation rules: detected frustration, urgency levels, specific topics or any keyword that requires human judgement. The agent escalates automatically with the full conversation context — the customer never has to repeat themselves.' },
        { q: 'Does the agent connect to our internal systems?', a: 'Yes. You can connect Shadia to your knowledge base, ERP, order management, contact systems or any system via API. The agent queries live data to give accurate answers — not generic FAQ responses.' },
        { q: 'Does it work for technical support teams?', a: 'Yes. You can train it with technical documentation, troubleshooting guides and diagnostic flows. The agent walks customers through steps and escalates when the issue exceeds its scope.' },
        { q: 'How do I measure agent performance?', a: 'Shadia provides resolution analytics: autonomous resolution rate, first response time, most frequent topics, escalated conversations and reasons for escalation. All visible in your dashboard.' },
        { q: 'Can I have multiple specialised agents?', a: 'Yes. You can create agents specialised by area: technical support, billing, sales, post-sales. Each with its own knowledge set and escalation criteria — all in one platform.' },
      ],
      cta: {
        title: 'Scale your support.',
        titleAccent: 'Without scaling your team.',
        lead: 'Connect Shadia to your knowledge base and your systems. The agent starts resolving from the first message — on WhatsApp and every channel.',
        source: 'industry_support_footer',
        hint: 'No credit card required · Up and running in hours',
      },
    },
    agencies: {
      lang: 'en',
      title: 'AI for Digital Agencies — All clients, one AI platform | Shadia AI',
      description:
        "Shadia lets digital agencies manage all their clients' communications from one AI-powered platform. No separate tools per client.",
      canonical: 'https://shadia.ai/en/industries/agencies',
      accent: '#F59E0B',
      badge: 'Digital Agencies',
      heroTitle: 'AI agents for every client.',
      heroAccent: 'One control center.',
      heroLead:
        "Deploy AI agents for every client from a single platform. Each account isolated, each agent trained to the client's brand — all reporting centralized for your team.",
      source: 'industry_agencies_hero',
      heroHint: 'No credit card required · Onboarding in hours',
      preview: 'conversations',
      stats: [
        { v: '10x', l: 'More clients, same team' },
        { v: '1', l: 'Platform for all businesses' },
        { v: '∞', l: 'Connected channels' },
        { v: '24/7', l: 'Coverage for every client' },
      ],
      features: {
        title: 'Built for agencies that scale',
        items: [
          { icon: 'layers', title: 'Channels per client', desc: 'Connect a WhatsApp, Instagram or Facebook channel per client. All in one account, neatly organized by teams and folders.' },
          { icon: 'bot', title: 'Per-brand agents', desc: 'Each business gets its own AI agent trained with their tone, data and specific use cases.' },
          { icon: 'bar-chart', title: 'Consolidated analytics', desc: "See all your clients' performance from one dashboard. Identify which businesses need attention." },
          { icon: 'users', title: 'Shared teams', desc: 'Assign agency members to multiple workspaces with differentiated roles and permissions.' },
          { icon: 'zap', title: 'Fast onboarding', desc: 'Set up a new client in hours. Connect their WhatsApp Business, train the agent and go.' },
          { icon: 'file-text', title: 'Per-client reports', desc: 'Generate conversation, resolution and satisfaction reports to share with each client.' },
        ],
      },
      faqs: [
        { q: 'Can I manage multiple clients from one account?', a: 'Yes. Each client has an isolated workspace with their own channels, agents and permissions. Everything centralized in one dashboard for your agency.' },
        { q: 'How long does it take to set up a new client?', a: 'Hours. Connect their WhatsApp Business, train the agent with the business tone and data, and start operating the same day.' },
        { q: 'Can I share reports with my clients?', a: 'Yes. Generate conversation, resolution and satisfaction reports per client to demonstrate the value of the service you offer.' },
      ],
      cta: {
        title: 'Grow your agency',
        titleAccent: 'with the same team',
        lead: 'Offer AI-powered customer service to all your clients as an added service. Shadia is the engine behind it.',
        source: 'industry_agencies_cta',
      },
    },
    dental: {
      lang: 'en',
      title: 'AI for Dental Clinics — Bookings, Reminders and Patient Reactivation | Shadia AI',
      description:
        'AI agents that fill your dental schedule, eliminate no-shows and reactivate inactive patients on WhatsApp. No overwhelmed receptionist. No missed calls.',
      canonical: 'https://shadia.ai/en/industries/dental',
      accent: '#14B8A6',
      badge: 'Dental Clinics',
      heroTitle: 'AI agent for your dental clinic.',
      heroAccent: 'Bookings, reminders and reactivation.',
      heroLead:
        'AI agents that run your appointment flow around the clock — booking, reminders, rescheduling and patient reactivation. Fewer no-shows, a fuller schedule and a receptionist who can focus on the practice.',
      source: 'industry_dental_hero',
      heroHint: 'No credit card required · Live in hours',
      preview: 'calendar',
      stats: [
        { v: '70%', l: 'Fewer no-shows' },
        { v: '40%', l: 'More appointments booked' },
        { v: '24/7', l: 'Patient availability' },
        { v: '< 5 min', l: 'To book on WhatsApp' },
      ],
      features: {
        eyebrow: 'Capabilities',
        title: 'What Shadia does for your practice',
        items: [
          { icon: 'calendar', title: '24/7 Booking', desc: 'Patients book appointments on WhatsApp at any time. Shadia checks real-time availability and confirms instantly — no back-and-forth.' },
          { icon: 'bell', title: 'Automatic reminders', desc: 'The agent sends reminders 48h and 2h before each appointment. Patients confirm or reschedule with a single reply. No phone calls.' },
          { icon: 'refresh-cw', title: 'Seamless rescheduling', desc: 'When a patient cancels, Shadia immediately offers the next available slots and fills the gap in one conversation.' },
          { icon: 'user-check', title: 'Patient reactivation', desc: 'Identifies patients who have not returned in 3, 6 or 12 months and sends personalised messages to bring them back.' },
          { icon: 'message-square', title: 'Frequently asked questions', desc: 'Fees, treatments, accepted insurance, pre-procedure instructions — the agent answers correctly and instantly, every time.' },
          { icon: 'file-text', title: 'Post-treatment follow-up', desc: 'Automatically sends aftercare instructions and requests a review at exactly the right moment after each procedure.' },
        ],
      },
      carousel: { eyebrow: 'Dental practices — real scenarios', slides: dentalCarouselEn },
      faqs: [
        { q: 'Do I need to change my existing booking system?', a: 'No. Shadia connects to Google Calendar, Calendly and proprietary booking systems via API. Your workflow stays exactly the same — the AI agent simply acts on top of it.' },
        { q: 'What happens when a patient wants to reschedule last minute?', a: 'The agent handles the rescheduling in real time: offers the next available slots, confirms the new appointment and automatically releases the original slot for another patient.' },
        { q: 'How does it reduce no-shows?', a: "Shadia sends reminders 48h and 2h before each appointment. The patient confirms or reschedules with a single message — no phone calls needed. Practices using Shadia report up to 70% fewer no-shows." },
        { q: 'Can the agent answer questions about pricing or treatments?', a: 'Yes. You train the agent with your practice information: fees, available treatments, accepted insurance, pre-procedure preparation. The agent answers instantly with accurate, consistent information.' },
        { q: 'How long does the initial setup take?', a: 'Most practices are live in under 24 hours. Connect your WhatsApp, configure your calendar and train the agent with your practice information. No code, no IT department required.' },
      ],
      cta: {
        title: 'A full schedule.',
        titleAccent: 'From day one.',
        lead: 'Connect your WhatsApp and calendar. The agent starts booking appointments, sending reminders and reactivating patients immediately.',
        source: 'industry_dental_footer',
        hint: 'No credit card required · Live in hours',
      },
    },
    beauty: {
      lang: 'en',
      title: 'AI for Beauty Salons & Spas — Automate Your Schedule | Shadia AI',
      description:
        'Confirm appointments, reduce no-shows and reactivate clients automatically. Shadia is the AI assistant for beauty salons, spas and aesthetics centers.',
      canonical: 'https://shadia.ai/en/industries/beauty',
      ogImage: '/og/belleza-es.png',
      accent: '#EC4899',
      badge: 'Beauty',
      heroTitle: 'An AI agent for your beauty business.',
      heroAccent: 'Bookings, reminders and reactivation.',
      heroLead:
        'AI agents that handle bookings, send reminders and re-engage lapsed clients — all without your team managing a single message. Less admin, more time for the work that matters.',
      source: 'industry_beauty_hero',
      heroHint: 'No credit card required · Setup in 24h',
      preview: 'conversations',
      stats: [
        { v: '80%', l: 'Fewer no-shows' },
        { v: '3x', l: 'More reactivations' },
        { v: '24/7', l: 'Schedule available' },
        { v: '2 min', l: 'To confirm appointment' },
      ],
      features: {
        eyebrow: 'Features',
        title: 'Everything your salon needs to grow',
        items: [
          { icon: 'calendar', title: 'Automatic scheduling', desc: 'Clients book via WhatsApp anytime. The agent checks availability and confirms instantly.' },
          { icon: 'bell', title: 'Reminders that work', desc: 'WhatsApp 24h and 2h before. Client confirms with an emoji. No-shows eliminated.' },
          { icon: 'mail', title: 'Client reactivation', desc: "Detects clients who haven't returned in 30, 60 or 90 days and automatically sends personalized messages." },
          { icon: 'star', title: 'Review requests', desc: 'Post-service, the agent requests a Google Maps review. More stars, more visibility.' },
          { icon: 'camera', title: 'Instagram integration', desc: 'Automatically replies to Instagram DMs and converts followers into clients.' },
          { icon: 'gift', title: 'Automatic promotions', desc: 'Sends seasonal offers and birthday messages to your clients at the perfect time.' },
        ],
      },
      grid: {
        eyebrow: 'Services',
        title: 'Perfect for any beauty service',
        cols: 4,
        items: [
          { icon: 'scissors', name: 'Hair salon', desc: 'Cuts, color, styling and treatments.' },
          { icon: 'leaf', name: 'Spa & massage', desc: 'Relaxing, therapeutic and facial sessions.' },
          { icon: 'scissors', name: 'Manicure & pedicure', desc: 'Acrylic nails, gel, nail art and more.' },
          { icon: 'leaf', name: 'Advanced aesthetics', desc: 'Laser hair removal, facial and body treatments.' },
          { icon: 'eye', name: 'Lashes & brows', desc: 'Extensions, lamination and microblading.' },
          { icon: 'activity', name: 'Body wellness', desc: 'Massages, slimming treatments and drainages.' },
          { icon: 'heart', name: 'Makeup', desc: 'Brides, events and individual classes.' },
          { icon: 'leaf', name: 'Hair removal', desc: 'Wax, thread and other methods.' },
        ],
      },
      beforeAfter: {
        eyebrow: 'Before & After',
        title: 'The difference is real',
        without: [
          "Clients who don't show up without warning",
          'Hours lost confirming appointments by phone',
          "Clients who don't return because nobody follows up",
          'Unanswered Instagram DMs = lost sales',
          'Schedule with gaps that cost money',
        ],
        with: [
          '80% fewer no-shows with automatic reminders',
          '24/7 booking without you intervening',
          'Automatic reactivation of inactive clients',
          'Instagram DMs answered in seconds',
          'Calendar always full and optimized',
        ],
      },
      faqs: [
        { q: 'Does it work for salons with multiple stylists?', a: 'Yes. Each stylist has their own calendar. Clients can book with their favorite stylist or whoever is available.' },
        { q: 'How does it handle services of different durations?', a: 'You define the duration of each service. The agent only offers available slots based on duration and never creates scheduling conflicts.' },
        { q: 'Does it work with Instagram?', a: 'Yes. Connect your Instagram Business account and the agent automatically replies to DMs and books appointments from the conversation.' },
        { q: 'What if a client wants to cancel?', a: 'The agent handles the cancellation, frees the slot and can offer a new date. Notifies your team in real time.' },
      ],
      cta: {
        title: 'Your salon, always full',
        lead: 'Automate your schedule today and focus your team on what they do best.',
        source: 'industry_beauty_cta',
      },
    },
  },
};

export function getIndustryPage(lang: Lang, id: IndustryId): IndustryPageProps {
  return pages[lang][id];
}
