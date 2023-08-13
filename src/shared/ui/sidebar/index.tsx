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
}



export const Sidebar = ({items,logo} : SidebarProps) => {
    return (
        <div className={styles.sidebar}>
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

