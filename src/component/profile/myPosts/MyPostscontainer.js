import { connect } from 'react-redux';
import { addPostsCeator } from '../../redux/reducer_profilePage';
import MyPosts from './MyPosts';
            

const mapStateToProps = (state) => ({
    newPostText: state.profilePageReducer.newPostText,
    postData:state.profilePageReducer.postData, 
})



const MyPostsContainer = connect(mapStateToProps, { addPostsCeator })(MyPosts)

export default MyPostsContainer;