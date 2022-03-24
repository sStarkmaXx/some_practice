import React from "react";
import css from "./Message.module.css";

type MessagePropsType = {
  avatar: string;
  name: string;
  message: string;
  time: string;
};

function Message({ avatar, name, message, time }: MessagePropsType) {
  return (
    <div className={css.message}>
      <div className={css.avatar}>
        <img src={avatar} alt="" />
      </div>
      <div className={css.messageBlock}>
        <div className={css.name}>
          <b>{name}</b>
        </div>
        <div className={css.messageText}>{message}</div>
        <div className={css.time}>{time}</div>
      </div>
    </div>
  );
}

export default Message;
