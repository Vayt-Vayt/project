import React from "react";
import MyPosts from "./myPosts/MyPosts";
import classes from "./Profile.module.css";
import ProfileInfo from "./profile/ProfileInfo";

const Profile = (props) => {
  return (
    <main className={classes.content}>
      <ProfileInfo />
      <MyPosts postData={props.profilePage.postData}/>
    </main>
  );
};

export default Profile;
