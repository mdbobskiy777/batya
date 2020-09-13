import React, {Component} from "react";
import Style from "./users.module.css"
import * as axios from "axios";


class Users extends Component {

    constructor(props) {
        super(props);
        this.setUsers = this.setUsers.bind(this);
    }

    setUsers(users){
        this.props.onSetUsers(users);
}
    componentWillMount() {
        axios
            .get('http://localhost:3001/')
            .then(response => {
                let users = response.data.users
                debugger
                this.setUsers(users);
            });
    }

    render() {
        debugger
        return (<div>
            {this.props.usersPage.users.map(u => <div>
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
                    {(u.isFollow) ? <button onClick={() => this.props.OnUnfollow(u.id)}>Unfollow</button> :
                        <button onClick={() => this.props.OnFollow(u.id)}>Follow</button>}
                </div>
            </div>)}
        </div>)
    }
}

/*const Users = (props) => {
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
}*/

export default Users