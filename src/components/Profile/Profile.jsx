import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo updateProfileStatus={props.updateProfileStatus} profile={props.profile}
                         profileStatus={props.profileStatus}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;