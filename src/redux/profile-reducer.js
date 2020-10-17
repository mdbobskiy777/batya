import {profileAPI} from "../api/api";
const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'joke', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    profile: null,
    profileStatus: "",
/*
    fake:10
*/

};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
/*
        case "FAKE": return {...state, fake: state.fake + 1}
*/
        case ADD_POST: {
            let newPost = {
                id: 5,
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


const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
const setStatus = (status) => ({type: SET_PROFILE_STATUS, status})

export const addPost = (text) => ({type: ADD_POST, text})

export const setProfile = (userId) => dispatch => {
    profileAPI.getProfile(userId).then(data => {
        dispatch(setUserProfile(data))
    })

}

export const getProfileStatus = (userId) => dispatch => {
    profileAPI.getStatus(userId).then(data => {
        if(data==="") data = "no data"
        dispatch(setStatus(data))
    })
}
export const updateProfileStatus = (status) => dispatch => {
    profileAPI.updateStatus(status).then(resultCode => {
        if (resultCode === 0) dispatch(setStatus(status))
    })
}


export default profileReducer;