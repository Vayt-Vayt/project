import React from 'react';
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <img alt='логотип страницы' src='https://is1-ssl.mzstatic.com/image/thumb/Purple124/v4/0d/1d/20/0d1d2041-0fa4-cc63-4fce-8a90071aa510/source/512x512bb.jpg' />
        </header>
    );
};

export default Header;