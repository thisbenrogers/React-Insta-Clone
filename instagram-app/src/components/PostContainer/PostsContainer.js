import React from "react";
import PropTypes from "prop-types";

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

Post.propTypes = {
  post: PropTypes.shape({
    comments: PropTypes.arrayOf(PropTypes.object),
    id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number,
    thumbnailUrl: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
  })
};

export default PostsContainer;
