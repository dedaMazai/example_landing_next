"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './cta.module.scss';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

export function CTA() {
  const t = useTranslations('cta');

  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>
            {t('title')}
          </h2>
          
          <p className={styles.description}>
            {t('description')}
          </p>
          
          <div className={styles.actions}>
            <Button size="lg" className={styles.primaryButton} asChild>
              <Link href="#contact">
                {t('primary')}
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" className={styles.secondaryButton} asChild>
              <Link href="#services">
                {t('secondary')}
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
      
      <div className={styles.shape1}></div>
      <div className={styles.shape2}></div>
    </section>
  );
}