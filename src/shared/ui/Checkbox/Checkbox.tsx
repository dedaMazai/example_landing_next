import { FC, InputHTMLAttributes, ReactNode } from 'react';
import { classNames } from '@/src/shared/lib/classNames/classNames';
import cls from './Checkbox.module.scss';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  className?: string;
  label?: string | ReactNode;
}

/**
 * Checkbox - компонент чекбокса с label
 * @param className - дополнительные CSS классы
 * @param label - текст метки
 */
export const Checkbox: FC<CheckboxProps> = (props) => {
  const {
    className,
    label,
    id,
    ...restProps
  } = props;

  const checkboxId = id || `checkbox-${typeof label === 'string' ? label.replace(/\s+/g, '-').toLowerCase() : 'input'}`;

  return (
    <div className={classNames(cls.checkboxWrapper, [className])}>
      <input
        type="checkbox"
        id={checkboxId}
        className={cls.checkbox}
        {...restProps}
      />
      {label && (
        <label htmlFor={checkboxId} className={cls.label}>
          {label}
        </label>
      )}
    </div>
  );
};

