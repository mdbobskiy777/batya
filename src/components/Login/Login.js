import React from "react";
import * as axios from "axios";

const Login = (props) => {

    let onLogin = () => {
        debugger
        axios
            .post(`http://localhost:3001/login?username=vilat&password=password1`)
            .then(response => {
                debugger
                this.props.login();
            });

    }
    return <div>
        <form>
            <div>
                <label>Username:</label>
                <input type="text" name="username"/><br/>
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password"/>
            </div>
            <div>
                <input onClick={() => {
                    onLogin()
                }} type="button" value="Submit"/>
            </div>
        </form>
    </div>
}
export default Login;