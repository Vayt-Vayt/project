import React from "react";
import classes from "./Message.module.css";

const Message = (props) => {

  // let newPostElement = React.createRef()

    // const addPost = (event) => {
    //     event.preventDefault()
    //     let text = newPostElement.current.value
    //     alert(text)
    // }

  return (
    <div className={classes.message}>
      {props.mess}
      {/* <form action="false" onSubmit={addPost}>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <button type="sybmit">Add post</button>
      </form> */}
    </div>
  );
};

export default Message;
