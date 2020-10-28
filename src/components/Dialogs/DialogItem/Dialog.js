import React from "react";
import S from "./dialog.module.css";
import {NavLink} from "react-router-dom";


const Dialog = props => {
    let onClickDialog = () => props.changeDialog(props.dialogId);

    return <div onClick={onClickDialog} className={S.dialog}>
        <img alt={"imaga"} src={props.avatarURL}/>
        <NavLink to={`/dialogs/${props.dialogId}`}
                 onBlur = {()=>{
                     props.changeDialog("dialogFromBlur")
                 }}
                 className={(props.dialogId === props.currentDialog) ? S.active : " "}>
            {props.dialogName}
        </NavLink>
    </div>
}
export default Dialog;