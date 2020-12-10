import React, {FC} from 'react';
import Pagination from "../common/Pagination/Pagination";
import User from "./User/User";
import {UserType} from "../../redux/users-reducer";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber:number) => void
    users: Array<UserType>
    followingInProgress: Array<number>
    follow: () => void
    unfollow: () => void
}
let Users: FC<PropsType> = ({
                                totalUsersCount,
                                pageSize,
                                currentPage,
                                onPageChanged,
                                users,
                                followingInProgress,
                                follow,
                                unfollow
                            }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <Pagination totalItemsCount={totalUsersCount}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChanged={onPageChanged}
        />
        {
            users.map((u, i) => <User key={i} followingInProgress={followingInProgress}
                                      u={u} follow={follow} unfollow={unfollow}
            />)
        }
    </div>
}
export default Users;