import styles from '../styles/contact.module.scss';

export default function ContactPage() {
  return (
    <section className={styles.contact}>
      <h1 className={styles.contact__title}>Contacto</h1>
      <p className={styles.contact__text}>Formulario o datos de contacto aquí.</p>
    </section>
  );
}