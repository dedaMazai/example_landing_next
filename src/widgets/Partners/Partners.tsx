"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { classNames } from '@/src/shared/lib/classNames/classNames';
import { Heading } from '@/src/shared/ui/Typography';
import { Section } from '@/src/shared/ui/Section';
import { Container } from '@/src/shared/ui/Container';
import Image from 'next/image';
import cls from './Partners.module.scss';

interface PartnersProps {
  className?: string;
}

interface Partner {
  name: string;
  logoPath: string;
}

/**
 * Partners - секция партнеров компании
 * @param className - дополнительные CSS классы
 */
export const Partners = ({ className }: PartnersProps) => {
  const t = useTranslations('partners');

  const partners: Partner[] = [
    { name: 'PIONEER', logoPath: '/images/partners/PIONEER.png' },
    { name: 'MERED', logoPath: '/images/partners/MERED.png' },
  ];

  return (
    <Section
      id="partners"
      className={classNames(cls.partners, [className])}
      background="dark"
      padding="lg"
    >
      <Container maxWidth="xxxl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Heading level={2} size="2xl" align="center" color="white" className={cls.title}>
            {t('title')}
          </Heading>
        </motion.div>

        <div className={cls.partnersList}>
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className={cls.partnerCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={cls.logoWrapper}>
                <Image
                  src={partner.logoPath}
                  alt={partner.name}
                  fill
                  className={cls.partnerLogo}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

