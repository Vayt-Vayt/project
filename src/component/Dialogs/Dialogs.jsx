import React from "react";
import { sendMessegeCeator, upduteNewMessegeBodyCeator } from "../redux/reducer_messagePage";
import DialogItem from "./DialogItem/DialogsItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";



const Dialogs = (props) => {
  const dialogsData = props.messagesPage.dialogsData
  const messageData = props.messagesPage.messageData
  const newMessageBody = props.messagesPage.newMessageBody

  const dialogsElement = dialogsData.map((dialog, index) => (
    <DialogItem key={index} name={dialog.name} id={dialog.id} />
  ));

  const messagesElement = messageData.map((message, index) => (
    <Message key={index} mess={message.mess} />
  ));


    const onSentMessageClick = () => {
      props.dispatch(upduteNewMessegeBodyCeator())
    }

    const onNewMessageChange = (e) => {
     const body = e.target.value
     props.dispatch(sendMessegeCeator(body))
    }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>{dialogsElement}</div>
      <div className={classes.messages}>
        <div>{messagesElement}</div>
        <div>
          <div>
            <textarea 
              placeholder="Enter you massege" 
              value={newMessageBody}
              onChange={onNewMessageChange}
            > 
            </textarea>
          </div>
          <div>
            <button onClick={onSentMessageClick}>
              send
            </button>
          </div>
        </div>  
      </div>
    </div>
  );
};

export default Dialogs;
