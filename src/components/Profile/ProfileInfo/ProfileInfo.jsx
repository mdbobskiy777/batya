import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = props => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img alt={"imaga"} src={props.profile.photos.large}/>
                <ProfileStatus updateProfileStatus={props.updateProfileStatus}
                               status={props.profileStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;