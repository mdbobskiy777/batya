import {setAuth} from "./auth-reducer";

const SET_INITIALIZED_SUCCESS = 'app-reducer/SET_INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
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
    let promise = dispatch(setAuth())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}
export default appReducer;