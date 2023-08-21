import {clsx} from "clsx";
import {ReactNode} from "react";
import Portal from "@/shared/ui/portal";
import styles from "./styles.module.scss"

interface ModalProps{
    children: ReactNode
    isOpen?:boolean
}

const Modal = (props: ModalProps) => {
    const {children,isOpen,...rest} = props

    const className = clsx(styles.modal, {[styles.isOpen]: isOpen})
    return (
     <Portal>
         <div className={className} {...rest}>
             <div className={styles.modalContent}>{children}</div>
         </div>
     </Portal>
    );
};

export default Modal;