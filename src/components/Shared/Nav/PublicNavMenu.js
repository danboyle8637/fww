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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;
  height: 100vh;
  ${above.mobile`
    height: 90%;
  `}
  ${above.tablet`
    height: 80%;
  `}
  ${above.ipadPro`
    height: 100vh;
  `}
  ${above.laptop`
    height: 86%;
  `}
`;
