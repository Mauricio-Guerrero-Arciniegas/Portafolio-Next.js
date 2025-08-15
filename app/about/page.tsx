import styles from '../styles/about.module.scss';

export default function AboutPage() {
  return (
    <section className={styles.about}>
      <h1 className={styles.about__title}>Acerca de mí</h1>
      <p className={styles.about__text}>Aquí irá mi historia y experiencia.</p>
    </section>
  );
}