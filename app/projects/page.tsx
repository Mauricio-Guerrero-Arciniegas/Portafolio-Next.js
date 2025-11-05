'use client';

import { useLanguage } from '@/context/LanguageContext';
import Carousel from '../../components/Carrousel';
import styles from '../styles/projects.module.scss';

const projects = [
  {
    title: 'Portfolio Website',
    description: {
      es: 'Un portafolio personal con Next.js y SCSS modules.',
      en: 'A personal portfolio built with Next.js and SCSS modules.',
    },
    image: '/images/projects/p4.png',
    demo: 'https://miportafolio.com',
    code: 'https://github.com/usuario/portfolio',
  },
  {
    title: 'Weather App',
    description: {
      es: 'Aplicación del clima usando API de OpenWeather.',
      en: 'Weather app using OpenWeather API.',
    },
    image: '/images/projects/p2.png',
    demo: 'https://weatherapp.com',
    code: 'https://github.com/usuario/weatherapp',
  },
  {
    title: 'Ecommerce Store',
    description: {
      es: 'Tienda online con carrito y pasarela de pagos.',
      en: 'Online store with cart and payment gateway.',
    },
    image: '/images/projects/p3.png',
    demo: 'https://ecommerce.com',
    code: 'https://github.com/usuario/ecommerce',
  },
  {
    title: 'Portfolio Website2',
    description: {
      es: 'Un portafolio personal con Next.js y SCSS modules.',
      en: 'A personal portfolio built with Next.js and SCSS modules.',
    },
    image: '/images/projects/p1.png',
    demo: 'https://miportafolio.com',
    code: 'https://github.com/usuario/portfolio',
  },
];

export default function ProjectsPage() {
  const { t, language } = useLanguage();

  const projectsLocalized = projects.map((p) => ({
    ...p,
    description: p.description[language],
  }));

  return (
    <section className={styles.projects}>
      <h1 className={styles.projects__title}>{t.projects.title}</h1>
      <p className={styles.projects__subtitle}>{t.projects.subtitle}</p>

      <Carousel projects={projectsLocalized} />
    </section>
  );
}