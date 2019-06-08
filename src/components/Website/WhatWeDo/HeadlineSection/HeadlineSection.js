import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import {
  SectionGrid,
  BackgroundAsset,
  HeadlineContainer,
} from "../../../../styles/GridContainer"
import Headline1 from "./Headline1"
import useRenderBackgroundImage from "../../../../hooks/useRenderBackgroundImage"

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

  const images = useStaticQuery(query)
  const mobile = images.mobile
  const tablet = images.tablet
  const laptop = images.laptop
  const background = useRenderBackgroundImage(mobile, tablet, laptop)

  return (
    <SectionGrid>
      <BackgroundAsset>
        <Image fluid={background} />
      </BackgroundAsset>
      <HeadlineContainer>
        <Headline1 />
      </HeadlineContainer>
    </SectionGrid>
  )
}

export default HeadlineSection
