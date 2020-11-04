import React, {lazy} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";
import {initializeApp} from "./redux/app-reducer";
import {Redirect} from "react-router-dom";
import {Route, Switch} from "react-router";


const Login = lazy(() => import('./components/Login/Login'))
const UsersContainer = lazy(() => import("./components/Users/UsersContainer"))
const ProfileContainer = lazy(() => import("./components/Profile/ProfileContainer"));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='appWrapper'>
                <HeaderContainer/>
                <div className='appWrapperContent'>
                    <Route render={() => <Navbar/>}/>
                    <Switch>
                        <Route exact path='/'
                               render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs'
                               render={() => <DialogsContainer/>}/>

                        <Route path='/login'
                               render={() => <Login/>}/>

                        <Route path='/profile/:userId?'
                               render={() => <ProfileContainer/>}/>

                        <Route path='/users'
                               render={() => <UsersContainer/>}/>
                        <Route path={'*'} render={()=><div>404 NOT FOUND</div>}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    connect(mapStateToProps, {initializeApp}),
    withRouter
)(App);