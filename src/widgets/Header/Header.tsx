"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { Button } from '@/src/shared/ui/Button';
import { Icon } from '@/src/shared/ui/Icon';
import LogoBig from '@/src/shared/assets/icons/LogoBig.svg';
import { classNames } from '@/src/shared/lib/classNames/classNames';
import { HStack } from '@/src/shared/ui/Stack';
import cls from './Header.module.scss';

/**
 * Header - шапка сайта с навигацией и переключателем языка
 */
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const switchLocale = () => {
    const newLocale = locale === 'en' ? 'ru' : 'en';
    const newPath = pathname ? pathname.replace(`/${locale}`, `/${newLocale}`) : '/';
    window.location.href = newPath;
  };

  return (
    <header className={classNames(cls.header, { [cls.scrolled]: isScrolled })} id="header">
      <div className={cls.container}>
        <Link href="/" className={cls.logo}>
          <Icon Svg={LogoBig} height={28} width={104} color='#EFEDE7' />
        </Link>

        <button
          className={classNames(cls.menuButton, { [cls.active]: mobileMenuOpen })}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className={cls.menuIcon}>
            <span className={cls.menuLine}></span>
            <span className={cls.menuLine}></span>
            <span className={cls.menuLine}></span>
          </span>
        </button>

        <nav className={classNames(cls.nav, { [cls.mobileOpen]: mobileMenuOpen })}>
          <ul className={cls.navList}>
            <li className={cls.navItem}>
              <Link href="/#home" onClick={mobileMenuOpen ? closeMobileMenu : undefined}>{t('home')}</Link>
            </li>
            <li className={cls.navItem}>
              <Link href="/#management" onClick={mobileMenuOpen ? closeMobileMenu : undefined}>{t('whatWeDo')}</Link>
            </li>
            <li className={cls.navItem}>
              <Link href="/#contact" onClick={mobileMenuOpen ? closeMobileMenu : undefined}>{t('submitRequest')}</Link>
            </li>
            <li className={classNames(cls.navItem, cls.mobileOnly)}>
              <button onClick={() => {
                switchLocale();
                closeMobileMenu();
              }} className={cls.mobileActionButton}>
                {locale === 'en' ? `${t('language')}: RU` : `${t('language')}: EN`}
              </button>
            </li>
            <li className={classNames(cls.navItem, cls.mobileOnly)}>
              <button
                onClick={() => {
                  window.open('https://pdp.pioneer.ru', '_blank');
                  closeMobileMenu();
                }}
                className={cls.mobileActionButton}
              >
                {t('login')}
              </button>
            </li>
          </ul>
        </nav>

        <HStack gap="16" className={cls.actions}>
          <Button
            variant="filled"
            color='secondary'
            strong
            onClick={switchLocale}
          >
            {locale === 'en' ? 'RU' : 'EN'}
          </Button>
          <Button
            as="link"
            href="#contact"
            variant="outline"
            strong
            onClick={() => {
              window.open('https://pdp.pioneer.ru', '_blank');
            }}
          >
            {t('login')}
          </Button>
        </HStack>
      </div>
    </header>
  );
}