import {clsx} from "clsx";
import {ReactNode} from "react";
import {Sidebar} from "@/shared/ui";
import Button from "@/shared/ui/button";
import {Discount, Home, Store} from "@/shared/ui/ui-svg";
import styles from "./styles.module.scss"

interface LayoutProps {
    header?: ReactNode
    footer?: ReactNode
    children?: ReactNode
    classNames?: string
}

const items = [
    {
        value: "Home",
        href: "#home",
        icon: <Button theme={"clear"} size={"square"}>{<Home/>}</Button>,
    },
    {
        value: "Inbox",
        href: "#inbox",
        icon: <Button theme={"clear"} size={"square"}>{<Discount/>}</Button>,
    },
    {
        value: "Home",
        href: "#home",
        icon: <Button theme={"clear"} size={"square"}>{<Home/>}</Button>,
    },
    {
        value: "Inbox",
        href: "#inbox",
        icon: <Button theme={"clear"} size={"square"}>{<Discount/>}</Button>,
    }
]

const Layout = (props: LayoutProps) => {
    const {header,footer,children,classNames,...rest} = props
    const className = clsx(styles.content,classNames)
    return (
        <div className={styles.layout} {...rest}>
            <Sidebar items={items}  logo={<Store/>}/>
            <div className={className}>
                {header}

                {children}

                {footer}
            </div>
        </div>
    );
};

export default Layout;