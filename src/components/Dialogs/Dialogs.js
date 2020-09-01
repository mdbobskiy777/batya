import React from "react";
import S from "./dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = (props) => {
    var listMessages;
    const showDialogsList = (dialogsList) => {
        return dialogsList.map((dialog) => {
            return <Dialog showMessages={showMessages.bind(this)} dialogName={dialog.dialogName}
                           dialogId={dialog.dialogId} avatarURL={dialog.avatarURL}/>
        })
    }


    const showMessages = (dialogID) => {
        debugger
        let messages = props.messagesPage.dialogsList[dialogID].messages;

        if (!messages.length > 0) {
            listMessages = <div>There is no messages</div>
        } else {
            listMessages = messages.map((message) => <Message key={message + 1} message={message}/>)
        }
    }

    let currentDialog = window.location.pathname.substr(-1);
    debugger
    let dialogsList = showDialogsList(props.messagesPage.dialogsList);

    /* let listMessages =
         showMessages(props.messagesPage.dialogsList[showCurrentDialogValue(currentDialog)].messages);
 */

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