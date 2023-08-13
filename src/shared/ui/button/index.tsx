import {clsx} from "clsx";
import React, {ButtonHTMLAttributes} from "react";
import styles from "./styles.module.scss"

type ButtonTheme = 'fill' | "line" | "clear"
type ButtonSize = 'small' | 'medium' | 'large' | "square"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    theme?: ButtonTheme
    size?: ButtonSize
    fullWidth?: boolean
    classNames?: string
    startIcon?: React.ReactNode
    endIcon?: React.ReactNode
    onlyIcon?: React.ReactNode
}

const Button = (props: ButtonProps) => {
    const {
        children,
        theme = "fill",
        fullWidth,
        size = "medium",
        startIcon,
        endIcon,
        ...rest
    } = props
    const className = clsx(styles.btn, styles[theme], styles[size], {[styles.fullWidth]: fullWidth})

    return (
        <button className={clsx(className, props.classNames)} {...rest}>
            {
                startIcon &&
                <div className={styles.icon}>
                    <i className={styles.startIcon}>
                        {startIcon}
                    </i>
                    {children}
                </div>
            }

            {
                endIcon &&
                <div className={styles.icon}>
                    {children}
                    <i className={styles.startIcon}>
                        {endIcon}
                    </i>
                </div>
            }

            {!startIcon && !endIcon && children}
        </button>
    )
};

export default Button;