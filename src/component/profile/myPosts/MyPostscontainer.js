import { connect } from 'react-redux';
import { addPostsCeator, postsCeator } from '../../redux/reducer_profilePage';
import MyPosts from './MyPosts';
            

const mapStateToProps = (state) => ({
    newPostText: state.profilePageReducer.newPostText,
    postData:state.profilePageReducer.postData, 
})

const mapDispatchToProps = (dispatch) => ({
    updateNewPostText: (text) => {
        dispatch(postsCeator(text))
    },
    addPost: () => {
        dispatch(addPostsCeator())
    },
})

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;