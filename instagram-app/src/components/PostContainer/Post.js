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

const Post = props => {
  return (
    <PostWrapper className="post">
      <PostHeader thumb={props.post.thumbnailUrl} name={props.post.username} />
      <Img src={props.post.imageUrl} alt="post" />
      <CommentSectionContainer
        likes={props.post.likes}
        comments={props.post.comments}
        time={props.post.timestamp}
      />
    </PostWrapper>
  );
};

Post.propTypes = {
  thumbnailUrl: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object),
  timestamp: PropTypes.string.isRequired
};

export default Post;
