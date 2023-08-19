import {Outlet} from "react-router-dom";
import {Sidebar} from "@/shared/ui";
import Button from "@/shared/ui/button";
import {Discount, Home, Store} from "@/shared/ui/ui-svg";
import styles from "./styles.module.scss"
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
const MainLayout = () => {
    return (
        <div className={styles.mainLayout}>
            <Sidebar items={items} logo={<Store/>}/>
                <Outlet/>
        </div>
    );
};

export default MainLayout;