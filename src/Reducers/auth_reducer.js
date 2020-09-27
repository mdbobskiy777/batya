const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const SET_USER_DATA = 'SET_USER_DATA'
let initialStore = {
    userId: null,
    username: null,
    isAuthenticated: false
}

export let login = () => ({type: LOG_IN})
export let logout = () => ({type: LOG_OUT})
export let setAuthUserData = (userId, username, isAuthenticated) => ({
    type: SET_USER_DATA,
    data: {userId, username, isAuthenticated}
})

export const auth_reducer = (state = initialStore, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            debugger
            return {
                ...state, ...action.data
            }
        case LOG_IN :
            return {
                ...state, isAuthenticated: true
            }
        case  LOG_OUT:
            return {
                ...state, isAuthenticated: false
            }
        default:
            return state;
    }
}

