import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = props => {
    return <div>
        <ProfileInfo updateProfileStatus={props.updateProfileStatus} profile={props.profile}
                     isOwner={props.isOwner}
                     savePhoto={props.savePhoto}
                     saveProfile={props.saveProfile}
                     submitErrorProf={props.submitErrorProf}
                     profileStatus={props.profileStatus}
                     editMode={props.editMode}
                     setEditMode={props.setEditMode}
        />
        <MyPostsContainer/>
    </div>
}

export default Profile;