"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail } from 'lucide-react';
import styles from './contact.module.scss';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

export function Contact() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would send the form data to a backend API
    console.log('Form submitted:', formData);
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: t('form.success')
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.subtitle}>{t('subtitle')}</div>
          
          <h2 className={styles.title}>
            {t('title')}
          </h2>
          
          <p className={styles.description}>
            {t('description')}
          </p>
          
          <div className={styles.infoItems}>
            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}>
                <MapPin size={24} />
              </div>
              <div className={styles.details}>
                <div className={styles.label}>{t('info.location.label')}</div>
                <div className={styles.value}>
                  {t('info.location.value')}
                </div>
              </div>
            </div>
            
            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}>
                <Phone size={24} />
              </div>
              <div className={styles.details}>
                <div className={styles.label}>{t('info.phone.label')}</div>
                <div className={styles.value}>
                  <a href="tel:+14155552671">{t('info.phone.value')}</a>
                </div>
              </div>
            </div>
            
            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}>
                <Mail size={24} />
              </div>
              <div className={styles.details}>
                <div className={styles.label}>{t('info.email.label')}</div>
                <div className={styles.value}>
                  <a href="mailto:info@pioneerwork.com">{t('info.email.value')}</a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className={styles.formWrapper}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {formStatus.submitted && formStatus.success ? (
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">{t('form.successTitle')}</h3>
              <p>{formStatus.message}</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">{t('form.name')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="email">{t('form.email')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="phone">{t('form.phone')}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="message">{t('form.message')}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <Button type="submit" className={styles.submitButton} size="lg">
                {t('form.submit')}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}