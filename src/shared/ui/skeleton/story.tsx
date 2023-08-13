import {ComponentMeta, ComponentStory} from "@storybook/react";
import Skeleton from "@/shared/ui/skeleton/index.tsx";



export default {
    title: 'shared/skeleton',
    component: Skeleton,
    parameters:{
        backgrounds:{
            default: 'BgBlack',
            values: [
                {name: 'BgBlack', value: '#252836'}
            ]
        }

    }

} as ComponentMeta<typeof Skeleton>

const SkeletonTemplate: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args}/>

export const skeleton = SkeletonTemplate.bind({});
skeleton.args = {
    width: "100px",
    height: "100px",
    border: "50%"
}
