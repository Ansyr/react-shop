import {clsx} from "clsx";
import {ReactNode, useState} from "react";
import styles from './styles.module.scss'

interface SelectOptions {
    name: string,
    key: string | number
}

interface SelectProps {
    options: SelectOptions[]
    defaultValue: string
    icon?: ReactNode,
    classNames?: string
}

export const Select = (props : SelectProps) => {
    const {options, icon,defaultValue,classNames} = props
    const [open, setOpen] = useState(false)
    const [select,setSelect] = useState(defaultValue)

    const handleOptionClick = (name: string) => {
        setSelect(name);
        setOpen(false);
    };
    return (
        <div className={clsx(styles.select,classNames)} onClick={() => setOpen(!open)} >
            <div className={styles.label}>
                {icon && <i className={styles.icon}>
                    {icon}
                </i>}

                <span>
                    {select}
                </span>
            </div>
            {
                open && <div className={styles.selectItem} onChange={() => console.log(123)}>
                    <ul className={styles.list} >
                        {options.map(({name, key}) =>
                            <li key={key} onClick={() => handleOptionClick(name)}>
                                {name}
                            </li>
                        )}

                    </ul>
                </div>
            }

        </div>

    );
};
