import React, { useContext } from "react"
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
import siteConfig from "../../../utils/siteConfig"
import ScreenWidthContext from "../../../context/ScreenWidthContext"

const HeadlineSection = () => {
  const device = useContext(ScreenWidthContext)

  const query = graphql`
    query {
      mobile: file(
        sourceInstanceName: { eq: "homeimages" }
        name: { regex: "/mobile/" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 1300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tablet: file(
        sourceInstanceName: { eq: "homeimages" }
        name: { regex: "/tablet/" }
      ) {
        childImageSharp {
          fluid(maxWidth: 834, maxHeight: 1112, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      desktop: file(name: { eq: "desktop-1440x800" }) {
        childImageSharp {
          fluid(maxWidth: 1440, maxHeight: 800, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `

  const image = useStaticQuery(query)
  const mobile = image.mobile.childImageSharp.fluid
  const tablet = image.tablet.childImageSharp.fluid
  const desktop = image.desktop.childImageSharp.fluid

  console.log(device)

  const homeButtons = siteConfig.home.homeLinks.map(button => {
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
        <Image fluid={desktop} />
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
