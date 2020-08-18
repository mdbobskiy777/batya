import * as serviceWorker from './serviceWorker';
import {reRender} from "./render";
import {state, addPost, sendMessage} from "./state";

reRender(state,addPost,sendMessage);
serviceWorker.unregister();
