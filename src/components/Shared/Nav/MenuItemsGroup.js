import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { navigate } from "gatsby";

import { Header3 } from "../../../styles/Headlines";
//import { useMenuContext } from "../../../context/MenuContext";
import { above } from "../../../styles/Theme";

const MenuItemsGroup = ({ title, menuItems }) => {
  // const [closeMenu, setCloseMenu] = useState(false);
  // // eslint-disable-next-line
  // const [menuState, dispatch] = useMenuContext();

  const items = menuItems.map(item => {
    const id = item.id;
    const title = item.title;
    const path = item.path;

    return (
      <MenuItem key={id}>
        {id !== 11 ? (
          <MenuLink onClick={() => onMenuClick(id, path)}>{title}</MenuLink>
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

    // setCloseMenu(true);
  };

  // const delayCloseMenu = () => {
  //   setTimeout(() => {
  //     dispatch({ type: "closeMenu" });
  //   }, 300);
  // };

  // useEffect(() => {
  //   if (closeMenu) {
  //     delayCloseMenu();
  //   }

  //   setCloseMenu(false);

  //   return () => {
  //     clearTimeout(delayCloseMenu);
  //   };
  // }, [closeMenu]);

  return (
    <GroupContainer>
      <Header3
        upper
        mobileSmall
        tabletMedium
        laptopMedium
        ultraWideLarge
        primary
      >
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

const MenuLink = styled.a`
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
