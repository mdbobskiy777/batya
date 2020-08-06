import React from 'react';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {

    return (
        <div>
            <div>
                <img src={"https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png"}/>
            </div>
            <div>
                <MyPosts/>
            </div>
        </div>
    )
}
export default Profile;
