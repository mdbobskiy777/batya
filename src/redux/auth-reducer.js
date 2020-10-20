import {authAPI} from "../api/api";

const SET_USER_DATA = 'auth-reducer/SET_USER_DATA';
const SET_SUBMIT_ERROR = "auth-reducer/SET_SUBMIT_ERROR"

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    submitError: ""
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
        default:
            return state;
    }
}


const setAuthUserData = (userId, email, login, isAuth, submitError) => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isAuth, submitError}
})
const setSubmitError = (text) => ({type: SET_SUBMIT_ERROR, text})
export const setAuth = () => async dispatch => {
    let data = await authAPI.auth()
    if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setAuthUserData(id, email, login, true, ''))
    }
}
export const login = ({email, password, rememberMe}) => async dispatch => {
    let response = await authAPI.login({email, password, rememberMe})
    if (response.resultCode === 0) {
        dispatch(setAuth());
    } else {
        dispatch(setSubmitError(response.messages[0]))
    }
}
export const logout = () => async dispatch => {
    let resultCode = await authAPI.logout()
    if (resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false, ''));
    }
}
export default authReducer;