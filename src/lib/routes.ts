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
  '/es/producto/sesiones':          '/en/product/sessions',
  '/es/producto/recepcionista':     '/en/product/receptionist',
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

  // Specialties
  '/es/especialidades':             '/en/specialties',
  '/es/especialidades/clinicas':    '/en/specialties/clinics',
  '/es/especialidades/odontologia': '/en/specialties/dental',
  '/es/especialidades/salud-mental':'/en/specialties/mental-health',
  '/es/especialidades/estetica':    '/en/specialties/aesthetics',
  '/es/especialidades/hospitales':  '/en/specialties/hospitals',

  // Legacy industry redirects (hreflang fallbacks)
  '/es/industrias':                 '/en/specialties',
  '/es/industrias/salud':           '/en/specialties/clinics',
  '/es/industrias/odontologia':     '/en/specialties/dental',

  // Compare
  '/es/comparar':                   '/en/compare',
  '/es/comparar/vs-calendly':       '/en/compare/vs-calendly',
  '/es/comparar/vs-confirmafy':     '/en/compare/vs-confirmafy',
  '/es/comparar/vs-heidi':          '/en/compare/vs-heidi',
  '/es/comparar/vs-recepcionista-tradicional': '/en/compare/vs-traditional-front-desk',
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
