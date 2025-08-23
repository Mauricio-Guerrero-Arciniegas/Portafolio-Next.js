'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import styles from '../app/styles/navbar.module.scss';
import { useLanguage } from '@/context/LanguageContext';
import ThemeToggle from '../components/ThemeToggle';

export default function Navbar() {
  const { t, setLanguage, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  // Función para obtener la bandera actual
  const getFlag = () => {
    return language === 'es' ? '/flags/en.png' : '/flags/es.png';
  };

  return (
    <header className={styles.navbar}>
      <Link href="/" className={styles.loader} aria-label="Go to home">
        <svg
          className={styles.loader__svg}
          width="80"
          height="80"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={styles.loader__path}
            d="M 10 80 L 44 26 L 52 43 L 65 21 L 80 47"
            stroke="#00e1ff"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>

      {/* Desktop links */}
      <nav className={styles.navbar__links}>
        <Link href="/">{t.navbar.home}</Link>
        <Link href="/about">{t.navbar.about}</Link>
        <Link href="/projects">{t.navbar.projects}</Link>
        <Link href="/contact">{t.navbar.contact}</Link>

        {/* Botón cambio idioma con bandera */}
        <button
          onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
          className={styles.navbar__lang}
        >
          <img
            src={getFlag()}
            alt={language === 'es' ? 'Español' : 'English'}
            className={styles.navbar__flag}
          />
        </button>

        <ThemeToggle />
      </nav>

      {/* Botón hamburguesa */}
      <button
        className={styles.navbar__toggle}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Menú móvil */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className={styles.navbar__mobile}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Link href="/" onClick={() => setIsOpen(false)}>
              {t.navbar.home}
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              {t.navbar.about}
            </Link>
            <Link href="/projects" onClick={() => setIsOpen(false)}>
              {t.navbar.projects}
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              {t.navbar.contact}
            </Link>

            {/* Botón cambio idioma en móvil con bandera */}
            <button
              onClick={() => {
                setLanguage(language === 'es' ? 'en' : 'es');
                setIsOpen(false);
              }}
              className={styles.navbar__lang}
            >
              <img
                src={getFlag()}
                alt={language === 'es' ? 'Español' : 'English'}
                className={styles.navbar__flag}
              />
            </button>

            <ThemeToggle />
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}