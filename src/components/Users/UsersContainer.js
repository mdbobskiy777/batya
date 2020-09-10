import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, unfollowAC} from "../../Reducers/users_reduser";


let setStateToProps = (state) =>({usersPage:state.usersPage})
let setDispatchToProps = (dispatch) =>({
    OnFollow:userID=>{
        dispatch(followAC(userID))
    },
    OnUnfollow:userID=>{
        dispatch(unfollowAC(userID))
    }
})

export default connect(setStateToProps, setDispatchToProps)(Users)