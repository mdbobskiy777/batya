import React from "react";
import {connect} from "react-redux";
import MyPosts from "./MyPosts/MyPosts";

let mapStateToProps = (state) =>({postsList: state.profilePage.postsList})

const MyPostsContainer = connect(mapStateToProps)(MyPosts);

export default MyPostsContainer;