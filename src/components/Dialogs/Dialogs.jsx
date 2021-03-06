import React from "react";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";



const Dialogs = (props) => {

  let state = props.dialogsPage;


  let dialogsElements = state.dialogs.map(d => 
    <DialogItem name={d.name} id={d.id} />);
  let messagesElements = state.messages.map(m => 
  <Message message={m.message} />);
let newMessageBody = state.newMessageBody;
 


  let onSendMessageClick = () => {
  
     props.onSendMessageClick();

  }
  let onNewMessageChange = (e) => {
     let body = e.target.value;
     props.updateNewMessageBody(body);
    }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <div> <textarea  
          value = {newMessageBody}
          onChange={onNewMessageChange}
          placeholder ='send your message'></textarea> </div>
          <div><button onClick={onSendMessageClick}>Send Message</button></div>
        </div>
        </div>
      
    </div>
  );
};

export default Dialogs;
