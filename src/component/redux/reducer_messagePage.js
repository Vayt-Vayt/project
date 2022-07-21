


const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {
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
}

const messagePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.payload
            }
        case SEND_MESSAGE:
            const body = state.newMessageBody
            return {
                ...state,
                messageData: [...state.messageData, { id: 5, mess: body }],
                newMessageBody: ''
            }
        default:
            return state;
    }


}

export const sendMessegeCeator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    payload: body
})

export const upduteNewMessegeBodyCeator = () => ({
    type: SEND_MESSAGE
})


export default messagePageReducer;