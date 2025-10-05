"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { classNames } from '@/src/shared/lib/classNames/classNames';
import { Heading, Text } from '@/src/shared/ui/Typography';
import { Section } from '@/src/shared/ui/Section';
import { Container } from '@/src/shared/ui/Container';
import cls from './MobileApp.module.scss';

interface MobileAppProps {
  className?: string;
}

/**
 * MobileApp - секция мобильного приложения для собственников недвижимости
 * @param className - дополнительные CSS классы
 */
export const MobileApp = ({ className }: MobileAppProps) => {
  const t = useTranslations('mobileApp');

  return (
    <Section
      id="mobileApp"
      className={classNames([className])}
      background="dark"
      padding="lg"
    >
      <Container maxWidth="xxxl" className={cls.mobileApp}>
        <div className={cls.content}>
          <motion.div
            className={cls.backgroundImageContainer}
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Image
              src="/images/backgrounds/3D-Lines-second.png"
              alt={t('mockup.alt')}
              width={2820}
              height={870}
              className={cls.backgroundImage}
              // priority
            />
          </motion.div>

          <motion.div
            className={cls.mockup}
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/mockups/mobile-app.png"
              alt={t('mockup.alt')}
              width={320}
              height={640}
              className={cls.phoneImage}
            />
          </motion.div>

          <motion.div
            className={cls.textContent}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Heading level={2} color="white" className={cls.title}>
              {t('title')}
            </Heading>
            <Text size="xl" color="white" className={cls.description}>
              {t('description')}
            </Text>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

