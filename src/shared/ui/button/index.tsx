import {
  ButtonHTMLAttributes,
  ForwardedRef,
  forwardRef,
  ReactNode,
  AnchorHTMLAttributes,
} from 'react';
import Link from 'next/link';
import cls from './style.module.scss';
import { classNames } from '@/src/shared/lib/classNames/classNames';

export type ButtonVariant = 'clear' | 'outline' | 'filled' | 'hero-filled' | 'hero-outline';
export type ButtonColor = 'normal' | 'success' | 'error' | 'secondary';

export type ButtonSize = 's' | 'm' | 'l' | 'xl';

interface BaseButtonProps {
  className?: string;
  variant?: ButtonVariant;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  children?: ReactNode;
  fullWidth?: boolean;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
  prevIcon?: ReactNode;
  width?: string | number;
  height?: string | number;
}

interface ButtonAsButtonProps extends BaseButtonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  as?: 'button';
  href?: never;
  color?: ButtonColor;
}

interface ButtonAsLinkProps extends BaseButtonProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'color'> {
  as: 'link';
  href: string;
  color?: ButtonColor;
}

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export const Button = forwardRef(
  (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement | HTMLAnchorElement>) => {
      const {
          className,
          children,
          variant = 'outline',
          square,
          disabled,
          fullWidth,
          size = 'm',
          addonLeft,
          addonRight,
          prevIcon,
          color = 'normal',
          as = 'button',
          width,
          height,
          ...otherProps
      } = props;

      const mods = {
          [cls.square]: square,
          [cls.disabled]: disabled,
          [cls.fullWidth]: fullWidth,
          [cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
          [cls.withIcon]: Boolean(prevIcon),
      };

      const classes = classNames(cls.Button, mods, [
          className,
          cls[variant],
          cls[size],
          cls[color],
      ]);

      const inlineStyles: React.CSSProperties = {};
      if (width) {
          inlineStyles.width = typeof width === 'number' ? `${width}px` : width;
      }
      if (height) {
          inlineStyles.height = typeof height === 'number' ? `${height}px` : height;
      }

      const content = (
          <>
              {prevIcon && <div className={cls.prevIcon}>{prevIcon}</div>}
              <div className={cls.addonLeft}>{addonLeft}</div>
              {children}
              <div className={cls.addonRight}>{addonRight}</div>
          </>
      );

      if (as === 'link' && 'href' in props && props.href) {
          return (
              <Link
                  href={props.href}
                  className={classes}
                  style={inlineStyles}
                  ref={ref as ForwardedRef<HTMLAnchorElement>}
                  {...(otherProps as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'color'>)}
              >
                  {content}
              </Link>
          );
      }

      return (
          <button
              type="button"
              className={classes}
              style={inlineStyles}
              disabled={disabled}
              {...(otherProps as ButtonHTMLAttributes<HTMLButtonElement>)}
              ref={ref as ForwardedRef<HTMLButtonElement>}
          >
              {content}
          </button>
      );
  },
);
Button.displayName = 'Button';
