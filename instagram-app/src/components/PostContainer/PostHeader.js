import React from "react";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
`;

const Img = styled.img`
  height: 40px;
  width: 40px;
  margin: 10px;
  border-radius: 50%;
`;

const Name = styled.p`
  margin: 0;
  align-self: center;
`;

const PostHeader = props => {
  return (
    <Header className="post-header-container">
      <Img src={props.thumb} alt="user thumbnail" />
      <Name>{props.name}</Name>
    </Header>
  );
};

export default PostHeader;
