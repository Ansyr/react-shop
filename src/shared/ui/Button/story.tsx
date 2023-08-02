import type {ComponentMeta, ComponentStory} from '@storybook/react';
import Button from "./index.tsx";
import Plus from "../../ui-svg/plus";


export default {
    title: 'ui-kit/Button',
    component: Button,
    parameters:{
        backgrounds:{
            default: 'BgBlack',
            values: [
                {name: 'BgBlack', value: '#252836'}
            ]
        }

    }

} as ComponentMeta<typeof Button>


const ButtonTemplate: ComponentStory<typeof Button> = (args) => <Button {...args}/>


export const Fill = ButtonTemplate.bind({});
Fill.args = {
    children: 'Click me!',
    theme: 'fill',
    size: "large",
};

export const Line = ButtonTemplate.bind({});

Line.args = {
    children: 'Cancel',
    theme: 'line',
    size: "large",
};


export const LineWithStartIcon = ButtonTemplate.bind({});

LineWithStartIcon.args = {
    children: 'Confirm Payment',
    theme: 'line',
    size: 'medium',
    startIcon: <Plus/>,
}

export const LineWithEndIcon = ButtonTemplate.bind({});

LineWithEndIcon.args = {
    children: 'Confirm Payment',
    theme: 'line',
    size: "medium",
    endIcon: <Plus/>,
}

export const LineIcon = ButtonTemplate.bind({});

LineIcon.args = {
    children: <Plus/>,
    theme: 'line',
    size : "square"
}


export const FillIcon = ButtonTemplate.bind({})

FillIcon.args = {
    children: <Plus/>,
    theme: "fill",
    size: 'square', 
}

