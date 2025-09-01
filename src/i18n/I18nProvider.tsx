import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from 'react';
import { resources, get } from './translations';
import type { Lang } from './translations';

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<Ctx | null>(null);

function isLang(v: unknown): v is Lang {
  return v === 'tr' || v === 'en';
}

function detectInitialLang(defaultLang: Lang): Lang {
  // 1) URL ?lang=en|tr öncelikli
  try {
    const url = new URL(window.location.href);
    const q = url.searchParams.get('lang');
    if (isLang(q)) return q;
  } catch {}
  // 2) localStorage
  try {
    const saved = localStorage.getItem('ekutas.lang');
    if (isLang(saved)) return saved;
  } catch {}
  // 3) varsayılan
  return defaultLang;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within <I18nProvider>');
  return ctx;
}

export default function I18nProvider({
  children,
  defaultLang = 'tr',
}: {
  children: ReactNode;
  defaultLang?: Lang;
}) {
  const [lang, setLang] = useState<Lang>(() => detectInitialLang(defaultLang));

  // <html lang="..">
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // localStorage’a yaz + URL’de ?lang= senkronla (replaceState ile)
  useEffect(() => {
    try {
      localStorage.setItem('ekutas.lang', lang);
    } catch {}

    try {
      const url = new URL(window.location.href);
      if (url.searchParams.get('lang') !== lang) {
        url.searchParams.set('lang', lang);
        window.history.replaceState(null, '', url.toString());
      }
    } catch {}
  }, [lang]);

  const t = useMemo(() => {
    return (key: string) => {
      const val = get(resources[lang], key);
      return typeof val === 'string' ? val : key;
    };
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
