import {
  memo,
  useEffect,
  useState,
} from 'react';
import NextImage, { ImageProps } from 'next/image';
import cls from './ProgressiveImage.module.scss';
import { classNames } from '../../lib/classNames/classNames';

/**
 * Интерфейс пропсов для компонента ProgressiveImage
 * Расширяет ImageProps из Next.js, исключая src и alt для переопределения
 */
export interface ProgressiveImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  /** Дополнительный CSS класс */
  className?: string;
  /** URL основного изображения для загрузки */
  src: string;
  /** Альтернативный текст для изображения */
  alt?: string;
  /** URL изображения-заглушки (показывается во время загрузки) */
  fallback: string;
  /** URL изображения-заглушки при ошибке загрузки */
  errorFallback?: string;
}

type ImageStatus = 'loading' | 'loaded' | 'error';

/**
 * Компонент прогрессивной загрузки изображений с эффектом размытия
 * 
 * @example
 * ```tsx
 * <ProgressiveImage
 *   src="/images/high-res.jpg"
 *   fallback="/images/low-res-placeholder.jpg"
 *   errorFallback="/images/error.jpg"
 *   alt="Описание изображения"
 *   width={800}
 *   height={600}
 * />
 * ```
 */
export const ProgressiveImage = memo((props: ProgressiveImageProps) => {
  const {
    className,
    src,
    alt = 'image',
    errorFallback,
    fallback,
    ...otherProps
  } = props;

  const [imageSrc, setImageSrc] = useState<string>(fallback);
  const [status, setStatus] = useState<ImageStatus>('loading');

  useEffect(() => {
    if (!src) {
      setImageSrc(errorFallback || fallback);
      setStatus('error');
      return;
    }

    // Если src совпадает с fallback, не загружаем повторно
    if (src === fallback) {
      setImageSrc(src);
      setStatus('loaded');
      return;
    }

    let isMounted = true;
    const img = new window.Image();

    img.onload = () => {
      if (isMounted) {
        setImageSrc(src);
        setStatus('loaded');
      }
    };

    img.onerror = () => {
      if (isMounted) {
        setImageSrc(errorFallback || fallback);
        setStatus('error');
      }
    };

    img.src = src;

    return () => {
      isMounted = false;
      // Очистка обработчиков для предотвращения утечек памяти
      img.onload = null;
      img.onerror = null;
    };
  }, [src, fallback, errorFallback]);

  const isLoading = status === 'loading' && imageSrc === fallback;

  return (
    <NextImage
      className={classNames(
        className,
        isLoading ? cls.loading : cls.loaded,
      )}
      src={imageSrc}
      alt={alt}
      loading="lazy"
      {...otherProps}
    />
  );
});

ProgressiveImage.displayName = 'ProgressiveImage';
