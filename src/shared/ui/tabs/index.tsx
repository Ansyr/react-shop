import { ReactNode} from "react";
import { Typography } from "@/shared/ui";
import styles from "./styles.module.scss";

interface TabsItem {
    key: string;
    label: string;
    content?: ReactNode;
}

interface TabsProps {
    tabs: TabsItem[];
    classNames?: string;
    onClickTabs: (tab: TabsItem) => void
}

export const Tabs = (props: TabsProps) => {
    const { tabs,onClickTabs, classNames } = props;


    return (
        <div className={classNames}>
            <ul className={styles.tabs}>
                {tabs.map((tab) => (
                    <li className={styles.active}
                        onClick={() => onClickTabs(tab)}
                        key={tab.key}
                    >
                        <Typography as={"h3"} size={"medium"} color={"white"} >
                            {tab.label}
                        </Typography>
                    </li>
                ))}
            </ul>
            <span className={styles.tabsActiveLine}/>
        </div>
    );
};
