import { FC, InputHTMLAttributes } from 'react';
import { classNames } from '@/src/shared/lib/classNames/classNames';
import cls from './FormInput.module.scss';

interface FormInputProps extends Omit<InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>, 'size'> {
  className?: string;
  label?: string;
  error?: string;
  multiline?: boolean;
  rows?: number;
}

/**
 * FormInput - компонент поля ввода с label и ошибками
 * @param className - дополнительные CSS классы
 * @param label - метка поля
 * @param error - текст ошибки
 * @param multiline - многострочное поле
 * @param rows - количество строк для textarea
 */
export const FormInput: FC<FormInputProps> = (props) => {
  const {
    className,
    label,
    error,
    multiline = false,
    rows = 4,
    id,
    required,
    ...restProps
  } = props;

  const inputId = id || `input-${label?.replace(/\s+/g, '-').toLowerCase()}`;

  const inputClasses = classNames(
    cls.input,
    [],
    {
      [cls.error]: Boolean(error),
    }
  );

  return (
    <div className={classNames(cls.formInput, [className])}>
      {label && (
        <label htmlFor={inputId} className={cls.label}>
          {label}
          {required && <span className={cls.required}>*</span>}
        </label>
      )}
      
      {multiline ? (
        <textarea
          id={inputId}
          className={inputClasses}
          rows={rows}
          required={required}
          {...(restProps as InputHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={inputId}
          className={inputClasses}
          required={required}
          {...(restProps as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      
      {error && <span className={cls.errorText}>{error}</span>}
    </div>
  );
};

