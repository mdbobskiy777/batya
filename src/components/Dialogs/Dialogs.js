import React from "react";
import S from "./dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const showDialogsList = (dialogsList) => {
    return dialogsList.map((dialog) => {
        return <Dialog key={dialog.dialogId} dialogName={dialog.dialogName}
                       dialogId={dialog.dialogId} avatarURL={dialog.avatarURL}/>
    })
}
const showMessages = (messages) => {
    debugger
    if (!messages.length > 0) return <div>There is no messages</div>;
    return messages.map((message) => {
        return <Message key={message + 1} message={message}/>
    })
}
const showCurrentDialogValue = (currentDialog) => {
    if (isNaN(currentDialog)) {
        return 0
    } else {
        return currentDialog;
    }
}

const Dialogs = (props) => {

    let currentDialog = window.location.pathname.substr(-1);
    let dialogsList = showDialogsList(props.messagesPage.dialogsList);
    debugger
    let listMessages =
        showMessages(props.messagesPage.dialogsList[showCurrentDialogValue(currentDialog)].messages);

    let OnSendMessage = () => {
        props.sendMessage(currentDialog);
    }
    let OnNewMessageText = (e) => {
        debugger
        props.newMessage(e.target.value);
    }

    return (
        <div className={S.dialogs}>
            <div className={S.dialogsList}>
                {dialogsList}
            </div>
            <div className={S.messages}>
                <div>
                    {listMessages}
                </div>
                <div className={S.newMessage}>
                    <div>
                        <textarea onChange={OnNewMessageText} placeholder={"Write message..."}
                                  value={props.messagesPage.newMessageText}/>
                    </div>
                    <div>
                        <button onClick={OnSendMessage}>Send</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;