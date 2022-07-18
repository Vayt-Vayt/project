import React from 'react';
import {NavLink} from 'react-router-dom'
import classes from './Navbar.module.css'

const Navbar = () => {
  const clas = navData => navData.isActive ? classes.active : classes.item;
  return (
      <nav className={classes.nav}>
          <div className={classes.item}>
            <NavLink to='/profile' className={ clas } >Profile</NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to='/dialogs' className={ clas } >Dialogs</NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to='/news' className={ clas } >News</NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to='/music' className={ clas } >Music</NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to='/setings' className={ clas } >Setings</NavLink>
          </div>
      </nav>
  );
};

export default Navbar;