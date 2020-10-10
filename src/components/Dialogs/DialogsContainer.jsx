import React from 'react';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withLoginCheck from "../common/HOCs/withLoginCheck";
import {compose} from "redux";
import {sendMessage} from "../../redux/dialogs-reducer";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

export default compose(
    withLoginCheck,
    connect(mapStateToProps, {sendMessage})
)(Dialogs);