'use client';

import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from '../app/styles/navbar.module.scss';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Evita renderizar en SSR
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === 'dark';
  const getIcon = () => (isDark ? '/icons/sun.png' : '/icons/moon.png');

  return (
    <button
      className={styles.themeToggle}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.img
          key={isDark ? 'sun' : 'moon'}
          src={getIcon()}
          alt={isDark ? 'Sun' : 'Moon'}
          width={28}
          height={28}
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          exit={{ rotateY: -90, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </AnimatePresence>
    </button>
  );
}