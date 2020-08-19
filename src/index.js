import * as serviceWorker from './serviceWorker';
import {subscriber, state, addPost, sendMessage, updatePostText, updateMessageText} from "./state";
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


 let render = ({state,addPost,sendMessage, updatePostText,updateMessageText}) =>
{
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} sendMessage={sendMessage}
                     updatePostText={updatePostText} updateMessageText={updateMessageText}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );

};

render({state,addPost,sendMessage, updatePostText,updateMessageText});
subscriber(render);

serviceWorker.unregister();
