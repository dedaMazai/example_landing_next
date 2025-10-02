"use client";

import Link from 'next/link';
import cls from './footer.module.scss';
import { useTranslations } from 'next-intl';
import LogoBig from '@/src/shared/assets/icons/LogoBig.svg';
import { Icon } from '@/src/shared/ui/Icon';

export function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cls.footer}>
      <div className={cls.container}>
        <div className={cls.mainContent}>
          <div className={cls.brandSection}>
            <div className={cls.logo}>
              <Icon Svg={LogoBig} height={32} width={200} color='#EFEDE7' />
            </div>
            <p className={cls.brandTitle}>PIONEER DIGITAL PLATFORM</p>
          </div>
          
          <div className={cls.infoSection}>
            <div className={cls.infoItem}>
              <div className={cls.label}>Контакты e-mail</div>
              <a href="mailto:info@pioneerwork.com" className={cls.value}>info@pioneerwork.com</a>
            </div>
            <div className={cls.infoItem}>
              <div className={cls.label}>Контакты</div>
              <a href="tel:+79999999999" className={cls.value}>+7 (999) 999-99-99</a>
            </div>
            <div className={cls.infoItem}>
              <div className={cls.label}>Адрес</div>
              <div className={cls.value}>Москва</div>
            </div>
          </div>
        </div>

        <div className={cls.bottom}>
          <div className={cls.copyright}>
            {t('copyright', { year: currentYear })}
          </div>
          <div className={cls.legal}>
            <Link href="/privacy_policy">{t('links.privacy')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}