import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

import {
  SectionGrid,
  BackgroundAsset,
  HeadlineContainer,
} from "../../../styles/GridContainer"
import { ElementContainer } from "../../../styles/Containers"
import Headline from "./Headline"
import FWWLogo from "../../../svgs/FWWLogo"
import siteConfig from "../../../utils/siteConfig"
import useRenderBackgroundImage from "../../../hooks/useRenderBackgroundImage"
import { above } from "../../../styles/Theme"

const HeadlineSection = () => {
  const query = graphql`
    query {
      mobile: file(
        sourceInstanceName: { eq: "HomeImages" }
        name: { regex: "/mobile/" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 1300, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
      tablet: file(
        sourceInstanceName: { eq: "HomeImages" }
        name: { regex: "/tablet/" }
      ) {
        childImageSharp {
          fluid(maxWidth: 834, maxHeight: 1112, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
      desktop: file(
        sourceInstanceName: { eq: "HomeImages" }
        name: { regex: "/desktop/" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1440, maxHeight: 900, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
    }
  `

  const image = useStaticQuery(query)
  const mobile = image.mobile
  const tablet = image.tablet
  const desktop = image.desktop

  // make sure you pass the whole data object
  const background = useRenderBackgroundImage(mobile, tablet, desktop)

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
        <Image fluid={background} />
      </BackgroundAsset>
      <HeadlineContainer column>
        <HeadlineWrapper>
          <Logo />
          <Headline />
        </HeadlineWrapper>
        <ElementContainer column setMobileMarginTop={40} moveTabletX={10}>
          {homeButtons}
        </ElementContainer>
      </HeadlineContainer>
    </SectionGrid>
  )
}

export default HeadlineSection

const Logo = styled(FWWLogo)`
  width: 160px;
`

const HeadlineWrapper = styled.div`
  margin-left: 20px;
  ${above.mobile`
    margin-left: 0;
  `}
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
  ${above.mobile`
    padding: 8px;
    text-align: center;
    transform: translateX(0);
  `}
  ${above.tablet`
    &:hover {
      background: rgba(139, 83, 246, 0.3);
      border: 2px solid ${props => props.theme.secondaryAccent};
      transform: translateX(20px);
    }
  `}
`
