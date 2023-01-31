import React from 'react';
import classes from "./style/Footer.module.css";

const Footer = () => {
    return (
        <div>
            <footer>
                <div className={classes.footWrapper}>
                  <div className={classes.text}>{new Date().getFullYear()} Copyright Text</div>
                    <div className={classes.myRef}><a href="#"> Content</a></div>

                </div>
            </footer>
        </div>
    );
};

export default Footer;