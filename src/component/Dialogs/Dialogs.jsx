import React from "react";
import { reduxForm } from "redux-form";
import DialogItem from "./DialogItem/DialogsItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const dialogsElement = props.dialogsData.map((dialog, index) => (
    <DialogItem key={index} name={dialog.name} id={dialog.id} />
  ));

  const messagetext = props.messageData.map((mess, index) =>  
    (<div key={index}>{mess.mess}</div>)
  )
  
  const addNewMessage = (values) => {
    props.upduteNewMessegeBodyCeator(values.message)
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>{dialogsElement}</div>
      <div className={classes.messages}>
        <div>
          <div>{messagetext}</div>
          <div>
            <ReduxMessageForm onSubmit={addNewMessage}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;

const ReduxMessageForm = reduxForm({
  form: 'messageForm',  
  })(Message)
