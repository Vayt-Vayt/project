

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
    postData: [
        { id: 1, message: 'Dima', LikesCount: 12 },
        { id: 2, message: 'Dasha', LikesCount: 10 },
        { id: 3, message: 'Misha', LikesCount: 11 }
    ],
    newPostText: '',
    profile: null
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
        case SET_USER_PROFILE:
            return {
                ...state,
               profile : action.payload
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

export const setUserProfile = (profile) => ({
    type:SET_USER_PROFILE,
    payload: profile
})

export default profilePageReducer;

