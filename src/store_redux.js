import {combineReducers, createStore} from "redux";
import {dialogs_reducer} from "./Reducers/dialogs_reducer";
import {profile_reducer} from "./Reducers/profile_reducer";
import {users_reducer} from "./Reducers/users_reducer"
import {auth_reducer} from "./Reducers/auth_reducer";

let reducers = combineReducers({
    profilePage: profile_reducer,
    messagesPage: dialogs_reducer,
    usersPage:users_reducer,
    auth:auth_reducer
})

const store = createStore(reducers);

export default store;