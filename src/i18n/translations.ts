export type Lang = 'tr' | 'en';

export const resources = {
  tr: {
    brand: 'Ekutaş İnşaat',
    nav: {
      home: 'Ana Sayfa',
      about: 'Hakkımızda',
      services: 'Hizmetler',
      projects: 'Projeler', // ← eklendi
      contact: 'İletişim',
    },

    // Ana sayfa ve genel meta
    meta: {
      homeTitle: 'Ana Sayfa | Ekutaş İnşaat',
      homeDesc:
        'Ekutaş İnşaat: konut, ticari ve endüstriyel projelerde anahtar teslim çözümler.',
      aboutTitle: 'Hakkımızda | Ekutaş İnşaat',
      aboutDesc:
        'Ekutaş İnşaat hakkında bilgi: kalite, şeffaflık ve iş güvenliği odağı.',
    },

    // Hero metinleri
    hero: {
      title: 'Ekutaş İnşaat — güvenli ve sağlam yapılar',
      subtitle:
        'Konut, ticari ve endüstriyel projelerde uçtan uca inşaat çözümleri.',
      imageAlt: 'Ekutaş İnşaat şantiyesi ve saha çalışmaları',
      kpis: {
        yearsValue: '15+',
        yearsLabel: 'Yıl',
        projectsValue: '120+',
        projectsLabel: 'Proje',
        areaValue: '250.000+',
        areaLabel: 'm²',
      },
    },

    // Home sayfasının ek metinleri (grid altında kullanılıyor)
    home: {
      title: 'Ana Sayfa',
      desc: 'Yapı projeleriniz için uçtan uca, mevzuata uyumlu çözümler.',
      featuredTitle: 'Öne Çıkan Projeler',
      featuredDesc:
        'Konut, ticari ve endüstriyel projelerimizden kısa bir seçki.',
      viewAll: 'Tüm Projeler',
      benefitsTitle: 'Neden Ekutaş?',
      benefitsDesc:
        'Planlı ilerleme, şeffaf süreç ve sahada güvenlik önceliği ile işinizi riske atmayın.',
      benefits: {
        items: [
          {
            title: 'Zamanında Teslim',
            desc: 'Gerçekçi planlama ve günlük saha koordinasyonu.',
          },
          {
            title: 'Kalite Güvencesi',
            desc: 'Malzeme/işçilik standartları ve düzenli kontrol listeleri.',
          },
          {
            title: 'Şeffaf Maliyet',
            desc: 'Açık kalemler, değişikliklerde hızlı teklif revizyonu.',
          },
          {
            title: 'İş Güvenliği',
            desc: 'Mevzuata uyumlu ekipman ve düzenli denetimler.',
          },
          {
            title: 'Deneyimli Ekip',
            desc: 'Alt yüklenici yönetimi ve uzman saha şefleri.',
          },
          {
            title: 'İzin & Uyum',
            desc: 'Ruhsat, iskan ve yerel yönetmelik süreçlerinde destek.',
          },
        ],
      },
      processTitle: 'Süreç',
      processDesc: 'Keşif → Planlama → Uygulama → Teslim',
      process: {
        steps: [
          {
            title: 'Keşif',
            desc: 'Yerinde inceleme, ihtiyaç analizi ve hedeflerin netleştirilmesi.',
          },
          {
            title: 'Planlama',
            desc: 'Metraj, maliyet, zaman planı ve risk analizleri.',
          },
          {
            title: 'Uygulama',
            desc: 'Saha koordinasyonu, kalite kontrol ve günlük raporlama.',
          },
          {
            title: 'Teslim',
            desc: 'Kontroller, eksiklerin kapanması ve devreye alma.',
          },
        ],
      },
      servicesStrip: {
        title: 'Hizmetlerimiz',
        desc: 'İhtiyaca uygun, ölçeklenebilir ve mevzuata uyumlu çözümler.',
        items: [
          {
            title: 'Ana Yüklenicilik (Turnkey)',
            desc: 'Kaba–ince işler, alt yüklenici koordinasyonu ve kalite güvencesi.',
          },
          {
            title: 'Tadilat & Yenileme',
            desc: 'Ofis, mağaza ve konutlarda anahtar teslim yenileme ve fit-out.',
          },
          {
            title: 'Proje Yönetimi & Keşif',
            desc: 'Metraj, planlama, maliyet kontrolü ve şantiye yönetimi.',
          },
        ],
      },
      regionsTitle: 'Hizmet Verilen Bölgeler',
      regionsDesc:
        'Öncelikli hizmet bölgelerimiz aşağıdadır. Diğer lokasyonlar için bizimle iletişime geçin.',
      regions: {
        list: ['İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Kocaeli'],
      },
      kpisExtraTitle: 'Sayılarla Ekutaş',
      kpisExtraDesc: 'Sahada ölçülebilir başarı ve sürdürülebilir operasyon.',
      kpisExtra: {
        items: [
          { value: '6', label: 'Aktif Şantiye' },
          { value: '40+', label: 'Ekipman / Araç' },
          { value: '0', label: 'Kaza (HSE)' },
        ],
      },
    },

    // About sayfası
    aboutPage: {
      heading: 'Hakkımızda',
      intro1:
        'Ekutaş İnşaat; kaliteli, güvenli ve zamanında teslim projeler üretir.',
      intro2: 'Şeffaf süreç yönetimi ve güçlü saha koordinasyonuyla çalışırız.',
      valuesTitle: 'Değerlerimiz',
      value1: 'Güvenilirlik',
      value1Desc:
        'Söz verdiğimiz işi, söz verdiğimiz tarihte ve kalitede teslim ederiz.',
      value2: 'Şeffaflık',
      value2Desc: 'Süreç, kapsam ve maliyetlerde net, izlenebilir iletişim.',
      value3: 'İş Güvenliği',
      value3Desc: 'Önce insan: sahada mevzuata uygun güvenlik ve denetim.',
    },

    // Services sayfası
    servicesPage: {
      metaTitle: 'Hizmetler | Ekutaş İnşaat',
      metaDesc:
        'Ekutaş İnşaat hizmetleri: ana yüklenicilik, tadilat & yenileme, proje yönetimi.',
      heading: 'Hizmetler',
      intro:
        'İhtiyaca uygun, ölçeklenebilir ve mevzuata uyumlu inşaat çözümleri.',
      items: [
        {
          title: 'Ana Yüklenicilik (Turnkey)',
          desc: 'Kaba–ince işler, alt yüklenici koordinasyonu ve kalite güvencesi.',
        },
        {
          title: 'Tadilat & Yenileme',
          desc: 'Ofis, mağaza ve konutlarda anahtar teslim yenileme ve fit-out.',
        },
        {
          title: 'Proje Yönetimi & Keşif',
          desc: 'Keşif-metraj, planlama, maliyet kontrolü ve şantiye yönetimi.',
        },
      ],
    },

    // Contact sayfası (form etiketleri ve doğrulama mesajları)
    contactPage: {
      metaTitle: 'İletişim | Ekutaş',
      metaDesc: 'Ekutaş ile iletişime geçin.',
      heading: 'İletişim',
      name: 'Ad Soyad',
      email: 'E-posta',
      message: 'Mesajınız',
      send: 'Gönder',
      successTitle: 'Teşekkürler!',
      successText: 'Mesajınızı aldık. En kısa sürede dönüş yapacağız.',
      errors: {
        nameRequired: 'Lütfen adınızı yazın.',
        emailInvalid: 'Geçerli bir e-posta girin.',
        messageRequired: 'Lütfen bir mesaj yazın.',
      },
    },
    contactInfo: {
      heading: 'İletişim Bilgileri',
      phoneLabel: 'Telefon',
      emailLabel: 'E-posta',
      addressLabel: 'Adres',
      hoursLabel: 'Çalışma Saatleri',
      phone: '+90 850 346 46 52',
      email: 'info@ekutas.com',
      address: 'Adres bilgisi yakında',
      hours: 'Hafta içi 09:00–18:00',
      mapTitle: 'Harita',
      // Boş bırakılırsa placeholder görünür. Hazır olunca gerçek Google Maps embed linkini gir:
      // Örn: "https://www.google.com/maps?q=İstanbul&output=embed"
      mapEmbed: '',
    },

    // 404 sayfası
    notFound: {
      metaTitle: 'Sayfa Bulunamadı | Ekutaş',
      metaDesc: 'Aradığınız sayfa mevcut değil.',
      heading: 'Sayfa bulunamadı',
      text: 'Üzgünüz, aradığınız sayfayı bulamadık.',
      backHome: 'Ana sayfaya dön',
    },
    projectsPage: {
      metaTitle: 'Projeler | Ekutaş İnşaat',
      metaDesc: 'Tamamlanan ve devam eden projelerimizden örnekler.',
      heading: 'Projeler',
      intro:
        'Konut, ticari ve endüstriyel yapılardan seçili proje görüntüleri.',
    },
  },

  en: {
    brand: 'Ekutaş Construction',
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      projects: 'Projects', // ← eklendi
      contact: 'Contact',
    },

    meta: {
      homeTitle: 'Home | Ekutaş Construction',
      homeDesc:
        'Ekutaş Construction: turnkey solutions for residential, commercial, and industrial projects.',
      aboutTitle: 'About | Ekutaş Construction',
      aboutDesc:
        'About Ekutaş Construction: quality, transparency, and safety first.',
    },

    hero: {
      title: 'Ekutaş Construction — safe & solid structures',
      subtitle:
        'End-to-end construction solutions for residential, commercial, and industrial projects.',
      imageAlt: 'Ekutaş Construction site and field operations',
      kpis: {
        yearsValue: '15+',
        yearsLabel: 'Years',
        projectsValue: '120+',
        projectsLabel: 'Projects',
        areaValue: '250,000+',
        areaLabel: 'sqm',
      },
    },

    home: {
      title: 'Home',
      desc: 'End-to-end, compliant solutions for your construction projects.',
      featuredTitle: 'Featured Projects',
      featuredDesc:
        'A brief selection from our residential, commercial, and industrial works.',
      viewAll: 'View All Projects',
      benefitsTitle: 'Why Ekutaş?',
      benefitsDesc:
        'Stay on schedule and budget with transparent processes and safety-first operations.',
      benefits: {
        items: [
          {
            title: 'On-Time Delivery',
            desc: 'Realistic scheduling and daily on-site coordination.',
          },
          {
            title: 'Quality Assurance',
            desc: 'Material/workmanship standards and routine checklists.',
          },
          {
            title: 'Transparent Costing',
            desc: 'Open line-items and fast change-order revisions.',
          },
          {
            title: 'Safety First',
            desc: 'Compliant gear and regular inspections.',
          },
          {
            title: 'Experienced Crew',
            desc: 'Subcontractor management and expert site leads.',
          },
          {
            title: 'Permits & Compliance',
            desc: 'Support across permits, occupancy, and local codes.',
          },
        ],
      },
      processTitle: 'Process',
      processDesc: 'Discovery → Planning → Execution → Handover',
      process: {
        steps: [
          {
            title: 'Discovery',
            desc: 'On-site review, needs analysis, and goal alignment.',
          },
          {
            title: 'Planning',
            desc: 'Takeoff, costing, timeline, and risk assessments.',
          },
          {
            title: 'Execution',
            desc: 'On-site coordination, QA, and daily reporting.',
          },
          {
            title: 'Handover',
            desc: 'Final checks, punch list, and commissioning.',
          },
        ],
      },
      servicesStrip: {
        title: 'Our Services',
        desc: 'Compliant, scalable solutions tailored to your needs.',
        items: [
          {
            title: 'General Contracting (Turnkey)',
            desc: 'Shell & core, fit-out, subcontractor coordination, and QA.',
          },
          {
            title: 'Renovation & Fit-Out',
            desc: 'End-to-end renovations for offices, retail, and residential.',
          },
          {
            title: 'Project Management & Estimation',
            desc: 'Takeoff, planning, cost control, and site management.',
          },
        ],
      },
      regionsTitle: 'Service Areas',
      regionsDesc:
        'Primary service regions are listed below. For other locations, please contact us.',
      regions: {
        list: ['Istanbul', 'Ankara', 'Izmir', 'Bursa', 'Kocaeli'],
      },
      kpisExtraTitle: 'Ekutaş in Numbers',
      kpisExtraDesc: 'Measurable success and sustainable operations on site.',
      kpisExtra: {
        items: [
          { value: '6', label: 'Active Sites' },
          { value: '40+', label: 'Equipment / Vehicles' },
          { value: '0', label: 'Incidents (HSE)' },
        ],
      },
    },

    aboutPage: {
      heading: 'About Us',
      intro1:
        'Ekutaş Construction delivers quality projects on time and to spec.',
      intro2:
        'We operate with transparent processes and strong on-site coordination.',
      valuesTitle: 'Our Values',
      value1: 'Reliability',
      value1Desc:
        'We deliver what we promise, on time and at the agreed quality.',
      value2: 'Transparency',
      value2Desc: 'Clear, traceable communication on scope, process, and cost.',
      value3: 'Safety',
      value3Desc:
        'People first: compliant site safety practices and inspections.',
    },

    servicesPage: {
      metaTitle: 'Services | Ekutaş Construction',
      metaDesc:
        'Services: general contracting, renovation & fit-out, project management.',
      heading: 'Services',
      intro:
        'Compliant, scalable construction solutions tailored to your needs.',
      items: [
        {
          title: 'General Contracting (Turnkey)',
          desc: 'Shell & core, fit-out, subcontractor coordination, and QA.',
        },
        {
          title: 'Renovation & Fit-Out',
          desc: 'End-to-end renovations for offices, retail, and residential.',
        },
        {
          title: 'Project Management & Estimation',
          desc: 'Takeoff, planning, cost control, and site management.',
        },
      ],
    },

    contactPage: {
      metaTitle: 'Contact | Ekutaş',
      metaDesc: 'Get in touch with Ekutaş.',
      heading: 'Contact',
      name: 'Full Name',
      email: 'Email',
      message: 'Your Message',
      send: 'Send',
      successTitle: 'Thank you!',
      successText: 'We’ve received your message and will get back to you soon.',
      errors: {
        nameRequired: 'Please enter your name.',
        emailInvalid: 'Please enter a valid email.',
        messageRequired: 'Please write a message.',
      },
    },
    contactInfo: {
      heading: 'Contact Information',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      addressLabel: 'Address',
      hoursLabel: 'Business Hours',
      phone: '+90 850 346 46 52',
      email: 'info@ekutas.com',
      address: 'Address coming soon',
      hours: 'Mon–Fri 09:00–18:00',
      mapTitle: 'Map',
      mapEmbed: '',
    },
    notFound: {
      metaTitle: 'Page Not Found | Ekutaş',
      metaDesc: 'The page you’re looking for doesn’t exist.',
      heading: 'Page not found',
      text: 'Sorry, we couldn’t find the page you were looking for.',
      backHome: 'Back to home',
    },
    projectsPage: {
      metaTitle: 'Projects | Ekutaş Construction',
      metaDesc: 'Examples from our completed and ongoing projects.',
      heading: 'Projects',
      intro:
        'Selected shots from residential, commercial, and industrial works.',
    },
  },
} as const;

// Basit dot-path okuma yardımcısı (örn: get(resources.tr, "servicesPage.items"))
export function get(obj: any, path: string) {
  return path.split('.').reduce((o, k) => (o ? (o as any)[k] : undefined), obj);
}
