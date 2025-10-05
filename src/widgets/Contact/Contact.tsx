"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/src/shared/ui/Button';
import { useTranslations } from 'next-intl';
import { Container } from '@/src/shared/ui/Container';
import { Heading, Text } from '@/src/shared/ui/Typography';
import { FormInput } from '@/src/shared/ui/FormInput';
import { Checkbox } from '@/src/shared/ui/Checkbox';
import { Section } from '@/src/shared/ui/Section';
import GroupPDP from '@/src/shared/assets/icons/GroupPDP.svg';
import Arrow from '@/src/shared/assets/icons/Arrow.svg';
import { Icon } from '@/src/shared/ui/Icon';
import Link from 'next/link';
import cls from './Contact.module.scss';
import { HStack } from '@/src/shared/ui/Stack';

/**
 * Contact - форма обратной связи для оставления заявок
 */
export function Contact() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    contact: '',
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

    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: t('form.success')
    });

    // Reset form
    setFormData({
      name: '',
      company: '',
      contact: '',
      message: ''
    });
  };

  return (
    <Section id="contact" className={cls.contact} background="dark" padding="lg">
      <Container maxWidth="xxxl">
        <div className={cls.contentWrapper}>
          {/* Left Column - Title & Description */}
          <motion.div
            className={cls.leftColumn}
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <Heading level={2} className={cls.title}>
              {t('title')}
            </Heading>

            <div className={cls.iconWrapper}>
              <Icon Svg={GroupPDP} className={cls.groupIcon} />
            </div>

            <div className={cls.subtitleWrapper}>
              <Text size="lg" color="primary" className={cls.subtitle}>
                {t('tagline')}
              </Text>
              <HStack max>
                <div className={cls.decorativeLine} />
                <div className={cls.arrowWrapper}>
                  <Icon Svg={Arrow} className={cls.arrow} />
                </div>
              </HStack>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            className={cls.formWrapper}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {formStatus.submitted && formStatus.success ? (
              <div className={cls.successMessage}>
                <Heading level={3} size="xl" color="white" className={cls.successTitle}>
                  {t('form.successTitle')}
                </Heading>
                <Text size="lg" color="white" className={cls.successText}>
                  {formStatus.message}
                </Text>
              </div>
            ) : (
              <form className={cls.form} onSubmit={handleSubmit}>
                <FormInput
                  label={t('form.name')}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t('form.namePlaceholder')}
                />

                <FormInput
                  label={t('form.company')}
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  placeholder={t('form.companyPlaceholder')}
                />

                <FormInput
                  label={t('form.contact')}
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  placeholder={t('form.contactPlaceholder')}
                />

                <Checkbox
                  label={
                    <>
                      {t('form.privacy')}{' '}
                      <Link href="/privacy_policy" className={cls.privacyLink}>
                        {t('form.privacyLink')}
                      </Link>
                    </>
                  }
                  required
                />

                <Button
                  type="submit"
                  className={cls.submitButton}
                  variant="filled"
                  fullWidth
                >
                  {t('form.submit')}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}