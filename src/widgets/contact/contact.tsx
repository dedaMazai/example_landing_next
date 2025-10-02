"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import cls from './contact.module.scss';
import { Button } from '@/src/shared/ui/button';
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
    <section id="contact" className={cls.contact}>
      <div className={cls.container}>
        <motion.div 
          className={cls.header}
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={cls.title}>
            {t('title')}
          </h2>
        </motion.div>
        
        <motion.div 
          className={cls.formWrapper}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {formStatus.submitted && formStatus.success ? (
            <div className={cls.successMessage}>
              <h3 className={cls.successTitle}>{t('form.successTitle')}</h3>
              <p className={cls.successText}>{formStatus.message}</p>
            </div>
          ) : (
            <form className={cls.form} onSubmit={handleSubmit}>
              <div className={cls.formRow}>
                <div className={cls.inputGroup}>
                  <label htmlFor="name">{t('form.name')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t('form.name')}
                  />
                </div>
                
                <div className={cls.inputGroup}>
                  <label htmlFor="email">{t('form.email')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t('form.email')}
                  />
                </div>
              </div>

              <div className={cls.inputGroup}>
                <label htmlFor="phone">{t('form.phone')}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t('form.phone')}
                />
              </div>
              
              <div className={cls.inputGroup}>
                <label htmlFor="message">{t('form.message')}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder={t('form.message')}
                ></textarea>
              </div>
              
              <div className={cls.formFooter}>
                <label className={cls.checkbox}>
                  <input type="checkbox" required />
                  <span>Я согласен на обработку персональных данных с подробностями политики конфиденциальности</span>
                </label>
                
                <Button 
                  type="submit" 
                  className={cls.submitButton} 
                  size="l"
                  variant="filled"
                  color="normal"
                >
                  {t('form.submit')}
                </Button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}