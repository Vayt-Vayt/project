import React from "react";
import MyPosts from "./myPosts/MyPosts";
import classes from "./Profile.module.css";
import ProfileInfo from "./profile/ProfileInfo";

const Profile = () => {
  return (
    <main className={classes.content}>
      <ProfileInfo />
      <MyPosts />
    </main>
  );
};

export default Profile;
