"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { Button } from '@/src/shared/ui/button';
import { Icon } from '@/src/shared/ui/Icon';
import LogoBig from '@/src/shared/assets/icons/LogoBig.svg';
import Burger from '@/src/shared/assets/icons/Menu.svg';
import Cross from '@/src/shared/assets/icons/Cross.svg';
import cls from './header.module.scss';
import { classNames } from '@/src/shared/lib/classNames/classNames';

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
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const switchLocale = () => {
    const newLocale = locale === 'en' ? 'ru' : 'en';
    const newPath = pathname ? pathname.replace(`/${locale}`, `/${newLocale}`) : '/';
    window.location.href = newPath;
  };

  return (
    <header className={classNames(cls.header, { [cls.scrolled]: isScrolled })}>
      <div className={cls.container}>
        <Link href="/" className={cls.logo}>
          <Icon Svg={LogoBig} height={28} width={204} color='#EFEDE7' />
        </Link>

        <button className={cls.menuButton} onClick={toggleMobileMenu} aria-label="Toggle menu">
          {<Icon Svg={mobileMenuOpen ? Cross : Burger} height={24} width={24} color='#EFEDE7' />}
        </button>

        <nav className={classNames(cls.nav, { [cls.mobileOpen]: mobileMenuOpen })}>
          <ul className={cls.navList}>
            <li className={cls.navItem}>
              <Link href="#home">{t('home')}</Link>
            </li>
            <li className={cls.navItem}>
              <Link href="#contact">{t('contact')}</Link>
            </li>
          </ul>
        </nav>

        <div className={cls.actions}>
          <Button
            variant="filled"
            color="secondary"
            size="s"
            square
            onClick={switchLocale}
            className={cls.langButton}
          >
            {locale === 'en' ? 'RU' : 'EN'}
          </Button>
          <Link href="#contact" className={cls.contactButton}>
            {t('contact')}
          </Link>
        </div>
      </div>
    </header>
  );
}