import React from "react";
import { Field } from "redux-form";
import { Textarea } from "../../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validator";
import classes from "./Message.module.css";

const maxLength100 = maxLengthCreator(100)

const Message = (props) => {

  return (
    <div className={classes.message}>
      {props.mess}
      <form action="false" onSubmit={props.handleSubmit}>
        <div>
          <Field name={'message'}  component={Textarea} type='text' validate={[required, maxLength100]}/>
        </div>
        <button>Add message</button>
      </form>
    </div>
  );
};

export default Message;
