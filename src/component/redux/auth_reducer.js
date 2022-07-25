import { userAPI } from "../api/api";



const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
   userId: null,
   email: null,
   login:null,
   isAuth: false,
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                 ...action.payload,
                 isAuth: true
            }
        default:
            return state;
    }


}

export const setUserData = (data) => ({
    type: SET_USER_DATA,
    payload: data
})



export default authReducer;

export const getUserAuth = () => (dispatch) => {
    userAPI.getAuth().then((data) => {
        if (data.resultCode === 0) {
         dispatch(setUserData(data.data));
        }
      });
}
