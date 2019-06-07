import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
// import moment from "moment";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";

import Comment from "./Comment";
import CommentInput from "./CommentInput";

const Action = styled.div`
  padding: 10px;
  svg {
    margin: 5px 15px 10px 0;
  }
`;

// const Ago = styled.p``;

const Likes = styled.p``;

class CommentSectionContainer extends React.Component {
  // console.log(props.time);

  render() {
    return (
      <Action className="comment-section-container">
        <FontAwesomeIcon icon={faHeart} size="lg" fixedWidth />
        <FontAwesomeIcon
          icon={faComment}
          size="lg"
          fixedWidth
          flip="horizontal"
        />
        <Likes>
          <strong>{this.props.likes || "0"} likes</strong>
        </Likes>
        {this.props.comments.map(comment => {
          return (
            <Comment
              key={comment.id}
              comment={comment.text}
              user={comment.username}
            />
          );
        })}
        {/* end of Comment .map */}
        {/* <Ago>{moment(props.time).fromNow()}</Ago> */}
        {/* TODO add timestamp and bottom border */}
        <CommentInput />
      </Action>
    );
  }
}

CommentSectionContainer.propTypes = {
  likes: PropTypes.number,
  comments: PropTypes.array,
  id: PropTypes.string,
  text: PropTypes.string,
  username: PropTypes.string
};

export default CommentSectionContainer;
