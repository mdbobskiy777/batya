import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {
    getProfileStatus,
    savePhoto,
    saveProfile,
    setProfile,
    updateProfileStatus,
    setEditMode
} from "../../redux/profile-reducer";
import withLoginCheck from "../common/HOCs/withLoginCheck";
import {compose} from "redux";

let ProfileContainer = props => {
    useEffect(() => {
        let userId = props.match.params.userId;
        if (!userId) {
            userId = props.authorizedUserId;
            if (!userId) {
                props.history.push('/login')
            }
        }
        props.setProfile(userId)
        props.getProfileStatus(userId)
    }, [props.match.params.userId])

    return (
        <Profile {...props} profile={props.profile}
                 profileStatus={props.profileStatus}
                 updateProfileStatus={props.updateProfileStatus}
                 isOwner={!props.match.params.userId}
                 savePhoto={props.savePhoto}
                 saveProfile={props.saveProfile}
                 submitErrorProf={props.submitErrorProf}
                 editMode={props.editMode}
                 setEditMode={props.setEditMode}

        />
    )
}

let mapStateToProps = state => ({
    profile: state.profilePage.profile,
    profileStatus: state.profilePage.profileStatus,
    authorizedUserId: state.auth.userId,
    submitErrorProf: state.profilePage.submitErrorProf,
    editMode: state.profilePage.editMode,
});


export default compose(
    connect(mapStateToProps, {
        setProfile, getProfileStatus,
        updateProfileStatus, savePhoto, saveProfile, setEditMode
    }),
    withLoginCheck,
    withRouter
)(ProfileContainer)