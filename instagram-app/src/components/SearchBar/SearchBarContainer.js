import React from "react";
import styled from "styled-components";

import "./SearchBar.css";

const Nav = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`;

const NavHeader = styled.div`
  max-width: 1010px;
  padding: 26px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const NavLeft = styled.div`
  width: 33.333%;
  text-align: left;
  p {
    color: grey;
  }
`;

const NavCenter = styled.div`
  width: 33.333%;
  text-align: center;
`;

const Input = styled.input`
  font-size: 16px;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  padding: 7px 33px;
  border-radius: 3px;
  color: #999;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background: #fafafa;

  &:active,
  &:focus {
    text-align: left;
  }
`;

const NavRight = styled.div`
  display: flex;
  width: 33.333%;
  text-align: right;
  justify-content: flex-end;
  i {
    margin-right: 20px;
  }
`;

const MenuLink = styled.a`
  text-decoration: none;
  color: grey;
`;

function SearchBarContainer() {
  return (
    <Nav>
      <NavHeader>
        <NavLeft>
          <p>
            <i className="fab fa-instagram" /> | Instagram
          </p>
        </NavLeft>

        <NavCenter>
          <Input type="text" placeholder="🔍 Search" />
        </NavCenter>

        <NavRight>
          <MenuLink href="#">
            <i className="far fa-compass" />
          </MenuLink>

          <MenuLink href="#">
            <i className="far fa-heart" />
          </MenuLink>

          <MenuLink href="#">
            <i className="far fa-user" />
          </MenuLink>
        </NavRight>
      </NavHeader>
    </Nav>
  );
}

export default SearchBarContainer;
