import * as serviceWorker from './serviceWorker';
import store from "./store_redux";
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

let render = state => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={state} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );

};

render(store);

store.subscribe(() => {
    render(store)
});

serviceWorker.unregister();
