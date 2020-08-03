import React from 'react';
import S from "./profile.module.css";

const Profile = () => {

    return (
        <div className = {S.profile}>
            <div>
                <img src={"https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png"}/>
            </div>
            <div>info</div>
        </div>
    )
}
export default Profile;
