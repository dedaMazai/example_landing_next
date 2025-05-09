"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Code, LineChart, Lightbulb, Globe, Cpu, Lock } from 'lucide-react';
import styles from './services.module.scss';
import { useTranslations } from 'next-intl';

type ServiceKey = 'strategic' | 'development' | 'analytics' | 'digital' | 'ai' | 'security';

const serviceIcons: Record<ServiceKey, JSX.Element> = {
  strategic: <Lightbulb size={28} />,
  development: <Code size={28} />,
  analytics: <LineChart size={28} />,
  digital: <Globe size={28} />,
  ai: <Cpu size={28} />,
  security: <Lock size={28} />
};

const serviceImages: Record<ServiceKey, string> = {
  strategic: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  development: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  analytics: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  digital: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ai: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  security: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
};

export function Services() {
  const t = useTranslations('services');
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

  const services: ServiceKey[] = [
    'strategic',
    'development',
    'analytics',
    'digital',
    'ai',
    'security'
  ];

  return (
    <section id="services" className={styles.services}>
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
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className={styles.serviceCard}
              variants={itemVariants}
            >
              <div 
                className={styles.bg} 
                style={{ backgroundImage: `url(${serviceImages[service]})` }}
              ></div>
              <div className={styles.content}>
                <div className={styles.icon}>
                  {serviceIcons[service]}
                </div>
                <h3 className={styles.title}>{t(`items.${service}.title`)}</h3>
                <p className={styles.description}>{t(`items.${service}.description`)}</p>
                <Link href="#contact" className={styles.link}>
                  {t('learnMore')} <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}