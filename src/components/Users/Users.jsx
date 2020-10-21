import React from 'react';
import {acceptFollow, acceptUnfollow} from "../../redux/users-reducer";
import Pagination from "./Pagination";
import User from "./User/User";

let Users = props => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <Pagination totalUsersCount={props.totalUsersCount}
                    pageSize={props.pageSize}
                    currentPage={props.currentPage}
                    onPageChanged={props.onPageChanged}
        />
            {
                props.users.map((u, i) => <User key={i} followingInProgress={props.followingInProgress}
                                                u={u} follow={props.fololow} unfollow={props.unfollow}
                />)
            }
    </div>
}
export default Users;