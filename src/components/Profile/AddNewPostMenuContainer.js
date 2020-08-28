import React from "react";
import AddNewPostMenu from "./MyPosts/AddNewPostMenu/AddNewPostMenu";
import {add_post, update_post} from "../../Reducers/profile_reducer";

const AddNewPostMenuContainer = (props) => {

    let addPost = () => {
        props.store.dispatch(add_post());
    }

    let updateNewPostText = (text) => {
        props.store.dispatch(update_post(text));
    }
    return (
       <AddNewPostMenu newPostText ={props.store.getState().profilePage.newPostText} addPost = {addPost} updateNewPostText = {updateNewPostText} />
    )

}
export default AddNewPostMenuContainer;