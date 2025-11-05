'use client';

import { useLanguage } from '@/context/LanguageContext';
import Carousel from '@/components/Carrousel';
import styles from '../styles/projects.module.scss';

const projects = [
  {
    title: 'Portfolio Website',
    description: {
      es: 'Un portafolio personal con Next.js y SCSS modules.',
      en: 'A personal portfolio built with Next.js and SCSS modules.',
    },
    image: '/images/project1.jpg',
    demo: 'https://miportafolio.com',
    code: 'https://github.com/usuario/portfolio',
  },
  {
    title: 'Weather App',
    description: {
      es: 'Aplicación del clima usando API de OpenWeather.',
      en: 'Weather app using OpenWeather API.',
    },
    image: '/images/project2.jpg',
    demo: 'https://weatherapp.com',
    code: 'https://github.com/usuario/weatherapp',
  },
  {
    title: 'Ecommerce Store',
    description: {
      es: 'Tienda online con carrito y pasarela de pagos.',
      en: 'Online store with cart and payment gateway.',
    },
    image: '/images/project3.jpg',
    demo: 'https://ecommerce.com',
    code: 'https://github.com/usuario/ecommerce',
  },
  {
    title: 'Task Manager',
    description: {
      es: 'App de gestión de tareas con autenticación.',
      en: 'Task management app with authentication.',
    },
    image: '/images/project4.jpg',
    demo: 'https://taskmanager.com',
    code: 'https://github.com/usuario/taskmanager',
  },
  {
    title: 'Blog Platform',
    description: {
      es: 'Plataforma de blog con panel de administración.',
      en: 'Blog platform with admin panel.',
    },
    image: '/images/project5.jpg',
    demo: 'https://blogplatform.com',
    code: 'https://github.com/usuario/blogplatform',
  },
  {
    title: 'Chat App',
    description: {
      es: 'Aplicación de chat en tiempo real con Socket.io.',
      en: 'Real-time chat app using Socket.io.',
    },
    image: '/images/project6.jpg',
    demo: 'https://chatapp.com',
    code: 'https://github.com/usuario/chatapp',
  },
];

export default function ProjectsPage() {
  const { t, language } = useLanguage();

  return (
    <section className={styles.projects}>
      <h1 className={styles.projects__title}>{t.projects.title}</h1>
      <p className={styles.projects__subtitle}>{t.projects.subtitle}</p>
      <Carousel
        projects={projects.map((p) => ({
          ...p,
          description: p.description[language],
        }))}
      />
    </section>
  );
}