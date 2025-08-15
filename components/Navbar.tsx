'use client';
import Link from 'next/link';
import styles from '@/app/styles/navbar.module.scss';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const { t } = useLanguage();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>Mauricio Guerrero</div>
      <ul className={styles.navbar__links}>
        <li><Link href="/">{t.navbar.home}</Link></li>
        <li><Link href="/about">{t.navbar.about}</Link></li>
        <li><Link href="/projects">{t.navbar.projects}</Link></li>
        <li><Link href="/contact">{t.navbar.contact}</Link></li>
      </ul>
      <div className={styles.navbar__actions}>
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </nav>
  );
}