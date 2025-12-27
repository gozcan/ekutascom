import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useI18n } from '../i18n/I18nProvider';

// Proje verileri - ileride translations.ts'e taşınabilir
const projectsData = {
  'ali-sahin-apartmani': {
    tr: {
      title: 'Ali Şahin Apartmanı',
      location: 'Kozyatağı, İstanbul',
      category: 'Konut',
      year: '2026',
      area: '4.125 m²',
      status: 'Başlanacak',
      description:
        "Ali Şahin Apartmanı, Kozyatağı'nın nezih bir bölgesinde konumlanan 12 katlı modern konut projesidir. Toplam 24 daire içeren yapı, depreme dayanıklı betonarme taşıyıcı sistemi, enerji verimli dış cephe kaplaması ve akıllı bina sistemleriyle donatılmıştır.",
      features: [
        'Depreme dayanıklı betonarme taşıyıcı sistem',
        'Isı yalıtımlı dış cephe kaplaması',
        'Otopark ve güvenlik sistemleri',
        'Akıllı bina yönetim sistemi',
        'Peyzaj düzenlemeli bahçe',
        'Asansör ve jeneratör',
      ],
      scope: [
        'Kaba yapı işleri',
        'İnce yapı işleri',
        'Mekanik tesisat',
        'Elektrik tesisat',
        'Dış cephe izolasyonu',
        'İç mimari uygulama',
      ],
      documents: [
        {
          title: 'Kat Planı ve Paylaşım Şeması',
          url: '/documents/ali-sahin-kat-plani.pdf',
        },
      ],
      floorPlans: [
        {
          title: 'Normal Kat Planı',
          image: '/images/projects/ali-sahin-apartmani/floor-plan.jpg',
        },
      ],
    },
    en: {
      title: 'Ali Şahin Apartment',
      location: 'Kozyatağı, Istanbul',
      category: 'Residential',
      year: '2026',
      area: '4,125 m²',
      status: 'To be started',
      description:
        'Ali Şahin Apartment is a 12-story modern residential project located in a distinguished area of Kozyatağı. The building contains 24 apartments and is equipped with an earthquake-resistant reinforced concrete structural system, energy-efficient facade cladding, and smart building systems.',
      features: [
        'Earthquake-resistant reinforced concrete structure',
        'Thermally insulated facade cladding',
        'Parking and security systems',
        'Smart building management system',
        'Landscaped garden',
        'Elevator and generator',
      ],
      scope: [
        'Structural works',
        'Finishing works',
        'Mechanical installation',
        'Electrical installation',
        'Exterior insulation',
        'Interior design implementation',
      ],
      documents: [
        {
          title: 'Floor Plan and Sharing Scheme',
          url: '/documents/ali-sahin-kat-plani.pdf',
        },
      ],
      floorPlans: [
        {
          title: 'Normal Floor Plan',
          image: '/images/projects/ali-sahin-apartmani/floor-plan.jpg',
        },
      ],
    },
  },
  'kisikli-abc-apartmani': {
    tr: {
      title: 'ABC Apartmanı',
      location: 'Kısıklı, İstanbul',
      category: 'Konut',
      year: '2026',
      area: '3.500 m²',
      status: 'Devam Ediyor',
      description:
        "Kısıklı'nın prestijli bölgesinde yer alan ABC Apartmanı, modern mimarisi ve yüksek yaşam standartlarıyla dikkat çekiyor. Proje, konforlu daireleri ve sosyal donatılarıyla sakinlerine ayrıcalıklı bir yaşam sunuyor.",
      features: [
        'Depreme dayanıklı yapı',
        'Kapalı otopark',
        'Güvenlik hizmeti',
        'Yeşil alanlar',
        'Çocuk oyun parkı',
        'Jeneratör',
      ],
      scope: [
        'Kaba yapı işleri',
        'İnce yapı işleri',
        'Mekanik tesisat',
        'Elektrik tesisat',
        'Peyzaj düzenlemesi',
      ],
    },
    en: {
      title: 'ABC Apartment',
      location: 'Kısıklı, Istanbul',
      category: 'Residential',
      year: '2026',
      area: '3,500 m²',
      status: 'Ongoing',
      description:
        'Located in the prestigious area of Kısıklı, ABC Apartment stands out with its modern architecture and high living standards. The project offers a privileged life to its residents with comfortable apartments and social facilities.',
      features: [
        'Earthquake-resistant structure',
        'Indoor parking',
        'Security service',
        'Green areas',
        'Children playground',
        'Generator',
      ],
      scope: [
        'Structural works',
        'Finishing works',
        'Mechanical installation',
        'Electrical installation',
        'Landscaping',
      ],
    },
  },
  'bahcelievler-kosem-apartmani': {
    tr: {
      title: 'Köşem Apartmanı',
      location: 'Bahçelievler, İstanbul',
      category: 'Konut',
      year: '2026',
      area: '2.800 m²',
      status: 'Devam Ediyor',
      description:
        "Bahçelievler'in merkezi konumunda yükselen Köşem Apartmanı, ulaşım kolaylığı ve çevresel olanaklarıyla öne çıkıyor. Modern tasarım anlayışıyla inşa edilen proje, ferah yaşam alanları vaat ediyor.",
      features: [
        'Merkezi konum',
        'Isı ve ses yalıtımı',
        'Asansör',
        'Görüntülü diafon',
        'Fiber internet altyapısı',
        'Su deposu',
      ],
      scope: [
        'Anahtar teslim inşaat',
        'Mimari tasarım',
        'Mühendislik hizmetleri',
        'İç mekan tasarımı',
      ],
    },
    en: {
      title: 'Köşem Apartment',
      location: 'Bahçelievler, Istanbul',
      category: 'Residential',
      year: '2026',
      area: '2,800 m²',
      status: 'Ongoing',
      description:
        'Rising in the central location of Bahçelievler, Köşem Apartment stands out with its ease of transportation and environmental amenities. Built with a modern design approach, the project promises spacious living spaces.',
      features: [
        'Central location',
        'Heat and sound insulation',
        'Elevator',
        'Video intercom',
        'Fiber internet infrastructure',
        'Water tank',
      ],
      scope: [
        'Turnkey construction',
        'Architectural design',
        'Engineering services',
        'Interior design',
      ],
    },
  },
};

