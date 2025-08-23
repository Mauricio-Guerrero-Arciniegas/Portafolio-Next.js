'use client';

import { motion } from 'framer-motion';
import styles from './styles/home.module.scss';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react'; // ✅ Importamos iconos

export default function HomePage() {
  const { t } = useLanguage();
  const title = t.home.title; // "Mauricio Guerrero A."

  return (
    <main className={styles.home}>
      <motion.section
        className={styles.home__glass}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.home__title}>
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="inline-block overflow-hidden"
          >
            <motion.span
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className={styles.home__letter}
            >
              {title}
            </motion.span>
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

      {/* ✅ Columna derecha con iconos */}
      <div className={styles.home__right}>
        <div className={styles.home__socials}>
          <Link href="https://github.com/Mauricio-Guerrero-Arciniegas" target="_blank">
            <Github size={32} />
          </Link>
          <Link href="https://www.linkedin.com/in/mauricio-guerrero-827582220/" target="_blank">
            <Linkedin size={32} />
          </Link>
        </div>
      </div>
    </main>
  );
}