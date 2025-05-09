"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle } from 'lucide-react';
import styles from './about.module.scss';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

export function About() {
  const t = useTranslations('about');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.subtitle}>{t('subtitle')}</div>
          
          <h2 className={styles.title}>
            {t('title')}
          </h2>
          
          <p className={styles.description}>
            {t('description')}
          </p>
          
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.number}>10+</div>
              <div className={styles.label}>{t('stats.years')}</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.number}>250+</div>
              <div className={styles.label}>{t('stats.projects')}</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.number}>95%</div>
              <div className={styles.label}>{t('stats.satisfaction')}</div>
            </div>
          </div>
          
          <div className={styles.list}>
            <div className={styles.item}>
              <CheckCircle className={styles.icon} size={20} />
              <div className={styles.text}>{t('features.strategic')}</div>
            </div>
            <div className={styles.item}>
              <CheckCircle className={styles.icon} size={20} />
              <div className={styles.text}>{t('features.technology')}</div>
            </div>
            <div className={styles.item}>
              <CheckCircle className={styles.icon} size={20} />
              <div className={styles.text}>{t('features.design')}</div>
            </div>
            <div className={styles.item}>
              <CheckCircle className={styles.icon} size={20} />
              <div className={styles.text}>{t('features.support')}</div>
            </div>
          </div>
          
          <Button size="lg" asChild>
            <Link href="#contact" className={styles.button}>
              {t('cta')}
            </Link>
          </Button>
        </motion.div>
        
        <motion.div 
          className={styles.imageWrapper}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt={t('imageAlt')}
            className={styles.image}
          />
          <div className={styles.accent}></div>
        </motion.div>
      </div>
    </section>
  );
}