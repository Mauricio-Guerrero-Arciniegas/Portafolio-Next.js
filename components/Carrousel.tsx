"use client";

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

  return (
    <div className={styles.carousel}>
      {/* Flechas a los lados */}
      <div className={styles.carouselMain}>
        <button onClick={prevSlide} className={styles.arrow}>
          {"<"}
        </button>

        <div className={styles.carouselContent}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
              transition={{ duration: 0.4 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.7}
              onDragEnd={(_, info) => {
                if (info.offset.x < -50) {
                  nextSlide();
                } else if (info.offset.x > 50) {
                  prevSlide();
                }
              }}
              className={styles.slide}
            >
              <Image
                src={projects[current].image}
                alt={projects[current].title}
                width={600}
                height={400}
                className={styles.image}
              />
              <h2>{projects[current].title}</h2>
              <p>{projects[current].description}</p>
              <div className={styles.buttons}>
                <a href={projects[current].demo} target="_blank">
                  <ExternalLink size={18} /> Demo
                </a>
                <a href={projects[current].code} target="_blank">
                  <Github size={18} /> Código
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button onClick={nextSlide} className={styles.arrow}>
          {">"}
        </button>
      </div>

      {/* Puntos de navegación debajo */}
      <div className={styles.indicators}>
        {projects.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${
              index === current ? styles.active : ""
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}