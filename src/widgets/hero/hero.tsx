"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import cls from './hero.module.scss';
import { Button } from '@/src/shared/ui/button';
import { useTranslations } from 'next-intl';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section id="home" className={cls.hero}>
      <div className={cls.container}>
        <div className={cls.heroContent}>
          <motion.div 
            className={cls.content}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className={cls.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {t('title')}
            </motion.h1>
            
            <motion.p 
              className={cls.description}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('description')}
            </motion.p>
            
            <motion.div 
              className={cls.actions}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button 
                size="l"
                variant="filled"
                color="normal"
              >
                <Link href="#contact" className={cls.primaryButton}>
                  {t('cta.primary')}
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="l"
                color="normal"
              >
                <Link href="#services" className={cls.secondaryButton}>
                  {t('cta.secondary')}
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className={cls.mockup}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className={cls.laptopMockup}>
              <div className={cls.laptopScreen}>
                <div className={cls.screenContent}>
                  <div className={cls.mockupWindow}>
                    <div className={cls.windowHeader}>
                      <div className={cls.windowDots}>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                    <div className={cls.windowContent}>
                      <div className={cls.contentGrid}>
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className={cls.gridCard}>
                            <div className={cls.cardImage}></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cls.laptopBase}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}