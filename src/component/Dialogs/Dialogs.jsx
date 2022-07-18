import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";

const DialogIten = (props) => {
  const clas = (navData) =>
    navData.isActive ? classes.active : classes.dialog;
  return (
    <div className={classes.dialog}>
      <NavLink to={`/dialogs/${props.id}`} className={clas}>
        {props.name}
      </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={classes.message}>{props.mess}</div>;
};

const Dialogs = (props) => {
  const dialogsData = [
    { id: 1, name: "Dima" },
    { id: 2, name: "Dasha" },
    { id: 3, name: "Misha" },
  ];

  const messageData = [
    { id: 1, mess: "Hi" },
    { id: 2, mess: "Hellow" },
    { id: 3, mess: "Yo" },
  ];

  const dialogsElement = dialogsData.map((dialog, index) => (
    <DialogIten key={index} name={dialog.name} id={dialog.id} />
  ));

  const messagesElement = messageData.map((message, index) => (
    <Message key={index} mess={message.mess} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>{dialogsElement}</div>
      <div className={classes.messages}>{messagesElement}</div>
    </div>
  );
};

export default Dialogs;
