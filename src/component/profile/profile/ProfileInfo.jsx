import React from "react";
import Loader from "../../common/PreLoader/Loader";
import classes from "./ProfileInfo.module.css";
import userPxoto from "../../../assets/images/users.jpg";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Loader />;
  }
  return (
    <div>
      <img
        src={
          props.profile.photos.large !== null
            ? props.profile.photos.large
            : userPxoto
        }
        alt="icon"
        className={classes.photo}
      />
      <div className={classes.description}>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
      </div>
    </div>
  );
};

export default ProfileInfo;
