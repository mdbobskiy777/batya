import React, {ChangeEvent, FC, useEffect} from "react";
import S from "./dialogs.module.css";
import Dialog from "./DialogItem/Dialog";
import Message from "./Message/Message";
import {InitialStateType} from "../../redux/dialogs-reducer";
import {RouteComponentProps} from "react-router";

type dialogsPropsType = {
    sendMessage: (currentDialog: number) => void
    newMessage: (e: string) => void
    changeCurrentDialog: (dialog: number) => void
    dialogsPage: InitialStateType
}
const Dialogs: FC<dialogsPropsType&RouteComponentProps> = ({sendMessage,
                                           dialogsPage,
                                           location,
                                           changeCurrentDialog,
                                           newMessage,
                                           }) => {
    useEffect(
        () => {
            let number = location.pathname.substr(-1)
            changeCurrentDialog(Number(number))
        }, [location.pathname]
    )
    type DialogsListType = typeof dialogsPage.dialogsList
    const showDialogsList = (dialogsList:DialogsListType) => {
        return (

            dialogsList.map((dialog, i) => <Dialog key={i} changeDialog={(dialog) => {
                    changeCurrentDialog(dialog)
                }}
                                                   dialogName={dialog.dialogName}
                                                   dialogId={dialog.dialogId}
                                                   avatarURL={dialog.avatarURL}
                                                   currentDialog={dialogsPage.currentDialog}
                />
            )
        )
    }
    let showMessages = (dialogID:number) => {
        type Messages = {
            author:string
            text:string
        }

        let messages: Array<Messages>
        if (isNaN(dialogID)) {
            return <div>no dialog chosen</div>
        }
        messages = dialogsPage.dialogsList[dialogID].messages
        if (!(messages.length > 0)) {
            return <div>There is no messages</div>
        }
        return messages.map((message) => <Message key={message.author + 1} message={message}/>)
    }
    let dialogsList = showDialogsList(dialogsPage.dialogsList);
    let listMessages = showMessages(dialogsPage.currentDialog);

    let OnSendMessage = () => sendMessage(dialogsPage.currentDialog);
    let OnNewMessageText = (e:ChangeEvent<HTMLTextAreaElement>) => newMessage(e.target.value);
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
                    {(isNaN(dialogsPage.currentDialog)) ?
                        <div/>
                        : <div>
                            <div>
                        <textarea onChange={OnNewMessageText} placeholder={"Write message..."}
                                  value={dialogsPage.newMessageText}/>
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