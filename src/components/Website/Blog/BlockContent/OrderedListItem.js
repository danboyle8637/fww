import React from "react";
import styled from "styled-components";

const OrderedListItem = ({ children }) => {
  return <ListItem>{children}</ListItem>;
};

export default OrderedListItem;

const ListItem = styled.li`
  margin: 0 0 20px 0;
  position: relative;
  font-size: 16px;
  color: ${props => props.theme.bodyText};
`;
