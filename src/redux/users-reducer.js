import {usersAPI} from "../api/api"
import {updateObjectInArray} from "../utils/object-helpers"

const FOLLOW = 'users-reducer/FOLLOW'
const UNFOLLOW = 'users-reducer/UNFOLLOW'
const SET_USERS = 'users-reducer/SET_USERS'
const SET_CURRENT_PAGE = 'users-reducer/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'users-reducer/SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'users-reducer/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users-reducer/TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users,
                    action.userId,
                    "id",
                    {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId,
                    "id",
                    {followed: false}
                )
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state, followingInProgress: action.isFetching ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id)
            }
        }
        default:
            return state;
    }
}

const acceptFollow = (userId) => ({type: FOLLOW, userId})
const acceptUnfollow = (userId) => ({type: UNFOLLOW, userId})
const toggleFollowingProgress = (isFetching, id) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, id})

export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const getUsers = (currentPage, pageSize) => async dispatch => {
    dispatch(toggleIsFetching(true));
    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}
export const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, id))
    let data = await apiMethod(id)
    if (data.resultCode === 0) {
        dispatch(actionCreator(id))
    }
    dispatch(toggleFollowingProgress(false, id))
}
export const follow = id => async dispatch => {
    await followUnfollowFlow(dispatch, id, usersAPI.postFollow.bind(usersAPI), acceptFollow)
}
export const unfollow = id => async dispatch => {
    await followUnfollowFlow(dispatch, id, usersAPI.deleteFollow.bind(usersAPI), acceptUnfollow)
}
export default usersReducer;