import React from "react";
import styled from "styled-components";

import FWWLogo from "../../../svgs/FWWLogo";
import FooterNavMenu from "./FooterNavMenu";
import SocialIcons from "./SocialIcons";
import FooterAddress from "./FooterAddress";
import DividerMarker1 from "../../../svgs/DividerMarker1";
import { above } from "../../../styles/Theme";

const FooterSection = () => {
  return (
    <FooterContainer>
      <FooterDivider fill={"#26243E"} />
      <Logo />
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
  width: 100%;
`;

const Logo = styled(FWWLogo)`
  width: 80px;
  z-index: 2;
`;

const FooterDivider = styled(DividerMarker1)`
  position: absolute;
  bottom: 100%;
  right: 0;
  width: 140%;
  transform: translateY(10px) rotate(180deg);
  pointer-events: none;
  z-index: 1;
  ${above.mobile`
    width: 100%;
    transform: translateY(20px) rotate(180deg);
  `}
  ${above.tablet`
    transform: translateY(40px) rotate(180deg);
  `}
  ${above.ipadPro`
    width: 100%;
    transform: translateY(70px) rotate(180deg);
  `}
`;
