import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider';
import { resources, get } from '../i18n/translations';
import Hero from '../components/Hero';

/* -------------------- küçük ikon yardımcıları -------------------- */
function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 flex-none"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
function Thumb({
  id,
  alt,
  index,
  label,
}: {
  id: string;
  alt: string;
  index: number;
  label: string;
}) {
  const [broken, setBroken] = useState(false);
  return (
    <Link
      to="/projects"
      className="group relative overflow-hidden rounded-3xl bg-white ring-1 ring-black/10 shadow-xl transition hover:-translate-y-0.5 hover:ring-black/20 hover:shadow-2xl"
      aria-label={`Project ${index + 1}`}
      data-animate
    >
      {/* oran koruyucu + arka plan */}
      <div className="aspect-[4/3] bg-gradient-to-tr from-slate-200 via-slate-100 to-white" />
      {/* görsel */}
      {!broken && (
        <picture>
          <source
            srcSet={`/images/projects/${id}.avif`}
            type="image/avif"
          />
          <source
            srcSet={`/images/projects/${id}.webp`}
            type="image/webp"
          />
          <img
            src={`/images/projects/${id}.jpg`}
            alt={alt}
            loading="lazy"
            decoding="async"
            onError={() => setBroken(true)}
            sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
            className="absolute inset-0 h-full w-full object-cover object-[50%_35%] transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </picture>
      )}

      {/* numara rozeti */}
      <div className="pointer-events-none absolute left-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/90 text-white text-sm font-semibold ring-1 ring-amber-600/40">
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* alt caption overlay */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="m-3 rounded-lg bg-black/45 px-2.5 py-1.5 text-[13px] text-white backdrop-blur">
          {label}
        </div>
      </div>

      {/* hover parlaması */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-transparent group-hover:ring-amber-200/40" />
    </Link>
  );
}
function SvcIcon({ i }: { i: number }) {
  const cls = 'h-6 w-6 flex-none';
  const sw = 1.75;
  if (i === 0) {
    // hardhat
    return (
      <svg
        viewBox="0 0 24 24"
        className={cls}
        fill="none"
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 18a9 9 0 0 1 18 0" />
        <path d="M9 10V7a3 3 0 0 1 6 0v3" />
        <path d="M3 18h18" />
      </svg>
    );
  } else if (i === 1) {
    // blueprint
    return (
      <svg
        viewBox="0 0 24 24"
        className={cls}
        fill="none"
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M6 4h9a3 3 0 0 1 3 3v11H9a3 3 0 0 1-3-3V4z" />
        <path d="M18 7h2a2 2 0 0 1 0 4h-2" />
        <path d="M10 9h4M10 13h6M10 17h3" />
      </svg>
    );
  }
  // crane
  return (
    <svg
      viewBox="0 0 24 24"
      className={cls}
      fill="none"
      stroke="currentColor"
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 6h14l-3-3H6l-3 3z" />
      <path d="M10 6v12" />
      <path d="M6 18h8" />
      <path d="M17 6h4" />
      <path d="M21 6v5" />
      <path d="M19 11h4v3h-4z" />
    </svg>
  );
}

/* -------------------- sayfa -------------------- */
export default function Home() {
  const { t, lang } = useI18n();

  // Proje görselleri + caption etiketleri (basit örnek)
  const thumbs = ['p1', 'p2', 'p3'];
  const captionsTR = [
    'Konut · Üsküdar',
    'Ticari · Ataşehir',
    'Endüstriyel · Gebze',
  ];
  const captionsEN = [
    'Residential · Üsküdar',
    'Commercial · Ataşehir',
    'Industrial · Gebze',
  ];
  const captions = lang === 'tr' ? captionsTR : captionsEN;

  // i18n içerikleri
  const servicesStrip =
    (get(resources[lang], 'home.servicesStrip.items') as Array<{
      title: string;
      desc: string;
    }>) ?? [];
  const benefits =
    (get(resources[lang], 'home.benefits.items') as Array<{
      title: string;
      desc: string;
    }>) ?? [];
  const steps =
    (get(resources[lang], 'home.process.steps') as Array<{
      title: string;
      desc: string;
    }>) ?? [];
  const regions = (get(resources[lang], 'home.regions.list') as string[]) ?? [];
  const mapSrc = (get(resources[lang], 'contactInfo.mapEmbed') as string) || '';
  const heroKpis = (get(resources[lang], 'hero.kpis') as any) || {};
  const extraKpis =
    (get(resources[lang], 'home.kpisExtra.items') as Array<{
      value: string;
      label: string;
    }>) ?? [];

  // KPI tek satır (typographic): hero'daki 3 + extra 3 → 6 adet
  const kpiRow: Array<{ value: string; label: string }> = [
    { value: heroKpis.yearsValue, label: heroKpis.yearsLabel },
    { value: heroKpis.projectsValue, label: heroKpis.projectsLabel },
    { value: heroKpis.areaValue, label: heroKpis.areaLabel },
    ...extraKpis,
  ].filter(Boolean);
  function Thumb({
    id,
    alt,
    index,
    label,
  }: {
    id: string;
    alt: string;
    index: number;
    label: string;
  }) {
    const [broken, setBroken] = useState(false);
    return (
      <Link
        to="/projects"
        className="group relative overflow-hidden rounded-3xl bg-white ring-1 ring-black/10 shadow-xl transition hover:-translate-y-0.5 hover:ring-black/20 hover:shadow-2xl"
        aria-label={`Project ${index + 1}`}
        data-animate
      >
        {/* oran koruyucu + arka plan */}
        <div className="aspect-[4/3] bg-gradient-to-tr from-slate-200 via-slate-100 to-white" />
        {/* görsel */}
        {!broken && (
          <picture>
            <source
              srcSet={`/images/projects/${id}.avif`}
              type="image/avif"
            />
            <source
              srcSet={`/images/projects/${id}.webp`}
              type="image/webp"
            />
            <img
              src={`/images/projects/${id}.jpg`}
              alt={alt}
              loading="lazy"
              decoding="async"
              onError={() => setBroken(true)}
              sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
              className="absolute inset-0 h-full w-full object-cover object-[50%_35%] transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </picture>
        )}

        {/* numara rozeti */}
        <div className="pointer-events-none absolute left-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/90 text-white text-sm font-semibold ring-1 ring-amber-600/40">
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* alt caption overlay */}
        <div className="absolute inset-x-0 bottom-0">
          <div className="m-3 rounded-lg bg-black/45 px-2.5 py-1.5 text-[13px] text-white backdrop-blur">
            {label}
          </div>
        </div>

        {/* hover parlaması */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-transparent group-hover:ring-amber-200/40" />
      </Link>
    );
  }
  return (
    <div>
      {/* Meta */}
      <title>{t('meta.homeTitle')}</title>
      <meta
        name="description"
        content={t('meta.homeDesc')}
      />

      {/* HERO (mevcut bileşeni koruyoruz) */}
      <Hero />

      {/* 1) Öne Çıkan Projeler — edge-to-edge görsel şeritler (kart YOK) */}
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-6xl px-4 pt-10 pb-12 md:pt-14 md:pb-16">
          <h2
            className="font-heading text-slate-900 text-2xl md:text-4xl font-bold tracking-tight"
            data-animate
          >
            {t('home.featuredTitle')}
          </h2>
          <div
            className="mt-3 h-1 w-20 rounded-full bg-amber-500"
            aria-hidden="true"
          />
          <p
            className="mt-4 text-slate-600 max-w-3xl"
            data-animate
          >
            {t('home.featuredDesc')}
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {thumbs.map((id, i) => (
              <Thumb
                key={id}
                id={id}
                index={i}
                alt={t('projectsPage.heading')}
                label={captions[i] ?? ''}
              />
            ))}
          </div>

          <div
            className="mt-8"
            data-animate
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-md border border-amber-300 bg-white px-5 py-2.5 text-amber-800 font-medium hover:bg-amber-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/40 transition"
            >
              {t('home.viewAll')}
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      {/* 2) Hizmetler — media list (ikon + başlık + kısa metin), ince ayırıcılar (kart YOK) */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <h2 className="font-heading text-slate-900 text-2xl md:text-4xl font-bold tracking-tight">
            {t('home.servicesStrip.title')}
          </h2>
          <div
            className="mt-3 h-1 w-20 rounded-full bg-amber-500"
            aria-hidden="true"
          />
          <p className="mt-4 text-slate-600 max-w-3xl">
            {t('home.servicesStrip.desc')}
          </p>

          <div className="mt-8 grid gap-y-8 md:grid-cols-3 md:gap-x-8 md:gap-y-0 md:divide-x md:divide-slate-200">
            {servicesStrip.map((s, i) => (
              <Link
                key={i}
                to="/services"
                className={`group flex items-start gap-4 ${
                  i > 0 ? 'md:pl-8' : ''
                }`}
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-amber-50 text-amber-700 ring-1 ring-amber-200 group-hover:translate-x-0.5 transition">
                  <SvcIcon i={i} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{s.title}</h3>
                  <p className="mt-1 text-slate-600">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3) Neden Ekutaş? — 2 sütun checklist + geniş görsel (kart YOK) */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
          {/* Sol: geniş bağlam fotoğrafı */}
          <figure className="relative overflow-hidden rounded-2xl">
            {/* Oran koruyucu + degrade placeholder (görsel yoksa) */}
            <div className="aspect-[4/3] md:aspect-[16/10] bg-gradient-to-tr from-slate-200 via-slate-100 to-white" />
            <picture>
              <source
                srcSet="/images/about.webp"
                type="image/webp"
              />
              <img
                src="/images/about.jpg"
                alt={t('home.benefitsTitle')}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-[50%_40%] transition-transform duration-500 hover:scale-[1.015]"
              />
            </picture>
            {/* Üstten hafif parlama okunaklık için */}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/0 via-black/0 to-white/10"
              aria-hidden="true"
            />
            {/* İsteğe bağlı kısa açıklama etiketi */}
            {/* <figcaption className="absolute bottom-0 left-0 m-3 rounded-md bg-black/45 px-2.5 py-1.5 text-[13px] text-white backdrop-blur">Şantiye / Detay</figcaption> */}
          </figure>{' '}
          {/* Sağ: başlık + checklist */}
          <div>
            <h2 className="font-heading text-slate-900 text-2xl md:text-4xl font-bold tracking-tight">
              {t('home.benefitsTitle')}
            </h2>
            <div
              className="mt-3 h-1 w-20 rounded-full bg-amber-500"
              aria-hidden="true"
            />
            <p className="mt-4 text-slate-600 max-w-3xl">
              {t('home.benefitsDesc')}
            </p>

            <ul className="mt-6 grid gap-x-10 gap-y-3 md:grid-cols-2">
              {benefits.map((b, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 text-amber-600">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 flex-none"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <div>
                    <strong className="font-semibold text-slate-900">
                      {b.title}:
                    </strong>{' '}
                    <span className="text-slate-700">{b.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4) Süreç — yatay timeline (nokta + başlıklar), kutu YOK */}
      <section className="bg-stone-50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <h2 className="font-heading text-slate-900 text-2xl md:text-4xl font-bold tracking-tight">
            {t('home.processTitle')}
          </h2>
          <div
            className="mt-3 h-1 w-20 rounded-full bg-amber-500"
            aria-hidden="true"
          />
          <p className="mt-4 text-slate-600 max-w-3xl">
            {t('home.processDesc')}
          </p>

          <div className="relative mt-10">
            {/* çizgi */}
            <div
              className="absolute inset-x-0 top-4 h-px bg-amber-100"
              aria-hidden="true"
            />
            <ol className="relative grid gap-8 md:grid-cols-4">
              {steps.map((s, i) => (
                <li
                  key={i}
                  className="relative"
                >
                  {/* nokta */}
                  <div className="absolute -top-1 left-0 flex h-6 w-6 items-center justify-center rounded-full bg-white ring-1 ring-amber-200">
                    <span className="block h-3 w-3 rounded-full bg-amber-500" />
                  </div>
                  <div className="pl-8">
                    <div className="text-xs font-semibold text-amber-700">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="mt-1 text-lg font-semibold text-slate-900">
                      {s.title}
                    </div>
                    <p className="mt-1 text-slate-600">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 5) KPI tek satır — tipografik, ayırıcı çizgilerle */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-12">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-y-6 sm:grid-cols-3 md:grid-cols-6 md:divide-x md:divide-slate-200">
            {kpiRow.map((k, i) => (
              <div
                key={i}
                className={`text-center ${i > 0 ? 'md:px-6' : ''}`}
              >
                <div className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">
                  {k.value}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-amber-700/90">
                  {k.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6) Bölgeler + Harita — full-bleed map band, solda chip list (kart YOK) */}
      <section className="relative bg-slate-900">
        {/* Harita arka planı */}
        <div className="absolute inset-0">
          {mapSrc ? (
            <iframe
              src={mapSrc}
              title="Service areas map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0 grayscale brightness-90 contrast-105"
              aria-label="Company service areas map"
            />
          ) : (
            <div className="h-full w-full bg-slate-800" />
          )}
          {/* okunabilirlik için sol degrade */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        </div>

        {/* içerik overlay */}
        <div className="relative">
          <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
            <h2 className="font-heading text-white text-2xl md:text-4xl font-bold tracking-tight">
              {t('home.regionsTitle')}
            </h2>
            <div
              className="mt-3 h-1 w-20 rounded-full bg-amber-500"
              aria-hidden="true"
            />
            <p className="mt-4 text-white/80 max-w-3xl">
              {t('home.regionsDesc')}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {regions.map((r, i) => (
                <span
                  key={i}
                  className={`inline-flex items-center rounded-full px-3 py-1.5 text-sm ring-1 ${
                    i % 2 === 0
                      ? 'bg-white/15 text-white ring-white/20'
                      : 'bg-white/10 text-white ring-white/15'
                  }`}
                >
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
