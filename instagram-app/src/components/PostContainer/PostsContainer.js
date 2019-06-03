import React from "react";
import Post from "./Post";

const PostsContainer = props => {
  return (
    <div className="posts-container">
      {props.posts.map(post => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
};

export default PostsContainer;
