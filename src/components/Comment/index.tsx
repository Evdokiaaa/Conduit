import React from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";
import "./style.scss";
//!Тут буду все, что связанное с комментариями
const CommentSection = () => {
  return (
    <section className="comments">
      <div className="comments__container">
        <AddComment />
        <CommentList />
      </div>
    </section>
  );
};

export default CommentSection;
