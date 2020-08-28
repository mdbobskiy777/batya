import * as serviceWorker from './serviceWorker';
import store from "./store_redux";
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import StoreContext from "./Store_Context";

let render = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <StoreContext.Provider value = {store}>
                    <App/>
                </StoreContext.Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );

};

render();

store.subscribe(() => {
    render()
});

serviceWorker.unregister();
