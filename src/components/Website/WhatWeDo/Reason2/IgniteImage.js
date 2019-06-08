import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import {
  SectionGrid,
  BackgroundAsset,
  HeadlineContainer,
} from "../../../../styles/GridContainer"
import Headline1 from "../HeadlineSection/Headline1"

const IgniteImage = () => {
  const query = graphql`
    query {
      mobile: file(name: { eq: "mobile-grunge-600x1300" }) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 1300, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
    }
  `

  const images = useStaticQuery(query)
  const mobile = images.mobile.childImageSharp.fluid

  return (
    <SectionGrid>
      <BackgroundAsset>
        <Image fluid={mobile} />
      </BackgroundAsset>
      <HeadlineContainer>
        <Headline1 />
      </HeadlineContainer>
    </SectionGrid>
  )
}

export default IgniteImage
