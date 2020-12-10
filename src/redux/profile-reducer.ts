import {profileAPI, profileAPIProfileType} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStoreType} from "./redux-store";

const ADD_POST = 'profile-reducer/ADD_POST';
const SET_USER_PROFILE = 'profile-reducer/SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'profile-reducer/SET_PROFILE_STATUS';
const DELETE_POST = 'profile-reducer/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'profile-reducer/SAVE_PHOTO_SUCCESS';
const SAVE_PROFILE_INFO = 'profile-reducer/SAVE_PROFILE_INFO';
const SET_SUBMIT_ERROR = 'profile-reducer/SET_SUBMIT_ERROR';
const SET_EDIT_MODE = 'profile-reducer/SET_EDIT_MODE';

type PostsType = { id: number, message: string, likesCount: number }
type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
export type PhotosType = {
    small: string
    large: string
}
export type ProfileType = {
    aboutMe?: string
    contacts?: ContactsType
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName?: string
    userId?: number
    photos: PhotosType
    profileStatus?: string
    submitErrorProf?: string
    editMode?: boolean
}
type InitialStateType = {
    posts: Array<PostsType>
    profile: ProfileType | null
    profileStatus: string,
    submitErrorProf: string,
    editMode: boolean
}
type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
type SetStatusActionType = {
    type: typeof SET_PROFILE_STATUS
    status: string
}
type AddPostActionType = {
    type: typeof ADD_POST
    text: string
}
type DeletePostActionType = {
    type: typeof DELETE_POST
    postId: number
}
type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}
type SaveProfileSuccessActionType = {
    type: typeof SAVE_PROFILE_INFO
    profileData: ProfileType
}

type SetSubmitErrorActionType = {
    type: typeof SET_SUBMIT_ERROR
    text: string
}

type SetEditModeActionType = {
    type: typeof SET_EDIT_MODE
}

let initialState: InitialStateType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'joke', likesCount: 11},
        {id: 3, message: '228', likesCount: 11},
        {id: 4, message: '322', likesCount: 11}
    ],
    profile: null,
    profileStatus: "",
    submitErrorProf: "",
    editMode: false
}
const profileReducer = (state = initialState, action: ActionsTypes):InitialStateType => {
    switch (action.type) {
        case DELETE_POST:
            return {
                ...state, posts: state.posts.filter(p => p.id !== action.postId)
            }
        case ADD_POST: {
            let newPost = {
                id: state.posts[state.posts.length - 1].id + 1,
                message: action.text,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_PROFILE_STATUS: {
            return {...state, profileStatus: action.status}
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        case SAVE_PROFILE_INFO: {
            return {
                ...state, profile: {...state.profile, ...action.profileData},
                submitErrorProf: "",
                editMode: false
            }
        }
        case SET_SUBMIT_ERROR:
            return {
                ...state,
                submitErrorProf: action.text,
                editMode: true
            }
        case SET_EDIT_MODE:
            return {
                ...state,
                editMode: true
            }
        default:
            return state;
    }
}

const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile})

const setStatus = (status: string): SetStatusActionType => ({type: SET_PROFILE_STATUS, status})

export const addPost = (text: string): AddPostActionType => ({type: ADD_POST, text})

export const deletePost = (postId: number): DeletePostActionType => ({type: DELETE_POST, postId})

export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos})

export const saveProfileSuccess = (profileData: ProfileType): SaveProfileSuccessActionType => ({
    type: SAVE_PROFILE_INFO,
    profileData
})

const setSubmitError = (text: string): SetSubmitErrorActionType => ({type: SET_SUBMIT_ERROR, text})

export const setEditMode = (): SetEditModeActionType => ({type: SET_EDIT_MODE})

type ActionsTypes  = SetUserProfileActionType | SetStatusActionType | AddPostActionType | DeletePostActionType
| SavePhotoSuccessActionType | SaveProfileSuccessActionType | SetSubmitErrorActionType | SetEditModeActionType

export const setProfile = (userId: number) : ThunkAction<Promise<void>, AppStoreType, undefined, ActionsTypes> =>
    async (dispatch) => {
    let data = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(data))
}

export const getProfileStatus = (userId:number): ThunkAction<Promise<void>, AppStoreType, undefined, ActionsTypes> =>
    async dispatch => {
    let data = await profileAPI.getStatus(userId)
    if (!data) data = "no data"
    dispatch(setStatus(data))
}

export const updateProfileStatus = (status:string) : ThunkAction<Promise<void>, AppStoreType, undefined, ActionsTypes> =>
    async dispatch => {
    let resultCode = await profileAPI.updateStatus(status)
    if (resultCode === 0) dispatch(setStatus(status))
}

export const savePhoto = (file:any) : ThunkAction<Promise<void>, AppStoreType, undefined, ActionsTypes> =>
    async dispatch => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) dispatch(savePhotoSuccess(response.data.data.photos))
}

export const saveProfile = (profileData: ProfileType) : ThunkAction<Promise<profileAPIProfileType>, AppStoreType, undefined, ActionsTypes> =>
    async (dispatch) => {
    let data = await profileAPI.saveProfile(profileData)
    if (data.resultCode === 0) dispatch(saveProfileSuccess(profileData))
    else dispatch(setSubmitError(data.messages[0]))
    return data
}

export default profileReducer;