import React from 'react';
import Posts from './post/Posts';
import classes from './MyPost.module.css'

const MyPosts = () => {
    const PostData = [
        { id: 1, message: 'Dima', LikesCount: 12 },
        { id: 2, message: 'Dasha', LikesCount: 10 },
        { id: 3, message: 'Misha', LikesCount: 11 }
    ]

    const PostsElements = PostData.map((post, index) =>
        <Posts
            key={index}
            className={classes.posts}
            message={post.message}
            LikesCount={post.LikesCount}
        />
    )

    return (
        <div>
            <div className={classes.myPost}>My post</div>
            <div>
                <h3>New post</h3>
            </div>
            <form action='false'>
                <div>
                    <textarea></textarea>
                </div>
                <button type='sybmit'>Add post</button>
            </form>
            {PostsElements}
        </div>
    );
};

export default MyPosts;