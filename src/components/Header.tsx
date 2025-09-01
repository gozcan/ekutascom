import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider';

import { resources, get } from '../i18n/translations';

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.15 12 19.79 19.79 0 0 1 .08 3.69 2 2 0 0 1 2.06 1.5h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.62a2 2 0 0 1-.45 2.11L6.3 9.89a16 16 0 0 0 7.81 7.81l1.94-1.94a2 2 0 0 1 2.11-.45c.84.3 1.72.51 2.62.63A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 4h16v16H4z" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t, lang, setLang } = useI18n();
  // i18n kaynaklarını topla

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
  const data =
    (get(resources[lang], 'contact') as ContactInfo) || ({} as ContactInfo);
  const infoT = data.info;
  // Nav link stilleri
  const linkBase =
    'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150';
  const linkInactive = 'text-slate-700 hover:text-slate-900 hover:bg-slate-50';
  const linkActive = 'text-amber-700 bg-amber-50 ring-1 ring-amber-200';
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    `${linkBase} ${isActive ? linkActive : linkInactive}`;

  return (
    <header className="sticky top-0 z-50">
      {/* TOP BAR */}
      <div className="bg-slate-900 text-white text-xs">
        <div className="mx-auto max-w-6xl px-4 h-9 flex items-center justify-between">
          {/* Sol: Telefon / E-posta */}
          <div className="hidden sm:flex items-center gap-5">
            <span className="inline-flex items-center gap-2 text-white/80">
              <PhoneIcon />
              <span>{infoT?.phones}</span>
            </span>
            <span className="inline-flex items-center gap-2 text-white/80">
              <MailIcon />
              <span>{infoT?.emails}</span>
            </span>
          </div>

          {/* Sağ: Dil anahtarı */}
          <div className="flex items-center gap-1 ml-auto">
            <button
              className={`px-2 py-1 rounded ${
                lang === 'tr'
                  ? 'bg-white/15 text-white'
                  : 'text-white/80 hover:bg-white/10'
              }`}
              onClick={() => setLang('tr')}
              aria-pressed={lang === 'tr'}
            >
              TR
            </button>
            <button
              className={`px-2 py-1 rounded ${
                lang === 'en'
                  ? 'bg-white/15 text-white'
                  : 'text-white/80 hover:bg-white/10'
              }`}
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
          </div>
        </div>
      </div>

      {/* NAV BAR */}
      <div className="bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between h-24">
            {/* Logo / Brand */}
            <Link
              to="/"
              className="flex flex-row items-center gap-3"
            >
              <img
                src="/logo.svg"
                alt={t('brand')}
                className="h-16 w-auto"
                decoding="async"
                loading="eager"
              />
              <p className="font-light text-center text-[9pt] text-slate-600">
                | Ekutaş Ekşioğlu Uluslararası Ticaret İnşaat A.Ş.
              </p>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-2">
              <NavLink
                to="/"
                className={getLinkClass}
                end
              >
                {t('nav.home')}
              </NavLink>
              <NavLink
                to="/about"
                className={getLinkClass}
              >
                {t('nav.about')}
              </NavLink>
              <NavLink
                to="/services"
                className={getLinkClass}
              >
                {t('nav.services')}
              </NavLink>
              <NavLink
                to="/projects"
                className={getLinkClass}
              >
                {t('nav.projects')}
              </NavLink>
              <NavLink
                to="/contact"
                className={getLinkClass}
              >
                {t('nav.contact')}
              </NavLink>
            </nav>

            {/* Mobile button */}
            <button
              type="button"
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md p-0 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 6l12 12M6 18L18 6" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {open && (
          <nav className="md:hidden border-t bg-white">
            <div className="mx-auto max-w-6xl px-4 py-3">
              <div className="flex flex-col gap-1">
                <NavLink
                  to="/"
                  className={getLinkClass}
                  end
                  onClick={() => setOpen(false)}
                >
                  {t('nav.home')}
                </NavLink>
                <NavLink
                  to="/about"
                  className={getLinkClass}
                  onClick={() => setOpen(false)}
                >
                  {t('nav.about')}
                </NavLink>
                <NavLink
                  to="/services"
                  className={getLinkClass}
                  onClick={() => setOpen(false)}
                >
                  {t('nav.services')}
                </NavLink>
                <NavLink
                  to="/projects"
                  className={getLinkClass}
                  onClick={() => setOpen(false)}
                >
                  {t('nav.projects')}
                </NavLink>
                <NavLink
                  to="/contact"
                  className={getLinkClass}
                  onClick={() => setOpen(false)}
                >
                  {t('nav.contact')}
                </NavLink>
              </div>

              {/* Mobilde iletişim kısa şerit */}
              <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
                <div className="inline-flex items-center gap-2">
                  <PhoneIcon />
                  <span>{infoT?.phones}</span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <MailIcon />
                  <span>{infoT?.emails}</span>
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
