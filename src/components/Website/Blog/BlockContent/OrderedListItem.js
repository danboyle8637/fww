import React from "react";
import styled from "styled-components";

import { above } from "../../../../styles/Theme";

const OrderedListItem = ({ children }) => {
  return (
    <NumberedList>
      <ListItem>{children}</ListItem>
    </NumberedList>
  );
};

export default OrderedListItem;

const NumberedList = styled.ol`
  margin: 0 40px 0 40px;
  padding: 0;
  ${above.mobile`
    margin: 0 0 0 80px;
  `}
`;

const ListItem = styled.li`
  margin: 0 0 20px 0;
  position: relative;
  font-size: 16px;
  color: ${props => props.theme.bodyText};
`;
