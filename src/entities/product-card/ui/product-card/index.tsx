import {clsx} from "clsx";
import {Card, Typography} from "@/shared/ui"
import Button from "@/shared/ui/button";
import styles from "./styles.module.scss"

interface ProductCardProps{
    img: string,
    price: string
    title: string,
    availableCount: string
    classNames?:string
}

export const ProductCard = (props: ProductCardProps) => {
    const {img,title,price,classNames,...rest} = props
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
                        <Button size={"small"} color={"secondary"} theme={"line"}>add</Button>
                    </div>
            </div>
        </Card>
    );
};
