"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './hero.module.scss';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

export function Hero() {
  const t = useTranslations('hero');
  
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className={styles.preTitle}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('preTitle')}
          </motion.div>
          
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t('title')}
          </motion.h1>
          
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('description')}
          </motion.p>
          
          <motion.div 
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button size="lg" asChild>
              <Link href="#contact" className={styles.primaryButton}>
                {t('cta.primary')}
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" asChild>
              <Link href="#services" className={styles.secondaryButton}>
                {t('cta.secondary')} <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      <div className={styles.background}></div>
      <div className={styles.decorOne}></div>
      <div className={styles.decorTwo}></div>
    </section>
  );
}