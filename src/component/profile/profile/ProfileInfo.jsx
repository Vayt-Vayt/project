import React from "react";
import Loader from "../../common/PreLoader/Loader";
import classes from "./ProfileInfo.module.css";
import userPxoto from "../../../assets/images/users.jpg";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Loader />;
  }
  return (
    <div>
      <div>
        <img
          src="https://natworld.info/wp-content/uploads/2018/01/%D0%A1%D0%BE%D1%87%D0%B8%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-%D1%82%D0%B5%D0%BC%D1%83-%D0%9F%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%B0.jpeg"
          alt="картинка"
        />
      </div>
      <img
        src={
          props.profile.photos.large !== null
            ? props.profile.photos.large
            : userPxoto
        }
        alt="icon"
        className={classes.photo}
      />
      <div className={classes.description}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
