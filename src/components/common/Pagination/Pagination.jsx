import React, {useState} from 'react';
import styles from "../../Users/users.module.css";

let Pagination = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionNumber = portionNumber * portionSize

    let setCurrentElementInPortion = portion => {
        return portion * portionSize - (portionSize - 1)
    }

    return <div>
        <button className={styles.permanentButtons} onClick={() => {
            setPortionNumber(1)
            onPageChanged(setCurrentElementInPortion(1))
        }}>FIRST
        </button>
        {portionNumber > 1 && <button onClick={() => {
            setPortionNumber(portionNumber - 1)
            onPageChanged(setCurrentElementInPortion(portionNumber-1))
        }}>PREV</button>}
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionNumber)
            .map((p, i) => {
                return <span key={i}
                             className={styles.pagesItems + " " + ((currentPage === p) && styles.selectedPage).toString()}
                             onClick={(e) => {
                                 onPageChanged(p);
                             }}>{p}</span>
            })}
        {portionNumber < portionCount && <button onClick={() => {
            setPortionNumber(portionNumber + 1)
            onPageChanged(setCurrentElementInPortion(portionNumber+1))
        }}>NEXT</button>}
        <button className={styles.permanentButtons} onClick={() => {
            setPortionNumber(portionCount)
            onPageChanged(setCurrentElementInPortion(portionCount))
        }}>LAST
        </button>
    </div>
}

export default Pagination;