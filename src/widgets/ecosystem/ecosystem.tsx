"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import cls from './ecosystem.module.scss';
import { classNames } from '@/src/shared/lib/classNames/classNames';

interface EcosystemProps {
  className?: string;
}

/**
 * Ecosystem - секция профессиональной экосистемы работы с недвижимостью
 * @param className - дополнительные CSS классы
 */
export const Ecosystem = ({ className }: EcosystemProps) => {
  const t = useTranslations('ecosystem');

  return (
    <section className={classNames(cls.ecosystem, [className])}>
      <div className={cls.container}>
        <div className={cls.content}>
          <motion.div
            className={cls.textContent}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={cls.title}>{t('title')}</h2>
            <p className={cls.description}>{t('description')}</p>
          </motion.div>

          <motion.div
            className={cls.mockup}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={cls.mockupImage}>
              <div className={cls.mockupScreen}>
                <div className={cls.screenHeader}>
                  <div className={cls.screenDots}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className={cls.screenContent}>
                  <div className={cls.contentGrid}>
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className={cls.gridItem}>
                        <div className={cls.itemPlaceholder}></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

