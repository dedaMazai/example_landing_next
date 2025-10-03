"use client";

import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, ReactNode } from 'react';
import Image from 'next/image';
import { classNames } from '@/src/shared/lib/classNames/classNames';
import { Button } from '@/src/shared/ui/Button2';
import { FeatureIcon } from '@/src/shared/ui/FeatureIcon';
import cls from './Management.module.scss';

interface ManagementProps {
  className?: string;
}

interface FeatureButton {
  key: string;
  variant?: 'outline' | 'filled';
  color?: 'normal' | 'secondary';
  icon: ReactNode;
  imageName: string;
}

/**
 * Management - секция управления через единую платформу
 * @param className - дополнительные CSS классы
 */
export const Management = ({ className }: ManagementProps) => {
  const t = useTranslations('management');
  const [activeIndex, setActiveIndex] = useState(0);

  const features: FeatureButton[] = [
    { key: 'documents', variant: 'outline', color: 'normal', icon: <FeatureIcon type="documents" />, imageName: 'documents' },
    { key: 'analytics', variant: 'outline', color: 'secondary', icon: <FeatureIcon type="analytics" />, imageName: 'dashboard' },
    { key: 'monitoring', variant: 'outline', color: 'normal', icon: <FeatureIcon type="monitoring" />, imageName: 'list-object' },
    { key: 'incidents', variant: 'outline', color: 'secondary', icon: <FeatureIcon type="incidents" />, imageName: 'remark' },
    { key: 'cheaklist', variant: 'outline', color: 'normal', icon: <FeatureIcon type="reports" />, imageName: 'cheaklist' },
    { key: 'tasks', variant: 'outline', color: 'secondary', icon: <FeatureIcon type="tasks" />, imageName: 'internal-acceptance' },
    { key: 'residents', variant: 'outline', color: 'normal', icon: <FeatureIcon type="residents" />, imageName: 'profile' },
    { key: 'budget', variant: 'outline', color: 'secondary', icon: <FeatureIcon type="budget" />, imageName: 'client-acceptance' },
    { key: 'storage', variant: 'outline', color: 'normal', icon: <FeatureIcon type="storage" />, imageName: 'object-info' },
    { key: 'calendar', variant: 'outline', color: 'secondary', icon: <FeatureIcon type="calendar" />, imageName: 'chess-layout' },
    { key: 'alerts', variant: 'outline', color: 'normal', icon: <FeatureIcon type="alerts" />, imageName: 'internal-acceptance' },
    { key: 'integration', variant: 'outline', color: 'secondary', icon: <FeatureIcon type="integration" />, imageName: 'client-profile' },
  ];

  const handleFeatureClick = (index: number) => {
    if (index === activeIndex) {
      return;
    }
    setActiveIndex(index);
  };

  return (
    <section id="about" className={classNames(cls.management, [className])}>
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

        <div className={cls.imageCarousel}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeIndex}
              className={cls.imageWrapper}
            >
              {/* Фоновое размытое изображение - медленная анимация с увеличением */}
              <motion.div
                className={cls.backgroundImageLayer}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ 
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                <Image
                  src={`/images/interfaces/${features[activeIndex].imageName}.png`}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={cls.backgroundImageContent}
                  unoptimized
                />
              </motion.div>

              {/* Основное четкое изображение - быстрая анимация с легким zoom */}
              <motion.div
                className={cls.foregroundImageLayer}
                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.04, y: -15 }}
                transition={{ 
                  duration: 0.35,
                  ease: [0.4, 0, 0.2, 1],
                  delay: 0.05
                }}
              >
                <Image
                  src={`/images/interfaces/${features[activeIndex].imageName}.png`}
                  alt={t(`features.${features[activeIndex].key}`)}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={cls.foregroundImageContent}
                  priority
                  unoptimized
                />
                <div className={cls.foregroundOverlay} />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className={cls.features}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Button
                variant={index === activeIndex ? 'filled' : feature.variant}
                color={index === activeIndex ? 'normal' : feature.color}
                onClick={() => handleFeatureClick(index)}
                className={cls.featureButton}
                prevIcon={feature.icon}
              >
                {t(`features.${feature.key}`)}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

