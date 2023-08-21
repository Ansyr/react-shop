import {clsx} from "clsx";
import {ReactNode} from "react";
import styles from "./styles.module.scss"

interface ContainerProps{
    children: ReactNode
    classNames?: string
}

const Container = (props: ContainerProps) => {
    const {children,classNames,...rest} = props
    const className = clsx(styles.container,classNames)
    return (
        <div className={className} {...rest}>
            {children}
        </div>
    );
};

export default Container;