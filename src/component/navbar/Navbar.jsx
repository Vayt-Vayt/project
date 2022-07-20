import React from 'react';
import {NavLink} from 'react-router-dom'
import classes from './Navbar.module.css'

const Navbar = (props) => {
  const clas = navData => navData.isActive ? classes.active : classes.item;
  const friends = props.state.myfriends.map(friend => (
    <div className={classes.user} key={friend.id}>
      <img className={classes.icon} alt='icon user' src={friend.icon}/>
        <span>{friend.name}</span>
    </div>
  ))
  
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
          <div className={classes.item}>
            <NavLink to='/friends' className={ clas } >friends</NavLink>
            <div className={classes.userContent}>
              {friends}
            </div>
          </div>
      </nav>
  );
};

export default Navbar;