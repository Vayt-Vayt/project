import React from "react";
import classes from "./User.module.css";
import userPxoto from "../../assets/images/users.jpg";
import { NavLink } from "react-router-dom";
const Users = (props) => {
  return (
    <div>
      <div>
        {props.slicedPages.map((page, index) => (
          <span
            key={index}
            className={props.currentPage === page ? classes.selectedPage : ''}
            onClick={() => {
              props.onPageChanged(page);
            }}
          >
            {page}
          </span>
        ))}
      </div>
      {props.users.map((user) => (
        <div key={user.id}>
          <span>
            <div>
              <NavLink to={`/profile/${user.id}`}>
                <img
                  alt="avatar"
                  src={
                    user.photos.small !== null ? user.photos.small : userPxoto
                  }
                  className={classes.photo}
                />
              </NavLink>
            </div>
            <div>
              {user.followed ? (
                <button
                  disabled={props.followingInProgress.some(id => id === user.id)}
                  onClick={() => { props.unFollow(user.id) }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some(id => id === user.id)}
                  onClick={() => { props.follow(user.id) }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{"user.location.country"}</div>
              <div>{"user.location.sity"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
