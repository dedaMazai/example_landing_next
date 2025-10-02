"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import cls from './mobile-app.module.scss';
import { classNames } from '@/src/shared/lib/classNames/classNames';

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
    <section className={classNames(cls.mobileApp, [className])}>
      <div className={cls.container}>
        <div className={cls.content}>
          <motion.div
            className={cls.mockup}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={cls.phoneMockup}>
              <div className={cls.phoneFrame}>
                <div className={cls.phoneNotch}></div>
                <div className={cls.phoneScreen}>
                  <div className={cls.screenContent}>
                    <div className={cls.appHeader}>
                      <div className={cls.headerBar}></div>
                    </div>
                    <div className={cls.appContent}>
                      <div className={cls.contentPlaceholder}>
                        <div className={cls.placeholderItem}></div>
                        <div className={cls.placeholderItem}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={cls.textContent}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className={cls.title}>{t('title')}</h2>
            <p className={cls.description}>{t('description')}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

