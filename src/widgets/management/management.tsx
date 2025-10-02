"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import cls from './management.module.scss';
import { classNames } from '@/src/shared/lib/classNames/classNames';

interface ManagementProps {
  className?: string;
}

/**
 * Management - секция управления через единую платформу
 * @param className - дополнительные CSS классы
 */
export const Management = ({ className }: ManagementProps) => {
  const t = useTranslations('management');

  const features = [
    'storage',
    'analytics',
    'monitoring',
    'incidents',
    'budget',
    'residents',
    'tasks',
    'documents',
    'reports',
    'alerts',
    'calendar',
    'integration',
  ];

  return (
    <section className={classNames(cls.management, [className])}>
      <div className={cls.container}>
        <motion.h2
          className={cls.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('title')}
        </motion.h2>

        <div className={cls.mockup}>
          <motion.div
            className={cls.mockupImage}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={cls.platformPreview}>
              <div className={cls.previewHeader}>
                <div className={cls.previewDots}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className={cls.previewContent}>
                <div className={cls.previewText}>Платформа управления</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className={cls.features}>
          {features.map((feature, index) => (
            <motion.div
              key={feature}
              className={cls.feature}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className={cls.featureIcon}>
                <div className={cls.iconDot}></div>
              </div>
              <span className={cls.featureLabel}>{t(`features.${feature}`)}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

