import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {Input} from "@/shared/ui";
import {Plus} from "@/shared/ui/ui-svg";




export default {
    title: 'shared/Input',
    component: Input,
    parameters:{
        backgrounds:{
            default: 'BgBlack',
            values: [
                {name: 'BgBlack', value: '#252836'}
            ]
        }

    }

} as ComponentMeta<typeof Input>



const InputTemplate: ComponentStory<typeof  Input> = (args) => <Input {...args}/>

export const middle = InputTemplate.bind({})
middle.args = {
    size: "medium",
}
export const square = InputTemplate.bind({})
square.args = {
    size: "square",
    maxLength: 1
}




export const icon = InputTemplate.bind({})
icon.args = {
    placeholder: "This is Placeholder",
    icon: <Plus/>
}



