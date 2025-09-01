import { useState } from 'react';
import { useI18n } from '../i18n/I18nProvider';

export default function Hero() {
  const { t } = useI18n();
  const [broken, setBroken] = useState(false);

  return (
    <section className="bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Sol: başlık + kısa metin + KPI'lar */}
        <div>
          <h1 className="font-heading text-slate-900 text-4xl md:text-6xl font-extrabold leading-tight">
            {t('hero.title')}
          </h1>
          <p className="mt-5 text-lg md:text-xl text-slate-600 max-w-2xl">
            {t('hero.subtitle')}
          </p>

          {/* KPI şeridi */}
          <div className="mt-8 grid grid-cols-3 gap-6 max-w-md">
            <div className="rounded-xl bg-white ring-1 ring-black/5 shadow-sm p-4 text-center">
              <div className="text-2xl md:text-3xl font-extrabold text-slate-900">
                {t('hero.kpis.yearsValue')}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wide text-amber-700">
                {t('hero.kpis.yearsLabel')}
              </div>
            </div>
            <div className="rounded-xl bg-white ring-1 ring-black/5 shadow-sm p-4 text-center">
              <div className="text-2xl md:text-3xl font-extrabold text-slate-900">
                {t('hero.kpis.projectsValue')}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wide text-amber-700">
                {t('hero.kpis.projectsLabel')}
              </div>
            </div>
            <div className="rounded-xl bg-white ring-1 ring-black/5 shadow-sm p-4 text-center">
              <div className="text-2xl md:text-3xl font-extrabold text-slate-900">
                {t('hero.kpis.areaValue')}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wide text-amber-700">
                {t('hero.kpis.areaLabel')}
              </div>
            </div>
          </div>
        </div>

        {/* Sağ: görsel kart kompozisyonu (aynı) */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -top-6 -right-6 h-40 w-40 rotate-6 rounded-2xl bg-amber-500/80 blur-[2px] md:h-48 md:w-48"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -left-4 h-10 w-32 -rotate-6 rounded-full bg-amber-500/20"
          />

          <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/10">
            {/* Oran koruyucu */}
            <div className="aspect-[5/4] md:aspect-[16/10] bg-gradient-to-tr from-slate-200 via-slate-100 to-white" />
            {!broken && (
              <picture>
                {/* İleride avif/webp varyantların olduğunda bu source'ları ekle */}
                {/* <source srcSet="/images/hero.avif" type="image/avif" /> */}
                {/* <source srcSet="/images/hero.webp" type="image/webp" /> */}
                <img
                  src="/images/hero.jpg"
                  alt={t('hero.imageAlt')}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  onError={() => setBroken(true)}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
            )}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/0 via-black/0 to-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
