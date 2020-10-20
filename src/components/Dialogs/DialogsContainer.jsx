import {send_message, update_message_text, change_current_dialog} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({dialogsPage: state.dialogsPage});

export default connect(mapStateToProps, {
    sendMessage: send_message,
    newMessage: update_message_text,
    changeCurrentDialog: change_current_dialog
})(Dialogs);
