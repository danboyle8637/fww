import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import InternalLinkIcon from "../../../../svgs/InternalLinkIcon";

const InternalLink = ({ to, children }) => {
  return (
    <LinkContainer>
      <Text to={to}>{children}</Text>
      <LinkIcon />
    </LinkContainer>
  );
};

export default InternalLink;

const LinkContainer = styled.span`
  display: inline-flex;
  align-items: flex-start;
`;

const Text = styled(Link)`
  position: relative;
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  color: ${props => props.theme.primaryAccent};
  cursor: pointer;
  &::after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${props => props.theme.primaryAccent};
    transform: translateY(-2px);
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

const LinkIcon = styled(InternalLinkIcon)`
  margin: 5px 0 0 8px;
  width: 20px;
`;
