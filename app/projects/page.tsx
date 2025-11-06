'use client';

import { useLanguage } from '@/context/LanguageContext';
import Carousel from '../../components/Carrousel';
import styles from '../styles/projects.module.scss';

const projects = [
  {
    title: 'Transacciones Bancarias',
    description: {
      es: 'Es una simulacion de Transacciones Bancarias, Aplicacion Fullstack que permite el registro de usuarios con contraseña y numero de cuenta, Encriptacion (bcrypt hash 32) y transferencia de dinero entre ellos actualizacion en base de datos de saldos disponibles, resumen de transacciones recientes, ambiente frontend para visualizar los datos y notificaciones para validaciones. (para demo requiere backend corriendo).',
      en: 'A personal portfolio built with Next.js and SCSS modules.',
    },
    
    image: '/images/projects/p3.png',
    demo: 'https://aplicacion-bancaria-frontend.vercel.app/register',
    code: 'https://github.com/Mauricio-Guerrero-Arciniegas/aplicacion-bancaria',
    technologies: ['React.js', 'Node.js', 'Typescript', 'Express', 'Nest', 'NeonDB', 'Postman', 'bcrypt', 'JWT', 'SCSS']
  },
  {
    title: 'Tienda de Variedades',
    description: {
      es: 'Aplicacion real de comercio online, Renderizado condicional, Context, alojamiento de imagenes en servidor gratuito, metodo de pagos generando formulario para datos del cliente y carga de imagenes para comprobante, comunicacion via mensaje autogenerado Whatsapp. ',
      en: 'Weather app using OpenWeather API.',
    },
    image: '/images/projects/p1.png',
    demo: 'https://variedades-e-commerce.vercel.app/',
    code: 'https://github.com/Mauricio-Guerrero-Arciniegas/Variedades-e-commerce',
    technologies: ['React.js', 'Next.js', 'typescript', 'Node.js', 'SCSS']
  },
  {
    title: 'Juego de ataques',
    description: {
      es: 'Simulacion Fullstack de una partida de juego con creacion de usuarios, almacenamiento de nivel de vida y ataque, interaccion y resultados. (demo requiere backend corriendo)',
      en: 'Online store with cart and payment gateway.',
    },
    image: '/images/projects/p2.png',
    demo: 'https://games-frontend-xi.vercel.app/',
    code: 'https://github.com/Mauricio-Guerrero-Arciniegas/games-backend',
    technologies: ['React.js', 'Next.js', 'typescript', 'Node.js', 'SCSS']
  },
  {
    title: 'Portfolio',
    description: {
      es: 'Un portafolio personal sin scroll usando animaciones, glassmorfismo, responsive, cambio de idioma LanguageContext, Modo claro y oscuro, mensajes autogenerados por Whatsapp, Carrousel de proyectos.',
      en: 'A personal portfolio built with Next.js and SCSS modules.',
    },
    image: '/images/projects/p4.png',
    demo: 'https://portafolio-next-js-lemon.vercel.app/',
    code: 'https://github.com/Mauricio-Guerrero-Arciniegas/Portafolio-Next.js',
    technologies: ['React.js', 'Next.js', 'typescript', 'Node.js', 'Framer Motion', 'Lucide React', 'SCSS','UseState', 'UseEffect', 'UseContext', 'LanguageContext' ]
  },
  {
    title: 'Game Awards',
    description: {
      es: 'Copia exacta de la pantalla inicial de Game Awards 2022 con el fin de aplicar y practicar conocimientos avanzados de Layout CSS',
      en: 'A personal portfolio built with Next.js and SCSS modules.',
    },
    image: '/images/projects/p5.png',
    demo: 'https://the-game-awards.netlify.app/',
    code: 'https://github.com/Mauricio-Guerrero-Arciniegas/The_Game_Awards',
    technologies: ['React.js', 'Vite', 'Javascript', 'Framer Motion', 'Lucide React', 'SCSS', 'BEM', 'SASS', 'CSS-preprocesor' ]
  },
  {
    title: 'Tinder',
    description: {
      es: 'Copia exacta de la pantalla inicial de Tinder con el fin de aplicar y practicar conocimientos avanzados de Layout CSS',
      en: 'A personal portfolio built with Next.js and SCSS modules.',
    },
    image: '/images/projects/p6.png',
    demo: 'https://tinder-copy.netlify.app/',
    code: 'https://github.com/Mauricio-Guerrero-Arciniegas/Tinder-clone',
    technologies: ['React.js', 'Vite', 'Javascript', 'Framer Motion', 'Lucide React', 'SCSS', 'BEM', 'SASS', 'CSS-preprocesor' ]
  },
  {
    title: 'Avatar The way of Water',
    description: {
      es: 'Copia exacta de la pantalla inicial de Avatar - The Way of Water con el fin de aplicar y practicar conocimientos avanzados de Layout CSS',
      en: 'A personal portfolio built with Next.js and SCSS modules.',
    },
    image: '/images/projects/p7.png',
    demo: 'https://avatar-the-way-of-water.netlify.app/',
    code: 'https://github.com/Mauricio-Guerrero-Arciniegas/Avatar-The-way-of-Water',
    technologies: ['React.js', 'Vite', 'Javascript', 'Framer Motion', 'Lucide React', 'SCSS', 'BEM', 'SASS', 'CSS-preprocesor']
  },
  {
    title: 'Weather Assistant',
    description: {
      es: 'Aplicacion para obtener datos del clima conectada a la API de Open Weather',
      en: 'A personal portfolio built with Next.js and SCSS modules.',
    },
    image: '/images/projects/p7.png',
    demo: 'https://avatar-the-way-of-water.netlify.app/',
    code: 'https://github.com/Mauricio-Guerrero-Arciniegas/Portafolio-Next.js',
    technologies: ['React.js', 'Vite', 'Javascript', 'Framer Motion', 'Lucide React', 'SCSS', 'BEM', 'SASS', 'CSS-preprocesor']
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