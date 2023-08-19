import {clsx} from "clsx";
import {ReactNode} from "react";
import styles from "./styles.module.scss"

interface HeaderProps {
    classNames?: string
    leftSlot?: ReactNode,
    rightSlot?: ReactNode,
    children?: ReactNode
}


const Header = (props: HeaderProps) => {
    const {leftSlot,rightSlot,children,classNames,...rest} = props
    const className = clsx(styles.header,classNames)
    return (
        <div className={className} {...rest}>
            {
                leftSlot &&
            <div className={styles.leftSlot}>
                {leftSlot}
            </div>
            }
            {
                rightSlot &&
                <div className={styles.rightSlot}>
                    {rightSlot}
                </div>
            }
            {children}
        </div>
    );
};

export default Header;