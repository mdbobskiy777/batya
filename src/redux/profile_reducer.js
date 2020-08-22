const ADD_POST = "ADD_POST";
const UPDATE_POST_TEXT = "UPDATE_POST_TEXT";

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

export const profile_reducer = (state, action) => {
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

