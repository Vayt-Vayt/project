import React from "react";
import MyPosts from "./myPosts/MyPosts";
import classes from "./Profile.module.css";
import ProfileInfo from "./profile/ProfileInfo";

const Profile = (props) => {

  return (
    <main className={classes.content}>
      <ProfileInfo />
      <MyPosts 
        profilePage={props.profilePage} 
        dispatch={props.dispatch}
      />
    </main>
  );
};

export default Profile;
