"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { classNames } from '@/src/shared/lib/classNames/classNames';
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
    <section className={classNames(cls.ecosystem, [className])}>
      <div className={cls.container}>
        <div className={cls.content}>
          <motion.div
            className={cls.textContent}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={cls.title}>{t('title')}</h2>
            <p className={cls.description}>{t('description')}</p>
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
              width={1200}
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
              width={1200}
              height={800}
              className={cls.backgroundImage}
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

