import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({profile,updateProfileStatus,profileStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img alt={"imaga"} src={profile.photos.large}/>
                <ProfileStatus updateProfileStatus={updateProfileStatus}
                               status={profileStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;