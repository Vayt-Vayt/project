import React from 'react';
import Posts from './post/Posts';
import classes from './MyPost.module.css'
import { reduxForm } from 'redux-form';
import MyPostForm from './post/MyPostForm';




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


    const addPost = (value) => {
        props.addPostsCeator(value.post)
    }

    return (
        <div>
            <div className={classes.myPost}>My post</div>
            <div>
                <h3>New post</h3>
            </div>
                <div>
                    <ReducerMyPostForm onSubmit={addPost}/>
                </div>
            {PostsElements}
        </div>
    );
};

export default MyPosts;

const ReducerMyPostForm = reduxForm({
    form: 'postForm'
})(MyPostForm)