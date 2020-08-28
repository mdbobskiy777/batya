import React from "react";
import {send_message, update_message_text} from "../../Reducers/dialogs_reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../Store_Context";

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {
            (store)=>{
                let sendMessage = (currentDialog) => {
                    store.dispatch(send_message(currentDialog));
                }
                let newMessageText = (text) => {

                    store.dispatch(update_message_text(text));
                }
                return (
                    <Dialogs messagesPage = {store.getState().messagesPage} sendMessage = {sendMessage} newMessage = {newMessageText}/>

                )
            }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer;