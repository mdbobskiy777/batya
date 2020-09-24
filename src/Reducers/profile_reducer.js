const ADD_POST = "ADD_POST";
const UPDATE_POST_TEXT = "UPDATE_POST_TEXT";
const SET_INFO = "SET_INFO";
const SET_POSTS_LIST = "SET_POSTS_LIST";
const SET_NEW_POST_TEXT = "SET_NEW_POST_TEXT"

let initialStore = {
    info: [],
        postsList: [],
        newPostText: ""
}


export let add_post = () => ({type: ADD_POST})
export let update_post = (text) => ({type: UPDATE_POST_TEXT, text: text})

export let set_info = (info) => ({type: SET_INFO, info})
export let set_posts_list = (postsList) => ({type: SET_POSTS_LIST, postsList})
export let set_new_post_text = (newPostText) => ({type: SET_NEW_POST_TEXT, newPostText})

let updatePostText = (state, text) => {return {...state, newPostText : text};}



let setInfo = (state, info) => {
    return {...state, info}
}
let setPostsList = (state, postsList) =>{
    return {...state,postsList}
}
let setNewPostText = (state, newPostText) =>{
    return {...state,newPostText}
}



let addPost = (state) => {
    let newState = {...state};
    newState.postsList = [ ...state.postsList];
    newState.postsList.push(
        {message: newState.newPostText, likesNumber: "0"}
    );
    newState = updatePostText(newState, "");
    return newState;
}

export const profile_reducer = (state = initialStore, action) => {
    switch (action.type) {
        case ADD_POST :
            return addPost(state);
        case UPDATE_POST_TEXT :
            return updatePostText(state, action.text)
        case SET_INFO:
            return setInfo(state,action.info);
        case SET_POSTS_LIST:
            return setPostsList(state,action.postsList);
        case SET_NEW_POST_TEXT:
            return setNewPostText(state,action.newPostText)
        default:
            return state;
    }
}

