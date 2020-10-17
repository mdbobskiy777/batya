import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_SUBMIT_ERROR = "SET_SUBMIT_ERROR"

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
export const setAuth = () => dispatch => {
    return  authAPI.auth()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setAuthUserData(id, email, login, true, ''))

            }
        });
}
export const login = ({email, password, rememberMe}) => dispatch => {
    debugger
    authAPI.login({email, password, rememberMe})
        .then(response => {
            debugger
            if (response.resultCode === 0) {
                dispatch(setAuth());
            } else {
                dispatch(setSubmitError(response.messages[0]))
            }
        });
}
export const logout = () => dispatch => {
    authAPI.logout()
        .then(resultCode => {
            if (resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false, ''));
            }
        });
}

export default authReducer;