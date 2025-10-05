import { FC, ReactNode } from 'react';
import { classNames } from '@/src/shared/lib/classNames/classNames';
import cls from './Typography.module.scss';

interface HeadingProps {
  className?: string;
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  align?: 'left' | 'center' | 'right';
  color?: 'primary' | 'secondary' | 'white' | 'black';
}

/**
 * Heading - компонент для заголовков разных уровней
 * @param className - дополнительные CSS классы
 * @param children - текст заголовка
 * @param level - уровень заголовка (h1-h6)
 * @param size - размер текста
 * @param weight - жирность шрифта
 * @param align - выравнивание текста
 * @param color - цвет текста
 */
export const Heading: FC<HeadingProps> = (props) => {
  const {
    className,
    children,
    level = 1,
    size,
    weight = 'bold',
    align = 'left',
    color = 'primary',
  } = props;

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  const sizeClass = size ? cls[`size-${size}`] : cls[`h${level}`];

  return (
    <Tag
      className={classNames(
        cls.heading,
        [className, sizeClass, cls[`weight-${weight}`], cls[`align-${align}`], cls[`color-${color}`]]
      )}
    >
      {children}
    </Tag>
  );
};

