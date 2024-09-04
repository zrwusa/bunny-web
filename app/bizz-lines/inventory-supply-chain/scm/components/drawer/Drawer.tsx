import {HTMLProps, ReactNode} from "react";
import styles from "./Drawer.module.css";


export interface DrawerProps extends HTMLProps<HTMLDivElement> {
    children?: ReactNode;
    isOpen: boolean;
    direction?: 'left' | 'right'
}

export const Drawer = ({children, isOpen = true, direction = 'left', ...rest}: DrawerProps) => {

    return (
        <div className={`${styles.drawerContainer} ${!isOpen ? styles.containerHidden : ''}`} {...rest}>
            <div
                className={`${styles.drawer} ${!isOpen ? direction === "left" ? styles.drawerHiddenLeft : styles.drawerHiddenRight : ''}`}>
                {children}
            </div>
        </div>
    )
}

export default Drawer;