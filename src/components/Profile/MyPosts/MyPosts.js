import React from "react";
import S from "./myPosts.module.css";
import Post from "./Post/Post";
import AddNewPostMenuContainer from "../AddNewPostMenuContainer";
import StoreContext from "../../../Store_Context";

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
                <StoreContext.Consumer>
                    {
                        (store) => {
                            return (<div>
                                <AddNewPostMenuContainer store={store}/>
                                {showPostList(store.getState().profilePage.postsList)}
                            </div>)
                        }
                    }
                </StoreContext.Consumer>

            </div>
        </div>
    );
}
export default MyPosts;