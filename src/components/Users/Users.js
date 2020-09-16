import React, {Component} from "react";
import Style from "./users.module.css"
import * as axios from "axios";

class Users extends Component {

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
    changePage(pageNumber){
        this.props.onChangeCurrentPage(pageNumber);

        axios
            .get(`http://localhost:3001/users?pageNumber=${pageNumber}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                debugger
                let users = response.data.users
                let totalUsers = response.data.totalCount
                this.setUsers(users);
                debugger
                this.setTotalUsers(totalUsers);
            });
    }
    componentWillMount() {
        axios
            .get(`http://localhost:3001/users?pageNumber=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                debugger
                let users = response.data.users
                let totalUsers = response.data.totalCount
                this.setUsers(users);
                debugger
                this.setTotalUsers(totalUsers);
            });
    }


    render() {
        debugger
        return (<div>
            <div className={Style.numbers}>
                {[...Array(this.props.usersPage.totalUsers)].map((el, i) => {
                    return <div onClick = {()=>{this.changePage(i+1)}} className={(this.props.usersPage.currentPage === i + 1) && Style.currentPage}>{i + 1}</div>
                })}
            </div>
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