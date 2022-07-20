import messagePageReducer from "./reducer_messagePage";
import sadebarReducer from "./reducer_sadebar";
import profilePageReducer from "./reduser_profilePage";


export let store = {
    _state: {
        messagesPage: {
            dialogsData: [
                { id: 1, name: "Dima" },
                { id: 2, name: "Dasha" },
                { id: 3, name: "Misha" },
            ],
            messageData: [
                { id: 1, mess: "Hi" },
                { id: 2, mess: "Hellow" },
                { id: 3, mess: "Yo" },
            ],
            newMessageBody: ''
        },
        profilePage: {
            postData: [
                { id: 1, message: 'Dima', LikesCount: 12 },
                { id: 2, message: 'Dasha', LikesCount: 10 },
                { id: 3, message: 'Misha', LikesCount: 11 }
            ],
            newPostText: 'Hi'
        },
        sadebar: {
            myfriends: [
                { id: 1, name: "Dima", icon: 'https://i.pinimg.com/736x/11/11/9b/11119b4215f6dd58285129f522c22f23.jpg' },
                { id: 2, name: "Dasha", icon: 'https://i.pinimg.com/736x/11/11/9b/11119b4215f6dd58285129f522c22f23.jpg' },
                { id: 3, name: "Misha", icon: 'https://i.pinimg.com/736x/11/11/9b/11119b4215f6dd58285129f522c22f23.jpg' }
            ]
        }
    },

    getState() {
        return this._state
    },

    _renderUI() {
        console.log('state change');
    },

    subscribe(observer) {
        this._renderUI = observer
    },

    // _addPost() {
    //     const text = { id: 5, message: this._state.profilePage.newPostText, LikesCount: 0 }
    //     this._state.profilePage.postData.push(text)
    //     this._state.profilePage.newPostText = ''
    //     this._renderUI(this._state)
    // },

    // _updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._renderUI(this._state)

    // },

    dispatch(action) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action)
        this._state.messagesPage = messagePageReducer(this._state.messagesPage, action)
        this._state.sadebar = sadebarReducer(this._state.sadebar, action)

        this._renderUI(this._state)

    }

}
