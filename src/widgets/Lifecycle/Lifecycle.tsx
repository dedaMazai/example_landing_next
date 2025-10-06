"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { classNames } from '@/src/shared/lib/classNames/classNames';
import { Heading, Text } from '@/src/shared/ui/Typography';
import { Section } from '@/src/shared/ui/Section';
import { Container } from '@/src/shared/ui/Container';
import { Button } from '@/src/shared/ui/Button';
import Image from 'next/image';
import cls from './Lifecycle.module.scss';

interface LifecycleProps {
  className?: string;
}

const features = [
  {
    key: 'comparison',
    label: 'features.comparison',
    image: 'lifecycle-bg-1'
  },
  {
    key: 'deals',
    label: 'features.deals',
    image: 'lifecycle-bg-2'
  },
  {
    key: 'management',
    label: 'features.management',
    image: 'lifecycle-bg-3'
  },
] as const;

/**
 * Lifecycle - секция показывающая жизненный цикл объектов недвижимости
 * @param className - дополнительные CSS классы
 */
export const Lifecycle = ({ className }: LifecycleProps) => {
  const t = useTranslations('lifecycle');
  const [activeFeature, setActiveFeature] = useState(0);

  const handleFeatureClick = (index: number) => {
    setActiveFeature(index);
  };

  return (
    <Section
      id="lifecycle"
      className={classNames(cls.lifecycle, [className])}
      background="dark"
      padding="none"
    >

      {/* Предзагрузка всех изображений */}
      <div style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {features.map((feature, index) => (
          <Image
            key={feature.image}
            src={`/images/backgrounds/${feature.image}.png`}
            alt=""
            width={800}
            height={600}
            priority={index === 0}
          />
        ))}
      </div>
      {/* Анимированный фоновый слой с изображениями */}
      <div className={cls.imageContainer}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFeature}
            className={cls.backgroundImage}
            style={{ 
              backgroundImage: `url(/images/backgrounds/${features[activeFeature].image}.png)`
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        </AnimatePresence>
      </div>
      <Container maxWidth="xxxl" className={cls.container}>
        <motion.div
          className={cls.content}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Heading level={2} size="4xl" align="center" color="primary" className={cls.title}>
            {t('title')}
          </Heading>

          {/* Горизонтальная линия с этапами и индикатором */}
          <div className={cls.stagesLine}>
            <Text size="lg" color="primary" className={cls.startLabel}>
              {t('stagesLine.start')}
            </Text>
            
            <div className={cls.lineContainer}>
              <div className={cls.line} />
              <motion.div 
                className={cls.indicator}
                animate={{
                  left: `calc(63px + (100% - 250px) * ${activeFeature / (features.length - 1)})`,
                }}
                transition={{ type: "tween", duration: 0.4 }}
              />
            </div>
            
            <Text size="lg" color="primary" className={cls.endLabel}>
              {t('stagesLine.end')}
            </Text>
          </div>

          {/* Обычные кнопки-карточки features */}
          <div className={cls.features}>
            {features.map((feature, index) => (
              <Button
                key={feature.key}
                // className={classNames(cls.feature, [], {
                //   [cls.active]: activeFeature === index,
                // })}
                variant="clear"
                color={activeFeature === index ? 'normal' : 'secondary'}
                size="l"
                onClick={() => handleFeatureClick(index)}
              >
                {t(feature.label)}
              </Button>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

