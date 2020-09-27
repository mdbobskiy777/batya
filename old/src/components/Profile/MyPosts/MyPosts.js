import React from "react";
import S from "./MyPosts.module.css";
import Post from "./Post/Post";
import AddNewPostMenuContainer from "../AddNewPostMenuContainer";

const showPostList = (postsList) => {
    return postsList.map(post =>
        <Post key={post.message + 1} message={post.message} likesNumber={post.likesNumber}/>
    )
}

const MyPosts = (props) => {
    return (
        <div className={S.myPostsContent}>
            <div>
                My posts
                <AddNewPostMenuContainer/>
                {showPostList(props.postsList)}

            </div>
        </div>
    );
}
export default MyPosts;