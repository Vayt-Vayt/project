import { userAPI } from "../api/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING'

const initionState = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const reducerUsers = (state = initionState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => (user.id === action.payload)
                    ? { ...user, followed: true }
                    : user
                )
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => (user.id === action.payload)
                    ? { ...user, followed: false }
                    : user
                )
            }
        case SET_USERS:
            return {
                ...state,
                // users: [...state.users, ...action.payload]
                users: [...action.payload]
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
        case TOGGLE_IS_FOLLOWING:
            return {
                ...state,
                followingInProgress: action.payload
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id)
            }
        default:
            return state

    }
}

export default reducerUsers;

export const setUsers = (payload) => ({ type: SET_USERS, payload: payload })
export const followSucces = (payload) => ({ type: FOLLOW, payload: payload })
export const unFollowSuccess = (payload) => ({ type: UNFOLLOW, payload: payload })
export const setCurrentPage = (payload) => ({ type: SET_CURRENT_PAGE, payload: payload })
export const setTotalCount = (payload) => ({ type: SET_TOTAL_COUNT, payload: payload })
export const toggleIsFetching = (payload) => ({ type: TOGGLE_IS_FETCHING, payload: payload })
export const toggleIsFollowingProgress = (payload, id) => ({ type: TOGGLE_IS_FOLLOWING, payload: payload, id: id })

export const getUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    userAPI.getUsers(currentPage, pageSize).then((data) => {
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items));
        dispatch(setTotalCount(data.totalCount));
    });
}

export const follow = (id) => (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, id));
    userAPI.getFollow(id).then((data) => {
        if (data.resultCode === 0) {
            dispatch(followSucces(id));
        }
        dispatch(toggleIsFollowingProgress(false, id));
    });
}

export const unFollow = (id) => (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, id));
    userAPI.getUnFollow(id).then((data) => {
        if (data.resultCode === 0) {
            dispatch(unFollowSuccess(id));
        }
        dispatch(toggleIsFollowingProgress(false, id));
    });
}

