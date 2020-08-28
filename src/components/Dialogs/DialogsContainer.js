import React from "react";
import {send_message, update_message_text} from "../../Reducers/dialogs_reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    debugger
    let sendMessage = (currentDialog) => {
        props.store.dispatch(send_message(currentDialog));
    }
    let newMessageText = (text) => {

        props.store.dispatch(update_message_text(text));
    }
    debugger
    return <Dialogs messagesPage = {props.store.getState().messagesPage} sendMessage = {sendMessage} newMessage = {newMessageText}/>
}

export default DialogsContainer;