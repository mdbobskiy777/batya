import React, {Component} from "react"
import {login, logout} from "../../Reducers/auth_reducer";
import Login from "./Login";
import {connect} from "react-redux";

class LoginContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <Login {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    login: state.login
})
export default connect(mapStateToProps, {login, logout})(LoginContainer);