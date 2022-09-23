import React from "react";
import './Header.scss';

const Header = () => {
    return (
        <header className='header'>
            <div className='content'>
                <img src="https://efishery.com/wp-content/uploads/2021/10/logo-colored.png"
                     srcSet="https://efishery.com/wp-content/uploads/2021/10/logo-retina-colored.png 2x"
                     alt="eFishery"/>
            </div>
        </header>
    )
}
export default Header;