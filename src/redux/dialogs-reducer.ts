const SEND_MESSAGE = "dialog-reducer/SEND_MESSAGE";
const UPDATE_MESSAGE_TEXT = "dialog-reducer/UPDATE_MESSAGE_TEXT";
const CHANGE_DIALOG = "dialog-reduces/CHANGE_DIALOG";

let initialStore = {
    dialogsList: [
        {
            dialogName: "Владимир Мельничук",
            dialogId: 0,
            avatarURL: "https://pickaface.net/gallery/avatar/unr_example_170227_1250_yq2lr.png",
            messages: [
                {author: "Me", text: "Hello"},
                {author: "Me", text: "How are you?"},
                {author: "Владимир", text: "I am fine"},
                {author: "Me", text: "That`s good"},
                {author: "Владимир", text: "Thanks"}]
        },
        {
            dialogName: "Даниил Бондарь",
            dialogId: 1,
            avatarURL: "https://pickaface.net/gallery/avatar/acrovin559439058dc7f.png",
            messages: []
        },
        {
            dialogName: "Богдан Голубец",
            dialogId: 2,
            avatarURL: "https://qph.fs.quoracdn.net/main-qimg-8d945bbaf167b063040eca16b0c59cd8.webp",
            messages: []
        },
    ],
    currentDialog: 0,
    newMessageText: ""
}

export type InitialStateType = typeof initialStore

type SendMessageActionType = {
    type: typeof SEND_MESSAGE
    dialogNumber: number
}

type UpdateMessageTextActionType = {
    type: typeof UPDATE_MESSAGE_TEXT
    text: string
}

type ChangeCurrentDialogActionType = {
    type: typeof CHANGE_DIALOG
    dialogNumber: number
}

type ChangeCurrentDialogType = (state: InitialStateType, dialogNumber: number) => InitialStateType


export let send_message = (dialogNumber: number): SendMessageActionType => ({
    type: SEND_MESSAGE,
    dialogNumber: dialogNumber
})

export let update_message_text = (text: string): UpdateMessageTextActionType => ({
    type: UPDATE_MESSAGE_TEXT,
    text: text
})

export let change_current_dialog = (dialogNumber: number): ChangeCurrentDialogActionType => ({
    type: CHANGE_DIALOG,
    dialogNumber: dialogNumber
})


let changeCurrentDialog: ChangeCurrentDialogType = (state, dialogNumber) => {
    return {...state, currentDialog: dialogNumber}
}
let ChangeCurrentDialogType = typeof change_current_dialog
let sendMessage = (state: InitialStateType, dialogNumber: number): InitialStateType => {
    let newState = {...state};
    newState.dialogsList[dialogNumber].messages = [...state.dialogsList[dialogNumber].messages];
    newState.dialogsList[dialogNumber].messages.push(
        {author: "Me", text: newState.newMessageText}
    )
    return updateMessageText(newState, "");
}
type SendMessageType =  typeof send_message

let updateMessageText = (state: InitialStateType, text: string): InitialStateType => {
    return {...state, newMessageText: text};
}
type UpdateMessageTextType = typeof update_message_text

type ActionsTypes = SendMessageActionType | UpdateMessageTextActionType | ChangeCurrentDialogActionType
const dialogsReducer = (state = initialStore, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            return sendMessage(state, action.dialogNumber);
        case UPDATE_MESSAGE_TEXT:
            return updateMessageText(state, action.text);
        case CHANGE_DIALOG:
            return changeCurrentDialog(state, action.dialogNumber)
        default:
            return state;
    }
}
export default dialogsReducer