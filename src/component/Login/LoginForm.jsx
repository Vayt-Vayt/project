import React from "react";
import { Field } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../utils/validators/validator";

const maxLength20 = maxLengthCreator(20)


const LoginForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"email"} 
               component={Input} 
               type={'email'} 
               name={'email'} 
               validate={[required, maxLength20]}
        />
               
      </div>
      <div>
        <Field placeholder={"password"} 
               type={'Password'} 
               component={Input} 
               name={'password'} 
               validate={[required, maxLength20]}
          />
      </div>
      <div>
        <Field type={"checkbox"} 
               component={Input} 
               name={'rememberMe'}
        /> remember me
      </div>
      <div>
        <button>Login</button>
      </div>
      <div></div>
    </form>
  );
};

export default LoginForm;


