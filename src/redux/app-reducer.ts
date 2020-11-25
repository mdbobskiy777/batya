import {setAuth} from "./auth-reducer";

const SET_INITIALIZED_SUCCESS = 'app-reducer/SET_INITIALIZED_SUCCESS';


type InitializedSuccessActionType = {
    type: typeof SET_INITIALIZED_SUCCESS
}

let initialState = {
    initialized: false
};
type InitialStateType = typeof initialState

const appReducer = (state = initialState, action:any): InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

const initializedSuccess = ():InitializedSuccessActionType => ({type: SET_INITIALIZED_SUCCESS})

// @ts-ignore
export const initializeApp = () => dispatch => {
    let promise = dispatch(setAuth())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}
export default appReducer;