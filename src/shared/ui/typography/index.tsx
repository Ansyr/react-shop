import {clsx} from "clsx";
import {ComponentProps, ElementType} from "react";

import styles from './styles.module.scss'

type TextSize = 'small' | 'medium' | 'large' | 'xl'
// 12 14 16 28
type TextColor = 'primary' | 'secondary'

interface TextOwnProps<E extends ElementType> {
    size?: TextSize,
    color?: TextColor,
    classNames?: string,
    as?: E
}

type TextProps<E extends ElementType> = TextOwnProps<E> & Omit<ComponentProps<E>, keyof TextOwnProps<ElementType>>

const defaultElement = 'div'

export const Typography = <E extends ElementType = typeof defaultElement>(props: TextProps<E>) => {
    const {size = "medium", color = "primary", classNames, as, children, ...rest} = props
    const Tag = as || defaultElement
    const className = clsx(styles[size], styles[color],classNames)
    return (
        <Tag className={className} {...rest}>
            {children}
        </Tag>
    );
};
