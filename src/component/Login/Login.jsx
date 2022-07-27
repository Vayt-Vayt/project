import React from "react";
import { reduxForm } from "redux-form";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { login, logout } from "../redux/auth_reducer";
import { Navigate } from "react-router-dom";

const Login = (props) => {
  const onsubmit = (formData) => {
    console.log(formData);
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Navigate to={`/profile/${props.userId}`} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onsubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  userId: state.auth.userId,
});

export default connect(mapStateToProps, { login, logout })(Login);

const ReduxLoginForm = reduxForm({
  form: "login",
})(LoginForm);
