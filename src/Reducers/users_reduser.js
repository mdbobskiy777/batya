const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

let initial_store = {
    users: [
        {
            id: 0, isFollow: false, avatarURL: "https://png.pngtree.com/element_our/20190522/ourlarge/pngtree-small-briquettes-cute-avatar-logo-material-image_1070815.jpg",
            name: {firstName: "Жека", secondName: "Бобер"},
            description: "hi, i am the badass", location: {country: "Ukraine", city: "Kyiv"}
        },
        {
            id: 1, isFollow: true, avatarURL: "https://png.pngtree.com/element_our/20190522/ourlarge/pngtree-small-briquettes-cute-avatar-logo-material-image_1070815.jpg",
            name: {firstName: "Владимир", secondName: "Мельничук"},
            description: "i am smart guy", location: {country: "Ukraine", city: "Kyiv"}
        },
        {
            id: 2, isFollow: true, avatarURL: "https://png.pngtree.com/element_our/20190522/ourlarge/pngtree-small-briquettes-cute-avatar-logo-material-image_1070815.jpg",
            name: {firstName: "Даниил", secondName: "Бондарь"},
            description: "who cares?", location: "Ukraine", city: "Zhytomyr"
        }
    ]
}

let follow = (state, userID) => {
    let newState = {...state}
    newState.users[userID].isFollow = true
    return newState
}


let unfollow = (state, userID) => {
    let newState = {...state}
    newState.users[userID].isFollow = false
    return newState
}

export let followAC = userID => ({type: FOLLOW, userID: userID})
export let unfollowAC = userID => ({type: UNFOLLOW, userID: userID})


export let users_reducer = (state = initial_store, action) => {

    switch (action.type) {
        case FOLLOW:
            return follow(state, action.userID);
        case UNFOLLOW:
            return unfollow(state, action.userID);
        default:
            return state;
    }

}

