import React from "react";
import S from "./dialog.module.css";
import {NavLink} from "react-router-dom";


const Dialog = (props) => {
    debugger
    let onClickDialog = () => {
        props.showMessages(props.dialogId);
    }

    return (
        <div onClick={onClickDialog} className={S.dialog}>
            <img src={props.avatarURL}/>
            <div>{props.dialogName}</div>
            {/*
            <NavLink to={`/dialogs/${props.dialogId}`} activeClassName={S.active}>{props.dialogName}</NavLink>
*/}
        </div>
    );
}
export default Dialog;