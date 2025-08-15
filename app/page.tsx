'use client';

import { motion } from 'framer-motion';
import styles from './styles/home.module.scss';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <main className={styles.home}>
      <motion.section
        className={styles.home__hero}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.home__title}>{t.home.title}</h1>
        <p className={styles.home__text}>{t.home.subtitle}</p>

        <div className={styles.home__buttons}>
          <Link href="/projects" className={styles.home__btn}>
            {t.home.ctaProjects}
          </Link>
          <Link
            href="/contact"
            className={`${styles.home__btn} ${styles['home__btn--secondary']}`}
          >
            {t.home.ctaContact}
          </Link>
        </div>
      </motion.section>
    </main>
  );
}