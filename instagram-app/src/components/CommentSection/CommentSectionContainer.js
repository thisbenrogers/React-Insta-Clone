import React from "react";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

const CommentSectionContainer = props => {
  return (
    <div className="comment-section-container">
      {props.comments.map(comment => {
        return (
          <Comment
            key={comment.id}
            comment={comment.text}
            user={comment.username}
          />
        );
      })}
      <CommentInput />
    </div>
  );
};

export default CommentSectionContainer;
