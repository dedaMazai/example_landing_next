"use client";

import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, ReactNode } from 'react';
import Image from 'next/image';
import { classNames } from '@/src/shared/lib/classNames/classNames';
import { Button } from '@/src/shared/ui/Button';
import { FeatureIcon } from '@/src/shared/ui/FeatureIcon';
import { Heading } from '@/src/shared/ui/Typography';
import { Section } from '@/src/shared/ui/Section';
import { Container } from '@/src/shared/ui/Container';
import cls from './Management.module.scss';

interface ManagementProps {
  className?: string;
}

interface FeatureButton {
  key: string;
  variant?: 'outline' | 'filled' | 'clear';
  color?: 'normal' | 'secondary';
  icon: ReactNode;
  imageName: string;
}

// Массив функций вынесен за пределы компонента для избежания пересоздания
const features: FeatureButton[] = [
  { key: 'documents', variant: 'clear', color: 'normal', icon: <FeatureIcon type="documents" />, imageName: 'documents' },
  { key: 'analytics', variant: 'clear', color: 'secondary', icon: <FeatureIcon type="analytics" />, imageName: 'dashboard' },
  { key: 'monitoring', variant: 'clear', color: 'normal', icon: <FeatureIcon type="monitoring" />, imageName: 'list-object' },
  { key: 'incidents', variant: 'clear', color: 'secondary', icon: <FeatureIcon type="incidents" />, imageName: 'remark' },
  { key: 'cheaklist', variant: 'clear', color: 'normal', icon: <FeatureIcon type="reports" />, imageName: 'cheaklist' },
  { key: 'tasks', variant: 'clear', color: 'secondary', icon: <FeatureIcon type="tasks" />, imageName: 'internal-acceptance' },
  { key: 'residents', variant: 'clear', color: 'normal', icon: <FeatureIcon type="residents" />, imageName: 'profile' },
  { key: 'budget', variant: 'clear', color: 'secondary', icon: <FeatureIcon type="budget" />, imageName: 'client-acceptance' },
  { key: 'storage', variant: 'clear', color: 'normal', icon: <FeatureIcon type="storage" />, imageName: 'object-info' },
  { key: 'calendar', variant: 'clear', color: 'secondary', icon: <FeatureIcon type="calendar" />, imageName: 'chess-layout' },
  { key: 'alerts', variant: 'clear', color: 'normal', icon: <FeatureIcon type="alerts" />, imageName: 'internal-acceptance' },
  { key: 'integration', variant: 'clear', color: 'secondary', icon: <FeatureIcon type="integration" />, imageName: 'client-profile' },
];

/**
 * Management - секция управления через единую платформу
 * @param className - дополнительные CSS классы
 */
export const Management = ({ className }: ManagementProps) => {
  const t = useTranslations('management');
  const [activeIndex, setActiveIndex] = useState(0);

  const handleFeatureClick = (index: number) => {
    if (index === activeIndex) {
      return;
    }
    setActiveIndex(index);
  };

  return (
    <Section
      id="management"
      className={classNames(cls.management, [className])}
      background="dark"
      padding="lg"
    >
      {/* Предзагрузка всех изображений */}
      <div style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {features.map((feature, index) => (
          <Image
            key={feature.imageName}
            src={`/images/interfaces/${feature.imageName}.png`}
            alt=""
            width={800}
            height={600}
            priority={index === 0}
          />
        ))}
      </div>
      <Container maxWidth="xxxl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Heading level={2} align="center" color="primary" className={cls.title}>
            {t('title')}
          </Heading>
        </motion.div>

        <div className={cls.imageCarousel}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeIndex}
              className={cls.imageWrapper}
            >
              {/* Фоновое размытое изображение - медленная анимация с увеличением */}
              <motion.div
                className={cls.backgroundImageLayer}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1],
                  delay: 0.05
                }}
              >
                <Image
                  src={`/images/interfaces/${features[activeIndex].imageName}.png`}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={cls.backgroundImageContent}
                />
              </motion.div>

              {/* Основное четкое изображение - быстрая анимация с легким zoom */}
              <motion.div
                className={cls.foregroundImageLayer}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                <Image
                  src={`/images/interfaces/${features[activeIndex].imageName}.png`}
                  alt={t(`features.${features[activeIndex].key}`)}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={cls.foregroundImageContent}
                  // priority
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
              className={cls.featureButtonWrapper}
            >
              <Button
                variant={index === activeIndex ? 'filled' : feature.variant}
                color={index === activeIndex ? 'normal' : feature.color}
                onClick={() => handleFeatureClick(index)}
                className={cls.featureButton}
                prevIcon={feature.icon}
                size="xl"
              >
                {t(`features.${feature.key}`)}
              </Button>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

