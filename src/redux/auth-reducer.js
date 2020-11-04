import {authAPI, securityAPI} from "../api/api";

const SET_USER_DATA = 'auth-reducer/SET_USER_DATA';
const SET_SUBMIT_ERROR = "auth-reducer/SET_SUBMIT_ERROR"
const GET_CAPTCHA_URL_SUCCESS = "auth-reducer/GET_CAPTCHA_URL_SUCCESS"

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    submitError: "",
    captchaURL: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        case SET_SUBMIT_ERROR:
            return {
                ...state,
                submitError: action.text
            }
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaURL: action.url
            }
        default:
            return state;
    }
}


const setAuthUserData = (userId, email, login, isAuth, submitError) => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isAuth, submitError}
})
const getCaptchaURLSuccess = (url) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    url
})
const setSubmitError = (text) => ({type: SET_SUBMIT_ERROR, text})

export const setAuth = () => async dispatch => {
    let data = await authAPI.auth()
    if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setAuthUserData(id, email, login, true, ''))
    }
}
export const login = ({email, password, rememberMe,captcha}) => async dispatch => {
    let response = await authAPI.login({email, password, rememberMe,captcha})
    if (response.resultCode === 0) {
        dispatch(setAuth());
    } else {
        if(response.resultCode === 10) {
            dispatch(getCaptchaURL())
        }
        dispatch(setSubmitError(response.messages[0]))
    }
}
export const getCaptchaURL = () => async dispatch => {
    let response = await securityAPI.getCaptchaURL()
    const captchaURL = response.url
    dispatch(getCaptchaURLSuccess(captchaURL))
}
export const logout = () => async dispatch => {
    let resultCode = await authAPI.logout()
    if (resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false, ''));
    }
}
export default authReducer;