import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import S from "./profile.module.css"

const Profile = (props) => {
    debugger
    return (
        <div className={S.profileContent}>
            <ProfileInfo info = {props.store.getState().profilePage.info}/>
            <MyPosts store = {props.store} />
        </div>
    )
}
export default Profile;
