import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import CommentSectionContainer from "../CommentSection/CommentSectionContainer";
import PostHeader from "./PostHeader";

const PostWrapper = styled.div`
  width: 100%;
  margin: auto 0;
  margin-bottom: 40px;
`;

const Img = styled.img`
  width: 100%;
`;

class Post extends React.Component {
  render() {
    return (
      <PostWrapper className="post">
        <PostHeader
          thumb={this.props.post.thumbnailUrl}
          name={this.props.post.username}
        />
        <Img src={this.props.post.imageUrl} alt="post" />
        <CommentSectionContainer
          user={this.props.post.username}
          likes={this.props.post.likes}
          comments={this.props.post.comments}
          time={this.props.post.timestamp}
        />
      </PostWrapper>
    );
  }
}

Post.propTypes = {
  thumbnailUrl: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object),
  timestamp: PropTypes.string.isRequired
};

export default Post;
