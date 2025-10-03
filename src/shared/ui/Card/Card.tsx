import { FC, ReactNode } from 'react';
import { classNames } from '@/src/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

interface CardProps {
  className?: string;
  children: ReactNode;
  variant?: 'default' | 'bordered' | 'elevated' | 'flat';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hoverable?: boolean;
  onClick?: () => void;
}

/**
 * Card - универсальный компонент карточки
 * @param className - дополнительные CSS классы
 * @param children - содержимое карточки
 * @param variant - вариант оформления
 * @param padding - внутренние отступы
 * @param hoverable - добавить hover-эффект
 * @param onClick - обработчик клика
 */
export const Card: FC<CardProps> = (props) => {
  const {
    className,
    children,
    variant = 'default',
    padding = 'md',
    hoverable = false,
    onClick,
  } = props;

  return (
    <div
      className={classNames(
        cls.card,
        [className, cls[variant], cls[`padding-${padding}`]],
        {
          [cls.hoverable]: hoverable,
          [cls.clickable]: Boolean(onClick),
        }
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

