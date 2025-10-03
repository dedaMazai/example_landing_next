import { FC, ReactNode } from 'react';
import { classNames } from '@/src/shared/lib/classNames/classNames';
import cls from './Section.module.scss';

interface SectionProps {
  className?: string;
  children: ReactNode;
  background?: 'dark' | 'darker' | 'gradient' | 'transparent';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
}

/**
 * Section - компонент-обертка для секций лендинга
 * @param className - дополнительные CSS классы
 * @param children - содержимое секции
 * @param background - фоновый цвет/градиент
 * @param padding - вертикальные отступы
 * @param id - ID для якорных ссылок
 */
export const Section: FC<SectionProps> = (props) => {
  const {
    className,
    children,
    background = 'dark',
    padding = 'lg',
    id,
  } = props;

  return (
    <section
      id={id}
      className={classNames(
        cls.section,
        [className, cls[`bg-${background}`], cls[`padding-${padding}`]]
      )}
    >
      {children}
    </section>
  );
};

