import React from "react";
import LikesCounter from "../counter/likesCounter";
import Comment from "./comment";
import "./post.css";

const Post = ({ content, author, creatAt, likesCount }) => {
  const [isHidden, setisHidden] = React.useState(false);
  const [comment, setComment] = React.useState("Напишите свой коментарий...");
 
  return (
    <div className="post__container">
      {!isHidden && (
        <div className="post_wrapper">
          <div className="post__author">{author}</div>
          <div className="post__content">{content}</div>
          <div className="post__createAt">{creatAt}</div>
          <LikesCounter count={likesCount} />
        </div>
      )}
      <button className="hiddenButton" onClick={() => setisHidden(!isHidden)}>
        {isHidden ? "show" : "hide"}
      </button>
      <button
        onClick = {()=> setComment('Отправлен')} 
      >Send comment </button>
      <Comment comment={comment} onBlur={setComment} />
    </div>
  );
};
export default Post;
