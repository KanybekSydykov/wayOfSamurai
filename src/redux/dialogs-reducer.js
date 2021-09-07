const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  messages: [
    { id: 1, message: "1st msg" },
    { id: 2, message: "2nd msg" },
    { id: 3, message: "3rd msg" },
    { id: 4, message: "4th msg" },
    { id: 5, message: "5th msg" },
  ],
  dialogs: [
    { id: 1, name: "Kana" },
    { id: 2, name: "Eldi" },
    { id: 3, name: "Meka" },
    { id: 4, name: "Poker Club" },
    { id: 5, name: "Oskar" },
    { id: 6, name: "Bayza" },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
        newMessageBody: "",
      };
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: text,
  };
};

export default dialogsReducer;
