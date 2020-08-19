let render = () => {};


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
        ],
        newPostText: "Write post"
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
        ],
        newMessageText: "Write text..."
    }
}

export const sendMessage = () => {
    state.messagesPage.dialogsList[0].messages.push(
        {author: "Me", text: state.messagesPage.newMessageText}
    )
    updateMessageText("");
}
export const updateMessageText = (text) => {
    state.messagesPage.newMessageText = text;
    render({state, addPost, sendMessage, updatePostText, updateMessageText});

}
export const updatePostText = (text) => {
    state.profilePage.newPostText = text;
    render({state, addPost, sendMessage, updatePostText, updateMessageText});
}
export const addPost = () => {
    state.profilePage.postsList.push(
        {message: state.profilePage.newPostText, likesNumber: "0"}
    )
    updatePostText("");
}
export const subscriber = observer => {
    render = observer;
}
window.stato = state;
