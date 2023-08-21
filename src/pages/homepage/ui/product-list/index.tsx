import {clsx} from "clsx";
import {ReactNode} from "react";
import {ProductCard} from "@/entities/product-card/ui";
import styles from "./styles.module.scss"

interface ProductListProps {
    classNames?: string,
    extraForItems: ReactNode
}

const items = [
    {
        img: "https://i.ibb.co/wgshsGM/Image-1.png",
        price: '$ 2.24',
        title: "Spicy seasoned seafood noodles",
        id: "1"
    },
    {
        img: "https://i.ibb.co/wgshsGM/Image-1.png",
        price: '$ 2.24',
        title: "Spicy seasoned seafood noodles",
        id: "2"
    },
    {
        img: "https://i.ibb.co/wgshsGM/Image-1.png",
        price: '$ 2.24',
        title: "Spicy seasoned seafood noodles",
        id: "3"
    },
    {
        img: "https://i.ibb.co/wgshsGM/Image-1.png",
        price: '$ 2.24',
        title: "Spicy seasoned seafood noodles",
        id: "4"
    },
    {
        img: "https://i.ibb.co/wgshsGM/Image-1.png",
        price: '$ 2.24',
        title: "Spicy seasoned seafood noodles",
        id: "5"
    },
    {
        img: "https://i.ibb.co/wgshsGM/Image-1.png",
        price: '$ 2.24',
        title: "Spicy seasoned seafood noodles",
    },
    {
        img: "https://i.ibb.co/wgshsGM/Image-1.png",
        price: '$ 2.24',
        title: "Spicy seasoned seafood noodles",
        id: "6"
    },
    {
        img: "https://i.ibb.co/wgshsGM/Image-1.png",
        price: '$ 2.24',
        title: "Spicy seasoned seafood noodles",
        id: "7"
    },
    {
        img: "https://i.ibb.co/wgshsGM/Image-1.png",
        price: '$ 2.24',
        title: "Spicy seasoned seafood noodles",
        id: "8"
    },
    {
        img: "https://i.ibb.co/wgshsGM/Image-1.png",
        price: '$ 2.24',
        title: "Spicy seasoned seafood noodles",
        id: "9"
    },
    {
        img: "https://i.ibb.co/wgshsGM/Image-1.png",
        price: '$ 2.24',
        title: "Spicy seasoned seafood noodles",
        id: "10"
    },
    {
        img: "https://i.ibb.co/wgshsGM/Image-1.png",
        price: '$ 2.24',
        title: "Spicy seasoned seafood noodles",
        id: "11"
    },
    {
        img: "https://i.ibb.co/wgshsGM/Image-1.png",
        price: '$ 2.24',
        title: "Spicy seasoned seafood noodles",
        id: "12"
    },
    {
        img: "https://i.ibb.co/wgshsGM/Image-1.png",
        price: '$ 2.24',
        title: "Spicy seasoned seafood noodles",
        id: "13"
    },
    {
        img: "https://i.ibb.co/wgshsGM/Image-1.png",
        price: '$ 2.24',
        title: "Spicy seasoned seafood noodles",
        id: "14"
    },
    {
        img: "https://i.ibb.co/wgshsGM/Image-1.png",
        price: '$ 2.24',
        title: "Spicy seasoned seafood noodles",
        id: "15"
    },
    {
        img: "https://i.ibb.co/wgshsGM/Image-1.png",
        price: '$ 2.24',
        title: "Spicy seasoned seafood noodles",
        id: "16"
    },
    {
        img: "https://i.ibb.co/wgshsGM/Image-1.png",
        price: '$ 2.24',
        title: "Spicy seasoned seafood noodles",
        id: "17"
    },
    {
        img: "https://i.ibb.co/wgshsGM/Image-1.png",
        price: '$ 2.24',
        title: "Spicy seasoned seafood noodles",
        id: "18"
    },
    {
        img: "https://i.ibb.co/wgshsGM/Image-1.png",
        price: '$ 2.24',
        title: "Spicy seasoned seafood noodles",
        id: "19"
    }
]

const ProductList = (props: ProductListProps) => {
    const {classNames, extraForItems, ...rest} = props

    const className = clsx(styles.productList, classNames)
    return (
        <div className={className} {...rest}>
            {items.map(({img, price, title}, id) => <ProductCard img={img} title={title} price={price} key={id}
                                                                 extraAction={extraForItems}/>)}
        </div>
    );
};

export default ProductList;