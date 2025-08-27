'use client';
import { useLanguage } from '@/context/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div>
      <button
        onClick={() => setLanguage('es')}
        style={{ fontWeight: language === 'es' ? 'bold' : 'normal' }}
      >
        🇪🇸
      </button>
      <button
        onClick={() => setLanguage('en')}
        style={{ fontWeight: language === 'en' ? 'bold' : 'normal' }}
      >
        🇬🇧
      </button>
    </div>
  );
}