'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import es from '@/locales/es.json';
import en from '@/locales/en.json';

type Locale = 'es' | 'en';
type Translations = typeof es;

interface LanguageContextType {
  language: Locale;
  t: Translations;
  setLanguage: (language: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Locale>('es');

  // ✅ Cargar idioma guardado (solo en cliente)
  useEffect(() => {
    const storedLang = localStorage.getItem('lang') as Locale | null;
    if (storedLang) setLanguage(storedLang);
  }, []);

  // ✅ Guardar idioma cuando cambie
  useEffect(() => {
    localStorage.setItem('lang', language);
  }, [language]);

  const translations = language === 'es' ? es : en;

  return (
    <LanguageContext.Provider value={{ language, t: translations, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage debe usarse dentro de LanguageProvider');
  return context;
};