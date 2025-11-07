'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import styles from '../styles/about.module.scss';
import { Code, Server, Monitor } from 'lucide-react';

interface Experience {
  title: string;
  period: string;
  description: string;
  skills: string[];
}

export default function AboutPage() {
  const { t } = useLanguage();

  const icons = [
    <Code key="code" size={20} />,
    <Monitor key="monitor" size={20} />,
    <Server key="server" size={20} />
  ];

  const experiences = t.about.experience as Experience[];

  return (
    <section className={styles.about}>
      {/* Título principal unificado */}
      <h1 className={styles.sectionTitle}>{t.about.title}</h1>

      <motion.div
        className={styles.about__content}
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className={styles.timeline__item}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
          >
            <h3>
              {icons[i % icons.length]} {exp.title}
            </h3>
            <span>{exp.period}</span>
            <p>{exp.description}</p>
            <div className={styles.timeline__skills}>
              {exp.skills.map((skill, idx) => (
                <span key={idx} className={styles.timeline__skill}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}