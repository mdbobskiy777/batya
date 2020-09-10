import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Music from "./components/Music/MusicBar";
import News from "./components/Documents/Documents";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

import './app.css';


const App = (props) => {
    return (
        <div className='appWrapper'>
            <Header/>
            <div className="appWrapperContent">
                <NavBar/>
                <Route path="/users" render={() =>
                    <UsersContainer/>}/>
                <Route path="/profile" render={() =>
                    <Profile/>}/>
                <Route path="/dialogs" render={() =>
                    <DialogsContainer/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/news" render={() => <News/>}/>
            </div>
        </div>
    )
}
export default App;