'use client';

import { motion } from 'framer-motion';
import styles from './styles/home.module.scss';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';

export default function HomePage() {
  const { t } = useLanguage();
  const title = t.home.title;

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className={styles.home}>
      <div className={styles.home__socialsTop}>
        <Link href="https://github.com/Mauricio-Guerrero-Arciniegas" target="_blank">
          <Github size={28} />
        </Link>
        <Link href="https://www.linkedin.com/in/mauricio-guerrero-827582220/" target="_blank">
          <Linkedin size={28} />
        </Link>
        
      </div>

      <motion.section
        className={styles.home__glass}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className={styles.home__title}
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
        >
          {title.split('').map((letter, i) => (
            <motion.span key={i} variants={letterVariants} className={styles.home__letter}>
              {letter}
            </motion.span>
          ))}
        </motion.h1>

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