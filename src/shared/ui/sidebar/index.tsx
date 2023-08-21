import {clsx} from "clsx";
import React from "react";
import {Link} from "react-router-dom";
import styles from "./styles.module.scss"



interface SidebarItems{
    value: string,
    href :string,
    icon: React.ReactNode
}

interface SidebarProps{
    items: SidebarItems[]
    logo: React.ReactNode
    classNames?:string
}



export const Sidebar = (props : SidebarProps) => {
    const {items,logo,classNames,...rest} = props
    const className = clsx(styles.sidebar,classNames)
    return (
        <div className={className} {...rest}>
            {logo}
            <ul>
                {items.map((item,id) => <li className={styles.sidebarItem} key={id}>
                    <Link className={styles.link} to={item.href}>
                        {item.icon}
                    </Link>
                </li>)}
            </ul>
        </div>
    );
};

