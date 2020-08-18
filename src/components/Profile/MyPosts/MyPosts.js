import React from "react";
import S from "./myPosts.module.css";
import Post from "./Post/Post";
import AddNewPostMenu from "./AddNewPostMenu/AddNewPostMenu";



// let newPostLost = postsList.map(post => <Post message={post.message} likesNumber={post.likesNumber}/>);

const showPostList = (postsList) => {
    return postsList.map(post =>
        <Post key = {post.message+1} message={post.message} likesNumber={post.likesNumber}/>
    )
}

const MyPosts = (props) => {
    return (
        <div className={S.myPostsContent}>
            <div>
                My posts
               <AddNewPostMenu addPost={props.addPost}/>
                {showPostList(props.postsList)}
            </div>
        </div>
    );
}
export default MyPosts;