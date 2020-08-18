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
    if (!messages) return <div>There is no messages</div>;
    return messages.map((message) => {
        return <Message key={message + 1} message={message}/>
    })
}

const Dialogs = (props) => {

    let DialogsList = showDialogsList(props.state.dialogsList);
    let ListMessages = showMessages(props.state.dialogsList[0].messages, );
    let newPostRef = React.createRef();

    let sendMessage = () => {
        let text = newPostRef.current.value;
       props.sendMessage(text);s
    }



    return (
        <div className={S.dialogs}>
            <div className={S.dialogsList}>
                {DialogsList}
            </div>
            <div className={S.messages}>
                <div>
                    {/*захардкодил*/}
                    {ListMessages}
                </div>
                <div className={S.newMessage}>
                    <div>
                        <textarea  ref={newPostRef}>Write text...</textarea>
                    </div>
                    <div>
                        <button onClick = {sendMessage}>Send</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;