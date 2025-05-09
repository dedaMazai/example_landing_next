"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Lightbulb, TrendingUp, Zap, Shield, Users, BarChart } from 'lucide-react';
import styles from './features.module.scss';

const features = [
  {
    icon: <Lightbulb size={28} />,
    title: "Innovative Solutions",
    description: "Cutting-edge approaches to solve complex business challenges and drive growth.",
    link: "#services"
  },
  {
    icon: <TrendingUp size={28} />,
    title: "Growth Strategy",
    description: "Data-driven strategies to expand your market presence and increase revenue.",
    link: "#services"
  },
  {
    icon: <Zap size={28} />,
    title: "Rapid Execution",
    description: "Efficient implementation of solutions with agile methodologies for faster results.",
    link: "#services"
  },
  {
    icon: <Shield size={28} />,
    title: "Robust Security",
    description: "Enterprise-grade security measures to protect your business and customer data.",
    link: "#services"
  },
  {
    icon: <Users size={28} />,
    title: "Expert Team",
    description: "Seasoned professionals with deep industry knowledge and technical expertise.",
    link: "#about"
  },
  {
    icon: <BarChart size={28} />,
    title: "Data Analytics",
    description: "Advanced analytics to extract actionable insights from your business data.",
    link: "#services"
  }
];

export function Features() {
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

  return (
    <section id="features" className={styles.features}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <motion.div 
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Us
          </motion.div>
          
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Features that Drive Success
          </motion.h2>
          
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We combine innovative technology with strategic thinking to deliver solutions that help your business thrive in today's competitive landscape.
          </motion.p>
        </div>
        
        <motion.div 
          className={styles.grid}
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className={styles.featureCard}
              variants={itemVariants}
            >
              <div className={styles.iconWrapper}>
                {feature.icon}
              </div>
              <h3 className={styles.title}>{feature.title}</h3>
              <p className={styles.description}>{feature.description}</p>
              <Link href={feature.link} className={styles.link}>
                Learn more <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}