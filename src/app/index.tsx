import "./styles/index.scss"
import Button from "../shared/ui/Button";
import Plus from "../shared/ui-svg/plus";
import Drawer from "../shared/ui/sidebar";
import Home from "../shared/ui-svg/home";
import Discount from "../shared/ui-svg/discount";
import Sidebar from "../shared/ui/sidebar";
import Store from "../shared/ui-svg/store";

const App = () => {
  const items = [
        {
          value: "Home",
          href: "#home",
          icon: <Button theme={"clear"} size={"square"}>{<Home/>}</Button>,
        },
        {
          value: "Inbox",
          href: "#inbox",
          icon: <Button theme={"clear"} size={"square"}>{<Discount/>}</Button>,
        },
        {
          value: "Home",
          href: "#home",
          icon: <Button theme={"clear"} size={"square"}>{<Home/>}</Button>,
        },
        {
          value: "Inbox",
          href: "#inbox",
          icon: <Button theme={"clear"} size={"square"}>{<Discount/>}</Button>,
        }
      ]
  return (
    <div className={"app"}>
      <Sidebar items={items} header={<Store/>}/>
    </div>
  )
}

export default App
