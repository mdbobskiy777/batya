import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import S from "./profile.module.css"

const Profile = (props) => {
    return (
        <div className={S.profileContent}>
            <ProfileInfo info = {props.profilePage.info}/>
            <MyPosts  newPostText={props.profilePage.newPostText}
                      postsList={props.profilePage.postsList}
                      dispatch={props.dispatch}/>
        </div>
    )
}
export default Profile;
