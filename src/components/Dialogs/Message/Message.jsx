import React from "react";
import s from "./message.module.css";



let Message = (props) => {
  return <div className={s.message}>
   <img scr="https://s00.yaplakal.com/pics/pics_original/5/3/4/9823435.jpg"></img>
    {props.message}
    </div>;
};

export default Message;
