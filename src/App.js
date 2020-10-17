import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";
import {initializeApp} from "./redux/app-reducer";
import ProfileContainerWithHooks from "./components/Profile/ProfileContainerWithHooks";

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

                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>

                    <Route path='/login'
                           render={() => <Login/>}/>

                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainerWithHooks/>}/>

                    <Route path='/users'
                           render={() => <UsersContainer/>}/>


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