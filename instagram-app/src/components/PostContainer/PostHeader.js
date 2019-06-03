import React from "react";

const PostHeader = props => {
  return (
    <div className="post-header-container">
      <img src={props.thumb} alt="user thumbnail" />
      <h2>{props.name}</h2>
    </div>
  );
};

export default PostHeader;
