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

class PostsContainer extends React.Component {
  render() {
    return (
      <Posts className="posts-container">
        {this.props.posts.map(post => {
          return <Post key={post.id} post={post} />;
        })}
      </Posts>
    );
  }
}

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
