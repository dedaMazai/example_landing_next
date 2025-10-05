"use client";

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Container } from '@/src/shared/ui/Container';
import { Heading } from '@/src/shared/ui/Typography';
import { Text } from '@/src/shared/ui/Typography';
import { Section } from '@/src/shared/ui/Section';
import { VStack } from '@/src/shared/ui/Stack';
import { useMemo } from 'react';
import cls from './PrivacyPolicyPage.module.scss';

/**
 * PrivacyPolicyPage - страница политики конфиденциальности
 */
export default function PrivacyPolicyPage() {
  const t = useTranslations('privacyPolicy');
  const locale = useLocale();

  const sections = [
    'intro',
    'collection',
    'usage',
    'sharing',
    'security',
    'rights',
    'cookies',
    'children',
    'changes',
    'contact',
  ];

  const currentDate = useMemo(() => {
    return new Date().toLocaleDateString(locale === 'ru' ? 'ru-RU' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }, [locale]);

  return (
    <Section className={cls.privacyPolicy} background="gradient" padding="xl">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <VStack gap="32" className={cls.content}>
            <div className={cls.header}>
              <Heading level={1} size="4xl" color="primary" className={cls.title}>
                {t('title')}
              </Heading>
              
              <Text size="sm" className={cls.lastUpdated} color="muted">
                {t('lastUpdated', { date: currentDate })}
              </Text>
            </div>

            <VStack gap="48" className={cls.sections}>
              {sections.map((section, index) => (
                <motion.div
                  key={section}
                  className={cls.section}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <VStack gap="16">
                    <Heading level={2} size="xl" weight="semibold" color="primary" className={cls.sectionTitle}>
                      {t(`sections.${section}.title`)}
                    </Heading>
                    
                    <Text size="base" color="secondary" className={cls.sectionContent}>
                      {t(`sections.${section}.content`)}
                    </Text>

                    {section === 'contact' && (
                      <VStack gap="8" className={cls.contactInfo}>
                        <Text size="base" weight="medium" color="primary">
                          {t('contactInfo.email')}
                        </Text>
                        <Text size="base" weight="medium" color="primary">
                          {t('contactInfo.phone')}
                        </Text>
                        <Text size="base" weight="medium" color="primary">
                          {t('contactInfo.address')}
                        </Text>
                      </VStack>
                    )}
                  </VStack>
                </motion.div>
              ))}
            </VStack>
          </VStack>
        </motion.div>
      </Container>
    </Section>
  );
}
