import React from "react";
import styled from "styled-components";

import MenuItemsGroup from "./MenuItemsGroup";
import siteConfig from "../../../utils/siteConfig";
import { above } from "../../../styles/Theme";

const PublicNavMenu = () => {
  const aboutGroup = siteConfig.publicNavMenu.aboutGroup;
  const workoutsGroup = siteConfig.publicNavMenu.workoutsGroup;
  const coachingGroup = siteConfig.publicNavMenu.coachingGroup;

  return (
    <MenuContainer>
      <MenuItemsGroup title="About" menuItems={aboutGroup} />
      <MenuItemsGroup title="Workouts" menuItems={workoutsGroup} />
      <MenuItemsGroup title="Coaching" menuItems={coachingGroup} />
    </MenuContainer>
  );
};

export default PublicNavMenu;

const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 30px;
  align-items: center;
  width: 100%;
  ${above.mobile`
    gap: 60px;
  `}
`;
