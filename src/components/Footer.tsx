import { Link, NavLink } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider';

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  const linkBase =
    'text-sm text-gray-600 hover:text-gray-900 transition-colors';
  const active = 'text-gray-900 font-medium underline underline-offset-4';

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    `${linkBase} ${isActive ? active : ''}`;

  return (
    <footer className="border-t bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Sol: marka */}
          <Link
            to="/"
            className="text-base font-semibold text-gray-900"
          >
            {t('brand')}
          </Link>

          {/* Orta: hızlı menü */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
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
              to="/contact"
              className={getLinkClass}
            >
              {t('nav.contact')}
            </NavLink>
          </nav>

          {/* Sağ: telif */}
          <p className="text-sm text-gray-500">
            &copy; {year} {t('brand')}
          </p>
        </div>
      </div>
    </footer>
  );
}
