import {Card, Typography} from "@/shared/ui"
import styles from "./styles.module.scss"

interface ProductCardProps{
    img: string,
    price: string
    title: string,
    availableCount: string
    classNames?:string
}

export const ProductCard = (props: ProductCardProps) => {
    const {img,title,price,availableCount,classNames,...rest} = props
    return (
        <Card classNames={styles.productCard} {...rest}>
            <div className={styles.content}>
                <img src={img} alt="" className={styles.image}/>
                <div className={styles.productInfo}>
                    <Typography as={"h6"} color={"primary"} classNames={styles.title}>
                        Spicy seasoned seafood noodles
                    </Typography >
                    <Typography as={"h6"} color={"primary"} classNames={styles.price}>
                        {`$ ${price}`}
                    </Typography>
                    <Typography as={"h6"} color={"secondary"} classNames={styles.price}>
                        {availableCount} Bowls available
                    </Typography>
                </div>

            </div>

        </Card>
    );
};
