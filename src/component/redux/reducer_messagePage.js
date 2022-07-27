


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
}

const messagePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messageData: [...state.messageData, { id: 5, mess: action.payload }],
            }
        default:
            return state;
    }


}



export const upduteNewMessegeBodyCeator = (body) => ({
    type: SEND_MESSAGE,
    payload: body
})


export default messagePageReducer;