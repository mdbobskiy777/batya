import React from 'react';
import S from "./profile.module.css"
import ProfileInfoContainer from "./ProfileInfoContainer";
import MyPostsContainer from "./MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={S.profileContent}>
            <ProfileInfoContainer/>
            <MyPostsContainer/>
        </div>
    )
}
export default Profile;
