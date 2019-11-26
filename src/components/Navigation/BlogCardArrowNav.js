import React from "react";
import styled from "styled-components";

import NavigationArrow from "../../svgs/NavigationArrow";

const BlogCircleArrowNavigation = () => {
  return (
    <NavContainer>
      <NavArrow />
    </NavContainer>
  );
};

export default BlogCircleArrowNavigation;

const NavContainer = styled.div`
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2b2c3a;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  box-shadow: none;
  transition: box-shadow 300ms ease-in-out;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #000, 0 0 0 5px ${props => props.theme.tertiaryAccent};
  }
`;

const NavArrow = styled(NavigationArrow)`
  width: 16px;
`;
