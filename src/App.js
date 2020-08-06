import React from 'react';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import './app.css';

const App = () => {
    return (
        <div className = 'appWrapper'>
            <Header/>
            <NavBar/>
            <div className={"appWrapperContent"}>
                <Profile/>
            </div>
        </div>
    )
}
export default App;