import React from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";
import "./style.scss";
//!Тут буду все, что связанное с комментариями
interface CommentSectionProps {
  slug: string;
}

const CommentSection = ({ slug }: CommentSectionProps) => {
  return (
    <section className="comments">
      <div className="comments__container">
        <AddComment slug={slug} />
        <CommentList />
      </div>
    </section>
  );
};

export default CommentSection;
