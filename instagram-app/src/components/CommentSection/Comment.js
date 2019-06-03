import React from "react";

const Comment = props => {
  return (
    <div className="comment-container">
      <p>
        <strong>{props.user}</strong> {props.comment}
      </p>
    </div>
  );
};

export default Comment;
