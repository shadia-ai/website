/**
 * Bidirectional route map: ES path → EN path.
 * Used by Nav and BaseLayout to produce correct language-switch URLs.
 * Paths are without trailing slash.
 */
const esToEn: Record<string, string> = {
  '/es':                            '/en',
  '/es/precios':                    '/en/pricing',
  '/es/caracteristicas':            '/en/features',
  '/es/empresa':                    '/en/enterprise',
  '/es/blog':                       '/en/blog',

  // Product
  '/es/producto/omnicanal':         '/en/product/omnichannel',
  '/es/producto/agente':            '/en/product/agent',
  '/es/producto/agentes-ia':        '/en/product/ai-agents',
  '/es/producto/citas':             '/en/product/appointments',

  // Channels
  '/es/canales':                    '/en/channels',
  '/es/canales/whatsapp':           '/en/channels/whatsapp',
  '/es/canales/instagram':          '/en/channels/instagram',
  '/es/canales/facebook':           '/en/channels/facebook',
  '/es/canales/tiktok':             '/en/channels/tiktok',

  // Industries
  '/es/industrias':                 '/en/industries',
  '/es/industrias/ecommerce':       '/en/industries/ecommerce',
  '/es/industrias/salud':           '/en/industries/healthcare',
  '/es/industrias/ventas':          '/en/industries/sales',
  '/es/industrias/soporte':         '/en/industries/support',
  '/es/industrias/agencias':        '/en/industries/agencies',
  '/es/industrias/odontologia':     '/en/industries/dental',
  '/es/industrias/belleza':         '/en/industries/beauty',

  // Compare
  '/es/comparar':                   '/en/compare',
  '/es/comparar/vs-calendly':       '/en/compare/vs-calendly',
  '/es/comparar/vs-wazzy':          '/en/compare/vs-wazzy',
  '/es/comparar/vs-wati':           '/en/compare/vs-wati',
  '/es/comparar/vs-manychat':       '/en/compare/vs-manychat',
  '/es/comparar/vs-respond-io':     '/en/compare/vs-respond-io',
  '/es/comparar/vs-intercom':       '/en/compare/vs-intercom',
  '/es/comparar/vs-kommo':          '/en/compare/vs-kommo',
  '/es/comparar/vs-trengo':         '/en/compare/vs-trengo',
  '/es/comparar/vs-chatfuel':       '/en/compare/vs-chatfuel',
  '/es/comparar/vs-confirmafy':     '/en/compare/vs-confirmafy',
};

// Build the reverse map automatically (EN → ES)
const enToEs: Record<string, string> = Object.fromEntries(
  Object.entries(esToEn).map(([es, en]) => [en, es])
);

/**
 * Given the current pathname and target language, returns the correct
 * translated URL. Falls back to swapping just the language prefix if
 * no explicit mapping exists.
 */
export function getAlternatePath(pathname: string, targetLang: 'es' | 'en'): string {
  // Normalize: strip trailing slash (except root "/")
  const normalized = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;

  if (targetLang === 'en') {
    if (esToEn[normalized]) return esToEn[normalized] + '/';
  } else {
    if (enToEs[normalized]) return enToEs[normalized] + '/';
  }

  // Fallback: just swap the lang segment (works for same-slug pages)
  const sourceLang = targetLang === 'en' ? 'es' : 'en';
  return normalized.replace(`/${sourceLang}/`, `/${targetLang}/`).replace(`/${sourceLang}`, `/${targetLang}`) + '/';
}
