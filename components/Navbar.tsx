'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import styles from '../app/styles/navbar.module.scss';
import { useLanguage } from '@/context/LanguageContext';
import ThemeToggle from '../components/ThemeToggle';

export default function Navbar() {
  const { t } = useLanguage();
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
        <ThemeToggle />
      </nav>

      {/* Hamburger Button */}
      <button
        className={styles.navbar__toggle}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile menu */}
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
            <ThemeToggle />
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}