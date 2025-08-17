'use client';

import { motion } from 'framer-motion';
import styles from './styles/home.module.scss';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import { useState } from 'react';

export default function HomePage() {
  const { t } = useLanguage();
  const title = t.home.title; // "Mauricio Guerrero A."
  const [finished, setFinished] = useState(false);

  return (
    <main className={styles.home}>
      <motion.section
        className={styles.home__glass}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1
          className={`${styles.home__title} ${
            finished ? styles['home__title--final'] : ''
          }`}
        >
          <motion.span
            initial={{ backgroundPosition: '200% 50%' }}
            animate={{ backgroundPosition: '0% 50%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            onAnimationComplete={() => setFinished(true)}
          >
            {title}
          </motion.span>
        </h1>

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

      <div className={styles.home__right}></div>
    </main>
  );
}