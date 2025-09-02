export type Lang = 'tr' | 'en';

export const resources = {
  tr: {
    brand: 'Ekutaş Ekşioğlu Uluslararası Ticaret İnşaat A.Ş.',
    nav: {
      home: 'Ana Sayfa',
      about: 'Hakkımızda',
      services: 'Hizmetler',
      projects: 'Projeler', // ← eklendi
      contact: 'İletişim',
    },

    // Ana sayfa ve genel meta
    meta: {
      homeTitle: 'Ana Sayfa | Ekutaş',
      homeDesc:
        'Ekutaş İnşaat: konut, ticari ve endüstriyel projelerde anahtar teslim çözümler.',
      aboutTitle: 'Hakkımızda | Ekutaş İnşaat',
      aboutDesc:
        'Ekutaş İnşaat hakkında bilgi: kalite, şeffaflık ve iş güvenliği odağı.',
    },

    // Hero metinleri
    hero: {
      title: 'Güvenli ve sağlam yapılar',
      subtitle:
        'Konut, ticari ve endüstriyel projelerde uçtan uca inşaat çözümleri.',
      imageAlt: 'Ekutaş İnşaat şantiyesi ve saha çalışmaları',
      kpis: {
        yearsValue: '80+',
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
        ],
      },
    },

    // About sayfası
    about: {
      heroTitle: 'Hakkımızda',
      heroSubtitle:
        'Ekutaş Ekşioğlu Uluslararası Ticaret İnşaat A.Ş. – Güvenden Yapılar Yükselir.',
      who: {
        title: 'Biz Kimiz?',
        paragraphs: [
          'Temelleri 1937 yılında atılan Ekutaş, Türkiye’nin en köklü inşaat firmalarından biri olarak üç kuşağa yayılan tecrübesiyle sektörde güvenin ve kalitenin simgesi haline gelmiştir. Aile şirketi yapısını koruyarak büyüyen firmamız, ilk olarak Ekşioğlu İnşaat adıyla faaliyet göstermiş, 1983 yılında Ekşioğlu Holding’in iştiraki olarak Ekutaş Ekşioğlu Uluslararası Ticaret Müteahhitlik A.Ş. adını almıştır.',
          '1980’li ve 1990’lı yıllarda yurtiçi projelerindeki başarıların ardından, Ekgüntaş ile birleşerek yurt dışında çeşitli projelere imza atılmış; altyapı, konut ve endüstriyel yapılar gibi birçok alanda uluslararası tecrübe kazanılmış ve grup şirketleri ile birlikte 20 milyar USD’yi aşan iş bitirme elde edilmiştir.',
          'Birleşim sürecinin ardından kendi yoluna devam eden Ekutaş, bugün İstanbul merkezli projelere odaklanarak; başta konut ve ticari yapılar olmak üzere yaşam kalitesini artıran, estetik ve fonksiyonel yapılar üretmeye devam etmektedir.',
          'Geçmişten gelen gücümüzle, geleceği inşa etmeye devam ediyoruz.',
        ],
      },
      history: {
        title: 'Kısa Tarihçe',
        items: [
          { label: '1937', text: 'Ekutaş’ın temelleri atıldı.' },
          {
            label: '1983',
            text: 'Ekşioğlu Holding iştiraki; yeni unvan: Ekutaş Ekşioğlu Uluslararası Ticaret Müteahhitlik A.Ş.',
          },
          {
            label: '1980–1990’lar',
            text: 'Ekgüntaş ile birleşim; altyapı, konut, endüstriyel yapılar; 20+ milyar USD iş bitirme.',
          },
          {
            label: 'Bugün',
            text: 'İstanbul merkezli; konut ve ticari yapılarda estetik + fonksiyon odaklı üretim.',
          },
        ],
      },
      values: {
        title: 'Değerlerimiz',
        items: [
          {
            title: 'Güvenilirlik',
            desc: '80 yılı aşkın süredir verdiğimiz sözleri tutmanın sorumluluğunu taşıyoruz.',
          },
          {
            title: 'Kalite',
            desc: 'Malzeme seçiminden işçiliğe kadar tüm süreçlerde yüksek standartları benimsiyoruz.',
          },
          {
            title: 'Sürdürülebilirlik',
            desc: 'Gelecek nesillere yaşanabilir yapılar bırakmak için çevre dostu çözümler üretiyoruz.',
          },
          {
            title: 'Aile Kültürü',
            desc: 'Kurucularımızdan aldığımız değerleri, çalışanlarımız ve iş ortaklarımızla büyütüyoruz.',
          },
        ],
      },
      vision: {
        title: 'Vizyonumuz',
        body: 'Türkiye’de ve dünyada; kalite, güven ve sürdürülebilirlik ilkeleriyle tanınan; yaşam alanları, altyapı ve ticari projelerde fark yaratan öncü bir inşaat markası olmak.',
      },
      mission: {
        title: 'Misyonumuz',
        bullets: [
          'Güvenilirlikten ödün vermeden,',
          'Yüksek mühendislik ve mimarlık standartlarında,',
          'Çevreye duyarlı ve sürdürülebilir çözümlerle,',
          'Estetik ve fonksiyonelliği bir araya getiren projeler üretmek.',
        ],
        footnote:
          'Müşterilerimize, iş ortaklarımıza ve topluma değer katan yapılar inşa etmek en temel misyonumuzdur.',
      },
      closing: 'Ekutaş — Güvenden Yapılar Yükselir.',
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
    contact: {
      pageTitle: 'İletişim',
      pageDesc:
        'Projeleriniz için bize ulaşın. Size en kısa sürede geri döneriz.',
      form: {
        name: 'Ad Soyad',
        email: 'E-posta',
        phone: 'Telefon',
        subject: 'Konu',
        message: 'Mesajınız',
        submit: 'Gönder',
        success: 'Mesajınız alındı. En kısa sürede dönüş yapacağız.',
        error: 'Lütfen zorunlu alanları doldurun ve geçerli bir e-posta girin.',
        validations: {
          required: 'Lütfen tüm zorunlu alanları doldurun.',
          email: 'Lütfen geçerli bir e-posta adresi girin.',
        },
        placeholders: {
          name: 'Adınız Soyadınız',
          email: 'ornek@domain.com',
          phone: '+90 5xx xxx xx xx',
          subject: 'Konu başlığı',
          message: 'Mesajınızı yazın...',
        },
      },
      info: {
        title: 'İletişim Bilgileri',
        addressTitle: 'Adres',
        addressLines: [
          'Ekutaş Ekşioğlu Uluslararası Ticaret İnşaat A.Ş.',
          'Küçük Çamlıca mah. Libadiye cad. No:52 Üsküdar İstanbul, Türkiye',
        ],
        phoneTitle: 'Telefon',
        phones: ['+90 850 346 46 52'],
        emailTitle: 'E-posta',
        emails: ['info@ekutas.com'],
        hoursTitle: 'Çalışma Saatleri',
        hours: ['Pzt–Cum 09:00–18:00'],
        mapEmbedUrl: '',
      },
    },

    // 404 sayfası
    notFound: {
      metaTitle: 'Sayfa Bulunamadı | Ekutaş',
      metaDesc: 'Aradığınız sayfa mevcut değil.',
      heading: 'Sayfa bulunamadı',
      text: 'Üzgünüz, aradığınız sayfayı bulamadık.',
      backHome: 'Ana sayfaya dön',
    },
    projects: {
      pageTitle: 'Projeler',
      pageDesc: 'Yurtdışı ve yurtiçi referanslarımızdan bir seçki.',
      foreignTitle: 'Yurtdışı projeler',
      domesticTitle: 'Yurtiçi projeler',
      galleryTitle: 'Galeri',
      foreign: [
        'Ataallah Otel ve İş Merkezi – Medine',
        'Ahmed Bekri İş Merkezi ve Oteli – Medine',
        'Fatma Vakfı İş Merkezi – Yanbu (Medine)',
        'Ahmed El Sabah Sarayı – Taif',
        'Dervişoğlu Villaları – Cidde',
        'Saudi Danish Süt Fabrikası – Medine',
      ],
      domestic: [
        'Selamiçeşme – Güneş Apartmanı',
        'Göztepe – Çevre Apartmanı',
        'Göztepe – Ceylan Apartmanı',
        'Ataşehir – Bahar Sitesi',
        'Kozyatağı – Gökhan Ekşioğlu Apartmanı',
        'Göztepe – Can Apartmanı',
        'Göztepe – Duygun Apartmanı',
        'Göztepe – Nur Apartmanı',
        'Fenerbahçe – Seçer Apartmanı',
        'Fenerbahçe – Zeynep Apartmanı',
        'Fenerbahçe – Adil Özev Apartmanı',
      ],
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
        yearsValue: '80+',
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
        ],
      },
    },

    about: {
      heroTitle: 'About Us',
      heroSubtitle:
        'Ekutaş Eksioglu International Trade & Construction Inc. — Structures Rise on Trust.',
      who: {
        title: 'Who We Are',
        paragraphs: [
          'Founded in 1937, Ekutaş is one of Turkey’s most established construction companies, a symbol of trust and quality across three generations. Initially operating as Ekşioğlu İnşaat, the company took the name Ekutaş Ekşioğlu International Trade Contracting Inc. in 1983 as a subsidiary of Ekşioğlu Holding.',
          'Following success in domestic projects throughout the 1980s and 1990s, the group merged with Ekgüntaş and delivered projects abroad, gaining international experience in infrastructure, residential and industrial buildings, surpassing USD 20 billion in completed work together with group companies.',
          'After the merger period, Ekutaş continued on its own path and now focuses on Istanbul-based projects—primarily residential and commercial—creating aesthetic and functional buildings that improve quality of life.',
          'With the strength of our past, we continue to build the future.',
        ],
      },
      history: {
        title: 'Brief Timeline',
        items: [
          { label: '1937', text: 'Foundations of Ekutaş laid.' },
          {
            label: '1983',
            text: 'Became a subsidiary of Ekşioğlu Holding; new legal title adopted.',
          },
          {
            label: '1980s–1990s',
            text: 'Merger with Ekgüntaş; international projects in infrastructure, residential and industrial; USD 20B+ completed volume.',
          },
          {
            label: 'Today',
            text: 'Istanbul-focused; delivering aesthetic and functional residential and commercial projects.',
          },
        ],
      },
      values: {
        title: 'Our Values',
        items: [
          {
            title: 'Reliability',
            desc: 'For over 80 years, we have honored our commitments.',
          },
          {
            title: 'Quality',
            desc: 'We uphold high standards from material selection to workmanship.',
          },
          {
            title: 'Sustainability',
            desc: 'We develop environmentally responsible solutions for future generations.',
          },
          {
            title: 'Family Culture',
            desc: 'We nurture our founders’ values with our team and partners.',
          },
        ],
      },
      vision: {
        title: 'Our Vision',
        body: 'To be a leading construction brand—recognized in Turkey and worldwide—for quality, trust and sustainability across living spaces, infrastructure and commercial projects.',
      },
      mission: {
        title: 'Our Mission',
        bullets: [
          'Never compromising on reliability,',
          'Engineering and architectural excellence,',
          'Environmentally conscious and sustainable solutions,',
          'Projects that unite aesthetics with functionality.',
        ],
        footnote:
          'Our fundamental mission is to build structures that create value for our clients, partners and society.',
      },
      closing: 'Ekutaş — Structures Rise on Trust.',
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

    contact: {
      pageTitle: 'Contact',
      pageDesc:
        'Get in touch about your projects. We’ll get back to you shortly.',
      form: {
        name: 'Full Name',
        email: 'Email',
        phone: 'Phone',
        subject: 'Subject',
        message: 'Message',
        submit: 'Send',
        success: 'Your message has been received. We’ll get back to you soon.',
        error:
          'Please fill in the required fields and enter a valid email address.',
        validations: {
          required: 'Please complete all required fields.',
          email: 'Please enter a valid email address.',
        },
        placeholders: {
          name: 'Your full name',
          email: 'you@example.com',
          phone: '+90 5xx xxx xx xx',
          subject: 'Subject line',
          message: 'Type your message...',
        },
      },
      info: {
        title: 'Contact Details',
        addressTitle: 'Address',
        addressLines: [
          'Ekutaş Ekşioğlu Uluslararası Ticaret İnşaat A.Ş.',
          'Küçük Çamlıca mah. Libadiye cad. No:52 Üsküdar İstanbul, Türkiye',
        ],
        phoneTitle: 'Phone',
        phones: ['+90 850 346 46 52'],
        emailTitle: 'Email',
        emails: ['info@ekutas.com'],
        hoursTitle: 'Working Hours',
        hours: ['Mon–Fri 09:00–18:00'],
        mapEmbedUrl: '',
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
    projects: {
      pageTitle: 'Projects',
      pageDesc: 'A selection from our international and domestic references.',
      foreignTitle: 'International Projects',
      domesticTitle: 'Domestic Projects',
      galleryTitle: 'Gallery',

      foreign: [
        'Ataallah Hotel & Business Center – Medina',
        'Ahmed Bekri Business Center & Hotel – Medina',
        'Fatma Foundation Business Center – Yanbu (Medina Province)',
        'Ahmed Al-Sabah Palace – Taif',
        'Dervişoğlu Villas – Jeddah',
        'Saudi Danish Dairy Factory – Medina',
      ],
      domestic: [
        'Selamiçeşme – Güneş Apartment',
        'Göztepe – Çevre Apartment',
        'Göztepe – Ceylan Apartment',
        'Ataşehir – Bahar Housing Complex',
        'Kozyatağı – Gökhan Ekşioğlu Apartment',
        'Göztepe – Can Apartment',
        'Göztepe – Duygun Apartment',
        'Göztepe – Nur Apartment',
        'Fenerbahçe – Seçer Apartment',
        'Fenerbahçe – Zeynep Apartment',
        'Fenerbahçe – Adil Özev Apartment',
      ],
    },
  },
} as const;

// Basit dot-path okuma yardımcısı (örn: get(resources.tr, "servicesPage.items"))
export function get(obj: any, path: string) {
  return path.split('.').reduce((o, k) => (o ? (o as any)[k] : undefined), obj);
}
