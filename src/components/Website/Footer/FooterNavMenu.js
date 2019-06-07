import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { above } from "../../../styles/Theme"

const FooterNavMenu = () => {
  const footerLinks = [
    { id: 1, path: "/", name: "what we do" },
    { id: 2, path: "/", name: "who we are" },
    { id: 3, path: "/", name: "the app" },
    { id: 4, path: "/", name: "follow me" },
    { id: 5, path: "/", name: "blog" },
    { id: 6, path: "/", name: "podcast" },
    { id: 7, path: "/", name: "programs" },
    { id: 8, path: "/", name: "reset programs" },
    { id: 9, path: "/", name: "contact" },
    { id: 10, path: "/", name: "privacy" },
    { id: 11, path: "/", name: "disclaimer" },
    { id: 12, path: "/", name: "terms" },
  ]

  const links = footerLinks.map(link => {
    const id = link.id
    const path = link.path
    const name = link.name
    return (
      <FooterLink key={id} to={path}>
        {name}
      </FooterLink>
    )
  })

  return <MenuGrid>{links}</MenuGrid>
}

export default FooterNavMenu

const MenuGrid = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(6, 1fr);
  column-gap: 30px;
  row-gap: 10px;
  max-width: 54rem;
  ${above.tablet`
    margin-top: 60px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    column-gap: 100px;
    row-gap: 20px;
  `}
`

const FooterLink = styled(Link)`
  margin: 0;
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
