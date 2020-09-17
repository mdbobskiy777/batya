import React, {Component} from "react";
import Users from "./Users";
import Loader from "../common/Loader";
import {
    changeCurrentPage,
    changeLoad,
    follow,
    setTotalUsers,
    setUsers,
    unfollow
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
        this.props.setUsers(users);
    }

    setTotalUsers(totalUsers) {
        this.props.setTotalUsers(totalUsers);
    }

    changePage(pageNumber) {
        this.props.changeCurrentPage(pageNumber);
        this.props.changeLoad(true);
        axios
            .get(`http://localhost:3001/users?pageNumber=${pageNumber}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                debugger
                this.props.changeLoad(false);
                let users = response.data.users
                let totalUsers = response.data.totalCount
                this.setUsers(users);
                debugger
                this.setTotalUsers(totalUsers);
            });
    }

    componentWillMount() {
        this.props.changeLoad(true);
        axios
            .get(`http://localhost:3001/users?pageNumber=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                debugger
                this.props.changeLoad(false);
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
                        OnFollow={this.props.follow}
                        OnUnfollow={this.props.unfollow}
                        setUsers={this.setUsers}
                        setTotalUsers={this.setTotalUsers}
                        changePage={this.changePage}/>
                </div>
            </div>
        </>
    }
}

let setStateToProps = (state) => ({usersPage: state.usersPage})

 let actionCreators = {
    follow,
     unfollow,
     setUsers,
     setTotalUsers,
     changeCurrentPage,
     changeLoad
 }

export default connect(setStateToProps, actionCreators)(UsersContainer)