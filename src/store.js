import {profile_reducer} from "./Reducers/profile_reducer";
import {dialogs_reducer} from "./Reducers/dialogs_reducer";

export let store = {
     _state : {
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
            newPostText: "Write post..."
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
    },

     _callSubscriber(){
         console.log("322");
     },

     getState(){
        return this._state;
    },

    subscriber(observer){
        this._callSubscriber = observer;
     },

    dispatch(action){
         this._state.profilePage = profile_reducer(this._state.profilePage,action);
         this._state.messagesPage= dialogs_reducer(this._state.messagesPage, action);
         this._callSubscriber(this._state);
    }
}

/*
window.stato = store.getState();*/
