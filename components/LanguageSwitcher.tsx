'use client';
import { useLanguage } from '@/context/LanguageContext';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div>
      <button
        onClick={() => setLocale('es')}
        style={{ fontWeight: locale === 'es' ? 'bold' : 'normal' }}
      >
        🇪🇸
      </button>
      <button
        onClick={() => setLocale('en')}
        style={{ fontWeight: locale === 'en' ? 'bold' : 'normal' }}
      >
        🇬🇧
      </button>
    </div>
  );
}