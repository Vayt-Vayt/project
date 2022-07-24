
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

const initionState = {
    users: [
         /* {
           id: 1, 
            name: "Misha", 
            status: "I am boss", 
            location: {sity: 'Minsk', country: 'Jupan'},
            followed: true,
            photo: 'https://i.pinimg.com/736x/11/11/9b/11119b4215f6dd58285129f522c22f23.jpg'
        },
        {
            id: 2, 
            name: "Masha", 
            status: "I am good", 
            location: {sity: 'Moscov', country: 'null'},
            followed: true,
            photo: 'https://i.pinimg.com/736x/11/11/9b/11119b4215f6dd58285129f522c22f23.jpg'
        },        {
            id: 3, 
            name: "Sisha", 
            status: "I am BOSS!!!", 
            location: {sity: 'Vologda', country: 'One'},
            followed: false,
            photo: 'https://i.pinimg.com/736x/11/11/9b/11119b4215f6dd58285129f522c22f23.jpg'
        }, */
    ],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,

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
                // users: [...state.users, ...action.payload]
                users: [ ...action.payload ]
            }
        case SET_CURRENT_PAGE: 
            return {
                ...state,
                currentPage: action.payload
            }
        case SET_TOTAL_COUNT: 
            return {
                ...state,
                totalUserCount: action.payload
            }  
        case TOGGLE_IS_FETCHING: 
            return {
                ...state,
                isFetching: action.payload
            }          
        default:
            return state

    }
}

export default reducerUsers;

export const setUsers = (payload) => ({type: SET_USERS,  payload: payload})
export const follow = (payload) => ({type: FOLLOW, payload: payload})
export const unFollow = (payload) => ({type: UNFOLLOW, payload: payload})
export const setCurrentPage = (payload) => ({type: SET_CURRENT_PAGE, payload: payload})
export const setTotalCount = (payload) => ({type: SET_TOTAL_COUNT, payload: payload})
export const toggleIsFetching = (payload) => ({type: TOGGLE_IS_FETCHING, payload: payload})