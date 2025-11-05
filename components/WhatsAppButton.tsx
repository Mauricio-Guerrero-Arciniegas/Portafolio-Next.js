'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import styles from '../app/styles/whatsappButton.module.scss';
import { useLanguage } from '@/context/LanguageContext';

export default function WhatsAppButton() {
  const { language } = useLanguage();

  const phoneNumber = '573205285432';
  const message =
    language === 'es'
      ? '¡Hola! 👋 Me gustaría saber más sobre tus servicios.'
      : 'Hello! 👋 I would like to know more about your services.';

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsapp}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className={styles.icon} />
    </motion.a>
  );
}