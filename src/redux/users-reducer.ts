import {DeleteFollowType, PostFollowType, usersAPI} from "../api/api"
import {updateObjectInArray} from "../utils/object-helpers"
import {PhotosType} from "./profile-reducer";
import {Dispatch} from "redux";

const FOLLOW = 'users-reducer/FOLLOW'
const UNFOLLOW = 'users-reducer/UNFOLLOW'
const SET_USERS = 'users-reducer/SET_USERS'
const SET_CURRENT_PAGE = 'users-reducer/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'users-reducer/SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'users-reducer/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users-reducer/TOGGLE_IS_FOLLOWING_PROGRESS'

export type UserType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: PhotosType
    status: string
    followed: boolean
}
type AcceptFollowActionType = {
    type: typeof FOLLOW
    userId: number
}
type AcceptUnfollowActionType = {
    type: typeof UNFOLLOW
    userId: number
}
type ToggleFollowProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    id: number
}

type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UserType>
}

type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
type SetTotalUserCount = {
    type: typeof SET_TOTAL_USERS_COUNT
    count: number
}
type ToggleIsFetching = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>,
};
type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: any): InitialStateType => {
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

const acceptFollow = (userId: number): AcceptFollowActionType => ({type: FOLLOW, userId})
type AcceptFollowType = typeof acceptFollow

const acceptUnfollow = (userId: number): AcceptUnfollowActionType => ({type: UNFOLLOW, userId})
type AcceptUnfollowType = typeof acceptUnfollow

const toggleFollowingProgress = (isFetching: boolean, id: number): ToggleFollowProgressActionType =>
    ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, id})

export const setUsers = (users: Array<UserType>): SetUsersActionType => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUserCount => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount
})
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetching => ({type: TOGGLE_IS_FETCHING, isFetching})

export const getUsers = (currentPage: number, pageSize: number) => async (dispatch: (arg0: { type: "users-reducer/TOGGLE_IS_FETCHING" | "users-reducer/SET_USERS" | "users-reducer/SET_TOTAL_USERS_COUNT"; isFetching?: boolean; users?: UserType[]; count?: number; }) => void) => {
    dispatch(toggleIsFetching(true));
    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}
export const followUnfollowFlow = async (dispatch: Dispatch<AcceptFollowActionType |
                                             AcceptUnfollowActionType |
                                             ToggleFollowProgressActionType>,
                                         id: number,
                                         apiMethod: PostFollowType | DeleteFollowType,
                                         actionCreator: AcceptFollowType |
                                             AcceptUnfollowType) => {

    dispatch(toggleFollowingProgress(true, id))
    let data = await apiMethod(id)
    if (data.resultCode === 0) {
        dispatch(actionCreator(id))
    }
    dispatch(toggleFollowingProgress(false, id))
}
export const follow = (id: number) => async (dispatch: Dispatch<AcceptFollowActionType |
    AcceptUnfollowActionType |
    ToggleFollowProgressActionType>) => {
    await followUnfollowFlow(dispatch, id, usersAPI.postFollow.bind(usersAPI), acceptFollow)
}
export const unfollow = (id: number) => async (dispatch: Dispatch<AcceptFollowActionType |
    AcceptUnfollowActionType |
    ToggleFollowProgressActionType>) => {
    await followUnfollowFlow(dispatch, id, usersAPI.deleteFollow.bind(usersAPI), acceptUnfollow)
}
export default usersReducer;