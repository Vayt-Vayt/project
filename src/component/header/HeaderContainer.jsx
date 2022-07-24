import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { userAPI } from "../api/api";
import { setUserData } from "../redux/auth_reducer";
import Header from "./Header";

const HeaderContainer = (props) => {
  useEffect(() => {
    userAPI.getAuth().then((data) => {
      if (data.data.resultCode === 0) {
        props.setUserData(data.data);
      }
    });
  }, []);

  return <Header {...props} />;
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setUserData })(HeaderContainer);
