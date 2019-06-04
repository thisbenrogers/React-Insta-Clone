import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";

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

const Action = styled.div``;

const Post = props => {
  return (
    <PostWrapper className="post">
      <PostHeader thumb={props.post.thumbnailUrl} name={props.post.username} />
      <Img src={props.post.imageUrl} alt="post" />
      <Action>
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faComment} />
      </Action>
      <CommentSectionContainer comments={props.post.comments} />
    </PostWrapper>
  );
};

export default Post;
