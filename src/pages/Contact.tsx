import type { FormEvent } from 'react';
import { useMemo, useState } from 'react';
import { useI18n } from '../i18n/I18nProvider';
import { resources, get } from '../i18n/translations';

type Errors = Partial<{ name: string; email: string; message: string }>;

function InfoIcon({ name }: { name: 'phone' | 'mail' | 'map' | 'clock' }) {
  const cls = 'h-5 w-5';
  switch (name) {
    case 'phone':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className={cls}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.15 12 19.79 19.79 0 0 1 .08 3.69 2 2 0 0 1 2.06 1.5h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.62a2 2 0 0 1-.45 2.11L6.3 9.89a16 16 0 0 0 7.81 7.81l1.94-1.94a2 2 0 0 1 2.11-.45c.84.3 1.72.51 2.62.63A2 2 0 0 1 22 16.92z" />
        </svg>
      );
    case 'mail':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className={cls}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 4h16v16H4z" />
          <path d="M22 6l-10 7L2 6" />
        </svg>
      );
    case 'map':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className={cls}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 1 1 18 0z" />
          <circle
            cx="12"
            cy="10"
            r="3"
          />
        </svg>
      );
    case 'clock':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className={cls}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
          />
          <path d="M12 6v6l4 2" />
        </svg>
      );
  }
}

export default function Contact() {
  const { t, lang } = useI18n();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const emailRegex = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/, []);

  function validate(): boolean {
    const e: Errors = {};
    if (!form.name.trim()) e.name = t('contactPage.errors.nameRequired');
    if (!emailRegex.test(form.email))
      e.email = t('contactPage.errors.emailInvalid');
    if (!form.message.trim())
      e.message = t('contactPage.errors.messageRequired');
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', message: '' });
  }

  // i18n üzerinden iletişim bilgileri + harita kaynağı
  const phone = t('contactInfo.phone');
  const email = t('contactInfo.email');
  const address = t('contactInfo.address');
  const hours = t('contactInfo.hours');
  const mapSrc = get(resources[lang], 'contactInfo.mapEmbed') as
    | string
    | undefined;

  return (
    <div>
      {/* React 19 meta hoisting */}
      <title>{t('contactPage.metaTitle')}</title>
      <meta
        name="description"
        content={t('contactPage.metaDesc')}
      />

      {/* Başlık */}
      <section className="bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
            {t('contactPage.heading')}
          </h1>
          <p className="mt-3 text-gray-600">{t('contactPage.metaDesc')}</p>
        </div>
      </section>

      {/* Form + Bilgi/Harita */}
      <section className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">
        {/* Sol: Form */}
        <div>
          {sent && (
            <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4 text-green-800">
              <div className="font-semibold">
                {t('contactPage.successTitle')}
              </div>
              <div className="text-sm">{t('contactPage.successText')}</div>
            </div>
          )}

          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-2xl border bg-white p-6 shadow-sm ring-1 ring-black/5"
          >
            <div className="grid gap-5">
              {/* Name */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-900"
                  htmlFor="name"
                >
                  {t('contactPage.name')}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={`mt-1 block w-full rounded-md border px-3 py-2 outline-none focus:ring-2
                    ${
                      errors.name
                        ? 'border-red-300 ring-red-200'
                        : 'border-gray-300 focus:ring-blue-200'
                    }`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-900"
                  htmlFor="email"
                >
                  {t('contactPage.email')}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={`mt-1 block w-full rounded-md border px-3 py-2 outline-none focus:ring-2
                    ${
                      errors.email
                        ? 'border-red-300 ring-red-200'
                        : 'border-gray-300 focus:ring-blue-200'
                    }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-900"
                  htmlFor="message"
                >
                  {t('contactPage.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className={`mt-1 block w-full rounded-md border px-3 py-2 outline-none focus:ring-2
                    ${
                      errors.message
                        ? 'border-red-300 ring-red-200'
                        : 'border-gray-300 focus:ring-blue-200'
                    }`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center rounded-md bg-blue-600 px-5 py-2.5 text-white font-medium hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40"
                >
                  {t('contactPage.send')}
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Sağ: İletişim Bilgileri + Harita */}
        <div className="space-y-6">
          {/* Bilgi kartı */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm ring-1 ring-black/5">
            <h2 className="text-lg font-semibold text-gray-900">
              {t('contactInfo.heading')}
            </h2>

            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                  <InfoIcon name="phone" />
                </span>
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    {t('contactInfo.phoneLabel')}
                  </div>
                  <div className="text-gray-700">{phone}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                  <InfoIcon name="mail" />
                </span>
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    {t('contactInfo.emailLabel')}
                  </div>
                  <div className="text-gray-700">{email}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                  <InfoIcon name="map" />
                </span>
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    {t('contactInfo.addressLabel')}
                  </div>
                  <div className="text-gray-700">{address}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                  <InfoIcon name="clock" />
                </span>
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    {t('contactInfo.hoursLabel')}
                  </div>
                  <div className="text-gray-700">{hours}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Harita kartı */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm ring-1 ring-black/5">
            <h2 className="text-lg font-semibold text-gray-900">
              {t('contactInfo.mapTitle')}
            </h2>
            <div className="mt-4 w-full overflow-hidden rounded-xl ring-1 ring-black/5">
              {typeof mapSrc === 'string' && mapSrc.length > 0 ? (
                <div className="relative">
                  <div className="aspect-[4/3] md:aspect-[16/10]" />
                  <iframe
                    src={mapSrc}
                    title="Google Map"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 h-full w-full border-0"
                    aria-label="Company location map"
                  />
                </div>
              ) : (
                // Placeholder (mapEmbed boşsa)
                <div className="aspect-[4/3] md:aspect-[16/10] bg-gradient-to-tr from-gray-200 via-gray-100 to-white flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Harita yakında</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
