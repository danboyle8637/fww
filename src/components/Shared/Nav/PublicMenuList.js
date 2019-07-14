import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { Header4 } from "../../../styles/Headlines";
import siteConfig from "../../../utils/siteConfig";
import { above } from "../../../styles/Theme";

const PublicMenuList = () => {
  const menuItems = siteConfig.publicMenu.map(item => {
    const id = item.id;
    const title = item.title;
    const path = item.path;

    return (
      <MenuItemWrapper key={id} to={path}>
        <Header4 upper mobileSmall tertiary>
          {title}
        </Header4>
      </MenuItemWrapper>
    );
  });

  return <>{menuItems}</>;
};

export default PublicMenuList;

// const MenuListContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
//   height: 100%;
// `;

const MenuItemWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  text-decoration: none;
  ${above.mobile`
    height: 75px;
  `}
`;
