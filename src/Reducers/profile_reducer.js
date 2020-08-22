const ADD_POST = "ADD_POST";
const UPDATE_POST_TEXT = "UPDATE_POST_TEXT";

let initialStore = {
    info: [
        {name: "Eugene"},
        {surname: "Bober"},
        {sex: "male"},
        {age: "23"},
        {phone: "+380932731283"}
    ],
        postsList: [
        {message: "Hi! this`s my hardcode post!", likesNumber: "23"},
        {message: "This too", likesNumber: "12"},
        {message: "and this", likesNumber: "3"},
        {message: "soon i change it", likesNumber: "2"},
        {message: "VERY SOON", likesNumber: "45"}
    ],
        newPostText: "Write post..."
}


export let add_post = () => ({type: ADD_POST})
export let update_post = (text) => ({type: UPDATE_POST_TEXT, text: text})

let updatePostText = (state, text) => {
    let newState = state;
    newState.newPostText = text;
    return newState;
}
let addPost = (state) => {
    let newState = state;
    newState.postsList.push(
        {message: newState.newPostText, likesNumber: "0"}
    );
    newState = updatePostText(newState, "");
    return newState;
}

export const profile_reducer = (state = initialStore, action) => {
    debugger
    switch (action.type) {
        case ADD_POST :
            return addPost(state);
        case UPDATE_POST_TEXT :
            return updatePostText(state, action.text)
        default:
            return state;
    }
}

