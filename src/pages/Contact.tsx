import { motion } from 'framer-motion';
import { useState } from 'react';
import { useI18n } from '../i18n/I18nProvider';
import { resources, get } from '../i18n/translations';

const fade = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

type ContactInfo = {
  pageTitle: string;
  pageDesc?: string;
  form: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    submit: string;
    success?: string;
    error?: string;
    validations?: {
      required?: string;
      email?: string;
    };
    placeholders?: {
      name?: string;
      email?: string;
      phone?: string;
      subject?: string;
      message?: string;
    };
  };
  info?: {
    title?: string;
    addressTitle?: string;
    addressLines?: string[];
    phoneTitle?: string;
    phones?: string[];
    emailTitle?: string;
    emails?: string[];
    hoursTitle?: string;
    hours?: string[];
    mapEmbedUrl?: string;
  };
};

export default function Contact() {
  const { t, lang } = useI18n();

  // i18n kaynaklarını topla
  const data =
    (get(resources[lang], 'contact') as ContactInfo) || ({} as ContactInfo);
  const formT = data.form || ({} as ContactInfo['form']);
  const infoT = data.info;

  // Basit UI-state (submit simülasyonu)
  const [status, setStatus] = useState<'idle' | 'ok' | 'err'>('idle');
  const [msg, setMsg] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get('name') || '').trim();
    const email = String(fd.get('email') || '').trim();
    const subject = String(fd.get('subject') || '').trim();
    const message = String(fd.get('message') || '').trim();

    const requiredMsg = formT.validations?.required || '';
    const emailMsg = formT.validations?.email || '';

    if (!name || !email || !subject || !message) {
      setStatus('err');
      setMsg(requiredMsg);
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      setStatus('err');
      setMsg(emailMsg);
      return;
    }
    // Simüle başarı
    setStatus('ok');
    setMsg(formT.success || '');
    e.currentTarget.reset();
  }

  return (
    <div className="bg-white">
      {/* Meta */}
      <meta
        name="description"
        content={data.pageDesc || t('contact.pageTitle')}
      />

      {/* Üst şerit (ambient) */}
      <section className="relative isolate overflow-hidden bg-slate-900 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-amber-400/15 blur-3xl" />
          <div className="absolute -left-32 bottom-[-80px] h-[380px] w-[380px] rounded-full bg-sky-300/10 blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/[.06] via-transparent to-black/[.12]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={fade.viewport}
            transition={fade.transition}
            className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight"
            style={{ textShadow: '0 1px 1px rgba(0,0,0,.18)' }}
          >
            {t('contact.pageTitle')}
          </motion.h1>
          {data.pageDesc ? (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={fade.viewport}
              transition={{ ...fade.transition, delay: 0.05 }}
              className="mt-3 max-w-2xl text-white/80 md:text-lg"
            >
              {data.pageDesc}
            </motion.p>
          ) : null}
        </div>
      </section>

      {/* İçerik: Sol form, sağ bilgi kartı */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 grid gap-10 md:grid-cols-12">
          {/* Form */}
          <div className="md:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={fade.viewport}
              transition={fade.transition}
              className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-slate-900"
            >
              {t('contact.pageTitle')}
            </motion.h2>
            <div
              className="mt-3 h-1 w-20 rounded-full bg-amber-500"
              aria-hidden="true"
            />

            <form
              onSubmit={onSubmit}
              className="mt-6 space-y-4"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <Field
                  id="name"
                  name="name"
                  type="text"
                  label={t('contact.form.name')}
                  placeholder={formT.placeholders?.name || ''}
                />
                <Field
                  id="email"
                  name="email"
                  type="email"
                  label={t('contact.form.email')}
                  placeholder={formT.placeholders?.email || ''}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Field
                  id="phone"
                  name="phone"
                  type="tel"
                  label={t('contact.form.phone')}
                  placeholder={formT.placeholders?.phone || ''}
                />
                <Field
                  id="subject"
                  name="subject"
                  type="text"
                  label={t('contact.form.subject')}
                  placeholder={formT.placeholders?.subject || ''}
                />
              </div>

              <TextArea
                id="message"
                name="message"
                label={t('contact.form.message')}
                placeholder={formT.placeholders?.message || ''}
                rows={6}
              />

              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-md border border-amber-300 bg-white px-5 py-2.5 text-amber-800 font-medium hover:bg-amber-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/40 transition"
                >
                  <SendIcon />
                  {t('contact.form.submit')}
                </button>
              </div>

              {/* durum mesajı */}
              {status !== 'idle' && msg ? (
                <div
                  className={`mt-2 rounded-md border px-3 py-2 text-sm ${
                    status === 'ok'
                      ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
                      : 'border-rose-200 bg-rose-50 text-rose-800'
                  }`}
                  role="status"
                >
                  {msg}
                </div>
              ) : null}
            </form>
          </div>

          {/* İletişim bilgileri */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={fade.viewport}
              transition={fade.transition}
              className="rounded-2xl border border-slate-200 bg-white/70 p-6 backdrop-blur-sm"
            >
              {infoT?.title ? (
                <h3 className="text-lg font-semibold text-slate-900">
                  {infoT.title}
                </h3>
              ) : null}

              {/* Adres */}
              {infoT?.addressLines && infoT.addressLines.length > 0 ? (
                <div className="mt-4">
                  <div className="flex items-center gap-2 text-slate-900 font-medium">
                    <MapPinIcon />
                    {infoT.addressTitle}
                  </div>
                  <div className="mt-1 text-slate-700 font-sans">
                    {infoT.addressLines.map((ln, i) => (
                      <div key={i}>{ln}</div>
                    ))}
                  </div>
                </div>
              ) : null}

              {/* Telefon */}
              {infoT?.phones && infoT.phones.length > 0 ? (
                <div className="mt-4">
                  <div className="flex items-center gap-2 text-slate-900 font-medium">
                    <PhoneIcon />
                    {infoT.phoneTitle}
                  </div>
                  <div className="mt-1 text-slate-600 space-y-1">
                    {infoT.phones.map((ph, i) => (
                      <div key={i}>
                        <a
                          className="hover:underline"
                          href={`tel:${ph.replace(/\s+/g, '')}`}
                        >
                          {ph}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {/* E-posta */}
              {infoT?.emails && infoT.emails.length > 0 ? (
                <div className="mt-4">
                  <div className="flex items-center gap-2 text-slate-900 font-medium">
                    <MailIcon />
                    {infoT.emailTitle}
                  </div>
                  <div className="mt-1 text-slate-600 space-y-1">
                    {infoT.emails.map((em, i) => (
                      <div key={i}>
                        <a
                          className="hover:underline"
                          href={`mailto:${em}`}
                        >
                          {em}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {/* Çalışma saatleri */}
              {infoT?.hours && infoT.hours.length > 0 ? (
                <div className="mt-4">
                  <div className="flex items-center gap-2 text-slate-900 font-medium">
                    <ClockIcon />
                    {infoT.hoursTitle}
                  </div>
                  <ul className="mt-1 text-slate-600 space-y-1">
                    {infoT.hours.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {/* Harita (opsiyonel) */}
              {infoT?.mapEmbedUrl ? (
                <div className="mt-6 overflow-hidden rounded-xl ring-1 ring-slate-200">
                  <iframe
                    src={infoT.mapEmbedUrl}
                    title="map"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-64 w-full"
                  />
                </div>
              ) : (
                <div className="mt-6 h-40 w-full rounded-xl bg-gradient-to-br from-amber-100 via-white to-sky-50 ring-1 ring-slate-200" />
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ----------------- Alan bileşenleri ----------------- */

function Field(props: {
  id: string;
  name: string;
  type?: string;
  label: string;
  placeholder?: string;
}) {
  const { id, name, type = 'text', label, placeholder } = props;
  return (
    <label
      htmlFor={id}
      className="block"
    >
      <span className="mb-1 block text-sm font-medium text-slate-700">
        {label}
      </span>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className="block w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-slate-900 outline-none ring-amber-500/0 placeholder:text-slate-400 focus:border-amber-300 focus:ring-2 focus:ring-amber-500/30 transition"
      />
    </label>
  );
}

function TextArea(props: {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  rows?: number;
}) {
  const { id, name, label, placeholder, rows = 6 } = props;
  return (
    <label
      htmlFor={id}
      className="block"
    >
      <span className="mb-1 block text-sm font-medium text-slate-700">
        {label}
      </span>
      <textarea
        id={id}
        name={name}
        rows={rows}
        placeholder={placeholder}
        className="block w-full resize-y rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-slate-900 outline-none ring-amber-500/0 placeholder:text-slate-400 focus:border-amber-300 focus:ring-2 focus:ring-amber-500/30 transition"
      />
    </label>
  );
}

/* ----------------- İkonlar ----------------- */
function SendIcon() {
  return (
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
      <path d="M22 2L11 13" />
      <path d="M22 2L15 22l-4-9-9-4 20-7z" />
    </svg>
  );
}
function MapPinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 21s-6-5-6-10a6 6 0 0 1 12 0c0 5-6 10-6 10z" />
      <circle
        cx="12"
        cy="11"
        r="2"
      />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.14 8.81 19.8 19.8 0 0 1 .11 0 2 2 0 0 1 2.18 0h3a2 2 0 0 1 2 1.72c.12.9.32 1.78.58 2.63a2 2 0 0 1-.45 2.11L6.1 8.1a16 16 0 0 0 6.32 6.32l1.64-1.21a2 2 0 0 1 2.11-.45c.85.26 1.73.46 2.63.58A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 4h16v16H4z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
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
