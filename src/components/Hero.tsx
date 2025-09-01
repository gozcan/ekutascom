import { useEffect, useMemo, useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  animate,
} from 'framer-motion';
import { useI18n } from '../i18n/I18nProvider';
import { resources, get } from '../i18n/translations';

export default function Hero() {
  const { t, lang } = useI18n();
  const heroKpis = (get(resources[lang], 'hero.kpis') as any) || {};

  const kpis: Array<{ value: string; label: string }> = useMemo(
    () =>
      [
        {
          value: String(heroKpis.yearsValue ?? '0'),
          label: String(heroKpis.yearsLabel ?? ''),
        },
        {
          value: String(heroKpis.projectsValue ?? '0'),
          label: String(heroKpis.projectsLabel ?? ''),
        },
        {
          value: String(heroKpis.areaValue ?? '0'),
          label: String(heroKpis.areaLabel ?? ''),
        },
      ].filter(Boolean),
    [heroKpis]
  );

  // Parallax
  const reduce = useReducedMotion();
  const imgWrapRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: imgWrapRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -80]); // px
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.2]);

  // Görsel fade-in (yüklenene kadar görünmesin)
  const [imgReady, setImgReady] = useState(false);

  const onScrollHint = () => {
    const vh = window.innerHeight || 600;
    window.scrollTo({ top: vh * 0.75, behavior: 'smooth' });
  };

  return (
    <section className="relative isolate overflow-hidden bg-slate-900 text-white h-[60vh] min-h-[400px] md:h-[75vh]">
      {/* Arka plan: sağ görsel + sol karartma panel */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Görsel konteyneri */}
        <div
          ref={imgWrapRef}
          className="absolute inset-0"
        >
          {/* oran placeholder */}
          <div className="absolute inset-0 bg-slate-900" />
          <motion.picture
            style={{ y, scale }}
            className="absolute inset-0 h-full w-full"
          >
            <source
              srcSet="/images/hero.avif"
              type="image/avif"
            />
            <source
              srcSet="/images/hero.webp"
              type="image/webp"
            />
            <motion.img
              src="/images/hero.jpg"
              alt={t('hero.title')}
              loading="lazy"
              decoding="async"
              onLoad={() => setImgReady(true)}
              initial={{ opacity: 0 }}
              animate={{ opacity: imgReady ? 1 : 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="h-full w-full object-bottom"
            />
          </motion.picture>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-24">
        {/* Sol: Başlık + alt metin + KPI’lar (hep beyaz) */}
        <div className="relative z-10 bg-black/10 p-4 backdrop-blur-sm md:p-8 lg:p-12 rounded-3xl">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>

          <motion.h1
            className="mt-4 font-heading text-3xl font-bold  text-amber-100 md:text-5xl"
            style={{ textShadow: '0 1px 1px rgba(0,0,0,.25)' }}
          >
            {t('hero.title')}
          </motion.h1>

          <motion.p
            className="mt-4 max-w-xl text-base text-amber-300 md:text-lg"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.16,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* KPI Row */}
          <motion.div
            className="mt-8 grid max-w-xl grid-cols-3 gap-4 md:gap-6"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.06 } },
            }}
          >
            {kpis.map((k, i) => (
              <motion.div
                key={i}
                className="text-left"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <div className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                  <Counter value={k.value} />
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-amber-300">
                  {k.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Aşağı kaydır ipucu */}
      <motion.button
        type="button"
        onClick={onScrollHint}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/5 p-2 ring-2 ring-amber-300 backdrop-blur hover:bg-white/10 focus:outline-none"
        aria-label="Aşağı kaydır"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          delay: 0.6,
          duration: 2.2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </motion.button>
    </section>
  );
}

/* ----------- sayısal counter (değişmedi) ----------- */
function Counter({ value }: { value: string }) {
  const reduce = useReducedMotion();
  const m = String(value).match(/^(\d+)(.*)$/);
  if (!m) return <span>{value}</span>;
  const target = parseInt(m[1], 10);
  const suffix = m[2] ?? '';

  const spanRef = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    if (reduce || !spanRef.current) {
      if (spanRef.current) spanRef.current.textContent = `${target}${suffix}`;
      return;
    }
    const controls = animate(0, target, {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        if (spanRef.current)
          spanRef.current.textContent = `${Math.round(latest)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [target, suffix, reduce]);

  return (
    <span ref={spanRef}>{reduce ? `${target}${suffix}` : `0${suffix}`}</span>
  );
}
