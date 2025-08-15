'use client';
import styles from './styles/home.module.scss';
import { useLanguage } from '@/context/LanguageContext';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <section className={styles.home}>
      <h1 className={styles.home__title}>{t.home.title}</h1>
      <p className={styles.home__text}>{t.home.subtitle}</p>
    </section>
  );
}