import React from 'react';
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
              <a href='null'>Profile</a>
            </div>
            <div className={classes.item}>
              <a href='null'>Profile</a>
            </div>
            <div className={classes.item}>
              <a href='null'>Profile</a>
            </div>
        </nav>
    );
};

export default Navbar;