import React from "react";
import Style from "./users.module.css"

const Users = (props) => {
debugger
    return <div>
        {props.usersPage.users.map(u => <div>
            <div>
                <div className={Style.imageContainer}>
                    <img src={u.avatarURL} alt="img"/>
                </div>

            </div>
            <div>
                {u.name.firstName}
            </div>
            <div>
                {u.name.secondName}
            </div>
            <div>
                {u.description}
            </div>
            <div>
                {u.location.country}
            </div>
            <div>{u.location.city}</div>
            <div>
                {(u.isFollow) ? <button onClick={() => props.OnUnfollow(u.id)}>Unfollow</button> :
                    <button onClick={() => props.OnFollow(u.id)}>Follow</button>}
            </div>
        </div>)}
    </div>
}

export default Users