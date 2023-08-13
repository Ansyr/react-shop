import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Card} from "@/shared/ui";


export default {
    title: 'shared/product-card',
    component: Card,
    parameters:{
        backgrounds:{
            default: 'BgBlack',
            values: [
                {name: 'BgBlack', value: '#252836'}
            ]
        }

    }

} as ComponentMeta<typeof Card>


const CardTemplate: ComponentStory<typeof Card> = (args) => <Card {...args}/>


export const card = CardTemplate.bind({})

card.args = {
    children: "1231"
}
