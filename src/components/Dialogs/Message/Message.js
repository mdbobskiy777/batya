import React from "react";
import S from "./message.module.css";

const checkAuthor = (author) => {
    if (author === "Me") {
        return 0;
    } else return S.anotherAuthor;
}

const messageCheckAuthor = (author) => {
    if (author === "Me") {
        return 0;
    } else return S.anotherAuthorMessage;
}

const Message = (props) => {
    return (
        <div >
            <div className={S.messageBox + " " + checkAuthor(props.message.author)}>
                <div className={S.message + " " + messageCheckAuthor(props.message.author)}>
                    <div>{props.message.author}:</div>
                    <div> {props.message.text}</div>
                </div>

            </div>
        </div>
    )
}

export default Message;