const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initial_store = {
    users: []
}

let follow = (state, userID) => {
    let newState = {...state}
    newState.users = newState.users.map(u=>{
        if(u.id===userID){ return u = {...u,isFollow : true}}
        else return u
    })
    return newState
}


let unfollow = (state, userID) => {
    let newState = {...state}
    newState.users = newState.users.map(u=>{
        if(u.id===userID){ return u = {...u,isFollow : false}}
        else return u
    })
    return newState
}
let setUsers = users => {
    debugger
    let newState = {users:[...users]}
    return  newState;
}

export let followAC = userID => ({type: FOLLOW, userID: userID})
export let unfollowAC = userID => ({type: UNFOLLOW, userID: userID})
export let setUsersAC = (users) =>({type:SET_USERS, users:users})

export let users_reducer = (state = initial_store, action) => {

    switch (action.type) {
        case FOLLOW:
            return follow(state, action.userID);
        case UNFOLLOW:
            return unfollow(state, action.userID);
        case SET_USERS: return setUsers(action.users)
        default:
            return state;
    }

}

