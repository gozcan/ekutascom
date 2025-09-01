import { motion } from 'framer-motion';
import { useI18n } from '../i18n/I18nProvider';
import { resources, get } from '../i18n/translations';

const fade = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export default function About() {
  const { t, lang } = useI18n();

  // i18n içerikleri
  const who = (get(resources[lang], 'about.who') as {
    title: string;
    paragraphs: string[];
  }) || { title: '', paragraphs: [] };

  const history = (get(resources[lang], 'about.history') as {
    title: string;
    items: { label: string; text: string }[];
  }) || { title: '', items: [] };

  const values = (get(resources[lang], 'about.values') as {
    title: string;
    items: { title: string; desc: string }[];
  }) || { title: '', items: [] };

  const vision = (get(resources[lang], 'about.vision') as {
    title: string;
    body: string;
  }) || { title: '', body: '' };

  const mission = (get(resources[lang], 'about.mission') as {
    title: string;
    bullets: string[];
    footnote: string;
  }) || { title: '', bullets: [], footnote: '' };

  const closing = (get(resources[lang], 'about.closing') as string) || '';

  return (
    <div className="bg-white">
      {/* Meta */}
      <title>{t('about.heroTitle')} | Ekutaş</title>
      <meta
        name="description"
        content={who.paragraphs?.[0] ?? 'Ekutaş'}
      />

      {/* Alt-Hero */}
      <section className="relative isolate overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
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
              alt={t('about.heroTitle')}
              className="h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/85 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight text-white"
            style={{ textShadow: '0 1px 1px rgba(0,0,0,.25)' }}
          >
            {t('about.heroTitle')}
          </motion.h1>

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
            {t('about.heroSubtitle')}
          </motion.p>
        </div>
      </section>

      {/* Biz Kimiz? */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <motion.h2
              {...fade}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-heading text-2xl md:text-4xl font-bold tracking-tight text-slate-900"
            >
              {who.title}
            </motion.h2>
            <div
              className="mt-3 h-1 w-20 rounded-full bg-amber-500"
              aria-hidden="true"
            />
            <motion.div
              {...fade}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...fade.transition, delay: 0.05 }}
              className="prose prose-slate mt-6 max-w-none"
            >
              {who.paragraphs?.map((p, i) => (
                <p
                  key={i}
                  className={
                    i === who.paragraphs.length - 1
                      ? 'italic text-slate-600'
                      : undefined
                  }
                >
                  {p}
                </p>
              ))}
            </motion.div>
          </div>

          {/* Kısa tarihçe */}
          <div className="md:col-span-5">
            <motion.div
              {...fade}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-slate-200 bg-white/70 p-5 backdrop-blur-sm"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-700">
                {history.title}
              </h3>
              <ol className="mt-4 space-y-4">
                {history.items?.map((it, i) => (
                  <li
                    key={i}
                    className="relative pl-6"
                  >
                    <span className="absolute left-0 top-2 block h-2 w-2 rounded-full bg-amber-500" />
                    <div className="text-sm text-slate-600">
                      <strong className="text-slate-900">{it.label}</strong> —{' '}
                      {it.text}
                    </div>
                  </li>
                ))}
              </ol>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className="relative overflow-hidden bg-slate-50">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-amber-300/20 blur-3xl" />
          <div className="absolute -left-20 bottom-[-60px] h-80 w-80 rounded-full bg-sky-300/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-12 md:py-16">
          <motion.h2
            {...fade}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-2xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            {values.title}
          </motion.h2>
          <div
            className="mt-3 h-1 w-20 rounded-full bg-amber-500"
            aria-hidden="true"
          />
          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {values.items?.map((v, i) => (
              <ValueCard
                key={i}
                i={i}
                title={v.title}
                desc={v.desc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Vizyon & Misyon */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 grid gap-6 md:grid-cols-2">
          <motion.div
            {...fade}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-slate-200 bg-white/70 p-6 backdrop-blur-sm"
          >
            <h3 className="text-lg font-semibold text-slate-900">
              {vision.title}
            </h3>
            <p className="mt-2 text-slate-600">{vision.body}</p>
          </motion.div>

          <motion.div
            {...fade}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...fade.transition, delay: 0.05 }}
            className="rounded-2xl border border-slate-200 bg-white/70 p-6 backdrop-blur-sm"
          >
            <h3 className="text-lg font-semibold text-slate-900">
              {mission.title}
            </h3>
            <ul className="mt-2 space-y-2 text-slate-600">
              {mission.bullets?.map((b, i) => (
                <li key={i}>• {b}</li>
              ))}
            </ul>
            <p className="mt-3 text-slate-600">{mission.footnote}</p>
          </motion.div>
        </div>
      </section>

      {/* Kapanış şeridi */}
      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-10 text-center">
          <p className="text-white/80">{closing}</p>
        </div>
      </section>
    </div>
  );
}

/* ----------------- Alt bileşenler ----------------- */
function ValueCard({
  i,
  title,
  desc,
}: {
  i: number;
  title: string;
  desc: string;
}) {
  const icons = [
    <TrustIcon key="t" />,
    <QualityIcon key="q" />,
    <LeafIcon key="l" />,
    <UsersIcon key="u" />,
  ];
  const overlayGrad = [
    'from-amber-500/15 via-transparent to-transparent',
    'from-amber-400/15 via-transparent to-transparent',
    'from-amber-600/15 via-transparent to-transparent',
    'from-amber-500/15 via-transparent to-transparent',
  ][i % 4];

  return (
    <motion.div
      {...fade}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...fade.transition, delay: i * 0.04 }}
      className="group relative overflow-hidden rounded-2xl bg-white/70 p-6 ring-1 ring-slate-200 backdrop-blur-sm"
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${overlayGrad} opacity-0 transition duration-500 group-hover:opacity-100`}
      />
      <div className="flex items-start gap-4">
        <div className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-amber-50 text-amber-700 ring-1 ring-amber-200">
          {icons[i % icons.length]}
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">{title}</h4>
          <p className="mt-1 text-slate-600">{desc}</p>
        </div>
      </div>
      <div className="relative mt-5">
        <div className="h-px w-full bg-slate-200/70" />
        <div className="absolute left-0 top-0 h-px w-0 bg-gradient-to-r from-amber-400 to-transparent transition-all duration-500 group-hover:w-full" />
      </div>
    </motion.div>
  );
}

/* ikonlar */
function TrustIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6v6a8 8 0 0 1-16 0V6l8-3 8 3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
function QualityIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2l3 7h7l-5.5 4 2.5 7-7-4-7 4 2.5-7L2 9h7z" />
    </svg>
  );
}
function LeafIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 21c8 0 14-6 14-14V3s-7 0-11 4S5 21 5 21z" />
    </svg>
  );
}
function UsersIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 21v-2a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2" />
      <circle
        cx="12"
        cy="7"
        r="4"
      />
    </svg>
  );
}
