import React from 'react';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPost, deletePost} from "../../../redux/profile-reducer";

const mapStateToProps = state => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
export default connect(mapStateToProps, {addPostActionCreator: addPost, deletePost})(MyPosts);
