import { profileAPI } from "../api/api";


const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS'

const initialState = {
    postData: [
        { id: 1, message: 'Dima', LikesCount: 12 },
        { id: 2, message: 'Dasha', LikesCount: 10 },
        { id: 3, message: 'Misha', LikesCount: 11 }
    ],
    profile: null,
    status: ''
}

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const text = { id: 5, message: action.payload, LikesCount: 0 }
            return {
                ...state,
                postData: [...state.postData, text],
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.payload
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.payload
            }
        default:
            return state;
    }

}

export const addPostsCeator = (text) => ({
    type: ADD_POST,
    payload: text
})


export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    payload: profile
})

const setStatus = (status) => ({
    type: SET_STATUS,
    payload: status
})

export default profilePageReducer;

export const getUserProfile = (id) => (dispatch) => {
    profileAPI.getUser(id).then((data) => {
        dispatch(setUserProfile(data))
    });
}

export const getStatus = (id) => (dispatch) => {
    profileAPI.getUserStatus(id).then((data) => {
        // if (!data) data = ''
        dispatch(setStatus(data))
    })
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if(response.data.resultCode === 0) {
            return dispatch(setStatus(status)) 
        }
    })
    
}
