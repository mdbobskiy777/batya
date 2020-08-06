import React from "react";
import S from "./myPosts.module.css";
import Post from "./Post/Post";
import AddNewPostMenu from "./AddNewPostMenu/AddNewPostMenu";

const MyPosts = () => {
    return (
        <div>
            <div>
                My posts
               <AddNewPostMenu/>
                <Post message = "azaza" likesNumber = {23}/>
                <Post message = "asdasdasd" likesNumber = {1}/>
                <Post message = "q3232323" likesNumber = {2}/>
                <Post message = "qweqweqwreqwrqr" likesNumber = {45}/>
            </div>
        </div>
    );
}
export default MyPosts;