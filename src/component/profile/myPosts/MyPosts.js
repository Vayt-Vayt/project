import React from 'react';
import Posts from './post/Posts';
import classes from './MyPost.module.css'
import { addPostsCeator, postsCeator } from '../../redux/reduser_profilePage';




const MyPosts = (props) => {
    const PostData = props.profilePage.postData
    const PostsElements = PostData.map((post, index) =>
        <Posts
            key={index}
            className={classes.posts}
            message={post.message}
            LikesCount={post.LikesCount}
        />
    )

    let newPostElement = React.createRef()

    const addPosts = (event) => {
        event.preventDefault()
        props.dispatch(addPostsCeator())
    }

    const onPostChange = () => {
        let text = newPostElement.current.value
        props.dispatch(postsCeator(text))
    }

    return (
        <div>
            <div className={classes.myPost}>My post</div>
            <div>
                <h3>New post</h3>
            </div>
            <form action='false' onSubmit={addPosts}>
                <div>
                    <textarea 
                        onChange={onPostChange} 
                        ref={newPostElement}
                        value={props.profilePage.newPostText}
                    />
                </div>
                <button  type='sybmit'>Add post</button>
            </form>
            {PostsElements}
        </div>
    );
};

export default MyPosts;