"use client";

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/src/shared/ui/Container';
import { VStack } from '@/src/shared/ui/Stack';
import LogoBig from '@/src/shared/assets/icons/LogoBig.svg';
import cls from './Footer2.module.scss';
import { Icon } from '@/src/shared/ui/Icon';

/**
 * Footer - современный подвал сайта с навигацией, контактами и социальными сетями
 */
export function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { label: t('links.about'), href: '#about' },
    { label: t('links.services'), href: '#services' },
    { label: t('links.team'), href: '#team' },
    { label: t('links.careers'), href: '#careers' },
  ];

  const resourceLinks = [
    { label: t('links.blog'), href: '#blog' },
    { label: t('links.caseStudies'), href: '#case-studies' },
    { label: t('links.testimonials'), href: '#testimonials' },
    { label: t('links.faq'), href: '#faq' },
  ];

  const legalLinks = [
    { label: t('links.terms'), href: '#terms' },
    { label: t('links.privacy'), href: '/privacy_policy' },
    { label: t('links.cookies'), href: '#cookies' },
    { label: t('links.compliance'), href: '#compliance' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: 'linkedin' },
    { name: 'Twitter', href: '#', icon: 'twitter' },
    { name: 'Facebook', href: '#', icon: 'facebook' },
    { name: 'Instagram', href: '#', icon: 'instagram' },
  ];

  return (
    <footer className={cls.footer}>
      <Container>
        <div className={cls.content}>
          {/* Top Section - Brand & Navigation */}
          <div className={cls.topSection}>
            {/* Brand Column */}
            <div className={cls.brandColumn}>
              <Link href="/" className={cls.logoLink}>
                <Icon Svg={LogoBig} height={48} width={180} color='#EFEDE7' />
              </Link>
              <p className={cls.brandDescription}>
                {t('description')}
              </p>
              
              {/* Social Links */}
              <div className={cls.socialLinks}>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={cls.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <span className={cls.socialIcon} data-icon={social.icon} />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Columns */}
            <div className={cls.navColumns}>
              {/* Company */}
              <VStack gap="16" className={cls.navColumn}>
                <h3 className={cls.navTitle}>{t('company')}</h3>
                <nav className={cls.navLinks}>
                  {companyLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cls.navLink}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </VStack>

              {/* Resources */}
              <VStack gap="16" className={cls.navColumn}>
                <h3 className={cls.navTitle}>{t('resources')}</h3>
                <nav className={cls.navLinks}>
                  {resourceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cls.navLink}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </VStack>

              {/* Legal */}
              <VStack gap="16" className={cls.navColumn}>
                <h3 className={cls.navTitle}>{t('legal')}</h3>
                <nav className={cls.navLinks}>
                  {legalLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cls.navLink}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </VStack>

              {/* Contact Info */}
              <VStack gap="16" className={cls.navColumn}>
                <h3 className={cls.navTitle}>{t('contactEmail')}</h3>
                <VStack gap="12" className={cls.contactInfo}>
                  <a href="mailto:digital@pioneer.ru" className={cls.contactLink}>
                    digital@pioneer.ru
                  </a>
                  <a href="tel:+74955029559" className={cls.contactLink}>
                    +7 (495) 502 95 59
                  </a>
                  <address className={cls.address}>
                    Москва, ул. Малая Пироговская 3<br />
                    Пн-пт: 09:30-18:30
                  </address>
                </VStack>
              </VStack>
            </div>
          </div>

          {/* Bottom Section - Copyright & Legal */}
          <div className={cls.bottomSection}>
            <div className={cls.bottomContent}>
              <p className={cls.copyright}>
                {t('copyright', { year: currentYear })}
              </p>
              <p className={cls.disclaimer}>
                Материалы, размещенные на сайте, не являются публичной офертой
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}