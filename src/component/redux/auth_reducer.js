import { authAPI } from "../api/api";



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
            }
        default:
            return state;
    }


}

export const setUserData = ( userId, email, login, isAuth ) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})



export default authReducer;

export const getUserAuth = () => (dispatch) => {
    authAPI.getAuth().then((data) => {
        if (data.resultCode === 0) {
            const {id, login, email} = data.data
         dispatch(setUserData( id, email, login, true ));
        }
      });
}
export const login = (email, password, rememberMe) => (dispatch) => {
    console.log(email, password, rememberMe, '11');
     authAPI.postAuth(email, password, rememberMe).then(response => {
        if (response.resultCode === 0) {
            dispatch(getUserAuth())
        }
    }) 
}

export const logout = () => (dispatch) => {
     authAPI.logout().then(response => {
        if (response.resultCode === 0) {
            dispatch(setUserData(null, null, null, false))
        }
    }) 
}