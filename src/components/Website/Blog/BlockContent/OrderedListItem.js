import React from "react";
import styled from "styled-components";

import { above } from "../../../../styles/Theme";

const OrderedListItem = ({ children }) => {
  return <ListItem>{children}</ListItem>;
};

export default OrderedListItem;

const ListItem = styled.li`
  margin: 0 16px 20px 16px;
  position: relative;
  font-size: 16px;
  color: ${props => props.theme.bodyText};
  ${above.mobile`
    margin: 0 40px 20px 40px; 
  `}
`;
