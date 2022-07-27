import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getUserAuth, logout } from "../redux/auth_reducer";
import Header from "./Header";

const HeaderContainer = (props) => {
  useEffect(() => {
    props.getUserAuth()
  }, []);

  return <Header {...props} />;
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { getUserAuth, logout })(HeaderContainer);
