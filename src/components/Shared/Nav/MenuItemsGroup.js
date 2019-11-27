import React from "react";
import styled from "styled-components";
import { navigate } from "gatsby";

import { Header3 } from "../../../styles/Headlines";
import { useMenuContext } from "../../../context/MenuContext";
import { above } from "../../../styles/Theme";

const MenuItemsGroup = ({ title, menuItems }) => {
  const [menuState, dispatch] = useMenuContext();

  const menuTimeout = () => {
    const timeoutId = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 400);
    });

    return timeoutId;
  };

  const items = menuItems.map(item => {
    const id = item.id;
    const title = item.title;
    const path = item.path;

    return (
      <MenuItem key={id}>
        {id !== 11 ? (
          <MenuLink
            pathName={menuState.pathName}
            path={path}
            onClick={() => onMenuClick(id, path)}
          >
            {title}
          </MenuLink>
        ) : (
          <HelpDeskLink href={path}>{title}</HelpDeskLink>
        )}
      </MenuItem>
    );
  });

  const onMenuClick = (id, path) => {
    if (id === 2) navigate(path);
    if (id === 3) navigate(path);
    if (id === 4) navigate(path);
    if (id === 5) navigate(path);
    if (id === 6) navigate(path);
    if (id === 7) navigate(path);
    if (id === 8) navigate(path);
    if (id === 9) navigate(path);
    if (id === 10) navigate(path);
    if (id === 11) navigate(path);

    menuTimeout()
      .then(() => {
        dispatch({ type: "closeMenu" });
      })
      .catch(error => console.log(error));
  };

  return (
    <GroupContainer>
      <LinkGroupHeader>{title}</LinkGroupHeader>
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
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 12px;
  ${above.tablet`
    gap: 18px;
  `}
  ${above.ipadPro`
    gap: 12px;
  `}
`;

const MenuItem = styled.li`
  margin: 0;
  padding: 0;
  &:last-child {
    margin-bottom: 0;
  }
`;

const LinkGroupHeader = styled.h3`
  position: relative;
  margin: 0;
  padding: 0;
  font-size: 22px;
  color: ${props => props.theme.headlinePrimary};
  font-weight: 800;
  text-transform: uppercase;
  &::after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    border-radius: 20px;
    background: ${props => props.theme.headlinePrimary};
  }
  ${above.mobile`
    font-size: 32px;
  `}
`;

const MenuLink = styled.a`
  font-family: Montserrat, sans-serif;
  font-weight: 800;
  font-size: 18px;
  color: ${props =>
    props.pathName === props.path
      ? props.theme.primaryAccent
      : props.theme.bodyText};
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  ${above.mobile`
    font-size: 24px;
  `}
  ${above.laptop`
    font-size: 36px;
  `}
`;

const HelpDeskLink = styled.a`
  font-family: Montserrat, sans-serif;
  font-weight: 800;
  font-size: 16px;
  color: ${props => props.theme.bodyText};
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  ${above.mobile`
    font-size: 24px;
  `}
  ${above.laptop`
    font-size: 36px;
  `}
`;
