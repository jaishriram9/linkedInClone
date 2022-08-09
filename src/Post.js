import React, { forwardRef } from "react";
import { Avatar } from "@material-ui/core";
import "./Post.css";
import InputOption from "./InputOption";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ChatIcon from "@material-ui/icons/Chat";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";

const post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      {/*Post Buttons*/}
      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltIcon} text="likes" color="gray" />
        <InputOption Icon={ChatIcon} text="Comment" color="gray" />
        <InputOption Icon={ShareIcon} text="Share" color="gray" />
        <InputOption Icon={SendIcon} text="Send" color="gray" />
      </div>
    </div>
  );
});

export default post;
