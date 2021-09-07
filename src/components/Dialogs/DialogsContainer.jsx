import React from "react";
import { connect } from "react-redux";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";

import DialogItem from "./DialogItem/DialogItem";
import Dialogs from "./Dialogs";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

// const DialogsContainer = (props) => {

//   return (
//     <StoreContext.Consumer>
//       { store => {
//          let state = store.getState().dialogsPage;

//          let onSendMessageClick = () => {
//            store.dispatch(sendMessageCreator());
//          };
//          let onNewMessageChange = (body) => {
//            store.dispatch(updateNewMessageBodyCreator(body));
//          };

//        return  <Dialogs
//           dialogsPage={state}
//           onSendMessageClick={onSendMessageClick}
//           updateNewMessageBody={onNewMessageChange}
//         />;
//       }}
//     </StoreContext.Consumer>
//   );
// };

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    onSendMessageClick: () => {
      dispatch(sendMessageCreator());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
