import { useState } from 'react';
import { useI18n } from '../i18n/I18nProvider';

function Icon({ name }: { name: 'reliability' | 'transparency' | 'safety' }) {
  const cls = 'h-6 w-6';
  switch (name) {
    case 'reliability': // shield-check
      return (
        <svg
          viewBox="0 0 24 24"
          className={cls}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case 'transparency': // document
      return (
        <svg
          viewBox="0 0 24 24"
          className={cls}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
          <path d="M8 13h8M8 17h6M8 9h3" />
        </svg>
      );
    case 'safety': // hardhat
      return (
        <svg
          viewBox="0 0 24 24"
          className={cls}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 18a9 9 0 0 1 18 0" />
          <path d="M9 10V7a3 3 0 0 1 6 0v3" />
          <path d="M3 18h18" />
        </svg>
      );
  }
}

export default function About() {
  const { t } = useI18n();
  const [broken, setBroken] = useState(false);

  return (
    <div>
      {/* React 19 meta hoisting */}
      <title>{t('meta.aboutTitle')}</title>
      <meta
        name="description"
        content={t('meta.aboutDesc')}
      />

      {/* Üst başlık + amber vurgu çizgisi */}
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-6xl px-4 pt-12 pb-8 md:pt-16 md:pb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-amber-800 text-xs ring-1 ring-amber-200">
            {t('brand')}
          </div>
          <h1 className="mt-3 font-heading text-slate-900 text-3xl md:text-5xl font-extrabold tracking-tight">
            {t('aboutPage.heading')}
          </h1>
          <div
            className="mt-4 h-1 w-24 rounded-full bg-amber-500"
            aria-hidden="true"
          />
          <p className="mt-4 text-lg text-slate-600 max-w-3xl">
            {t('aboutPage.intro1')}
          </p>
          <p className="mt-2 text-slate-600 max-w-3xl">
            {t('aboutPage.intro2')}
          </p>
        </div>
      </section>

      {/* İki sütun: solda metin, sağda görsel kart (hero ile uyumlu kompozisyon) */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-14 grid md:grid-cols-2 gap-10 items-start">
        {/* Sol metin bloğu (boşluklu, okunaklı) */}
        <div className="space-y-4 text-slate-700">
          <p>{t('aboutPage.intro1')}</p>
          <p>{t('aboutPage.intro2')}</p>
          {/* İstersen buraya kronoloji/zaman çizelgesi ekleriz */}
        </div>

        {/* Sağ: görsel kart + amber dekorlar */}
        <div className="relative">
          {/* Amber dekor */}
          <div
            className="absolute -top-6 -right-6 h-36 w-36 rotate-6 rounded-2xl bg-amber-500/80 blur-[2px] md:h-44 md:w-44"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-4 -left-4 h-10 w-32 -rotate-6 rounded-full bg-amber-500/20"
            aria-hidden="true"
          />

          <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/10">
            <div className="aspect-[5/4] md:aspect-[16/10] bg-gradient-to-tr from-slate-200 via-slate-100 to-white" />
            {!broken && (
              <picture>
                <source
                  srcSet="/images/about.avif"
                  type="image/avif"
                />
                <source
                  srcSet="/images/about.webp"
                  type="image/webp"
                />
                <img
                  src="/images/about.jpg"
                  alt={t('aboutPage.heading')}
                  loading="lazy"
                  decoding="async"
                  onError={() => setBroken(true)}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
            )}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/0 via-black/0 to-white/10"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      {/* Değerler: ikonlu kartlar, amber vurgulu başlık çizgisi */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <h2 className="font-heading text-slate-900 text-2xl md:text-4xl font-bold tracking-tight">
          {t('aboutPage.valuesTitle')}
        </h2>
        <div
          className="mt-3 h-1 w-20 rounded-full bg-amber-500"
          aria-hidden="true"
        />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-2xl border bg-white p-6 shadow-sm ring-1 ring-black/5 transition hover:shadow-md">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-700 ring-1 ring-amber-200">
              <Icon name="reliability" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              {t('aboutPage.value1')}
            </h3>
            <p className="mt-1 text-slate-600">{t('aboutPage.value1Desc')}</p>
          </article>

          <article className="rounded-2xl border bg-white p-6 shadow-sm ring-1 ring-black/5 transition hover:shadow-md">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-700 ring-1 ring-amber-200">
              <Icon name="transparency" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              {t('aboutPage.value2')}
            </h3>
            <p className="mt-1 text-slate-600">{t('aboutPage.value2Desc')}</p>
          </article>

          <article className="rounded-2xl border bg-white p-6 shadow-sm ring-1 ring-black/5 transition hover:shadow-md">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-700 ring-1 ring-amber-200">
              <Icon name="safety" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              {t('aboutPage.value3')}
            </h3>
            <p className="mt-1 text-slate-600">{t('aboutPage.value3Desc')}</p>
          </article>
        </div>
      </section>
    </div>
  );
}
