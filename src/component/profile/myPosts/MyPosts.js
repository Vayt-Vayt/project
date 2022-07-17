import React from 'react';
import Posts from './post/Posts';

const MyPosts = () => {
    return (
        <div>
             <div>My post</div>
        <div>New post</div>
        <Posts message={'yous'}/>
        </div>
    );
};

export default MyPosts;