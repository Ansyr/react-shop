import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {Input, Typography} from "@/shared/ui";
import Header from "@/shared/ui/header/index.tsx";



export default {
    title: 'shared/header',
    component: Header,
    parameters: {
        backgrounds: {
            default: 'BgBlack',
            values: [
                { name: 'BgBlack', value: '#252836' }
            ]
        }
    }
} as ComponentMeta<typeof Header>;

const HeaderTemplate: ComponentStory<typeof Header> = (args) => <Header {...args}/>
export const common = HeaderTemplate.bind({});

common.args = {
    rightSlot: <Input size={"small"}/>,
    leftSlot: <Typography>Jaegar Resto</Typography>
};