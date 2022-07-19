import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './DialogItem.module.css'

const DialogItem = (props) => {
    const clas = (navData) =>
      navData.isActive ? classes.active : classes.dialog;
    return (
      <div className={classes.dialog}>
        <NavLink to={`/dialogs/${props.id}`} className={clas}>
          {props.name}
        </NavLink>
      </div>
    );
  };

export default DialogItem;