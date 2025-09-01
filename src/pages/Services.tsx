import { useI18n } from '../i18n/I18nProvider';
import { resources, get } from '../i18n/translations';

type ServiceItem = { title: string; desc: string };

function Icon({ name }: { name: 'hardhat' | 'blueprint' | 'crane' }) {
  const base = 'h-6 w-6';
  switch (name) {
    case 'hardhat':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className={base}
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
    case 'blueprint':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className={base}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 4h9a3 3 0 0 1 3 3v11H9a3 3 0 0 1-3-3V4z" />
          <path d="M18 7h2a2 2 0 0 1 0 4h-2" />
          <path d="M10 9h4M10 13h6M10 17h3" />
        </svg>
      );
    case 'crane':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className={base}
          strokeWidth="2"
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
}

export default function Services() {
  const { t, lang } = useI18n();
  const items =
    (get(resources[lang], 'servicesPage.items') as ServiceItem[]) ?? [];

  // mevcut 3 hizmet için ikon eşleme
  const iconByIndex: Array<'hardhat' | 'blueprint' | 'crane'> = [
    'hardhat', // Ana Yüklenicilik
    'blueprint', // Tadilat & Yenileme
    'crane', // Proje Yönetimi & Keşif
  ];

  return (
    <div>
      {/* React 19 meta hoisting */}
      <title>{t('servicesPage.metaTitle')}</title>
      <meta
        name="description"
        content={t('servicesPage.metaDesc')}
      />

      {/* Başlık bloğu — amber vurgu çizgisi */}
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-6xl px-4 pt-12 pb-8 md:pt-16 md:pb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-amber-800 text-xs ring-1 ring-amber-200">
            {t('brand')}
          </div>
          <h1 className="mt-3 font-heading text-slate-900 text-3xl md:text-5xl font-extrabold tracking-tight">
            {t('servicesPage.heading')}
          </h1>
          <div
            className="mt-3 h-1 w-24 rounded-full bg-amber-500"
            aria-hidden="true"
          />
          <p className="mt-4 text-lg text-slate-600 max-w-3xl">
            {t('servicesPage.intro')}
          </p>
        </div>
      </section>

      {/* Kart grid — amber rozet + hover gölge */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, idx) => (
            <article
              key={idx}
              className="rounded-2xl border bg-white p-6 shadow-sm ring-1 ring-black/5 transition hover:shadow-md"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-amber-50 text-amber-700 ring-1 ring-amber-200 h-12 w-12">
                <Icon name={iconByIndex[idx] ?? 'hardhat'} />
              </div>

              <h3 className="text-lg font-semibold text-slate-900">
                {it.title}
              </h3>
              <p className="mt-1 text-slate-600">{it.desc}</p>

              {/* isteğe bağlı görsel alanını kaldırdık; içerik daha sıkı ve kurumsal dursun */}
            </article>
          ))}
        </div>
      </section>

      {/* Alt bilgi şeridi — güven, şeffaflık, güvenlik kısa maddeler (isteğe bağlı görsel güçlendirme) */}
      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-8 grid gap-6 md:grid-cols-3 text-white">
          <div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-5">
            <div className="text-amber-400 text-sm font-semibold tracking-wide">
              01
            </div>
            <div className="mt-2 font-semibold">Kalite & Zamanlama</div>
            <p className="mt-1 text-white/80 text-sm">
              Planlı ilerleme, net teslim tarihleri.
            </p>
          </div>
          <div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-5">
            <div className="text-amber-400 text-sm font-semibold tracking-wide">
              02
            </div>
            <div className="mt-2 font-semibold">Şeffaf Süreç</div>
            <p className="mt-1 text-white/80 text-sm">
              Kapsam ve maliyetlerde açık iletişim.
            </p>
          </div>
          <div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-5">
            <div className="text-amber-400 text-sm font-semibold tracking-wide">
              03
            </div>
            <div className="mt-2 font-semibold">İş Güvenliği</div>
            <p className="mt-1 text-white/80 text-sm">
              Mevzuata uygun saha güvenliği ve denetim.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
