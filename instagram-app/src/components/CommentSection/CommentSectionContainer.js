import React from "react";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

class CommentSectionContainer extends React.Component {
  render() {
    return (
      <div className="comment-section-container">
        <p>Comment Section Container</p>
        <Comment />
        <Comment />
        <Comment />
        <CommentInput />
      </div>
    );
  }
}

export default CommentSectionContainer;
