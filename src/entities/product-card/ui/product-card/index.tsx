import {clsx} from "clsx";
import {ReactNode} from "react";
import {Card, Typography} from "@/shared/ui"
import styles from "./styles.module.scss"

interface ProductCardProps{
    img: string,
    price: string
    title: string,
    classNames?:string,
    extraAction?: ReactNode
}

export const ProductCard = (props: ProductCardProps) => {
    const {img,title,price,classNames,extraAction,...rest} = props


    const className = clsx(styles.productCard,classNames)
    return (
        <Card classNames={className} {...rest}>
            <div className={styles.content}>
                <img src={img} alt="" className={styles.image}/>
                    <Typography as={"h6"} color={"primary"} classNames={styles.title}>
                        {title}
                    </Typography >
                    <div className={styles.cardInfo}>
                        <Typography as={"h6"} color={"primary"} classNames={styles.price}>
                            {`${price}`}
                        </Typography>
                        {extraAction}
                    </div>
            </div>
        </Card>
    );
};
