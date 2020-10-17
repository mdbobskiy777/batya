import React from 'react';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPost} from "../../../redux/profile-reducer";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const MyPostsContainer = connect(mapStateToProps, {addPostActionCreator: addPost})(MyPosts);

export default MyPostsContainer;