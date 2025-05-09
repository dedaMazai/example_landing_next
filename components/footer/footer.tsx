"use client";

import Link from 'next/link';
import { Compass, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import styles from './footer.module.scss';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.companyInfo}>
            <div className={styles.logo}>
              <Compass color="white" />
              <span>Pioneer Work</span>
            </div>
            <p className={styles.description}>
              {t('description')}
            </p>
            <div className={styles.socialLinks}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className={styles.links}>
            <h4>{t('company')}</h4>
            <ul>
              <li><Link href="#about">{t('links.about')}</Link></li>
              <li><Link href="#services">{t('links.services')}</Link></li>
              <li><Link href="#team">{t('links.team')}</Link></li>
              <li><Link href="#careers">{t('links.careers')}</Link></li>
            </ul>
          </div>
          
          <div className={styles.links}>
            <h4>{t('resources')}</h4>
            <ul>
              <li><Link href="#blog">{t('links.blog')}</Link></li>
              <li><Link href="#case-studies">{t('links.caseStudies')}</Link></li>
              <li><Link href="#testimonials">{t('links.testimonials')}</Link></li>
              <li><Link href="#faq">{t('links.faq')}</Link></li>
            </ul>
          </div>
          
          <div className={styles.links}>
            <h4>{t('legal')}</h4>
            <ul>
              <li><Link href="#terms">{t('links.terms')}</Link></li>
              <li><Link href="#privacy">{t('links.privacy')}</Link></li>
              <li><Link href="#cookies">{t('links.cookies')}</Link></li>
              <li><Link href="#compliance">{t('links.compliance')}</Link></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            {t('copyright', { year: currentYear })}
          </div>
          <div className={styles.legal}>
            <Link href="#terms">{t('links.terms')}</Link>
            <Link href="#privacy">{t('links.privacy')}</Link>
            <Link href="#cookies">{t('links.cookies')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}