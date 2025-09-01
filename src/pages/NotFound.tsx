import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider';

export default function NotFound() {
  const { t } = useI18n();

  return (
    <div>
      {/* React 19 meta hoisting */}
      <title>{t('notFound.metaTitle')}</title>
      <meta
        name="description"
        content={t('notFound.metaDesc')}
      />

      <section className="min-h-[60vh] flex items-center bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 ring-1 ring-blue-200">
            <span className="text-2xl font-bold">404</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
            {t('notFound.heading')}
          </h1>
          <p className="mt-3 text-gray-600">{t('notFound.text')}</p>

          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center rounded-md bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40"
            >
              {t('notFound.backHome')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
