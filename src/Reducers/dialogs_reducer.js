const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE_MESSAGE_TEXT";
const CHANGE_DIALOG = "CHANGE_DIALOG";

let initialStore = {
    dialogsList: [
        {
            dialogName: "Жекич",
            dialogId: 0,
            avatarURL: "https://pickaface.net/gallery/avatar/unr_example_170227_1250_yq2lr.png",
            messages: [
                {author: "Me", text: "Hello"},
                {author: "Me", text: "How are you?"},
                {author: "Жекич", text: "I am fine"},
                {author: "Me", text: "That`s good"},
                {author: "Жекич", text: "Thanks"}]
        },
        {
            dialogName: "Вилат",
            dialogId: 1,
            avatarURL: "https://pickaface.net/gallery/avatar/acrovin559439058dc7f.png",
            messages: []
        },
        {
            dialogName: "Валет",
            dialogId: 2,
            avatarURL: "https://qph.fs.quoracdn.net/main-qimg-8d945bbaf167b063040eca16b0c59cd8.webp",
            messages: []
        },
    ],
    currentDialog: 0,
    newMessageText: ""
}


export let send_message = (dialogNumber) => ({type: SEND_MESSAGE, dialogNumber: dialogNumber})
export let update_message_text = (text) => ({type: UPDATE_MESSAGE_TEXT, text: text})
export let change_current_dialog = (dialogNumber) => ({type:CHANGE_DIALOG,dialogNumber:dialogNumber})

let changeCurrentDialog = (state, dialogNumber) => {
    debugger
    let newState = {...state}
    if (!isNaN(dialogNumber)) {
        newState.currentDialog = dialogNumber;
    }else{
        newState.currentDialog = 0;
    }
    return newState;
}

let sendMessage = (state, dialogNumber) => {
/*
    if (isNaN(dialogNumber)) dialogNumber = 0;
*/

    let newState = {...state};
    newState.dialogsList[dialogNumber].messages = [...state.dialogsList[dialogNumber].messages];
    newState.dialogsList[dialogNumber].messages.push(
        {author: "Me", text: newState.newMessageText}
    )
    return updateMessageText(newState, "");

}

let updateMessageText = (state, text) => {return{...state,newMessageText :text };}

export const dialogs_reducer = (state = initialStore, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            return sendMessage(state, action.dialogNumber);
        case UPDATE_MESSAGE_TEXT:
            return updateMessageText(state, action.text);
        case CHANGE_DIALOG:
            return changeCurrentDialog(state,action.dialogNumber)
        default:
            return state;
    }


}
