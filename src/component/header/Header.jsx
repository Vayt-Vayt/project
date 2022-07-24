import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css'

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img alt='логотип страницы' src='https://is1-ssl.mzstatic.com/image/thumb/Purple124/v4/0d/1d/20/0d1d2041-0fa4-cc63-4fce-8a90071aa510/source/512x512bb.jpg' />
            <div className={classes.loginBlock}>
                {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>
            }
            </div>
        </header>
    );
};

export default Header;