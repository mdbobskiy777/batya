import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, Form} from "react-final-form";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import FormControlsCreator from "../common/FormsControls/FormsControls";

let maxLength20 =  maxLengthCreator(20)
let Textarea = FormControlsCreator('textarea')
const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)

let DialogForm = (props) => (
    <Form
        onSubmit={obj => {
            props.sendMessage(obj.newMessage)
        }}
        render={({handleSubmit, form}) => (
            <div>
                <form onSubmit={(e) => {
                    handleSubmit(e)
                    form.reset()
                }}>
                    <div>
                        <Field validate={composeValidators(requiredField, maxLength20)}
                               name={"newMessage"}
                               component={Textarea}
                               placeholder={"write message"}/>
                    </div>
                    <div>
                        <button type={"Submit"}>Enter</button>
                    </div>
                </form>
            </div>
        )
        }
    />
)
const Dialogs = (props) => {

    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <DialogForm sendMessage={props.sendMessage}/>
            </div>
        </div>
    )
}

export default Dialogs;