import {clsx} from "clsx";
import {CSSProperties} from "react";
import styles from "./styles.module.scss"

type SkeletonTheme = 'circle' | 'square'

interface SkeletonProps{
    height?: string,
    width?:string,
    border?:string
    classNames?:string
    shape?:SkeletonTheme

}

const Skeleton = (props: SkeletonProps) => {
    const {height,width,border,classNames,shape = "square",...rest} = props

    const style: CSSProperties = {
        height,
        width,
        border
    }
    const className = clsx(styles.skeleton,styles[shape],classNames)

    return (
        <div className={className} {...rest} style={style}/>
    );
};

export default Skeleton;