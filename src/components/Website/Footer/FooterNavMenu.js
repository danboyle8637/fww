import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import siteConfig from "../../../utils/siteConfig"
import { above } from "../../../styles/Theme"

const FooterNavMenu = () => {
  return (
    <MenuGrid>
      <Group position={"start"}>links</Group>
      <Group position={"end"}>links</Group>
    </MenuGrid>
  )
}

export default FooterNavMenu

const MenuGrid = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 50px;
  row-gap: 10px;
  cursor: pointer;
  ${above.mobile`
    column-gap: 80px;
  `}
  ${above.tablet`
    margin-top: 60px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    column-gap: 100px;
    row-gap: 20px;
  `}
`

const Group = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-self: ${props => props.position};
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
