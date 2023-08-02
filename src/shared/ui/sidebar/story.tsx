import type {ComponentMeta, ComponentStory} from '@storybook/react';
import Sidebar from "./index.tsx";
import Plus from "../../ui-svg/plus";
import Home from "../../ui-svg/home";
import Button from "../Button";
import Store from "../../ui-svg/store";
import Discount from "../../ui-svg/discount";


export default {
    title: 'ui-kit/Sidebar',
    component: Sidebar,
    parameters:{
        backgrounds:{
            default: 'BgBlack',
            values: [
                {name: 'BgBlack', value: '#252836'}
            ]
        }

    }

} as ComponentMeta<typeof Sidebar>


const SidebarTemplate: ComponentStory<typeof  Sidebar> = (args) => <Sidebar {...args}/>


export const SideBar = SidebarTemplate.bind({});
SideBar.args = {
    items: [
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
    ],
    header: <Store/>
};



