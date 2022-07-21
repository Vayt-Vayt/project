
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

const initionState = {
    users: [
         /* {
           id: 1, 
            fullName: "Misha", 
            status: "I am boss", 
            location: {sity: 'Minsk', country: 'Jupan'},
            followed: true,
            pgotoUrl: 'https://i.pinimg.com/736x/11/11/9b/11119b4215f6dd58285129f522c22f23.jpg'
        },
        {
            id: 2, 
            fullName: "Masha", 
            status: "I am good", 
            location: {sity: 'Moscov', country: 'null'},
            followed: true,
            pgotoUrl: 'https://i.pinimg.com/736x/11/11/9b/11119b4215f6dd58285129f522c22f23.jpg'
        },        {
            id: 3, 
            fullName: "Sisha", 
            status: "I am BOSS!!!", 
            location: {sity: 'Vologda', country: 'One'},
            followed: false,
            pgotoUrl: 'https://i.pinimg.com/736x/11/11/9b/11119b4215f6dd58285129f522c22f23.jpg'
        }, */
    ],

}

const reducerUsers = (state = initionState, action) => {
    switch (action.type) {
        case FOLLOW: 
            return {
                ...state,
                users: state.users.map( user => (user.id === action.payload) 
                    ? {...user, followed: true}
                    : user
                )
            }
        case UNFOLLOW: 
        return {
            ...state,
            users: state.users.map( user => (user.id === action.payload) 
                ? {...user, followed: false}
                : user
            )
        }
        case SET_USERS: 
            return {
                ...state,
                users: [...state.users, ...action.payload]
            }
        default:
            return state

    }
}

export default reducerUsers;

export const setUsersAC = (payload) => ({type: SET_USERS,  payload: payload})
export const followAC = (payload) => ({type: FOLLOW, payload: payload})
export const unFollowAC = (payload) => ({type: UNFOLLOW, payload: payload})