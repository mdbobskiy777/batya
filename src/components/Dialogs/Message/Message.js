import React from "react";
import S from "./message.module.css";

const checkAuthor = (author) => {
    if (author === "Me") {
        return "";
    } else return S.anotherAuthor;
}
const Message = (props) => {
    return (
        <div className={S.messageBox + " " + checkAuthor(props.message.author)}>
            <div>{props.message.author}:</div>
            <div> {props.message.text}</div>
        </div>
    )
}

export default Message;