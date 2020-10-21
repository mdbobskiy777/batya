import React from 'react';
import styles from "./users.module.css";

let Pagination = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        {pages.map((p, i) => {
            return <span key={i} className={((currentPage === p) && styles.selectedPage).toString()}
                         onClick={(e) => {
                             onPageChanged(p);
                         }}>{p}</span>
        })}
    </div>
}

export default Pagination;