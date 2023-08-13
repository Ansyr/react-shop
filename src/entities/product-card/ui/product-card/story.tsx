import {ComponentMeta, ComponentStory} from "@storybook/react";
import {ProductCard} from "@/entities/product-card/ui";

export default {
    title: 'entities/productCard',
    component: ProductCard,
    parameters:{
        backgrounds:{
            default: 'BgBlack',
            values: [
                {name: 'BgBlack', value: '#252836'}
            ]
        }

    },
    decorators: [
        (Story) => (
            <div style={{ margin: '3em' }}>
                <Story />
            </div>
        )
    ]

} as ComponentMeta<typeof ProductCard>

const ProductCardTemplate: ComponentStory<typeof ProductCard> = (args) => <ProductCard {...args}/>

export const defaultCard = ProductCardTemplate.bind({});

defaultCard.args = {
    img: "https://i.ibb.co/wgshsGM/Image-1.png",
    price: '$ 2.24',
    title: "Spicy seasoned seafood noodles",
}



