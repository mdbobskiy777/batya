import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {changeCurrentPageAC, followAC, setTotalUsersAC, setUsersAC, unfollowAC} from "../../Reducers/users_reducer";


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
    },
    onSetTotalUsers:(totalUsers)=>{
        dispatch(setTotalUsersAC(totalUsers))
    },
    onChangeCurrentPage:pageNumber=>{
        dispatch(changeCurrentPageAC(pageNumber))
    }
})

export default connect(setStateToProps, setDispatchToProps)(Users)