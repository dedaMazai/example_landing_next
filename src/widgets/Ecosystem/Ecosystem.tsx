"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { classNames } from '@/src/shared/lib/classNames/classNames';
import { Heading, Text } from '@/src/shared/ui/Typography';
import { Section } from '@/src/shared/ui/Section';
import { Container } from '@/src/shared/ui/Container';
import cls from './Ecosystem.module.scss';

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
    <Section
      id="ecosystem"
      className={classNames(cls.ecosystem, [className])}
      background="white"
      padding="none"
    >
      <Container maxWidth="xxxl">
        <div className={cls.content}>
          <motion.div
            className={cls.textContent}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Heading level={2} color="black" className={cls.title}>
              {t('title')}
            </Heading>
            <Text size="xl" color="black" className={cls.description}>
              {t('description')}
            </Text>
          </motion.div>

          <motion.div
            className={cls.mockup}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/images/mockups/ecosystem-laptop.png"
              alt={t('mockup.alt')}
              width={1600}
              height={800}
              className={cls.laptopImage}
            />
          </motion.div>

          <motion.div
            className={cls.backgroundImageContainer}
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Image
              src="/images/backgrounds/3D-Lines.png"
              alt={t('mockup.alt')}
              width={2800}
              height={230}
              className={cls.backgroundImage}
              priority
            />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

