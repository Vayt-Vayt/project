


const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const messagePageReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.payload
            return state;
        case SEND_MESSAGE:
            const body = state.newMessageBody
            state.messageData.push({ id: 5, mess: body })
            state.newMessageBody = ''
            return state;
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