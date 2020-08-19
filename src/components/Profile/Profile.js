import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import S from "./profile.module.css"

const Profile = (props) => {

    return (
        <div className={S.profileContent}>
            <ProfileInfo info = {props.state.info}/>
            <MyPosts  newPostText={props.state.newPostText} updatePostText={props.updatePostText} postsList = {props.state.postsList} addPost={props.addPost}/>
        </div>
    )
}
export default Profile;
