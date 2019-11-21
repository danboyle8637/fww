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
`;

const NavArrow = styled(NavigationArrow)`
  width: 16px;
`;
