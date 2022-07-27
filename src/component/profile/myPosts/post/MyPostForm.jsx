import React from "react";
import { Field } from "redux-form";
import { Textarea } from "../../../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../../utils/validators/validator";

const maxLength10 = maxLengthCreator(10)

const MyPostForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name="post" validate={[required, maxLength10]} />
      </div>
      <div>
        <button>add Post</button>
      </div>
    </form>
  );
};

export default MyPostForm;
