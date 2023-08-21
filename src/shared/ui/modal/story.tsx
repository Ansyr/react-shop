import type {ComponentMeta, ComponentStory} from '@storybook/react';
import Button from "@/shared/ui/button";
import Modal from "@/shared/ui/modal/index.tsx";


export default {
    title: 'shared/modal',
    component: Modal,
    parameters:{
        backgrounds:{
            default: 'BgBlack',
            values: [
                {name: 'BgBlack', value: '#252836'}
            ]
        }

    }

} as ComponentMeta<typeof Modal>


const ModalTemplate: ComponentStory<typeof Modal> = (args) => <Modal {...args}/>


export const commonModal = ModalTemplate.bind({});

commonModal.args = {
    children: <Button>123</Button>,
    isOpen: true
}