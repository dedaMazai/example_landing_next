import { FC, ReactNode } from 'react';
import { classNames } from '@/src/shared/lib/classNames/classNames';
import cls from './Typography.module.scss';

interface TextProps {
  className?: string;
  children: ReactNode;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  align?: 'left' | 'center' | 'right';
  color?: 'primary' | 'secondary' | 'white' | 'muted' | 'black';
  as?: 'p' | 'span' | 'div';
}

/**
 * Text - компонент для обычного текста
 * @param className - дополнительные CSS классы
 * @param children - содержимое
 * @param size - размер текста
 * @param weight - жирность шрифта
 * @param align - выравнивание текста
 * @param color - цвет текста
 * @param as - HTML тег для рендера
 */
export const Text: FC<TextProps> = (props) => {
  const {
    className,
    children,
    size = 'base',
    weight = 'normal',
    align = 'left',
    color = 'secondary',
    as: Tag = 'p',
  } = props;

  return (
    <Tag
      className={classNames(
        cls.text,
        [
          className,
          cls[`size-${size}`],
          cls[`weight-${weight}`],
          cls[`align-${align}`],
          cls[`color-${color}`],
        ]
      )}
    >
      {children}
    </Tag>
  );
};

