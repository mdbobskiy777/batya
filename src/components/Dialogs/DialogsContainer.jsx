import React from "react";
import {send_message, update_message_text, change_current_dialog} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({dialogsPage: state.dialogsPage});

let mapDispatchToProps = (dispatch) => ({
    sendMessage: (currentDialog) => {
        dispatch(send_message(currentDialog));
    },
    newMessage: (text) => {
        dispatch(update_message_text(text))
    },
    changeCurrentDialog:(dialogId) => {
        dispatch(change_current_dialog(dialogId))
    }
})

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;