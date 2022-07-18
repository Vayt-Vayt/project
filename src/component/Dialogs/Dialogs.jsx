import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                <div className={classes.dialog}>
                       <NavLink to='/dialogs/1'>Name1</NavLink> 
                    </div>
                    <div className={classes.dialog}>
                       <NavLink to='/dialogs/2'>Name2</NavLink> 
                    </div>
                 <div className={classes.dialog}>
                 <NavLink to='/dialogs/3'>Name3</NavLink> 
                 </div>
            </div> 
             <div className={classes.messages}>
                <div className={classes.message}>
                    hellov
                </div>
                <div className={classes.message}>
                    hellov
                </div>
                <div className={classes.message}>
                    hellov
                </div>
             </div>
        </div>
    );
};

export default Dialogs;