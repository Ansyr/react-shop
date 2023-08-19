import MainLayout from "@/pages/homepage/ui/main-layout";
import {Input, Typography} from "@/shared/ui";
import Container from "@/shared/ui/Container";
import Header from "@/shared/ui/header";
import styles from "./styles.module.scss"
const HomePage = () => {

    return (
        <div className={styles.homePage}>
           <MainLayout/>
            <Container>
                <Header rightSlot={<Input size={"medium"}/>} leftSlot={<Typography as={"h2"} size={"xl"}>Jaegar Resto</Typography>}>

                </Header>
            </Container>
        </div>
    );
};

export default HomePage;