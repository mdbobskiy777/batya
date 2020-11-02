import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileDesc from "./ProfileDesc";
import ProfileDescForm from "./ProfileDescForm";

const ProfileInfo = ({
                         isOwner, profile, updateProfileStatus,
                         profileStatus, savePhoto, saveProfile, submitErrorProf, editMode, setEditMode
                     }) => {

    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = e => {
        if (e.target.files[0].name) savePhoto(e.target.files[0])
    }
    let onSubmit = (formData) => {
        saveProfile(formData)
    }
    debugger
    return (
        <div>
            <div className={s.descriptionBlock}>
                <div>
                    <img alt={"avatar-image"} src={profile.photos.large}/>
                </div>
                <div>
                    {(isOwner) && <input onChange={onMainPhotoSelected} type={"file"}/>}
                </div>
                <div>
                    <ProfileStatus updateProfileStatus={updateProfileStatus}
                                   status={profileStatus}/>
                </div>
                <div>
                    {editMode ?
                        <ProfileDescForm submitErrorProf={submitErrorProf} onSubmit={onSubmit}
                                         profile={profile}/> : <ProfileDesc
                            goToEditMode={() => {
                                setEditMode()
                            }}
                            isOwner={isOwner}
                            profile={profile}/>}
                </div>
            </div>
        </div>
    )
}


export default ProfileInfo;