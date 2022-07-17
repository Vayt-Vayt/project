import React from 'react';
import classes from './Posts.module.css'

const Posts = () => {
    return (
        <div className={classes.posts}>
            <div className={classes.item}>
                <img 
                    src='https://avatarko.ru/img/kartinka/8/ogon_7817.jpg' 
                    alt='аватар' 
                />
                Post1
                <div>
                    <span>Like</span>
                </div>
            </div>
        </div>
    );
};

export default Posts;