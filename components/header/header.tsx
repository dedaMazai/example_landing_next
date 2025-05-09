"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { Compass, Menu, X } from 'lucide-react';
import styles from './header.module.scss';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

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
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    window.location.href = newPath;
  };

  return (
    <header className={cn(styles.header, { [styles.scrolled]: isScrolled })}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Compass />
          <span>Pioneer Work</span>
        </Link>

        <button className={styles.menuButton} onClick={toggleMobileMenu} aria-label="Toggle menu">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={cn(styles.nav, { [styles.mobileOpen]: mobileMenuOpen })}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="#home">{t('home')}</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#about">{t('about')}</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#services">{t('services')}</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#testimonials">{t('testimonials')}</Link>
            </li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={switchLocale}
            className={styles.langButton}
          >
            {locale === 'en' ? 'RU' : 'EN'}
          </Button>
          <Button asChild>
            <Link href="#contact" className={styles.contactButton}>
              {t('contact')}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}