import {clsx} from "clsx";
import {ReactNode} from "react";
import styles from "./styles.module.scss"

interface CardProps {
    classNames?: string,
    children: ReactNode,

}

export const Card = (props: CardProps) => {
    const {classNames, children,...rest} = props

    return (
        <div className={clsx(styles.card, classNames)} {...rest}>
            {children}
        </div>
    );
};
