import React from 'react';
import Posts from './post/Posts';
import classes from './MyPost.module.css'

const MyPosts = (props) => {
    const PostData = props.postData
    const PostsElements = PostData.map((post, index) =>
        <Posts
            key={index}
            className={classes.posts}
            message={post.message}
            LikesCount={post.LikesCount}
        />
    )

    let newPostElement = React.createRef()

    const addPost = (event) => {
        event.preventDefault()
        let text = newPostElement.current.value
        alert(text)
    }

    return (
        <div>
            <div className={classes.myPost}>My post</div>
            <div>
                <h3>New post</h3>
            </div>
            <form action='false' onSubmit={addPost}>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <button type='sybmit'>Add post</button>
            </form>
            {PostsElements}
        </div>
    );
};

export default MyPosts;