import React from "react";
import S from "./dialog.module.css";
import {NavLink} from "react-router-dom";


const Dialog = (props) => {
    debugger
    let onClickDialog = () => {
        debugger
        props.changeDialog(props.dialogId);
    }

    return (
        <div onClick={onClickDialog} className={S.dialog}>
            <img  alt={"imaga"} src={props.avatarURL}/>
            <NavLink to={`/dialogs/${props.dialogId}`} activeClassName={S.active}>{props.dialogName}</NavLink>
        </div>
    );
}
export default Dialog;