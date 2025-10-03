"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { classNames } from '@/src/shared/lib/classNames/classNames';
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
    <section className={classNames(cls.partners, [className])}>
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
                  unoptimized
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

