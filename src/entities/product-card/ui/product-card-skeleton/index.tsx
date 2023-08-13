import Skeleton from "@/shared/ui/skeleton";
import styles from "./styles.module.scss"

const CardSkeleton = () => {
    return (
        <div className={styles.cardSkeleton}>
            <div className={styles.content}>
               <Skeleton shape={"circle"} width={"122px"} height={"122px"}/>
                <div className={styles.cardInfo}>
                    <Skeleton classNames={styles.title} width={"100%"} height={"30px"}/>
                </div>
                <div className={styles.cardInfo}>
                    <Skeleton classNames={styles.price} width={"30%"} height={"20px"}/>
                    <Skeleton classNames={styles.price} width={"50%"} height={"30px"}/>
                </div>
            </div>
        </div>
    );
};

export default CardSkeleton;