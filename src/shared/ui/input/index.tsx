import {clsx} from "clsx";
import {InputHTMLAttributes} from "react";
import styles from "./styles.module.scss"

export type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'size' | 'theme'
>

type InputSize = "small" | 'medium' | 'large' | 'square'

interface InputProps extends HTMLInputProps{
    size: InputSize
    icon?: React.ReactNode
    onChange?: (value: string) => void;
    classNames?:string
}


export const Input = (props : InputProps) => {
    const {size,icon,onChange,classNames,...rest} = props
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    }

    const className = clsx(styles.input, styles[size],classNames)
    return (
        <div className={styles.inputWrap}>
            {icon && <i className={styles.icon}>
                {icon}
            </i>}
            <input className={clsx(className)} onChange={onChangeHandler} {...rest}/>
        </div>

    );
};
