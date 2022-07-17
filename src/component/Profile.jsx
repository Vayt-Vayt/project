import React from 'react';
import classes from './Profile.module.css'

const Profile = () => {
    return (
      <main className={classes.content}>
        <div>
          <img src='https://natworld.info/wp-content/uploads/2018/01/%D0%A1%D0%BE%D1%87%D0%B8%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-%D1%82%D0%B5%D0%BC%D1%83-%D0%9F%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%B0.jpeg' alt='картинка' />
        </div>
        <div>ava + description</div>
        <div>My post</div>
        <div>New post</div>
        <div className={classes.posts}>
          <div className={classes.item}>Post1</div>
          <div className={classes.item}>Post2</div>
        </div>
       
      </main>
    );
};

export default Profile;