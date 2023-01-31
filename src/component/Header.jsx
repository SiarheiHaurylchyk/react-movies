import React from 'react';
import classes from "./style/Header.module.css";

const Header = (props) => {
    return (
        <>
            <nav>
                <div className={classes.navWrapper}>
                    <a className={classes.brandLogo} href="#">Logo</a>



                    <ul className={classes.myRef}>
                        <li><a href="#">Component</a></li>
                        <li><a href="#">Component</a></li>
                        <li><a href="#">Component</a></li>
                    </ul>

                </div>
            </nav>
        </>
    );
};

export default Header;