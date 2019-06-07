import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

import {
  SectionGrid,
  BackgroundAsset,
  ContentWrapper,
} from "../../../styles/GridContainer"
import { NodeContainer } from "../../../styles/Containers"
import Headline from "./Headline"
import FWWLogo from "../../../svgs/FWWLogo"

const HeadlineSection = () => {
  const query = graphql`
    query {
      file(name: { eq: "kindal-600x1375" }) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 1375, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `

  const backgroundImage = useStaticQuery(query)
  const fluid = backgroundImage.file.childImageSharp.fluid

  const homeLinks = [
    { id: 1, path: "/", name: "what we do" },
    { id: 2, path: "/", name: "who we are" },
    { id: 3, path: "/", name: "the app" },
    { id: 4, path: "/", name: "programs" },
    { id: 5, path: "/", name: "follow me" },
    { id: 6, path: "/", name: "blog" },
  ]

  const homeButtons = homeLinks.map(button => {
    const id = button.id
    const path = button.path
    const name = button.name
    return (
      <HomeButton key={id} to={path}>
        {name}
      </HomeButton>
    )
  })

  return (
    <SectionGrid>
      <BackgroundAsset>
        <Image fluid={fluid} />
      </BackgroundAsset>
      <ContentWrapper column>
        <HeadlineWrapper>
          <Logo />
          <Headline />
        </HeadlineWrapper>
        <NodeContainer column setMobileMarginTop={40}>
          {homeButtons}
        </NodeContainer>
      </ContentWrapper>
    </SectionGrid>
  )
}

export default HeadlineSection

const Logo = styled(FWWLogo)`
  width: 160px;
`

const HeadlineWrapper = styled.div`
  margin: 30px 0 0 20px;
`

const HomeButton = styled(Link)`
  margin: 0 0 20px 0;
  padding: 8px 40px 8px 0;
  background: rgba(215, 218, 255, 0.3);
  border: 2px solid ${props => props.theme.bodyText};
  border-radius: 6px;
  color: ${props => props.theme.whiteText};
  font-size: 16px;
  text-transform: capitalize;
  text-align: right;
  text-decoration: none;
  width: 14rem;
  transform: translateX(-40px);
  transition: background-color, border, transform, 150ms ease-out;
  cursor: pointer;
  &:hover {
    background: rgba(139, 83, 246, 0.3);
    border: 2px solid ${props => props.theme.secondaryAccent};
    transform: translateX(-20px);
  }
`
