import React from "react";
import AddNewPostMenu from "./MyPosts/AddNewPostMenu/AddNewPostMenu";
import {add_post, update_post} from "../../Reducers/profile_reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({newPostText: state.profilePage.newPostText});
let mapDispatchToProps = (dispatch) => ({
    addPost: () => {
        dispatch(add_post())
    },
    updateNewPostText: (text)=> {
        dispatch(update_post(text));
    }
})

const AddNewPostMenuContainer = connect(mapStateToProps, mapDispatchToProps)(AddNewPostMenu);
export default AddNewPostMenuContainer;