import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Typography} from "./index.tsx";



export default {
    title: 'shared/typography',
    component: Typography,
    parameters:{
        backgrounds:{
            default: 'BgBlack',
            values: [
                {name: 'BgBlack', value: '#252836'}
            ]
        }

    }

} as ComponentMeta<typeof Typography>

const TypographyTemplate: ComponentStory<typeof Typography> = (args) => <Typography {...args}/>

export const PrimarySmall = TypographyTemplate.bind({});
PrimarySmall.args = {
    children: 'Text',
    color: 'primary',
    size: 'small'
}

export const PrimaryMedium = TypographyTemplate.bind({});
PrimaryMedium.args = {
    children: 'Text',
    color: 'primary',
    size: 'medium'
}


export const PrimaryLarge = TypographyTemplate.bind({});
PrimaryLarge.args = {
    children: 'Text',
    color: 'primary',
    size: 'large'
}

export const PrimaryXl = TypographyTemplate.bind({});
PrimaryXl.args = {
    children: 'Text',
    color: 'primary',
    size: 'xl'
}


export const SecondarySmall = TypographyTemplate.bind({});
SecondarySmall.args = {
    children: 'Text',
    color: 'secondary',
    size: 'small'
}

export const SecondaryMedium = TypographyTemplate.bind({});
SecondaryMedium.args = {
    children: 'Text',
    color: 'secondary',
    size: 'medium'
}

export const SecondaryLarge = TypographyTemplate.bind({});
SecondaryLarge.args = {
    children: 'Text',
    color: 'secondary',
    size: 'large'
}

export const SecondaryXl = TypographyTemplate.bind({});
SecondaryXl.args = {
    children: 'Text',
    color: 'secondary',
    size: 'xl'
}