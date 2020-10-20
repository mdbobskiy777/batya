import React from "react";
import S from "./message.module.css";

const checkAuthor = author => {
    if (author === "Me") {
        return [null,null]
    }
    return [S.anotherAuthor,S.anotherAuthorMessage];
}

const Message = props => {
    let messagesStyles = checkAuthor(props.message.author)
    return (
        <div >
            <div className={S.messageBox + " " + messagesStyles[0]}>
                <div className={S.message + " " + messagesStyles[1]}>
                    <div>{props.message.author}:</div>
                    <div> {props.message.text}</div>
                </div>

            </div>
        </div>
    )
}

export default Message;