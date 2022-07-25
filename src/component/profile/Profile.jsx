import React from "react";
import MyPostsContainer from "./myPosts/MyPostscontainer";
import classes from "./Profile.module.css";
import ProfileInfo from "./profile/ProfileInfo";

const Profile = (props) => {
  return (
    <main className={classes.content}>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer store={props.store} />
    </main>
  );
};

export default Profile;
