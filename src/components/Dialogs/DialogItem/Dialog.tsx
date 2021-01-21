import React, {FC} from "react"
import S from "./dialog.module.css"
import {NavLink} from 'react-router-dom'

type PropsType = {
    changeDialog: (dialogId: number) => void
    dialogId: number
    currentDialog: number
    avatarURL: string
    dialogName: string
}

const Dialog: FC<PropsType> = ({
                                   changeDialog,
                                   dialogId,
                                   currentDialog,
                                   avatarURL,
                                   dialogName
                               }) => {
    let onClickDialog = () => changeDialog(dialogId);

    return <div onClick={onClickDialog}
                className={S.dialog}>
        <img alt={"imaga"}
             src={avatarURL}
        />
        < NavLink
            to={`/dialogs/${dialogId}`}
            className={(dialogId == currentDialog) ? S.active : " "}>
            {dialogName}
        </NavLink>
    </div>
}
export default Dialog;