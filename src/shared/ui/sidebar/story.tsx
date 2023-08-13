import type {ComponentMeta, ComponentStory} from '@storybook/react';
import Button from "../button";
import {Home, Store} from "../ui-svg/";
import {Discount} from "../ui-svg/";

import {Sidebar} from "./index.tsx";


export default {
    title: 'shared/Sidebar',
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
    logo: <Store/>
};



