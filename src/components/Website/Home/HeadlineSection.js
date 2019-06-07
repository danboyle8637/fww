import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import {
  SectionGrid,
  BackgroundAsset,
  ContentWrapper,
} from "../../../styles/GridContainer"
import Headline from "./Headline"
import FWWLogo from "../../../svgs/FWWLogo"

const HeadlineSection = () => {
  const query = graphql`
    query {
      file(
        sourceInstanceName: { eq: "homeImages" }
        name: { regex: "/kindal/" }
      ) {
        childImageSharp {
          fluid(
            maxWidth: 600
            maxHeight: 1375
            jpegProgressive: true
            quality: 100
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `

  const backgroundImage = useStaticQuery(query)
  const fluid = backgroundImage.file.childImageSharp.fluid

  return (
    <SectionGrid>
      <BackgroundAsset>
        <Image fluid={fluid} />
      </BackgroundAsset>
      <ContentWrapper>
        <Logo />
        <Headline />
      </ContentWrapper>
    </SectionGrid>
  )
}

export default HeadlineSection

const Logo = styled(FWWLogo)`
  width: 160px;
`
