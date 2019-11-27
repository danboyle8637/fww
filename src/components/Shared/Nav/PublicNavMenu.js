import React from "react";
import styled from "styled-components";

import MenuItemsGroup from "./MenuItemsGroup";
import siteConfig from "../../../utils/siteConfig";
import { above } from "../../../styles/Theme";

const PublicNavMenu = () => {
  const aboutGroup = siteConfig.publicNavMenu.aboutGroup;
  const workoutsGroup = siteConfig.publicNavMenu.workoutsGroup;
  const coachingGroup = siteConfig.publicNavMenu.coachingGroup;
  const helpGroup = siteConfig.publicNavMenu.helpGroup;

  return (
    <MenuContainer>
      <MenuItemsGroup title="About" menuItems={aboutGroup} />
      <MenuItemsGroup title="Workouts" menuItems={workoutsGroup} />
      <MenuItemsGroup title="Coaching" menuItems={coachingGroup} />
      <MenuItemsGroup title="Help" menuItems={helpGroup} />
    </MenuContainer>
  );
};

export default PublicNavMenu;

const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 20px;
  align-items: center;
  width: 100%;
  height: 90%;
  ${above.mobile`
    height: 90%;
  `}
  ${above.tablet`
    height: 80%;
  `}
  ${above.ipadPro`
    height: 90%;
  `}
  ${above.laptop`
    height: 86%;
  `}
`;
