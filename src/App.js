import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/MusicBar";
import News from "./components/Documents/Documents";

import './app.css';


const App = (props) => {
    return (
        <div className='appWrapper'>
            <Header/>
            <div className={"appWrapperContent"}>
                <NavBar/>
                <Route path="/profile" render={() => <Profile state={props.state.profilePage}
                                                              addPost={props.addPost}/>}/>
                <Route path="/dialogs" render={() => <Dialogs state={props.state.messagesPage}
                                                              sendMessage={props.sendMessage}/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/news" render={() => <News/>}/>
            </div>
        </div>
    )
}
export default App;