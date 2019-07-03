import React from "react";
import styled from "styled-components";

const UnorderedListItem = ({ children }) => {
  return <ListItem>{children}</ListItem>;
};

export default UnorderedListItem;

const ListItem = styled.li`
  margin: 0 0 20px 0;
  position: relative;
  font-size: 16px;
  color: ${props => props.theme.bodyText};
  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    background: ${props => props.theme.tertiaryAccent};
    border-radius: 50%;
    width: 12px;
    height: 12px;
    transform: translate(-180%, 60%);
  }
`;
