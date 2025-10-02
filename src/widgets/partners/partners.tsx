"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import cls from './partners.module.scss';
import { classNames } from '@/src/shared/lib/classNames/classNames';

interface PartnersProps {
  className?: string;
}

/**
 * Partners - секция партнеров компании
 * @param className - дополнительные CSS классы
 */
export const Partners = ({ className }: PartnersProps) => {
  const t = useTranslations('partners');

  const partners = [
    { name: 'PIONEER', logo: 'PIONEER' },
    { name: 'MERED', logo: 'MERED' },
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
              <div className={cls.partnerLogo}>
                <span className={cls.logoText}>{partner.logo}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

