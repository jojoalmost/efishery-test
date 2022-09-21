import React from "react";
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <img src="https://efishery.com/wp-content/uploads/2021/10/logo-colored.png"
                     srcSet="https://efishery.com/wp-content/uploads/2021/10/logo-retina-colored.png 2x"
                     alt="eFishery"/>
            </div>
        </header>
    )
}
export default Header;