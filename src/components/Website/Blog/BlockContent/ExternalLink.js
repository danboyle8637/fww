import React from "react";
import styled from "styled-components";

import ExternalLinkIcon from "../../../../svgs/ExternalLinkIcon";

const ExternalLink = ({ link, children }) => {
  return (
    <LinkContainer>
      <Text href={link}>{children}</Text>
      <LinkIcon />
    </LinkContainer>
  );
};

export default ExternalLink;

const LinkContainer = styled.span`
  display: inline-flex;
  align-items: flex-start;
`;

const Text = styled.a`
  position: relative;
  margin: 0 0 20px 0;
  padding: 0;
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.tertiaryAccent};
  text-decoration: none;
  cursor: pointer;
  &::after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${props => props.theme.tertiaryAccent};
    transform: translateY(-2px);
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

const LinkIcon = styled(ExternalLinkIcon)`
  margin: 5px 0 0 8px;
  width: 20px;
  height: 20px;
`;
