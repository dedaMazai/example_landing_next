"use client";

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Container } from '@/src/shared/ui/Container';
import { VStack } from '@/src/shared/ui/Stack';
import { Heading, Text } from '@/src/shared/ui/Typography';
import LogoBig from '@/src/shared/assets/icons/LogoBig.svg';
import cls from './Footer.module.scss';
import { Icon } from '@/src/shared/ui/Icon';

/**
 * Footer - современный подвал сайта с навигацией, контактами и социальными сетями
 */
export function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { label: t('links.about'), href: '#ecosystem' },
    { label: t('links.services'), href: '#management' },
    { label: t('links.careers'), href: '#contact' },
  ];

  const resourceLinks = [
    { label: t('links.blog'), href: 'https://web.telegram.org/k/#-2546540257', target: '_blank' },
    { label: t('links.testimonials'), href: '#partners' },
    { label: t('links.faq'), href: '#contact' },
  ];

  const legalLinks = [
    { label: t('links.privacy'), href: '/privacy_policy' }
  ];

  const socialLinks = [
    { name: 'Vk', href: 'https://vk.com/gk_pioneer', icon: 'vk' },
    { name: 'Telegram', href: 'https://t.me/pioneergroupofcompanies', icon: 'telegram' },
    { name: 'Youtube', href: 'https://www.youtube.com/channel/UCPoSTDcoEpy-5uNDgGTr3nQ', icon: 'youtube' },
    { name: 'Rutube', href: 'https://rutube.ru/channel/47706620/', icon: 'rutube' },
  ];

  return (
    <footer className={cls.footer} id="footer">
      <Container>
        <div className={cls.content}>
          {/* Top Section - Brand & Navigation */}
          <div className={cls.topSection}>
            {/* Brand Column */}
            <div className={cls.brandColumn}>
              <Link href="/" className={cls.logoLink}>
                <Icon Svg={LogoBig} height={48} width={180} color='#EFEDE7' />
              </Link>
              <Text size="base" color="secondary" className={cls.brandDescription}>
                {t('description')}
              </Text>

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
                <Heading level={3} size="xs" weight="semibold" className={cls.navTitle}>
                  {t('company')}
                </Heading>
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
                <Heading level={3} size="xs" weight="semibold" className={cls.navTitle}>
                  {t('resources')}
                </Heading>
                <nav className={cls.navLinks}>
                  {resourceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target={link.target}
                      className={cls.navLink}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </VStack>

              {/* Legal */}
              <VStack gap="16" className={cls.navColumn}>
                <Heading level={3} size="xs" weight="semibold" className={cls.navTitle}>
                  {t('legal')}
                </Heading>
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
                <Heading level={3} size="xs" weight="semibold" className={cls.navTitle}>
                  {t('contactEmail')}
                </Heading>
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
              <Text size="sm" color="muted" className={cls.copyright}>
                {t('copyright', { year: currentYear })}
              </Text>
              <Text size="sm" color="muted" className={cls.disclaimer}>
                Материалы, размещенные на сайте, не являются публичной офертой
              </Text>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}