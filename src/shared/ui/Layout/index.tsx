import {clsx} from "clsx";
import {ReactNode} from "react";

interface LayoutProps{
    header?: ReactNode
    footer?:ReactNode
    children?: ReactNode
    classNames?: string
}
const Layout = (props: LayoutProps) => {
    const {header,footer,children,classNames,...rest} = props
    const className = clsx(classNames)
    return (
        <div className={className} {...rest}>
            {header &&
                <header>
                    {header}
                </header>
            }
            {children}
            {
                footer &&
                <footer>
                    {footer}
                </footer>
            }
        </div>
    );
};

export default Layout;