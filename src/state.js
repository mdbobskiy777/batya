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
    _sendMessage(dialogNumber){
         if(isNaN(dialogNumber)) dialogNumber = 0;
        this._state.messagesPage.dialogsList[dialogNumber].messages.push(
            {author: "Me", text: this._state.messagesPage.newMessageText}
        )
/*
        this._updateMessageText("");
*/
        this._state.messagesPage.newMessageText="";
        this._callSubscriber(this._state);
    },
    _updateMessageText(text){
        this._state.messagesPage.newMessageText = text;
        this._callSubscriber(this._state);
    },
    _updatePostText(text){
        this._state.profilePage.newPostText = text;
        debugger
        this._callSubscriber(this._state);
    },
    _addPost(){
        this._state.profilePage.postsList.push(
            {message: this._state.profilePage.newPostText, likesNumber: "0"}
        );
        this._updatePostText("");
    },

     getState(){
        return this._state;
    },
    subscriber(observer){
        this._callSubscriber = observer;
     },
    dispatch(action){
         debugger
         switch (action.type){
             case "SEND_MESSAGE": this._sendMessage(action.dialogNumber);
                break;
             case "ADD_POST" : this._addPost();
                 break;

             case "UPDATE_MESSAGE_TEXT": this._updateMessageText(action.text);
                 break;
             case "UPDATE_POST_TEXT" : this._updatePostText(action.text)
                 break;
             default:
                 break;
         }
    }
}

window.stato = store.getState();