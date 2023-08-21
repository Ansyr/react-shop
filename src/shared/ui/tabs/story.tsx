import type {ComponentMeta, ComponentStory} from '@storybook/react';

import {Tabs} from "./index.tsx";


export default {
    title: 'shared/tabs',
    component: Tabs,
    parameters:{
        backgrounds:{
            default: 'BgBlack',
            values: [
                {name: 'BgBlack', value: '#252836'}
            ]
        }

    }

} as ComponentMeta<typeof Tabs>


const TabsTemplate: ComponentStory<typeof  Tabs> = (args) => <Tabs {...args}/>


export const CommonTabs = TabsTemplate.bind({});
CommonTabs.args = {
    tabs : [
        {
            key: '1',
            label: `Tab 1`,
            content: `Content of Tab Pane 1`,
        },
        {
            key: '2',
            label: `Tab 2`,
            content: `Content of Tab Pane 2`,
        },
        {
            key: '3',
            label: `Tab 3`,
            content: `Content of Tab Pane 3`,
        },
    ],
    onClickTabs: () => console.log(123),
};



