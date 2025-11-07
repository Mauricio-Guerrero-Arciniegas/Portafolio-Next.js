'use client';

import { useLanguage } from '@/context/LanguageContext';
import Carousel from '../../components/Carrousel';
import styles from '../styles/projects.module.scss';

export default function ProjectsPage() {
  const { t } = useLanguage();

  return (
    <section className={styles.projects}>
      <h1 className={styles.sectionTitle}>{t.projects.title}</h1>
      <p className={styles.sectionSubtitle}>{t.projects.subtitle}</p>
      <Carousel projects={t.projects.items} />
    </section>
  );
}