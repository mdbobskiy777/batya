import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Music from "./components/Music/MusicBar";
import News from "./components/Documents/Documents";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginContainer from "./components/Login/LoginContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import './app.css';


const App = (props) => {
    debugger
    return (
        <div className='appWrapper'>
            <HeaderContainer/>
            <div className="appWrapperContent">
                <NavBar/>
                <Route path="/users" render={() =>
                    <UsersContainer/>}/>
                <Route path="/profile/:userId?" render={() =>
                    <ProfileContainer/>}/>
                <Route path="/dialogs" render={() =>
                    <DialogsContainer/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/news" render={() => <News/>}/>
            </div>
        </div>
    )
}
export default App;