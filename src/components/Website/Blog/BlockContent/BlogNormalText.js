import React from "react";
import styled from "styled-components";

import { above } from "../../../../styles/Theme";

const BlogNormalText = ({ children }) => {
  return <BodyText>{children}</BodyText>;
};

export default BlogNormalText;

const BodyText = styled.p`
  margin: 0 0 30px 0;
  padding: 0 16px;
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.bodyText};
  &:last-child {
    margin-bottom: 0;
  }
  ${above.mobile`
    padding: 0 40px;
  `}
`;
