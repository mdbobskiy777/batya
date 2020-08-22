import {combineReducers, createStore} from "redux";
import {dialogs_reducer} from "./Reducers/dialogs_reducer";
import {profile_reducer} from "./Reducers/profile_reducer";

let reducers = combineReducers({
    profilePage: profile_reducer,
    messagesPage: dialogs_reducer
})
const store = createStore(reducers);
export default store;