import { memo, SVGProps, FC } from 'react';
import cls from './Icon.module.scss';
import { classNames } from '@/src/shared/lib/classNames/classNames';

interface IconProps extends SVGProps<SVGSVGElement> {
    className?: string;
    Svg: FC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        ...otherProps
    } = props;

    return (
        <Svg
            className={
                classNames(cls.Icon, {}, [className])
            }
            {...otherProps}

        />
    );
});
Icon.displayName = 'Icon';