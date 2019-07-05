import React from "react";
import styled from "styled-components";

import ChatIcon from "../../../../svgs/ChatIcon";

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
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  position: relative;
  margin: 0 0 20px 0;
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
  width: 54px;
`;
