

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';


const profilePageReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            const text = { id: 5, message: state.newPostText, LikesCount: 0 }
            state.postData.push(text)
            state.newPostText = ''
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.payload;
            return state;
        default:
            return state;
    }

}

export const addPostsCeator = () => ({
    type: ADD_POST
})

export const postsCeator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, 
    payload: text
})


export default profilePageReducer;

