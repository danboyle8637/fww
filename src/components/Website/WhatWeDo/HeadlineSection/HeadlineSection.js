import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import {
  SectionGrid,
  BackgroundAsset,
  ContentContainer,
} from "../../../../styles/GridContainer";
import Headline1 from "./Headline1";
import useRenderBackgroundImage from "../../../../hooks/useRenderBackgroundImage";

const HeadlineSection = () => {
  const query = graphql`
    query {
      assistantMobile: file(
        sourceInstanceName: { eq: "WhatWeDoImages" }
        name: { eq: "personal-assistant-600x1300" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 1300, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
      assistantTablet: file(
        sourceInstanceName: { eq: "WhatWeDoImages" }
        name: { eq: "personal-assistant-834x1112" }
      ) {
        childImageSharp {
          fluid(maxWidth: 834, maxHeight: 1112, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
      assistantLaptop: file(
        sourceInstanceName: { eq: "WhatWeDoImages" }
        name: { eq: "personal-assistant-1440x900" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1440, maxHeight: 900, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
    }
  `;

  const images = useStaticQuery(query);
  const mobile = images.assistantMobile;
  const tablet = images.assistantTablet;
  const laptop = images.assistantLaptop;
  const background = useRenderBackgroundImage(mobile, tablet, laptop);

  return (
    <SectionGrid>
      <BackgroundAsset>
        <Image fluid={background} />
      </BackgroundAsset>
      <ContentContainer>
        <Headline1 />
      </ContentContainer>
    </SectionGrid>
  );
};

export default HeadlineSection;
