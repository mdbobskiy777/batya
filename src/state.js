import {reRender} from "./render"

export let state = {
    profilePage: {
        info: [
            {name: "Eugene"},
            {surname: "Bober"},
            {sex: "male"},
            {age: "23"},
            {phone: "+380932731283"}
        ],
        postsList: [
            {message: "Hi! this`s my hardcode post!", likesNumber: "23"},
            {message: "This too", likesNumber: "12"},
            {message: "and this", likesNumber: "3"},
            {message: "soon i change it", likesNumber: "2"},
            {message: "VERY SOON", likesNumber: "45"}
        ]
    },
    messagesPage: {
        dialogsList: [
            {
                dialogName: "Жекич",
                dialogId: 0,
                avatarURL: "https://pickaface.net/gallery/avatar/unr_example_170227_1250_yq2lr.png",
                messages: [
                    {author: "Me", text: "Hello"},
                    {author: "Me", text: "How are you?"},
                    {author: "Жекич", text: "I am fine"},
                    {author: "Me", text: "It`s good"},
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
        ]
    }
}
export const sendMessage = (text) => {
    state.messagesPage.dialogsList[0].messages.push(
        {author:"Me",text:text}
    )
    reRender(state,sendMessage);
}
export const addPost = (text) => {
    state.profilePage.postsList.push(
        {message: text, likesNumber: "0"}
    )
    reRender(state, addPost);
}