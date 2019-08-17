import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

import { SectionGrid, BackgroundAsset } from "../../../../styles/GridContainer";
import Headline1 from "./Headline1";
import BackgroundImageLoader from "../../../Shared/BackgroundImageLoader";
import useRenderBackgroundImage from "../../../../hooks/useRenderBackgroundImage";
import useIsBackgroundReady from "../../../../hooks/useIsBackgroundReady";
import ScrollDownArrow from "../../../Shared/ScrollDownArrow";
import { above } from "../../../../styles/Theme";

const HeadlineSection = () => {
  const query = graphql`
    query {
      assistantMobile: file(
        sourceInstanceName: { eq: "WhatWeDoImages" }
        name: { eq: "personal-assistant2-600x1300" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 1300, quality: 90) {
            ...GatsbyImageSharpFluid
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
          }
        }
      }
      assistantIpadPro: file(
        sourceInstanceName: { eq: "WhatWeDoImages" }
        name: { eq: "personal-assistant-1024x1112" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1024, maxHeight: 1112, quality: 90) {
            ...GatsbyImageSharpFluid
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
          }
        }
      }
    }
  `;

  const images = useStaticQuery(query);
  const mobile = images.assistantMobile;
  const tablet = images.assistantTablet;
  const ipadPro = images.assistantIpadPro;
  const laptop = images.assistantLaptop;
  const background = useRenderBackgroundImage(mobile, tablet, ipadPro, laptop);
  const backgroundReady = useIsBackgroundReady(background);

  return (
    <SectionGrid>
      <BackgroundAsset>
        {backgroundReady ? (
          <Image
            fluid={background}
            alt="Kindal taking notes as if she were a personal assistant for you"
            title="Kindal taking notes as if she were a personal assistant for you"
          />
        ) : (
          <BackgroundImageLoader />
        )}
      </BackgroundAsset>
      <ContentContainer>
        <Headline1 />
        <ScrollDownArrow scrollId="what-we-do-lead" />
      </ContentContainer>
    </SectionGrid>
  );
};

export default HeadlineSection;

const ContentContainer = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  z-index: 1;
  ${above.mobile`
    width: 80%;
  `}
  ${above.tablet`
    width: 60%;
  `}
  ${above.ipadPro`
    width: 75%;
  `}
`;
