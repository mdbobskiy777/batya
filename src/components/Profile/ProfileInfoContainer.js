import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({info: state.profilePage.info})

const ProfileInfoContainer = connect(mapStateToProps)(ProfileInfo)
export default ProfileInfoContainer;