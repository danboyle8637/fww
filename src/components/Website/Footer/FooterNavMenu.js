import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import siteConfig from "../../../utils/siteConfig"
import { above } from "../../../styles/Theme"

const FooterNavMenu = () => {
  const group1 = siteConfig.footerLinks.group1.map(link => (
    <FooterLink key={link.id} to={link.path}>
      {link.name}
    </FooterLink>
  ))

  const group2 = siteConfig.footerLinks.group2.map(link => (
    <FooterLink key={link.id} to={link.path}>
      {link.name}
    </FooterLink>
  ))

  const group3 = siteConfig.footerLinks.group3.map(link => (
    <FooterLink key={link.id} to={link.path}>
      {link.name}
    </FooterLink>
  ))

  const group4 = siteConfig.footerLinks.group4.map(link => (
    <FooterLink key={link.id} to={link.path}>
      {link.name}
    </FooterLink>
  ))

  return (
    <MenuGrid>
      <LinkGroup area={"one"}>{group1}</LinkGroup>
      <LinkGroup area={"two"}>{group2}</LinkGroup>
      <LinkGroup area={"three"}>{group3}</LinkGroup>
      <LinkGroup area={"four"}>{group4}</LinkGroup>
    </MenuGrid>
  )
}

export default FooterNavMenu

const MenuGrid = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-areas:
    "one three"
    "two four";
  column-gap: 50px;
  row-gap: 0;
  cursor: pointer;
  ${above.mobile`
    column-gap: 80px;
  `}
  ${above.tablet`
    margin-top: 60px;
    grid-template-areas:
      "one two three four";
    column-gap: 100px;
    row-gap: 20px;
  `}
`

const LinkGroup = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  grid-area: ${props => props.area};
`

const FooterLink = styled(Link)`
  margin: 0 0 12px 0;
  padding: 0;
  font-size: 16px;
  text-transform: capitalize;
  text-decoration: none;
  color: ${props => props.theme.bodyText};
  transition: color 150ms ease-out;
  &:hover {
    color: ${props => props.theme.primaryAccent};
  }
`
