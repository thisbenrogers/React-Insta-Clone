import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

import Post from "./Post";

const Posts = styled.div`
  max-width: 1010px;
  padding: 26px 20px;
  width: 100%;
  margin: 0 auto;
`;

const PostsContainer = props => {
  return (
    <Posts className="posts-container">
      {props.posts.map(post => {
        return <Post key={post.id} post={post} />;
      })}
    </Posts>
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
