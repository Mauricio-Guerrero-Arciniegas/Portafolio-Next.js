'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import styles from '../app/styles/navbar.module.scss';
import { useLanguage } from '@/context/LanguageContext';
import ThemeToggle from '../components/ThemeToggle';

export default function Navbar() {
  const { t, setLanguage, language } = useLanguage(); // <-- obtenemos idioma y setter
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <Link href="/">MiLogo</Link>
      </div>

      {/* Desktop links */}
      <nav className={styles.navbar__links}>
        <Link href="/">{t.navbar.home}</Link>
        <Link href="/about">{t.navbar.about}</Link>
        <Link href="/projects">{t.navbar.projects}</Link>
        <Link href="/contact">{t.navbar.contact}</Link>

        {/* Botón para cambiar idioma */}
        <button
          onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
          className={styles.navbar__lang}
        >
          {language === 'es' ? 'EN' : 'ES'}
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
            <Link href="/" onClick={() => setIsOpen(false)}>{t.navbar.home}</Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>{t.navbar.about}</Link>
            <Link href="/projects" onClick={() => setIsOpen(false)}>{t.navbar.projects}</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>{t.navbar.contact}</Link>

            {/* Botón cambio idioma en móvil */}
            <button
              onClick={() => {
                setLanguage(language === 'es' ? 'en' : 'es');
                setIsOpen(false);
              }}
              className={styles.navbar__lang}
            >
              {language === 'es' ? 'EN' : 'ES'}
            </button>

            <ThemeToggle />
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}