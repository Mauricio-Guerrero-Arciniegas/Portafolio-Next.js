import styles from '../styles/projects.module.scss';

export default function ProjectsPage() {
  return (
    <section className={styles.projects}>
      <h1 className={styles.projects__title}>Proyectos</h1>
      <p className={styles.projects__text}>Listado de mis trabajos y proyectos destacados.</p>
    </section>
  );
}