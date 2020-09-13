import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../Reducers/users_reduser";


let setStateToProps = (state) =>({usersPage:state.usersPage})
let setDispatchToProps = (dispatch) =>({
    OnFollow:userID=>{
        dispatch(followAC(userID))
    },
    OnUnfollow:userID=>{
        dispatch(unfollowAC(userID))
    },
    onSetUsers:(users)=>{
        dispatch(setUsersAC(users))
    }
})

export default connect(setStateToProps, setDispatchToProps)(Users)