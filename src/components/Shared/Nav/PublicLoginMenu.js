import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

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
      <MembersLabel>Members</MembersLabel>
      <ButtonWrapper>{loginItems}</ButtonWrapper>
    </MenuContainer>
  );
};

export default PublicLoginMenu;

const MenuContainer = styled.div`
  position: relative;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80%;
  ${above.mobile`
    height: 90%;
  `}
  ${above.ipadPro`
    margin: 0;
    flex-direction: row;
    justify-content: center;
  `}
`;

const MembersLabel = styled.h3`
  position: absolute;
  top: 50%;
  left: 0;
  margin: 0;
  padding: 0;
  font-size: 82px;
  font-weight: 800;
  word-wrap: normal;
  text-transform: uppercase;
  color: #000000;
  width: 100%;
  transform: rotate(-90deg);
  ${above.mobile`
    font-size: 120px;
  `}
  ${above.tablet`
    font-size: 160px;
  `}
  ${above.ipadPro`
    top: 45%;
    left: 40%;
    font-size: 180px;
    transform: rotate(-90deg);
  `}
  ${above.laptop`
    top: 26%;
    font-size: 200px;
  `}
`;

const ButtonWrapper = styled.div`
  margin: 40px 0 0 0;
  padding: 0 12px;
  align-self: end;
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  width: 100%;
  max-width: 360px;
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
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #000, 0 0 0 5px ${props => props.theme.tertiaryAccent};
  }
  ${above.mobile`
    font-size: 32px;
  `}
  ${above.tablet`
    font-size: 46px;
  `}
`;
