import React from "react";
import CommentSectionContainer from "../CommentSection/CommentSectionContainer";
import PostHeader from "./PostHeader";

const Post = props => {
  return (
    <div className="post">
      <PostHeader thumb={props.post.thumbnailUrl} name={props.post.username} />
      <img src={props.post.imageUrl} alt="post" />

      <CommentSectionContainer comments={props.post.comments} />
    </div>
  );
};

export default Post;
