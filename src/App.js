import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import './components/app.css';

const App = () => {
    return (
        <div className = 'appWrapper'>
            <Header/>
            <NavBar/>
            <Profile/>
        </div>
    )
}
export default App;