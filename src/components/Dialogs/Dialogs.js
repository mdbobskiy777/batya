import React from "react";
import S from "./dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
    debugger

    const showDialogsList = (dialogsList) => {
        return (
                dialogsList.map((dialog) => {
                    return <Dialog  changeDialog={onChangeDialog.bind(this)} dialogName={dialog.dialogName}
                                   dialogId={dialog.dialogId} avatarURL={dialog.avatarURL}/>
                })
        )
    }


    let onChangeDialog = (dialogID) => {
        props.changeCurrentDialog(dialogID);
    }
    let showMessages = (dialogID) => {
        debugger
        let messages
        if (isNaN(dialogID)) {
            return <div>no dialog chosen</div>
        } else {
            messages = props.dialogsPage.dialogsList[dialogID].messages;
            if (!messages.length > 0) {
                return <div>There is no messages</div>
            } else {
                return messages.map((message) => <Message key={message + 1} message={message}/>)
            }
        }

    }
    debugger
    let dialogsList = showDialogsList(props.dialogsPage.dialogsList);
    let listMessages = showMessages(props.dialogsPage.currentDialog);

    let OnSendMessage = () => {
        props.sendMessage(props.dialogsPage.currentDialog);
    }
    let OnNewMessageText = (e) => {
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
                                  value={props.dialogsPage.newMessageText}/>
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