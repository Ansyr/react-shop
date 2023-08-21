import MainHeader from "@/pages/homepage/ui/main-header";
import ProductList from "@/pages/homepage/ui/product-list";
import Button from "@/shared/ui/button";
import Container from "@/shared/ui/Container";
import Layout from "@/shared/ui/Layout";
import styles from "./styles.module.scss"
const HomePage = () => {

    return (
        <Layout header={<MainHeader classNames={styles.mainHeader}/>} classNames={styles.mainLayout}>
            <Container>
                <ProductList extraForItems={<Button size={"small"} color={"secondary"} theme={"line"}>
                    add
                </Button>}/>
            </Container>
        </Layout>
    );
};

export default HomePage;