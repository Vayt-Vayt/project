import React from 'react';
import classes from './Posts.module.css'

const Posts = (props) => {
    return (
        <div className={classes.posts}>
            <div className={classes.item}>
                <img 
                    src='https://avatarko.ru/img/kartinka/8/ogon_7817.jpg' 
                    alt='аватар' 
                />
                <h3>{props.message}</h3>
                <div>
                    <span>Likes: {props.LikesCount}</span>
                </div>
            </div>
        </div>
    );
};

export default Posts;