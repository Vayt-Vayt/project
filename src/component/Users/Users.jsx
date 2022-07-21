import React from "react";
import classes from "./User.module.css";

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
        {
            id: 1, 
             fullName: "Misha", 
             status: "I am boss", 
             location: {sity: 'Minsk', country: 'Jupan'},
             followed: true,
             pgotoUrl: 'https://i.pinimg.com/736x/11/11/9b/11119b4215f6dd58285129f522c22f23.jpg'
         },
         {
             id: 2, 
             fullName: "Masha", 
             status: "I am good", 
             location: {sity: 'Moscov', country: 'null'},
             followed: true,
             pgotoUrl: 'https://i.pinimg.com/736x/11/11/9b/11119b4215f6dd58285129f522c22f23.jpg'
         },        {
             id: 3, 
             fullName: "Sisha", 
             status: "I am BOSS!!!", 
             location: {sity: 'Vologda', country: 'One'},
             followed: false,
             pgotoUrl: 'https://i.pinimg.com/736x/11/11/9b/11119b4215f6dd58285129f522c22f23.jpg'
         },
        ])
    }

  return (
    <div>
      { props.users.map((user) => (
        <div key={user.id}>
          <span>
            <div>
              <img alt="avatar" src={user.pgotoUrl} className={classes.photo} />
            </div>
            <div>
              {user.followed ? (
                <button onClick={() => { props.unFollow(user.id) }}>Unfollow</button>
              ) : (
                <button onClick={() => { props.follow(user.id) }}>Follow</button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{user.fullName}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{user.location.country}</div>
              <div>{user.location.sity}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
