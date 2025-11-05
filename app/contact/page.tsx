'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import styles from '../styles/contact.module.scss';
import { Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = '573205285432'; 
    const text = `👋 Hola, soy ${formData.name}.
📝 ${formData.message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section className={styles.contact}>
      <motion.h1
        className={styles.contact__title}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t.contact?.title || 'Contáctame'}
      </motion.h1>

      <motion.div
        className={styles.contact__content}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className={styles.contact__info}>
          <div><Phone size={18} /> <span>+57 3205285432</span></div>
          <div><MapPin size={18} /> <span>Pasto, Colombia</span></div>
        </div>

        <form className={styles.contact__form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder={t.contact?.name || 'Tu nombre'}
            value={formData.name}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder={t.contact?.message || 'Tu mensaje'}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className={styles.contact__button}>
            <Send size={18} /> {t.contact?.send || 'Enviar por WhatsApp'}
          </button>
        </form>
      </motion.div>
    </section>
  );
}