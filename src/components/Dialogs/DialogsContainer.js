import React from "react";
import {send_message, update_message_text} from "../../Reducers/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) =>
    ({messagesPage : state.messagesPage});
let mapDispatchToProps = (dispatch) => ({
    sendMessage: (currentDialog)=>{
        dispatch(send_message(currentDialog));
    },
    newMessage: (text)=>{
        dispatch(update_message_text(text))
    }
})

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);
export default DialogsContainer;