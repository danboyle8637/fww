import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import FWWLogo from "../../../svgs/FWWLogo";
import FooterNavMenu from "./FooterNavMenu";
import SocialIcons from "./SocialIcons";
import FooterAddress from "./FooterAddress";

const FooterSection = () => {
  return (
    <FooterContainer>
      <LogoLink to={"/"}>
        <Logo footerLogo={true} />
      </LogoLink>
      <FooterNavMenu />
      <SocialIcons />
      <FooterAddress />
    </FooterContainer>
  );
};

export default FooterSection;

const FooterContainer = styled.footer`
  position: relative;
  margin: 0;
  padding: 40px 16px 40px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.footerBackground};
  border-top: 6px solid #373362;
  width: 100%;
`;

const Logo = styled(FWWLogo)`
  width: 80px;
`;

const LogoLink = styled(Link)`
  z-index: 2;
`;
