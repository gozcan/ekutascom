import { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import { useI18n } from '../i18n/I18nProvider';
import { resources, get } from '../i18n/translations';
import Hero from '../components/Hero';

/* -------------------- yardımcı efekt bileşenleri -------------------- */
function FMReveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 12 }}
      whileInView={reduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function Parallax({
  children,
  speed = 0.2,
  className = '',
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduce ? 0 : speed * -120]
  ); // px
  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y }}
    >
      {children}
    </motion.div>
  );
}

/* -------------------- küçük ikonlar -------------------- */
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
function SvcIcon({ i }: { i: number }) {
  const cls = 'h-6 w-6 flex-none';
  const sw = 1.75;
  if (i === 0)
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
  if (i === 1)
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

function AboutFigure() {
  return (
    <FMReveal>
      <figure className="relative overflow-hidden rounded-2xl">
        <div className="aspect-[4/3] md:aspect-[4/3] bg-gradient-to-tr from-slate-200 via-slate-100 to-white" />
        <Parallax
          speed={0.2}
          className="absolute inset-0"
        >
          <picture>
            <source
              srcSet="/images/whyus.webp"
              type="image/webp"
            />
            <img
              src="/images/whyus.jpg"
              alt="Why Ekutaş?"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-contain  transition-transform duration-500 hover:scale-[1.015]"
            />
          </picture>
        </Parallax>
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/0 via-black/0 to-white/10"
          aria-hidden="true"
        />
      </figure>
    </FMReveal>
  );
}

function KpiRow({ items }: { items: Array<{ value: string; label: string }> }) {
  return (
    <FMReveal>
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-y-6 sm:grid-cols-3 md:grid-cols-5 md:divide-x md:divide-slate-200">
        {items.map((k, i) => (
          <motion.div
            key={i}
            className={`text-center ${i > 0 ? 'md:px-6' : ''}`}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <div className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">
              {k.value}
            </div>
            <div className="mt-1 text-[11px] uppercase tracking-wider text-amber-700/90">
              {k.label}
            </div>
          </motion.div>
        ))}
      </div>
    </FMReveal>
  );
}
function ServiceTile({
  i,
  title,
  desc,
}: {
  i: number;
  title: string;
  desc: string;
}) {
  // her karta ufak farklı amber vurgu verir
  const overlayGrad = [
    'from-amber-500/15 via-transparent to-transparent',
    'from-amber-400/15 via-transparent to-transparent',
    'from-amber-600/15 via-transparent to-transparent',
  ][i % 3];

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-white/70 p-5 ring-1 ring-slate-200 backdrop-blur-sm transition-shadow hover:shadow-md md:p-6"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* hover amber parıltı */}
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${overlayGrad} opacity-0 transition duration-500 group-hover:opacity-100`}
        aria-hidden="true"
      />

      <div className="relative flex items-start gap-4">
        <div className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-amber-50 text-amber-700 ring-1 ring-amber-200 transition-transform duration-300 group-hover:scale-105">
          <SvcIcon i={i} />
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-slate-900">{title}</h3>
            {/* ince vurgu çizgi */}
            <span className="h-px w-8 flex-none bg-gradient-to-r from-amber-300 to-transparent" />
          </div>
          <p className="mt-1 text-slate-600 leading-relaxed">{desc}</p>
        </div>
      </div>

      {/* alt çizgi animasyonu */}
      <div className="relative mt-5">
        <div className="h-px w-full bg-slate-200/70" />
        <div className="absolute left-0 top-0 h-px w-0 bg-gradient-to-r from-amber-400 to-transparent transition-all duration-500 group-hover:w-full" />
      </div>

      {/* sağ üst mini ok ipucu (link yok, sadece estetik) */}
      <div className="pointer-events-none absolute right-3 top-3 rounded-full bg-white/40 p-1.5 text-slate-700 ring-1 ring-white/60 backdrop-blur-sm opacity-0 transition group-hover:opacity-100">
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </div>
    </motion.div>
  );
}

/* -------------------- sayfa -------------------- */
export default function Home() {
  const { t, lang } = useI18n();

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
  const kpiRow: Array<{ value: string; label: string }> = [
    { value: heroKpis.yearsValue, label: heroKpis.yearsLabel },
    { value: heroKpis.projectsValue, label: heroKpis.projectsLabel },
    { value: heroKpis.areaValue, label: heroKpis.areaLabel },
    ...extraKpis,
  ].filter(Boolean);

  function ProjectCard({
    imgId,
    tag,
    alt,
    link = '#',
  }: {
    imgId: string;
    tag: string;
    alt: string;
    link?: string;
  }) {
    return (
      <motion.a
        href={link}
        className="group relative block overflow-hidden rounded-2xl ring-1 ring-slate-200/60 bg-slate-100"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        whileHover="hover"
      >
        {/* oran tutucu */}
        <div className="aspect-[4/3]" />
        {/* görsel */}
        <picture>
          <img
            src={`/images/projects/${imgId}.jpg`}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-[50%_35%] transition-transform duration-500 group-hover:scale-[1.04]"
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src.includes('.jpg')) {
                target.src = target.src.replace('.jpg', '.png');
              }
            }}
          />
        </picture>

        {/* koyu degrade overlay */}
        <motion.div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/20 to-transparent opacity-0"
          variants={{ hover: { opacity: 1 } }}
          transition={{ duration: 0.35 }}
          aria-hidden="true"
        />

        {/* etiket + başlık (alttan kayar) */}
        <motion.figcaption
          className="absolute inset-x-0 bottom-0 p-4 md:p-5"
          initial={{ y: 10, opacity: 0 }}
          variants={{ hover: { y: 0, opacity: 1 } }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex rounded-md bg-black/45 px-2.5 py-1.5 text-[13px] text-white backdrop-blur">
            {tag}
          </div>
        </motion.figcaption>

        {/* sağ üstte minik ok ipucu */}
        <motion.div
          className="absolute right-3 top-3 rounded-full bg-white/10 p-2 text-white ring-1 ring-white/15 backdrop-blur-sm opacity-0"
          variants={{ hover: { opacity: 1, y: 0 } }}
          initial={{ y: -6 }}
          transition={{ duration: 0.25 }}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </motion.div>
      </motion.a>
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

      {/* HERO */}
      <Hero />

      {/* ÖNE ÇIKAN PROJELER — hover-reveal + motion */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 pt-12 md:pt-16">
          <motion.h2
            className="font-heading text-slate-900 text-2xl md:text-4xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {t('home.featuredTitle')}
          </motion.h2>
          <div
            className="mt-3 h-1 w-20 rounded-full bg-amber-500"
            aria-hidden="true"
          />
          <motion.p
            className="mt-4 text-slate-600 max-w-3xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {t('home.featuredDesc')}
          </motion.p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                id: 'p1',
                slug: 'ali-sahin-apartmani',
                tagTr: 'Konut · Kozyatağı',
                tagEn: 'Residential · Kozyatağı',
              },
              {
                id: 'p2',
                slug: 'kisikli-abc-apartmani',
                tagTr: 'Konut · Kısıklı',
                tagEn: 'Residential · Kısıklı',
              },
              {
                id: 'p3',
                slug: 'bahcelievler-kosem-apartmani',
                tagTr: 'Konut · Bahçelievler',
                tagEn: 'Residential · Bahçelievler',
              },
            ].map((project) => (
              <ProjectCard
                key={project.id}
                imgId={project.id}
                tag={lang === 'tr' ? project.tagTr : project.tagEn}
                alt={t('projectsPage.heading')}
                link={project.slug ? `/projects/${project.slug}` : '/projects'}
              />
            ))}
          </div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a
              href="/projects"
              className="inline-flex items-center gap-2 rounded-md border border-amber-300 bg-white px-5 py-2.5 text-amber-800 font-medium hover:bg-amber-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/40 transition"
            >
              {t('home.viewAll')}
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* HİZMETLER — modern glass karolar + hover parıltı */}
      <section className="relative overflow-hidden bg-slate-50">
        {/* arka plan ambient */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-amber-300/20 blur-3xl" />
          <div className="absolute -left-20 bottom-[-60px] h-80 w-80 rounded-full bg-sky-300/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-12 md:py-16">
          <motion.h2
            className="font-heading text-slate-900 text-2xl md:text-4xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {t('home.servicesStrip.title')}
          </motion.h2>
          <div
            className="mt-3 h-1 w-20 rounded-full bg-amber-500"
            aria-hidden="true"
          />
          <motion.p
            className="mt-4 text-slate-600 max-w-3xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {t('home.servicesStrip.desc')}
          </motion.p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {servicesStrip.map((s, i) => (
              <ServiceTile
                key={i}
                i={i}
                title={s.title}
                desc={s.desc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* NEDEN EKUTAŞ — checklist + geniş görsel (parallax) */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <FMReveal>
              <h2 className="font-heading text-slate-900 text-2xl md:text-4xl font-bold tracking-tight">
                {t('home.benefitsTitle')}
              </h2>
            </FMReveal>
            <div
              className="mt-3 h-1 w-20 rounded-full bg-amber-500"
              aria-hidden="true"
            />
            <FMReveal delay={0.05}>
              <p className="mt-4 text-slate-600 max-w-3xl">
                {t('home.benefitsDesc')}
              </p>
            </FMReveal>

            <ul className="mt-6 grid gap-x-10 gap-y-3 md:grid-cols-2">
              {benefits.map((b, i) => (
                <FMReveal
                  key={i}
                  delay={i * 0.04}
                >
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 text-amber-600">
                      <CheckIcon />
                    </span>
                    <div>
                      <strong className="font-semibold text-slate-900">
                        {b.title}:
                      </strong>{' '}
                      <span className="text-slate-700">{b.desc}</span>
                    </div>
                  </li>
                </FMReveal>
              ))}
            </ul>
          </div>

          <AboutFigure />
        </div>
      </section>

      {/* SÜREÇ — yatay timeline */}
      <section className="bg-stone-50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <FMReveal>
            <h2 className="font-heading text-slate-900 text-2xl md:text-4xl font-bold tracking-tight">
              {t('home.processTitle')}
            </h2>
          </FMReveal>
          <div
            className="mt-3 h-1 w-20 rounded-full bg-amber-500"
            aria-hidden="true"
          />
          <FMReveal delay={0.05}>
            <p className="mt-4 text-slate-600 max-w-3xl">
              {t('home.processDesc')}
            </p>
          </FMReveal>

          <div className="relative mt-10">
            <div
              className="absolute inset-x-0 top-4 h-px bg-amber-100"
              aria-hidden="true"
            />
            <ol className="relative grid gap-8 md:grid-cols-4">
              {steps.map((s, i) => (
                <FMReveal
                  key={i}
                  delay={i * 0.05}
                >
                  <li className="relative">
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
                </FMReveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* KPI tek satır */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-12">
          <KpiRow items={kpiRow} />
        </div>
      </section>

      {/* BÖLGELER + HARİTA — full-bleed */}
      <section className="relative bg-slate-900">
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
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        </div>

        <div className="relative">
          <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
            <FMReveal>
              <h2 className="font-heading text-white text-2xl md:text-4xl font-bold tracking-tight">
                {t('home.regionsTitle')}
              </h2>
            </FMReveal>
            <div
              className="mt-3 h-1 w-20 rounded-full bg-amber-500"
              aria-hidden="true"
            />
            <FMReveal delay={0.05}>
              <p className="mt-4 text-white/80 max-w-3xl">
                {t('home.regionsDesc')}
              </p>
            </FMReveal>

            <div className="mt-6 flex flex-wrap gap-3">
              {regions.map((r, i) => (
                <FMReveal
                  key={i}
                  delay={i * 0.04}
                >
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1.5 text-sm ring-1 ${
                      i % 2 === 0
                        ? 'bg-white/15 text-white ring-white/20'
                        : 'bg-white/10 text-white ring-white/15'
                    }`}
                  >
                    {r}
                  </span>
                </FMReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
