import React, {Component} from "react";
import Users from "./Users";
import Loader from "../common/Loader";
import {
    changeCurrentPageAC,
    changeLoadAC,
    followAC,
    setTotalUsersAC,
    setUsersAC,
    unfollowAC
} from "../../Reducers/users_reducer";
import {connect} from "react-redux";
import * as axios from "axios";

class UsersContainer extends Component {

    constructor(props) {
        super(props);
        this.setUsers = this.setUsers.bind(this);
        this.setTotalUsers = this.setTotalUsers.bind(this);
        this.changePage = this.changePage.bind(this);

    }

    setUsers(users) {
        this.props.onSetUsers(users);
    }

    setTotalUsers(totalUsers) {
        this.props.onSetTotalUsers(totalUsers);
    }

    changePage(pageNumber) {
        this.props.onChangeCurrentPage(pageNumber);
        this.props.onChangeLoadStatus(true);
        axios
            .get(`http://localhost:3001/users?pageNumber=${pageNumber}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                debugger
                this.props.onChangeLoadStatus(false);
                let users = response.data.users
                let totalUsers = response.data.totalCount
                this.setUsers(users);
                debugger
                this.setTotalUsers(totalUsers);
            });
    }

    componentWillMount() {
        this.props.onChangeLoadStatus(true);
        axios
            .get(`http://localhost:3001/users?pageNumber=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                debugger
                this.props.onChangeLoadStatus(false);
                let users = response.data.users
                let totalUsers = response.data.totalCount
                this.setUsers(users);
                debugger
                this.setTotalUsers(totalUsers);
            });
    }


    render() {
        return <>
            <div>
                <div>
                    {(this.props.usersPage.isLoading ? <Loader/> : null)}
                </div>
                <div>
                    <Users
                        usersPage={this.props.usersPage}
                        OnFollow={this.props.OnFollow}
                        OnUnfollow={this.props.OnUnfollow}
                        setUsers={this.setUsers}
                        setTotalUsers={this.setTotalUsers}
                        changePage={this.changePage}/>
                </div>
            </div>
        </>
    }
}

let setStateToProps = (state) => ({usersPage: state.usersPage})

let setDispatchToProps = (dispatch) => ({
    OnFollow: userID => {
        dispatch(followAC(userID))
    },
    OnUnfollow: userID => {
        dispatch(unfollowAC(userID))
    },
    onSetUsers: (users) => {
        dispatch(setUsersAC(users))
    },
    onSetTotalUsers: (totalUsers) => {
        dispatch(setTotalUsersAC(totalUsers))
    },
    onChangeCurrentPage: pageNumber => {
        dispatch(changeCurrentPageAC(pageNumber))
    },
    onChangeLoadStatus: isLoading => {
        dispatch(changeLoadAC(isLoading))
    }
})

export default connect(setStateToProps, setDispatchToProps)(UsersContainer)