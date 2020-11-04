import React from "react"
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const withLoginCheck = (Component) => {
    function ComponentContainer(props) {
        if (!props.isAuth) return <Redirect to={"/login"}/>;
        return <Component {...props}/>
    }
    let mapStateToProps = state => ({isAuth:state.auth.isAuth})
    return connect(mapStateToProps)(ComponentContainer);
}
export default withLoginCheck;