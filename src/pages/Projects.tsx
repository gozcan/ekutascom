import { motion } from 'framer-motion';
import { useMemo, useRef, useCallback, useState } from 'react';
import { useI18n } from '../i18n/I18nProvider';
import { resources, get } from '../i18n/translations';

const fade = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

export default function Projects() {
  const { t, lang } = useI18n();

  const data = useMemo(() => {
    const p = (get(resources[lang], 'projects') as {
      pageTitle: string;
      pageDesc: string;
      ongoingTitle: string;
      foreignTitle: string;
      domesticTitle: string;
      ongoing: string[];
      foreign: string[];
      domestic: string[];
    }) || {
      pageTitle: 'Projeler',
      pageDesc: '',
      ongoingTitle: '',
      foreignTitle: '',
      domesticTitle: '',
      ongoing: [],
      foreign: [],
      domestic: [],
    };
    return p;
  }, [lang]);

  // Listeler için metin ayrıştırma
  const ongoingList = useMemo(
    () => (data.ongoing || []).map(splitTitleLocation),
    [data.ongoing]
  );
  const foreignList = useMemo(
    () => data.foreign.map(splitTitleLocation),
    [data.foreign]
  );
  const domesticList = useMemo(
    () => data.domestic.map(splitTitleLocation),
    [data.domestic]
  );

  // Alttaki slider için görselleri hazırla (opsiyonel görsel yoksa placeholder çalışır)
  const ongoingGallery = useMemo(
    () =>
      (data.ongoing || []).map((raw, i) => ({
        ...splitTitleLocation(raw),
        tag: data.ongoingTitle || '',
        imgId: `ongoing${i + 1}`,
      })),
    [data.ongoing, data.ongoingTitle]
  );
  const foreignGallery = useMemo(
    () =>
      data.foreign.map((raw, i) => ({
        ...splitTitleLocation(raw),
        tag: data.foreignTitle,
        imgId: `f${i + 1}`,
      })),
    [data.foreign, data.foreignTitle]
  );
  const domesticGallery = useMemo(
    () =>
      data.domestic.map((raw, i) => ({
        ...splitTitleLocation(raw),
        tag: data.domesticTitle,
        imgId: `d${i + 1}`,
      })),
    [data.domestic, data.domesticTitle]
  );
  const galleryItems = useMemo(() => {
    // Devam eden projeler + yurtdışı + yurtiçi
    const take = (arr: any[], n: number) => arr.slice(0, n);
    return [
      ...take(ongoingGallery, 3),
      ...take(foreignGallery, 4),
      ...take(domesticGallery, 8),
    ];
  }, [ongoingGallery, foreignGallery, domesticGallery]);

  // Slider kontrolleri
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollByX = useCallback((dx: number) => {
    scrollerRef.current?.scrollBy({ left: dx, behavior: 'smooth' });
  }, []);

  // Lightbox state
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <div className="bg-white">
      {/* Meta */}
      <meta
        name="description"
        content={data.pageDesc || data.pageTitle}
      />

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white ring-1 ring-white/20 backdrop-blur-sm hover:bg-white/20 transition"
            aria-label="Close"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <img
            src={lightboxImage}
            alt="Preview"
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Üst şerit (ambient) */}
      <section className="relative isolate overflow-hidden bg-slate-900 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-amber-400/15 blur-3xl" />
          <div className="absolute -left-32 bottom-[-80px] h-[380px] w-[380px] rounded-full bg-sky-300/10 blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/[.06] via-transparent to-black/[.12]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight"
            style={{ textShadow: '0 1px 1px rgba(0,0,0,.18)' }}
          >
            {data.pageTitle}
          </motion.h1>

          {data.pageDesc ? (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.05,
              }}
              className="mt-3 max-w-2xl text-white/80 md:text-lg"
            >
              {data.pageDesc}
            </motion.p>
          ) : null}
        </div>
      </section>

      {/* --- PROJE LİSTELERİ (üst) --- */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 grid gap-10 md:grid-cols-12">
          {/* Devam Eden — TAM GENİŞLİK */}
          {data.ongoingTitle && (
            <div className="md:col-span-12">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={fade.viewport}
                transition={fade.transition}
                className="flex items-center gap-2 font-heading text-xl md:text-2xl font-bold tracking-tight text-slate-900"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-700 ring-1 ring-amber-200">
                  <ClockIcon />
                </span>
                {data.ongoingTitle}
              </motion.h2>
              <div
                className="mt-3 h-1 w-20 rounded-full bg-amber-500"
                aria-hidden="true"
              />
              <ul className="mt-6 grid gap-x-8 gap-y-4 md:grid-cols-3">
                {ongoingList.map((item, i) => {
                  let slug = null;
                  const fullText = (
                    (item.title || '') +
                    ' ' +
                    (item.location || '')
                  ).toLowerCase();

                  if (
                    fullText.includes('ali şahin') ||
                    fullText.includes('ali sahin')
                  ) {
                    slug = 'ali-sahin-apartmani';
                  } else if (
                    fullText.includes('abc') &&
                    (fullText.includes('kısıklı') ||
                      fullText.includes('kisikli'))
                  ) {
                    slug = 'kisikli-abc-apartmani';
                  } else if (
                    (fullText.includes('köşem') ||
                      fullText.includes('kosem')) &&
                    (fullText.includes('bahçelievler') ||
                      fullText.includes('bahcelievler'))
                  ) {
                    slug = 'bahcelievler-kosem-apartmani';
                  }

                  return (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      viewport={fade.viewport}
                      transition={{ ...fade.transition, delay: i * 0.02 }}
                      className="group relative flex items-start gap-2 py-2"
                    >
                      <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-amber-400/70 ring-2 ring-amber-200/60 transition group-hover:bg-amber-500" />
                      <div className="flex-1">
                        {slug ? (
                          <a
                            href={`/projects/${slug}`}
                            className="block"
                          >
                            <div className="font-medium text-slate-900 group-hover:text-amber-700 transition-colors">
                              {item.title}
                            </div>
                            {item.location ? (
                              <div className="text-sm text-slate-600 group-hover:text-amber-600/80 transition-colors">
                                {item.location}
                              </div>
                            ) : null}
                          </a>
                        ) : (
                          <>
                            <div className="font-medium text-slate-900 group-hover:text-slate-950">
                              {item.title}
                            </div>
                            {item.location ? (
                              <div className="text-sm text-slate-600">
                                {item.location}
                              </div>
                            ) : null}
                          </>
                        )}
                      </div>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          )}

          {/* Yurtdışı — tek kolon liste */}
          <div className="md:col-span-6">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={fade.viewport}
              transition={fade.transition}
              className="flex items-center gap-2 font-heading text-xl md:text-2xl font-bold tracking-tight text-slate-900"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-700 ring-1 ring-amber-200">
                <GlobeIcon />
              </span>
              {data.foreignTitle}
            </motion.h2>
            <div
              className="mt-3 h-1 w-20 rounded-full bg-amber-500"
              aria-hidden="true"
            />
            <ul className="mt-6 divide-y divide-slate-200/70">
              {foreignList.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  viewport={fade.viewport}
                  transition={{ ...fade.transition, delay: i * 0.02 }}
                  className="group flex items-start gap-3 py-3"
                >
                  <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-amber-400/70 ring-2 ring-amber-200/60 transition group-hover:bg-amber-500" />
                  <div className="flex-1">
                    <div className="font-medium text-slate-900 group-hover:text-slate-950">
                      {item.title}
                    </div>
                    {item.location ? (
                      <div className="text-sm text-slate-600">
                        {item.location}
                      </div>
                    ) : null}
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Yurtiçi — İKİ KOLON liste */}
          <div className="md:col-span-6">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={fade.viewport}
              transition={fade.transition}
              className="flex items-center gap-2 font-heading text-xl md:text-2xl font-bold tracking-tight text-slate-900"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-700 ring-1 ring-amber-200">
                <BuildingIcon />
              </span>
              {data.domesticTitle}
            </motion.h2>
            <div
              className="mt-3 h-1 w-20 rounded-full bg-amber-500"
              aria-hidden="true"
            />

            <ul className="mt-6 grid gap-x-8 gap-y-2 md:grid-cols-2">
              {domesticList.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  viewport={fade.viewport}
                  transition={{ ...fade.transition, delay: i * 0.02 }}
                  className="group relative flex items-start gap-2 py-2"
                >
                  <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-amber-400/70 ring-2 ring-amber-200/60 transition group-hover:bg-amber-500" />
                  <div className="flex-1">
                    <div className="font-medium text-slate-900 group-hover:text-slate-950">
                      {item.title}
                    </div>
                    {item.location ? (
                      <div className="text-sm text-slate-600">
                        {item.location}
                      </div>
                    ) : null}
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --- GALERİ (altta SLIDER gibi yatay kaydırma) --- */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          {/* Başlık opsiyonel: i18n'de yoksa göstermeyiz */}
          {t('projects.galleryTitle') ? (
            <>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={fade.viewport}
                transition={fade.transition}
                className="font-heading text-xl md:text-2xl font-bold tracking-tight text-slate-900"
              >
                {t('projects.galleryTitle')}
              </motion.h2>
              <div
                className="mt-3 h-1 w-20 rounded-full bg-amber-500"
                aria-hidden="true"
              />
            </>
          ) : null}

          <div className="relative mt-6">
            {/* scroller */}
            <div
              ref={scrollerRef}
              className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2"
              style={{ scrollbarWidth: 'none' }}
            >
              {galleryItems.map((g, i) => (
                <GallerySlide
                  key={`${g.imgId}-${i}`}
                  item={g}
                  i={i}
                  onImageClick={setLightboxImage}
                />
              ))}
            </div>

            {/* sol/sağ butonlar */}
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
              <button
                type="button"
                onClick={() => scrollByX(-420)}
                className="pointer-events-auto ml-2 rounded-full bg-white/90 p-2 text-slate-700 shadow ring-1 ring-slate-200 hover:bg-white"
                aria-label="Prev"
              >
                <ArrowLeftIcon />
              </button>
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
              <button
                type="button"
                onClick={() => scrollByX(420)}
                className="pointer-events-auto mr-2 rounded-full bg-white/90 p-2 text-slate-700 shadow ring-1 ring-slate-200 hover:bg-white"
                aria-label="Next"
              >
                <ArrowIcon />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ----------------- Galeri Slaytı ----------------- */

function GallerySlide({
  item,
  i,
  onImageClick,
}: {
  item: { imgId: string; title: string; location?: string; tag: string };
  i: number;
  onImageClick: (url: string) => void;
}) {
  // Devam eden projeler için özel yol belirleme
  let srcBase = `/images/projects/${item.imgId}`;
  
  if (item.imgId.startsWith('ongoing')) {
    const index = parseInt(item.imgId.replace('ongoing', ''));
    if (index === 1) srcBase = '/images/projects/ali-sahin-apartmani/hero';
    else if (index === 2) srcBase = '/images/projects/kisikli-abc-apartmani/hero';
    else if (index === 3) srcBase = '/images/projects/bahcelievler-kosem-apartmani/hero';
  }

  const [imgSrc, setImgSrc] = useState(`${srcBase}.jpg`);
  
  const onErr: React.ReactEventHandler<HTMLImageElement> = (e) => {
    const el = e.currentTarget;
    const text = encodeURIComponent(item.title);
    const svg = `
      <svg xmlns='http://www.w3.org/2000/svg' width='1200' height='900'>
        <defs>
          <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
            <stop offset='0%' stop-color='#0f172a'/>
            <stop offset='60%' stop-color='#0f172a'/>
            <stop offset='100%' stop-color='rgba(245,158,11,0.35)'/>
          </linearGradient>
        </defs>
        <rect width='100%' height='100%' fill='url(#g)'/>
        <circle cx='980' cy='180' r='220' fill='rgba(245,158,11,0.25)'/>
        <text x='48' y='820' font-size='42' font-family='Inter,Arial' fill='rgba(255,255,255,0.9)'>${text}</text>
      </svg>`;
    el.src = `data:image/svg+xml;utf8,${svg}`;
  };

  return (
    <motion.figure
      className="group relative h-[220px] w-[78%] shrink-0 snap-start overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200 md:h-[260px] md:w-[420px] cursor-pointer"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.03 }}
      onClick={() => onImageClick(imgSrc)}
    >
      <img
        src={imgSrc}
        onError={(e) => {
          const target = e.currentTarget;
          // Try alternative formats
          if (target.src.endsWith('.jpg')) {
            const newSrc = target.src.replace('.jpg', '.png');
            setImgSrc(newSrc);
            target.src = newSrc;
          } else if (!target.dataset.failed) {
            target.dataset.failed = 'true';
            onErr(e);
          }
        }}
        alt={item.title}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
      />

      {/* overlay + başlık */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/25 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-3 md:p-4">
        <div className="inline-flex rounded-md bg-black/45 px-2.5 py-1.5 text-[12px] text-white backdrop-blur">
          {item.tag}
        </div>
        <div className="mt-1 text-white font-semibold drop-shadow">
          {item.title}
        </div>
        {item.location ? (
          <div className="text-sm text-white/80">{item.location}</div>
        ) : null}
      </figcaption>
    </motion.figure>
  );
}

/* ----------------- Yardımcılar & İkonlar ----------------- */

function splitTitleLocation(raw: string): { title: string; location?: string } {
  // TR/EN’de hem kısa "-" hem uzun "–" tire olabilir
  const parts = raw.split(/ *[–-] */);
  if (parts.length >= 2) {
    const loc = parts.slice(1).join(' – ').trim();
    return { title: parts[0].trim(), location: loc || undefined };
  }
  return { title: raw.trim() };
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
      />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
function GlobeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
      />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 0 20" />
      <path d="M12 2a15.3 15.3 0 0 0 0 20" />
    </svg>
  );
}
function BuildingIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 21V7a2 2 0 0 1 2-2h4V3h6v2h4a2 2 0 0 1 2 2v14" />
      <path d="M6 10h2M10 10h2M14 10h2M18 10h2M6 14h2M10 14h2M14 14h2M18 14h2M6 18h2M10 18h2M14 18h2M18 18h2" />
    </svg>
  );
}
function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}
function ArrowLeftIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M19 12H5M11 5l-7 7 7 7" />
    </svg>
  );
}
