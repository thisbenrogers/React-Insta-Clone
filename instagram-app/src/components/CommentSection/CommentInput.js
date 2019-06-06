import React from "react";
import styled from "styled-components";

const Form = styled.form``;

const Input = styled.input`
  width: 100%;
  border: none;
  border-top: 1px solid whitesmoke;
  color: lightgrey;
  height: 80px;
`;

const CommentInput = () => {
  return (
    <Form>
      <Input type="text" defaultValue="Add a comment..." />
    </Form>
  );
};

export default CommentInput;
