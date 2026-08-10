import es from './es.json';
import en from './en.json';

export type Lang = 'es' | 'en';

const translations = { es, en } as const;

export function t(key: string, lang: Lang = 'es'): string {
  const dict = translations[lang] as Record<string, unknown>;
  const value = dict[key];
  if (typeof value === 'string') return value;
  const fallback = (translations['es'] as Record<string, unknown>)[key];
  if (typeof fallback === 'string') return fallback;
  return key;
}

export function tArr(key: string, lang: Lang = 'es'): string[] {
  const dict = translations[lang] as Record<string, unknown>;
  const value = dict[key];
  if (Array.isArray(value)) return value as string[];
  return [];
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return 'es';
}

export function getAlternateUrls(currentPath: string, lang: Lang) {
  const base = 'https://shadia.ai';
  const otherLang: Lang = lang === 'es' ? 'en' : 'es';
  const otherPath = currentPath.replace(`/${lang}/`, `/${otherLang}/`);
  return {
    current: `${base}${currentPath}`,
    alternate: `${base}${otherPath}`,
    alternateLang: otherLang,
  };
}

export function getProductUrl(slug: string, lang: Lang): string {
  if (lang === 'es') return `/es/producto/${slug}`;
  const enMap: Record<string, string> = {
    sesiones: 'sessions',
    recepcionista: 'receptionist',
    omnicanal: 'omnichannel',
    'agentes-ia': 'ai-agents',
    agente: 'agent',
    citas: 'appointments',
  };
  return `/en/product/${enMap[slug] ?? slug}`;
}

export function getSpecialtyUrl(slug: string, lang: Lang): string {
  if (lang === 'es') return `/es/especialidades/${slug}`;
  const enMap: Record<string, string> = {
    clinicas: 'clinics',
    odontologia: 'dental',
    'salud-mental': 'mental-health',
    estetica: 'aesthetics',
    hospitales: 'hospitals',
  };
  return `/en/specialties/${enMap[slug] ?? slug}`;
}

/** @deprecated Use getSpecialtyUrl */
export function getIndustryUrl(slug: string, lang: Lang): string {
  const map: Record<string, string> = {
    salud: 'clinicas',
    healthcare: 'clinics',
    odontologia: 'odontologia',
    dental: 'dental',
  };
  return getSpecialtyUrl(map[slug] ?? slug, lang);
}

export function getCompareUrl(slug: string, lang: Lang): string {
  if (lang === 'es') return `/es/comparar/${slug}`;
  return `/en/compare/${slug}`;
}
