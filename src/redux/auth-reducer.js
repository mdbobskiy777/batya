import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }

        default:
            return state;
    }
}


const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data: {userId, email, login, isAuth}})

export const setAuth =()=>dispatch=>{
    authAPI.auth()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setAuthUserData(id, email, login, true))
            }
        });
}
export const login =({ email, password, rememberMe})=>dispatch=>{
    debugger
    authAPI.login({ email, password, rememberMe})
        .then(resultCode => {
            debugger
            if (resultCode === 0) {
                dispatch(setAuth());
            }
        });
}
export const logout =()=>dispatch=>{
    authAPI.logout()
        .then(resultCode => {
            if (resultCode === 0) {
                dispatch(setAuthUserData(null,null,null,false));
            }
        });
}

export default authReducer;