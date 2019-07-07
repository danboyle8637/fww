import React from "react";
import styled from "styled-components";

const BlogStrongText = ({ children }) => {
  return <StrongText>{children}</StrongText>;
};

export default BlogStrongText;

const StrongText = styled.span`
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme.strongBodyText};
`;
