import { useState } from 'react';
import { useI18n } from '../i18n/I18nProvider';

const IMAGES = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6'] as const;

function ImageCard({
  name,
  alt,
  index,
}: {
  name: string;
  alt: string;
  index: number;
}) {
  const [broken, setBroken] = useState(false);

  return (
    <article className="group relative overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/10">
      {/* Oran koruyucu + arka plan degrade (görsel yoksa görünür) */}
      <div className="aspect-[4/3] bg-gradient-to-tr from-slate-200 via-slate-100 to-white" />

      {/* Görsel */}
      {!broken && (
        <picture>
          <source
            srcSet={`/images/projects/${name}.avif`}
            type="image/avif"
          />
          <source
            srcSet={`/images/projects/${name}.webp`}
            type="image/webp"
          />
          <img
            src={`/images/projects/${name}.jpg`}
            alt={alt}
            loading="lazy"
            decoding="async"
            onError={() => setBroken(true)}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </picture>
      )}

      {/* Üst sol: amber numara rozeti */}
      <div className="pointer-events-none absolute left-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/90 text-white text-sm font-semibold ring-1 ring-amber-600/40">
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Parlama/okunurluk overlay'i */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/0 via-black/0 to-white/10 opacity-90" />

      {/* Hover kenarlık parlaması */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-transparent group-hover:ring-black/10" />
    </article>
  );
}

export default function Projects() {
  const { t } = useI18n();

  return (
    <div>
      {/* Meta */}
      <title>{t('projectsPage.metaTitle')}</title>
      <meta
        name="description"
        content={t('projectsPage.metaDesc')}
      />

      {/* Başlık bloğu — amber rozet + çizgi */}
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-6xl px-4 pt-12 pb-8 md:pt-16 md:pb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-amber-800 text-xs ring-1 ring-amber-200">
            {t('brand')}
          </div>
          <h1 className="mt-3 font-heading text-slate-900 text-3xl md:text-5xl font-extrabold tracking-tight">
            {t('projectsPage.heading')}
          </h1>
          <div
            className="mt-3 h-1 w-24 rounded-full bg-amber-500"
            aria-hidden="true"
          />
          <p className="mt-4 text-lg text-slate-600 max-w-3xl">
            {t('projectsPage.intro')}
          </p>
        </div>
      </section>

      {/* Galeri grid — büyük kartlar, güçlü gölge */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {IMAGES.map((id, idx) => (
            <ImageCard
              key={id}
              name={id}
              alt={t('projectsPage.heading')}
              index={idx}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
