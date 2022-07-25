import React from "react";
import { Navigate } from "react-router-dom";
import DialogItem from "./DialogItem/DialogsItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const dialogsElement = props.dialogsData.map((dialog, index) => (
    <DialogItem key={index} name={dialog.name} id={dialog.id} />
  ));

  const messagesElement = props.messageData.map((message, index) => (
    <Message key={index} mess={message.mess} />
  ));

  const onSentMessageClick = () => {
    props.upduteNewMessegeBodyCeator();
  };

  const onNewMessageChange = (e) => {
    const body = e.target.value;
    props.sendMessegeCeator(body);
  };
  

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>{dialogsElement}</div>
      <div className={classes.messages}>
        <div>{messagesElement}</div>
        <div>
          <div>
            <textarea
              placeholder="Enter you massege"
              value={props.newMessageBody}
              onChange={onNewMessageChange}
            ></textarea>
          </div>
          <div>
            <button onClick={onSentMessageClick}>send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
