import { FC } from 'react';
import cls from './FeatureIcon.module.scss';

interface FeatureIconProps {
  className?: string;
  type: 'documents' | 'analytics' | 'monitoring' | 'incidents' | 'reports' | 'tasks' | 'residents' | 'budget' | 'storage' | 'calendar' | 'alerts' | 'integration';
}

/**
 * FeatureIcon - иконки для функций платформы
 * @param type - тип иконки
 * @param className - дополнительные CSS классы
 */
export const FeatureIcon: FC<FeatureIconProps> = ({ type, className }) => {
  const icons = {
    documents: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 10V34M14 10H26L34 18V34M14 10H10C8.89543 10 8 10.8954 8 12V36C8 37.1046 8.89543 38 10 38H34M14 34H34M34 34V18M34 18H26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    analytics: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 36L14 28L22 36L42 16M42 16V26M42 16H32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    monitoring: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 6H38C39.1046 6 40 6.89543 40 8V34C40 35.1046 39.1046 36 38 36H10C8.89543 36 8 35.1046 8 34V8C8 6.89543 8.89543 6 10 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 30H40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 40H32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 36V40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    incidents: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 10H28M20 10V8C20 6.89543 20.8954 6 22 6H26C27.1046 6 28 6.89543 28 8V10M20 10H12C10.8954 10 10 10.8954 10 12V38C10 39.1046 10.8954 40 12 40H36C37.1046 40 38 39.1046 38 38V12C38 10.8954 37.1046 10 36 10H28M20 20H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    reports: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28 4H12C10.8954 4 10 4.89543 10 6V42C10 43.1046 10.8954 44 12 44H36C37.1046 44 38 43.1046 38 42V16M28 4L38 16M28 4V14C28 15.1046 28.8954 16 30 16H38M24 24H30M18 24H20M18 32H20M24 32H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    tasks: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 12L18 24L42 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M42 24V38C42 40.2091 40.2091 42 38 42H10C7.79086 42 6 40.2091 6 38V10C6 7.79086 7.79086 6 10 6H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    residents: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 28C29.5228 28 34 23.5228 34 18C34 12.4772 29.5228 8 24 8C18.4772 8 14 12.4772 14 18C14 23.5228 18.4772 28 24 28Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 40C8 33.3726 13.3726 28 20 28H28C34.6274 28 40 33.3726 40 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    budget: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28 10H38C39.1046 10 40 10.8954 40 12V36C40 37.1046 39.1046 38 38 38H28M28 10V38M28 10H20M28 38H20M20 10H10C8.89543 10 8 10.8954 8 12V36C8 37.1046 8.89543 38 10 38H20M20 10V38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    storage: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4L40 12V28C40 34.6274 34.6274 40 28 40H24M24 4L8 12V28C8 34.6274 13.3726 40 20 40H24M24 4V40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    calendar: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4V10M32 4V10M10 16H38M10 10H38C39.1046 10 40 10.8954 40 12V38C40 39.1046 39.1046 40 38 40H10C8.89543 40 8 39.1046 8 38V12C8 10.8954 8.89543 10 10 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    alerts: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 32C18 34.2091 19.7909 36 22 36H26C28.2091 36 30 34.2091 30 32M36 32V22C36 15.3726 30.6274 10 24 10C17.3726 10 12 15.3726 12 22V32H36Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    integration: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28 4H12C10.8954 4 10 4.89543 10 6V42C10 43.1046 10.8954 44 12 44H36C37.1046 44 38 43.1046 38 42V16M28 4L38 16M28 4V14C28 15.1046 28.8954 16 30 16H38M24 24H30M18 32H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  };

  return <div className={className}>{icons[type]}</div>;
};

