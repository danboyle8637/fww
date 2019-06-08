import React from "react"
import styled from "styled-components"

import FWWLogo from "../../../svgs/FWWLogo"
import FooterNavMenu from "./FooterNavMenu"
import SocialIcons from "./SocialIcons"
import FooterAddress from "./FooterAddress"

const FooterSection = () => {
  return (
    <FooterContainer>
      <Logo />
      <FooterNavMenu />
      <SocialIcons />
      <FooterAddress />
    </FooterContainer>
  )
}

export default FooterSection

const FooterContainer = styled.footer`
  margin: 0;
  padding: 40px 16px 40px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.footerBackground};
  width: 100%;
`

const Logo = styled(FWWLogo)`
  width: 80px;
`
