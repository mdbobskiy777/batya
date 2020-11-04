import React, {useEffect} from "react";
import S from "./dialogs.module.css";
import Dialog from "./DialogItem/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let currentDialogChosen = useEffect(
        () => {
            let number = props.location.pathname.substr(-1)
            props.changeCurrentDialog(number)
        }, [props.location.pathname]
    )
    const showDialogsList = (dialogsList) => {
        let currentNumber = props.location.pathname.substr(-1)
        debugger
        return (

            dialogsList.map((dialog, i) => <Dialog key={i} changeDialog={(dialog) => {
                    props.changeCurrentDialog(dialog)
                }}
                                                   dialogName={dialog.dialogName}
                                                   dialogId={dialog.dialogId}
                                                   avatarURL={dialog.avatarURL}
                                                   currentDialog={props.dialogsPage.currentDialog}
                />
            )
        )
    }
    let showMessages = dialogID => {
        let messages
        if (isNaN(dialogID)) {
            return <div>no dialog chosen</div>
        }
        messages = props.dialogsPage.dialogsList[dialogID].messages
        if (!messages.length > 0) {
            return <div>There is no messages</div>
        }
        return messages.map((message) => <Message key={message + 1} message={message}/>)
    }
    let dialogsList = showDialogsList(props.dialogsPage.dialogsList);
    let listMessages = showMessages(props.dialogsPage.currentDialog);

    let OnSendMessage = () => props.sendMessage(props.dialogsPage.currentDialog);
    let OnNewMessageText = e => props.newMessage(e.target.value);
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
                    {(isNaN(props.dialogsPage.currentDialog)) ?
                        <div/>
                        : <div>
                            <div>
                        <textarea onChange={OnNewMessageText} placeholder={"Write message..."}
                                  value={props.dialogsPage.newMessageText}/>
                            </div>
                            <div>
                                <button onClick={OnSendMessage}>Send</button>
                            </div>
                        </div>
                    }
                </div>
            </div>

        </div>
    )
}

export default Dialogs;