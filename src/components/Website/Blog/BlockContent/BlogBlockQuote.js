import React from "react";
import styled from "styled-components";

import ChatIcon from "../../../../svgs/ChatIcon";
import { above } from "../../../../styles/Theme";

const BlogBlockQuote = ({ children }) => {
  return (
    <QuoteContainer>
      <QuoteIcon />
      <Text>{children}</Text>
    </QuoteContainer>
  );
};

export default BlogBlockQuote;

const QuoteContainer = styled.div`
  margin: 60px 16px;
  display: flex;
  align-items: center;
  ${above.mobile`
    margin: 60px 40px;
  `}
`;

const Text = styled.p`
  position: relative;
  margin: 0 0 20px 12px;
  padding: 0;
  font-size: 20px;
  font-weight: 500;
  font-style: italic;
  color: ${props => props.theme.headlinePrimary};
  cursor: pointer;
  &:last-child {
    margin-bottom: 0;
  }
`;

const QuoteIcon = styled(ChatIcon)`
  margin: 0 8px 0 0;
  width: 144px;
  ${above.mobile`
    width: 74px;
  `}
`;
