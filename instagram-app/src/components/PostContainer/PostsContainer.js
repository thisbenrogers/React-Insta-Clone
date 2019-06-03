import React from "react";
import PostHeader from "./PostHeader";

class PostsContainer extends React.Component {
  render() {
    return (
      <div className="posts-container">
        <p>Posts Container</p>
        <PostHeader />
      </div>
    );
  }
}

export default PostsContainer;
