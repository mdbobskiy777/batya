const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE_MESSAGE_TEXT";

export let send_message = (dialogNumber) =>({type:SEND_MESSAGE, dialogNumber:dialogNumber})
export let update_message_text= (text) => ({type:UPDATE_MESSAGE_TEXT,text:text})


let sendMessage = (state,dialogNumber) => {
    let newState = state;
    if (isNaN(dialogNumber)) dialogNumber = 0;
    newState.dialogsList[dialogNumber].messages.push(
        {author: "Me", text: newState.newMessageText}
    )
    return  updateMessageText(newState,"");

}

let updateMessageText = (state,text) => {
    let newState = state;
    newState.newMessageText = text;
    return newState;
}

export const dialogs_reducer = (state, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            return sendMessage(state,action.dialogNumber);
        case UPDATE_MESSAGE_TEXT:
            return updateMessageText(state, action.text);
        default:
            return state;
    }


}
