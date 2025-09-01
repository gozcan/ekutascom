import { motion } from 'framer-motion';
import { useI18n } from '../i18n/I18nProvider';
import { resources, get } from '../i18n/translations';

const fade = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export default function Services() {
  const { t, lang } = useI18n();

  // i18n içerikleri (tamamen mevcut anahtarlardan)
  const serviceBlock = (get(resources[lang], 'home.servicesStrip') as {
    title: string;
    desc: string;
    items: { title: string; desc: string }[];
  }) ?? { title: '', desc: '', items: [] };

  const benefits =
    (get(resources[lang], 'home.benefits.items') as {
      title: string;
      desc: string;
    }[]) ?? [];
  const steps =
    (get(resources[lang], 'home.process.steps') as {
      title: string;
      desc: string;
    }[]) ?? [];

  return (
    <div className="bg-white">
      {/* Alt-Hero (ambient) */}
      <section className="relative isolate overflow-hidden bg-slate-900 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-amber-400/15 blur-3xl" />
          <div className="absolute -left-32 bottom-[-80px] h-[380px] w-[380px] rounded-full bg-sky-300/10 blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/[.06] via-transparent to-black/[.12]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
          <motion.h1
            {...fade}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight"
            style={{ textShadow: '0 1px 1px rgba(0,0,0,.18)' }}
          >
            {serviceBlock.title || t('home.servicesStrip.title')}
          </motion.h1>
          {serviceBlock.desc ? (
            <motion.p
              {...fade}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...fade.transition, delay: 0.05 }}
              className="mt-3 max-w-2xl text-white/80 md:text-lg"
            >
              {serviceBlock.desc}
            </motion.p>
          ) : null}
        </div>
      </section>

      {/* Hizmetler grid */}
      <section className="relative overflow-hidden bg-slate-50">
        {/* ambient */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-amber-300/20 blur-3xl" />
          <div className="absolute -left-20 bottom-[-60px] h-72 w-72 rounded-full bg-sky-300/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {serviceBlock.items.map((s, i) => (
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

      {/* Neden Ekutaş? */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <motion.h2
            {...fade}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-2xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            {t('home.benefitsTitle')}
          </motion.h2>
          <div
            className="mt-3 h-1 w-20 rounded-full bg-amber-500"
            aria-hidden="true"
          />
          <motion.p
            {...fade}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...fade.transition, delay: 0.05 }}
            className="mt-4 text-slate-600 max-w-3xl"
          >
            {t('home.benefitsDesc')}
          </motion.p>

          <ul className="mt-6 grid gap-x-10 gap-y-3 md:grid-cols-2">
            {benefits.map((b, i) => (
              <motion.li
                key={i}
                {...fade}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...fade.transition, delay: i * 0.04 }}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 text-amber-600">
                  <CheckIcon />
                </span>
                <div>
                  <strong className="font-semibold text-slate-900">
                    {b.title}:
                  </strong>{' '}
                  <span className="text-slate-700">{b.desc}</span>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Süreç */}
      <section className="bg-stone-50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <motion.h2
            {...fade}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-2xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            {t('home.processTitle')}
          </motion.h2>
          <div
            className="mt-3 h-1 w-20 rounded-full bg-amber-500"
            aria-hidden="true"
          />
          <motion.p
            {...fade}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...fade.transition, delay: 0.05 }}
            className="mt-4 text-slate-600 max-w-3xl"
          >
            {t('home.processDesc')}
          </motion.p>

          <div className="relative mt-10">
            <div
              className="absolute inset-x-0 top-4 h-px bg-amber-100"
              aria-hidden="true"
            />
            <ol className="relative grid gap-8 md:grid-cols-4">
              {steps.map((s, i) => (
                <motion.li
                  key={i}
                  {...fade}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...fade.transition, delay: i * 0.05 }}
                  className="relative"
                >
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
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ----------------- Bileşenler ----------------- */

function ServiceTile({
  i,
  title,
  desc,
}: {
  i: number;
  title: string;
  desc: string;
}) {
  const overlayGrad = [
    'from-amber-500/15 via-transparent to-transparent',
    'from-amber-400/15 via-transparent to-transparent',
    'from-amber-600/15 via-transparent to-transparent',
  ][i % 3];

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-white/70 p-6 ring-1 ring-slate-200 backdrop-blur-sm transition-shadow hover:shadow-md"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
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
            <span className="h-px w-8 flex-none bg-gradient-to-r from-amber-300 to-transparent" />
          </div>
          <p className="mt-1 text-slate-600 leading-relaxed">{desc}</p>
        </div>
      </div>

      {/* alt vurgu çizgisi */}
      <div className="relative mt-5">
        <div className="h-px w-full bg-slate-200/70" />
        <div className="absolute left-0 top-0 h-px w-0 bg-gradient-to-r from-amber-400 to-transparent transition-all duration-500 group-hover:w-full" />
      </div>
    </motion.div>
  );
}

/* küçük ikon seti */
function SvcIcon({ i }: { i: number }) {
  const cls = 'h-6 w-6 flex-none';
  const sw = 1.75;
  if (i % 3 === 0) {
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
  }
  if (i % 3 === 1) {
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
