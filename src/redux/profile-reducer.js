import {profileAPI} from "../api/api";

const ADD_POST = 'profile-reducer/ADD_POST';
const SET_USER_PROFILE = 'profile-reducer/SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'profile-reducer/SET_PROFILE_STATUS';
const DELETE_POST = 'profile-reducer/DELETE_POST';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'joke', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    profile: null,
    profileStatus: "",
};

const profileReducer = (state = initialState, action) => {
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
        default:
            return state;
    }
}


const setUserProfile = profile => ({type: SET_USER_PROFILE, profile})
const setStatus = status => ({type: SET_PROFILE_STATUS, status})

export const addPost = text => ({type: ADD_POST, text})

export const deletePost = postId => ({type: DELETE_POST, postId})

export const setProfile = userId => dispatch => {
    profileAPI.getProfile(userId).then(data => {
        dispatch(setUserProfile(data))
    })
}
export const getProfileStatus = userId => dispatch => {
    profileAPI.getStatus(userId).then(data => {
        if (data === "") data = "no data"
        dispatch(setStatus(data))
    })
}
export const updateProfileStatus = status => dispatch => {
    profileAPI.updateStatus(status).then(resultCode => {
        if (resultCode === 0) dispatch(setStatus(status))
    })
}
export default profileReducer;