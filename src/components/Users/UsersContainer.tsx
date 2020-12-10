import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    unfollow,
    getUsers, UserType
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {AppStoreType} from "../../redux/redux-store";

type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress:Array<number>
}

type MapDispatchToPropsType = {
    follow: ()=>void
    unfollow:()=>void
    setCurrentPage:(pageNumber:number)=>void
    getUsers:(currentPage:number, pageSize:number)=>void
}

type OwnPropsType = {}

type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType
class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber:number):void => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <div>
            <div>
                {this.props.isFetching ? <Preloader/> : null}
            </div>
            <div>
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       followingInProgress={this.props.followingInProgress}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                />
            </div>
        </div>
    }
}

let mapStateToProps = (state:AppStoreType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect<MapStateToPropsType,MapDispatchToPropsType,OwnPropsType, AppStoreType>(mapStateToProps,
    {
        // @ts-ignore
        follow,
        // @ts-ignore
        unfollow,
        setCurrentPage,
        getUsers
    })(UsersContainer);