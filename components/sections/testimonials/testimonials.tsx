"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './testimonials.module.scss';
import { useTranslations } from 'next-intl';

type TestimonialKey = 'sarah' | 'michael' | 'emily' | 'david' | 'jennifer' | 'robert';

const testimonialAvatars: Record<TestimonialKey, string> = {
  sarah: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  michael: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  emily: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  david: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  jennifer: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  robert: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
};

export function Testimonials() {
  const t = useTranslations('testimonials');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const testimonials: TestimonialKey[] = [
    'sarah',
    'michael',
    'emily',
    'david',
    'jennifer',
    'robert'
  ];

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <motion.div 
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('subtitle')}
          </motion.div>
          
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('title')}
          </motion.h2>
          
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('description')}
          </motion.p>
        </div>
        
        <motion.div 
          className={styles.grid}
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className={styles.testimonialCard}
              variants={itemVariants}
            >
              <div className={styles.quote}>&ldquo;</div>
              <div className={styles.content}>
                <p className={styles.text}>{t(`items.${testimonial}.text`)}</p>
                <div className={styles.author}>
                  <div className={styles.avatar}>
                    <img src={testimonialAvatars[testimonial]} alt={t(`items.${testimonial}.name`)} />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.name}>{t(`items.${testimonial}.name`)}</div>
                    <div className={styles.position}>{t(`items.${testimonial}.position`)}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}