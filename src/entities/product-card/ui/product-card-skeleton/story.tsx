import {ComponentMeta, ComponentStory} from "@storybook/react";
import ProductCardSkeleton from "@/entities/product-card/ui/product-card-skeleton/index.tsx";

export default {
    title: 'entities/productCardSkeleton',
    component: ProductCardSkeleton,
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

} as ComponentMeta<typeof ProductCardSkeleton>

const ProductCardSkeletonTemplate: ComponentStory<typeof ProductCardSkeleton> = () => <ProductCardSkeleton/>

export const defaultCardSkeleton = ProductCardSkeletonTemplate.bind({});

defaultCardSkeleton.args = {}

