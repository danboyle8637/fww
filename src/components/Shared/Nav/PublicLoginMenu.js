import React from "react";
import styled from "styled-components";

import FWWBlackNavLogo from "../../../svgs/FWWBlackNavLogo";
import siteConfig from "../../../utils/siteConfig";
import { above } from "../../../styles/Theme";

const PublicLoginMenu = () => {
  const loginItems = siteConfig.publicLoginMenu.map(item => {
    const id = item.id;
    const title = item.title;
    const path = item.path;

    return (
      <AppLink join={id === 0 ? false : true} key={id} to={path}>
        {title}
      </AppLink>
    );
  });

  return (
    <MenuContainer>
      <NavLogo />
      <MembersLabel>Members</MembersLabel>
      <ButtonWrapper>{loginItems}</ButtonWrapper>
    </MenuContainer>
  );
};

export default PublicLoginMenu;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MembersLabel = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 33px;
  font-weight: 800;
  word-wrap: normal;
  text-transform: uppercase;
  color: #000000;
  ${above.mobile`
    font-size: 70px;
  `}
  ${above.tablet`
    font-size: 90px;
  `}
  ${above.ipadPro`
    font-size: 120px;
  `}
  ${above.laptop`
    top: 26%;
    font-size: 200px;
  `}
`;

const ButtonWrapper = styled.div`
  margin: 12px 0 0 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  width: 100%;
  max-width: 360px;
  z-index: 1;
  ${above.mobile`
    padding: 0 40px;
  `}
  ${above.ipadPro`
    justify-self: center;
    align-self: center;
  `}
`;

const AppLink = styled.a`
  margin: 0;
  padding: 0;
  font-family: Montserrat, sans-serif;
  font-size: 22px;
  font-weight: 800;
  color: ${props =>
    props.join ? props.theme.baseBackgroundColor : props.theme.headlinePrimary};
  background: ${props => (props.join ? props.theme.primaryAccent : "none")};
  border: 2px solid
    ${props => (props.join ? "none" : props.theme.headlinePrimary)};
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
  transition: box-shadow 300ms ease-in-out;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #000, 0 0 0 5px ${props => props.theme.tertiaryAccent};
  }
  ${above.mobile`
    font-size: 32px;
  `}
  ${above.ipadPro`
    &:hover {
      box-shadow: 0 0 0 2px #000, 0 0 0 5px ${props =>
        props.theme.tertiaryAccent};
    }
  `}
`;

const NavLogo = styled(FWWBlackNavLogo)`
  width: 120px;
  ${above.mobile`
    width: 200px;
  `}
  ${above.tablet`
    width: 300px;
  `}
`;
