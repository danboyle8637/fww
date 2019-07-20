import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import siteConfig from "../../../utils/siteConfig";

const PublicLoginMenu = () => {
  const loginItems = siteConfig.publicLoginMenu.map(item => {
    const id = item.id;
    const title = item.title;
    const path = item.path;

    return (
      <MenuItem key={id}>
        {id === 0 ? (
          <LoginLink to={path}>{title}</LoginLink>
        ) : (
          <JoinLink to={path}>{title}</JoinLink>
        )}
      </MenuItem>
    );
  });

  return (
    <MenuContainer>
      <MembersLabel>Members</MembersLabel>
      <MenuList>{loginItems}</MenuList>
    </MenuContainer>
  );
};

export default PublicLoginMenu;

const MenuContainer = styled.div`
  margin: 120px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100vh;
`;

const MembersLabel = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 82px;
  font-weight: 800;
  text-transform: uppercase;
  color: #000000;
  transform: rotate(-90deg);
`;

const MenuItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const MenuList = styled.ul`
  margin: 10px 0 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
`;

const MenuItem = styled.li`
  margin: 0 0 8px 0;
  padding: 0;
  &:last-child {
    margin-bottom: 0;
  }
`;

const JoinLink = styled(Link)`
  margin: 0;
  padding: 0;
  font-family: Montserrat, sans-serif;
  font-size: 22px;
  font-weight: 800;
  color: ${props => props.theme.primaryAccent};
  text-transform: uppercase;
  text-decoration: none;
`;

const LoginLink = styled(Link)`
  margin: 0;
  padding: 0;
  font-family: Montserrat, sans-serif;
  font-size: 22px;
  font-weight: 800;
  color: ${props => props.theme.headlinePrimary};
  text-transform: uppercase;
  text-decoration: none;
`;
