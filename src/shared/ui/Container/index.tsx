import {ReactNode} from "react";
import styles from "./styles.module.scss"

interface ContainerProps{
    children: ReactNode
}

const Container = (props: ContainerProps) => {
    const {children} = props
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};

export default Container;