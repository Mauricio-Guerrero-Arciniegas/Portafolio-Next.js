'use client';

import { useState } from "react";
import styles from "../app/styles/projects.module.scss";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  demo: string;
  code: string;
  technologies?: string[]; // ✅ agregado
}

interface CarouselProps {
  projects: Project[];
}

export default function Carousel({ projects }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const project = projects[current];

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselMain}>
        <button onClick={prevSlide} className={styles.arrow}>{"<"}</button>

        <div className={styles.carouselContent}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={styles.slide}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className={styles.image}
              />

              <div className={styles.projectInfo}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>


                <div className={styles.buttons}>
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <ExternalLink size={18} /> Demo
                  </a>
                  <a href={project.code} target="_blank" rel="noreferrer">
                    <Github size={18} /> Código
                  </a>
                </div>
                {project.technologies && (
                  <div className={styles.techList}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button onClick={nextSlide} className={styles.arrow}>{">"}</button>
      </div>

      <div className={styles.indicators}>
        {projects.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === current ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}