import React from "react";
import S from "./dialog.module.css";
import {NavLink} from "react-router-dom";


const Dialog = (props) => {
    return (
        <div className={S.dialog}>
            <img src={props.avatarURL}/>
            <NavLink to={`/dialogs/${props.dialogId}`} activeClassName={S.active}>{props.dialogName}</NavLink>
        </div>
    );
}
export default Dialog;