import {ActionsTypes, setAuth} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {AppStoreType} from "./redux-store";

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
type ActionsTypesMixed = ActionsTypes | InitializedSuccessActionType
const initializedSuccess = ():InitializedSuccessActionType => ({type: SET_INITIALIZED_SUCCESS})

export const initializeApp = ():ThunkAction<Promise<void>, AppStoreType, undefined, ActionsTypesMixed> => async (dispatch) => {
    let promise = dispatch(setAuth())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}
export default appReducer;