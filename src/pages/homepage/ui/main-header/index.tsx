import {Input, Typography} from "@/shared/ui";
import Header from "@/shared/ui/header";

interface MainHeaderProps{
    classNames?: string
}

const MainHeader = (props: MainHeaderProps) => {
    const {classNames} = props
    return (
        <Header  leftSlot={
            <div>
                <Typography as={"h1"} size={"xl"}>
                    Jaegar Resto
                </Typography>
                <Typography>
                    {new Date().getFullYear() }
                </Typography>
            </div>
        }
                rightSlot={
            <Input size={"small"}/>
        } classNames={classNames}>
        </Header>
    );
};

export default MainHeader;