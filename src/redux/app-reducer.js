import {setAuth} from "./auth-reducer";

const SET_INITIALIZED_SUCCESS = 'SET_INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    debugger
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

const initializedSuccess = () => ({type: SET_INITIALIZED_SUCCESS})

export const initializeApp = () => dispatch => {
debugger
    let promise = dispatch(setAuth())
    Promise.all([promise])
        .then(() => {
        dispatch(initializedSuccess())

    })
}
export default appReducer;