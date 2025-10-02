"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import cls from './lifecycle.module.scss';
import { classNames } from '@/src/shared/lib/classNames/classNames';

interface LifecycleProps {
  className?: string;
}

/**
 * Lifecycle - секция показывающая жизненный цикл объектов недвижимости
 * @param className - дополнительные CSS классы
 */
export const Lifecycle = ({ className }: LifecycleProps) => {
  const t = useTranslations('lifecycle');

  const features = [
    { key: 'comparison', label: t('features.comparison') },
    { key: 'deals', label: t('features.deals') },
    { key: 'management', label: t('features.management') },
  ];

  return (
    <section className={classNames(cls.lifecycle, [className])}>
      <div className={cls.container}>
        <motion.div
          className={cls.content}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={cls.title}>{t('title')}</h2>
          
          <div className={cls.subtitle}>
            <span className={cls.stageCount}>{t('subtitle')}</span>
          </div>

          <div className={cls.features}>
            {features.map((feature, index) => (
              <motion.div
                key={feature.key}
                className={cls.feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={cls.featureLabel}>{feature.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

