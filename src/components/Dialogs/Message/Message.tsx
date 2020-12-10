import React, {FC} from "react";
import S from "./message.module.css";

const checkAuthor = (author: string) => {
    if (author === "Me") {
        return [null, null]
    }
    return [S.anotherAuthor, S.anotherAuthorMessage];
}

type PropsType = {
    message: {
        author: string
        text: string
    }
}
const Message: FC<PropsType> = ({message}) => {
    let messagesStyles = checkAuthor(message.author)
    return (
        <div>
            <div className={S.messageBox + " " + messagesStyles[0]}>
                <div className={S.message + " " + messagesStyles[1]}>
                    <div>{message.author}:</div>
                    <div> {message.text}</div>
                </div>

            </div>
        </div>
    )
}

export default Message;