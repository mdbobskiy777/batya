import React from "react"
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const withLoginCheck = (Component) => {


    class ComponentContainer extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={"/login"}/>;

            return <Component {...this.props}/>
        }
    }

    let mapStateToProps = (state) => ({isAuth:state.auth.isAuth})

    return connect(mapStateToProps)(ComponentContainer);
}
export default withLoginCheck;