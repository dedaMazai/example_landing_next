import { FC, ReactNode } from 'react';
import { classNames } from '@/src/shared/lib/classNames/classNames';
import cls from './Container.module.scss';

interface ContainerProps {
  className?: string;
  children: ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'full';
  padding?: boolean;
}

/**
 * Container - компонент для центрирования контента с максимальной шириной
 * @param className - дополнительные CSS классы
 * @param children - дочерние элементы
 * @param maxWidth - максимальная ширина контейнера
 * @param padding - добавлять ли боковые отступы
 */
export const Container: FC<ContainerProps> = (props) => {
  const { 
    className, 
    children, 
    maxWidth = 'xl',
    padding = true 
  } = props;

  return (
    <div
      className={classNames(
        cls.container,
        [className, cls[maxWidth]],
        { [cls.padding]: padding }
      )}
    >
      {children}
    </div>
  );
};

