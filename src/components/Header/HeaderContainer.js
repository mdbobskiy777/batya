import React, {Component} from "react"

import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../Reducers/auth_reducer";

class HeaderContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios
            .post(`http://localhost:3001/login?username=mdbobskiy&password=password1`)
            .then(response => {
                debugger
                this.props.setAuthUserData(response.data.id,
                    response.data.username,
                    response.data.success);
            });

    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }

}

let mapStateToProps = (state) => ({
    isAuthenticated:state.auth.isAuthenticated,
    username:state.auth.username
})
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)