const fade = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

// Türkçe karakterli URL'leri normalize et
const slugAliases: Record<string, string> = {
  'ali-sahin-apartmanı': 'ali-sahin-apartmani',
  'ali-şahin-apartmani': 'ali-sahin-apartmani',
  'ali-şahin-apartmanı': 'ali-sahin-apartmani',
  'kisikli-abc-apartmani': 'kisikli-abc-apartmani',
  'kısıklı-abc-apartmanı': 'kisikli-abc-apartmani',
  'bahcelievler-kosem-apartmani': 'bahcelievler-kosem-apartmani',
  'bahçelievler-köşem-apartmanı': 'bahcelievler-kosem-apartmani',
};

function normalizeSlug(slug: string): string {
  // URL decode et (örn: %C4%B1 -> ı)
  const decoded = decodeURIComponent(slug);
  // Alias varsa kullan, yoksa orijinali döndür
  return slugAliases[decoded] || decoded;
}

export default function ProjectDetail() {
  const { slug: rawSlug } = useParams<{ slug: string }>();
  const { lang } = useI18n();

  const slug = rawSlug ? normalizeSlug(rawSlug) : null;
  const project = slug ? projectsData[slug as keyof typeof projectsData] : null;

  if (!project) {
    return (
      <Navigate
        to="/projects"
        replace
      />
    );
  }

  const data = project[lang];

  return (
    <div className="bg-white">
      {/* Meta */}
      <title>{`${data.title} | Ekutaş`}</title>
      <meta
        name="description"
        content={data.description}
      />

      {/* Hero Banner */}
      <section className="relative isolate overflow-hidden bg-slate-900 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-amber-400/15 blur-3xl" />
          <div className="absolute -left-32 bottom-[-80px] h-[380px] w-[380px] rounded-full bg-sky-300/10 blur-3xl" />
        </div>

        {/* Arka plan görseli */}
        <div className="absolute inset-0">
          <img
            src={`/images/projects/${slug}/hero.jpg`}
            alt={data.title}
            className="h-full w-full object-cover opacity-30"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/60" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center gap-2 text-sm text-white/60"
          >
            <a
              href="/"
              className="hover:text-white transition"
            >
              {lang === 'tr' ? 'Ana Sayfa' : 'Home'}
            </a>
            <span>/</span>
            <a
              href="/projects"
              className="hover:text-white transition"
            >
              {lang === 'tr' ? 'Projeler' : 'Projects'}
            </a>
            <span>/</span>
            <span className="text-white/90">{data.title}</span>
          </motion.nav>

          <motion.h1
            {...fade}
            className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight"
          >
            {data.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 px-3 py-1 text-sm text-amber-300 ring-1 ring-amber-500/30">
              <LocationIcon />
              {data.location}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-sm text-white/80 ring-1 ring-white/20">
              {data.category}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-sm text-white/80 ring-1 ring-white/20">
              {data.year}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Proje Detayları */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Sol: Açıklama */}
          <div className="lg:col-span-2">
            <motion.div {...fade}>
              <h2 className="font-heading text-2xl font-bold text-slate-900">
                {lang === 'tr' ? 'Proje Hakkında' : 'About the Project'}
              </h2>
              <div className="mt-3 h-1 w-16 rounded-full bg-amber-500" />
              <p className="mt-6 text-slate-600 leading-relaxed text-lg">
                {data.description}
              </p>
            </motion.div>

            {/* Özellikler */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-10"
            >
              <h3 className="font-heading text-xl font-bold text-slate-900">
                {lang === 'tr' ? 'Özellikler' : 'Features'}
              </h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {data.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1 text-amber-600">
                      <CheckIcon />
                    </span>
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* İş Kapsamı */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-10"
            >
              <h3 className="font-heading text-xl font-bold text-slate-900">
                {lang === 'tr' ? 'İş Kapsamı' : 'Scope of Work'}
              </h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {data.scope.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1 text-amber-600">
                      <ArrowIcon />
                    </span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Kat Planları */}
            {data.floorPlans && data.floorPlans.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-12"
              >
                <h3 className="font-heading text-xl font-bold text-slate-900">
                  {lang === 'tr' ? 'Kat Planları' : 'Floor Plans'}
                </h3>
                <div className="mt-6 grid gap-6">
                  {data.floorPlans.map((plan: any, i: number) => (
                    <div
                      key={i}
                      className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50"
                    >
                      <img
                        src={plan.image}
                        alt={plan.title}
                        className="w-full object-contain"
                      />
                      <div className="p-3 text-center text-sm font-medium text-slate-600">
                        {plan.title}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sağ: Bilgi Kartı */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-24 rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200"
            >
              <h3 className="font-heading text-lg font-bold text-slate-900">
                {lang === 'tr' ? 'Proje Bilgileri' : 'Project Info'}
              </h3>
              <dl className="mt-4 space-y-4">
                <div className="flex justify-between border-b border-slate-200 pb-3">
                  <dt className="text-slate-500">
                    {lang === 'tr' ? 'Konum' : 'Location'}
                  </dt>
                  <dd className="font-medium text-slate-900">
                    {data.location}
                  </dd>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-3">
                  <dt className="text-slate-500">
                    {lang === 'tr' ? 'Kategori' : 'Category'}
                  </dt>
                  <dd className="font-medium text-slate-900">
                    {data.category}
                  </dd>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-3">
                  <dt className="text-slate-500">
                    {lang === 'tr' ? 'Yıl' : 'Year'}
                  </dt>
                  <dd className="font-medium text-slate-900">{data.year}</dd>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-3">
                  <dt className="text-slate-500">
                    {lang === 'tr' ? 'Alan' : 'Area'}
                  </dt>
                  <dd className="font-medium text-slate-900">{data.area}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">
                    {lang === 'tr' ? 'Durum' : 'Status'}
                  </dt>
                  <dd className="inline-flex items-center gap-1.5 font-medium text-emerald-600">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    {data.status}
                  </dd>
                </div>
              </dl>

              {/* Dokümanlar */}
              {data.documents && data.documents.length > 0 && (
                <div className="mt-6 border-t border-slate-200 pt-4">
                  <h4 className="mb-3 font-medium text-slate-900">
                    {lang === 'tr' ? 'Dokümanlar' : 'Documents'}
                  </h4>
                  <ul className="space-y-2">
                    {data.documents.map((doc: any, i: number) => (
                      <li key={i}>
                        <a
                          href={doc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-amber-600 hover:text-amber-700 hover:underline"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="h-4 w-4 flex-none"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line
                              x1="16"
                              y1="13"
                              x2="8"
                              y2="13"
                            />
                            <line
                              x1="16"
                              y1="17"
                              x2="8"
                              y2="17"
                            />
                            <polyline points="10 9 9 9 8 9" />
                          </svg>
                          {doc.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* İletişim Butonu */}
              <a
                href="/contact"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-amber-500 px-4 py-3 font-medium text-white transition hover:bg-amber-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50"
              >
                {lang === 'tr'
                  ? 'Proje Hakkında Bilgi Alın'
                  : 'Get Project Info'}
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Galeri Bölümü - Görsel yoksa gösterilmez */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-2xl font-bold text-slate-900"
          >
            {lang === 'tr' ? 'Proje Görselleri' : 'Project Gallery'}
          </motion.h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-amber-500" />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-200"
              >
                <img
                  src={`/images/projects/${slug}/${i}.png`}
                  alt={`${data.title} - ${i}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.parentElement!.style.display = 'none';
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* İkonlar */
function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle
        cx="12"
        cy="10"
        r="3"
      />
    </svg>
  );
}
