import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Select} from "@/shared/ui";
import {ArrowDown} from "@/shared/ui/ui-svg";





export default {
    title: 'shared/Select',
    component: Select,
    parameters:{
        backgrounds:{
            default: 'BgBlack',
            values: [
                {name: 'BgBlack', value: '#252836'}
            ]
        }

    }

} as ComponentMeta<typeof Select>



const SelectTemplate: ComponentStory<typeof Select> = (args) => <Select {...args}/>


export const common = SelectTemplate.bind({});

common.args = {
    options : [
        {
            name: "1",
            key: 1
        },
        {
            name: "2",
            key: 2
        },
        {
            name: "3",
            key: 3
        }
    ],
    defaultValue: '2',
}


export const icon = SelectTemplate.bind({})

icon.args = {
    options : [
        {
            name: "1",
            key: 1
        },
        {
            name: "2",
            key: 2
        },
        {
            name: "3",
            key: 3
        }
    ],
    defaultValue: "1",
    icon: <ArrowDown/>
}

