const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";
const CHANGE_CURRENT_PAGE = "CHANGE_CURRENT_PAGE";
const CHANGE_LOAD_STATUS = "CHANGE_LOAD_STATUS"

let initial_store = {
    users: [],
    totalUsers: 0,
    pageSize: 3,
    currentPage: 1,
    isLoading:false
}

let _setTotalUsers = (state, totalUsers) =>{
    debugger
    let newState = {...state,totalUsers: totalUsers}
    return newState;
}

let _changeLoad = (state, isLoading) => {
    let newState = {...state,isLoading: isLoading}
    return newState;
}
let _changeCurrentPage = (state, pageNumber) =>{
    debugger
    let newState = {...state,currentPage: pageNumber}
    return newState;
}

let _follow = (state, userID) => {
    let newState = {...state}
    newState.users = newState.users.map(u => {
        if (u.id === userID) {
            return u = {...u, isFollow: true}
        } else return u
    })
    return newState
}


let _unfollow = (state, userID) => {
    let newState = {...state}
    newState.users = newState.users.map(u => {
        if (u.id === userID) {
            return u = {...u, isFollow: false}
        } else return u
    })
    return newState
}
let _setUsers = (state,users) => {
    debugger
    let newState = {...state,users: [...users]}
    return newState;
}

export let follow = userID => ({type: FOLLOW, userID: userID})
export let unfollow = userID => ({type: UNFOLLOW, userID: userID})
export let setUsers = users => ({type: SET_USERS, users: users})
export let setTotalUsers= totalUsers => ({type: SET_TOTAL_USERS, totalUsers})
export let changeCurrentPage = pageNumber => ({type:CHANGE_CURRENT_PAGE, pageNumber})
export let changeLoad = isLoading => ({type:CHANGE_LOAD_STATUS, isLoading})

export let users_reducer = (state = initial_store, action) => {

    switch (action.type) {
        case FOLLOW:
            return _follow(state, action.userID);
        case UNFOLLOW:
            return _unfollow(state, action.userID);
        case SET_USERS:
            return _setUsers(state,action.users)
        case SET_TOTAL_USERS:
            return _setTotalUsers(state, action.totalUsers)
        case CHANGE_CURRENT_PAGE:
            return _changeCurrentPage(state,action.pageNumber)
        case CHANGE_LOAD_STATUS:
            return _changeLoad(state,action.isLoading)
        default:
            return state;
    }

}

