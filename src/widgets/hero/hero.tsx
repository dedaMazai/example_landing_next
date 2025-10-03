"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/src/shared/ui/Button';
import { useTranslations } from 'next-intl';
import { Container } from '@/src/shared/ui/Container';
import { Heading } from '@/src/shared/ui/Typography';
import { Text } from '@/src/shared/ui/Typography';
import { Section } from '@/src/shared/ui/Section';
import { HStack } from '@/src/shared/ui/Stack';
import cls from './Hero.module.scss';

/**
 * Hero - главная секция лендинга с основным заголовком и CTA кнопками
 */
export function Hero() {
  const t = useTranslations('hero');

  return (
    <Section id="home" className={cls.hero} background="gradient" padding="none">
      <Container>
          <motion.div
            className={cls.mockup}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className={cls.mockupImageWrapper}>
              <Image
                src="/images/mockups/hero-laptop.png"
                alt={t('mockup.alt')}
                width={1200}
                height={800}
                className={cls.laptopImage}
                priority
              />
              <div className={cls.mockupGradientOverlay} />
            </div>
          </motion.div>
        <div className={cls.heroContent}>
          <motion.div
            className={cls.content}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heading level={1} className={cls.title}>
              {t('title')}
            </Heading>

            <Text size="lg" className={cls.description}>
              {t('description')}
            </Text>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <HStack gap="24" className={cls.actions}>
                <Button
                  as="link"
                  href="#contact"
                  variant="hero-filled"
                  width={340}
                >
                  {t('cta.primary')}
                </Button>

                <Button
                  as="link"
                  href="#services"
                  variant="hero-outline"
                  width={300}
                >
                  {t('cta.secondary')}
                </Button>
              </HStack>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}