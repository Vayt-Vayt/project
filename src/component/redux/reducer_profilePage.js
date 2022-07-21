

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const initialState = {
    postData: [
        { id: 1, message: 'Dima', LikesCount: 12 },
        { id: 2, message: 'Dasha', LikesCount: 10 },
        { id: 3, message: 'Misha', LikesCount: 11 }
    ],
    newPostText: ''
}

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const text = { id: 5, message: state.newPostText, LikesCount: 0 }
            return  {
                ...state,
                postData: [...state.postData, text],
                newPostText: ''
            }
             
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.payload
            }
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

