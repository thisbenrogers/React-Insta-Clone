import React from "react";
import PropTypes from "prop-types";

const Comment = props => {
  return (
    <div className="comment-container">
      <p>
        <strong>{props.user}</strong> {props.comment}
      </p>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.string.isRequired
};

export default Comment;
