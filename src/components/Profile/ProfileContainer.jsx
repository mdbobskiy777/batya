import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getProfileStatus, setProfile, updateProfileStatus} from "../../redux/profile-reducer";
import withLoginCheck from "../common/HOCs/withLoginCheck";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 11708;
        }
        this.props.setProfile(userId)
        this.props.getProfileStatus(userId)
    }

    render() {
        debugger

        return (
            <Profile {...this.props} profile={this.props.profile}
                     profileStatus={this.props.profileStatus}
                     updateProfileStatus={this.props.updateProfileStatus}
            />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    profileStatus: state.profilePage.profileStatus
});

export default compose(
    connect(mapStateToProps, {setProfile, getProfileStatus, updateProfileStatus}),
    withLoginCheck,
    withRouter
)(ProfileContainer)