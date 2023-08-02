import styles from "./styles.module.scss"
import React from "react";

interface SidebarItems{
    value: string,
    href :string,
    icon: React.ReactNode
}

interface SidebarProps{
    items: SidebarItems[]
    header: React.ReactNode
}

const Sidebar = ({items,header} : SidebarProps) => {
    return (
        <div className={styles.sidebar}>
            {header}
            <ul>
                {items.map((item,id) => <li className={styles.sidebarItem} key={id}>
                    {item.icon}
                </li>)}
            </ul>
        </div>
    );
};

export default Sidebar;