import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { Header3 } from "../../../styles/Headlines";

const MenuItemsGroup = ({ title, menuItems }) => {
  const items = menuItems.map(item => {
    const id = item.id;
    const title = item.title;
    const path = item.path;

    return (
      <MenuItem key={id}>
        {id !== 9 ? (
          <MenuLink to={path}>{title}</MenuLink>
        ) : (
          <HelpDeskLink href={path}>{title}</HelpDeskLink>
        )}
      </MenuItem>
    );
  });

  return (
    <GroupContainer>
      <Header3 upper mobileSmall primary>
        {title}
      </Header3>
      <MenuList>{items}</MenuList>
    </GroupContainer>
  );
};

export default MenuItemsGroup;

const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const MenuList = styled.ul`
  margin: 10px 0 0 0;
  padding: 0;
  list-style: none;
`;

const MenuItem = styled.li`
  margin: 0 0 8px 0;
  padding: 0;
  &:last-child {
    margin-bottom: 0;
  }
`;

const MenuLink = styled(Link)`
  font-family: Montserrat, sans-serif;
  font-weight: 800;
  font-size: 16px;
  color: ${props => props.theme.bodyText};
  text-transform: uppercase;
  text-decoration: none;
`;

const HelpDeskLink = styled.a`
  font-family: Montserrat, sans-serif;
  font-weight: 800;
  font-size: 16px;
  color: ${props => props.theme.bodyText};
  text-transform: uppercase;
  text-decoration: none;
`;
