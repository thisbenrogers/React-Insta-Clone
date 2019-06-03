import React from "react";
import CommentSectionContainer from "../CommentSection/CommentSectionContainer";

class Post extends React.Component {
  render() {
    return (
      <div className="post">
        <p>post</p>
        <CommentSectionContainer />
      </div>
    );
  }
}

export default Post;
