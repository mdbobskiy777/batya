import {send_message, update_message_text, change_current_dialog, InitialStateType} from "../../redux/dialogs-reducer"
import Dialogs from "./Dialogs"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {compose} from "redux";
import {AppStoreType} from "../../redux/redux-store";

type MapStateToPropsReturnType = {
    dialogsPage: InitialStateType
}
type OwnPropsType = {}

type MapDispatchToPropsType = {
    sendMessage: (currentDialog: number) => void
    newMessage: (e: string) => void
    changeCurrentDialog: (dialog: number) => void
}

let mapStateToProps = (state: AppStoreType): MapStateToPropsReturnType => ({dialogsPage: state.dialogsPage});

export default compose(
//<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
    connect<MapStateToPropsReturnType,
        MapDispatchToPropsType,
        OwnPropsType,
        AppStoreType>(mapStateToProps, {
        sendMessage: send_message,
        newMessage: update_message_text,
        changeCurrentDialog: change_current_dialog
    }),
    withRouter
)(Dialogs);
