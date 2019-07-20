import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import { SectionGrid, BackgroundAsset } from "../../../styles/GridContainer";
import useRenderBackgroundImage from "../../../hooks/useRenderBackgroundImage";
import useIsBackgroundReady from "../../../hooks/useIsBackgroundReady";
import BackgroundImageLoader from "../../Shared/BackgroundImageLoader";
import HeadlineCopy from "./Copy/HeadlineCopy";
import Headline1 from "./Headlines/Headline1";
import ScrollDownArrow from "../../Shared/ScrollDownArrow";
import { above } from "../../../styles/Theme";

const HeadlineSection = () => {
  const query = graphql`
    query {
      theAppMobile: file(
        sourceInstanceName: { eq: "TheAppImages" }
        name: { eq: "phone-kettlebells-600x1300" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 1300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      theAppTablet: file(
        sourceInstanceName: { eq: "TheAppImages" }
        name: { eq: "phone-kettlebells-834x1112" }
      ) {
        childImageSharp {
          fluid(maxWidth: 834, maxHeight: 1112, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      theAppIpadPro: file(
        sourceInstanceName: { eq: "TheAppImages" }
        name: { eq: "phone-kettlebells-1024x1112" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1024, maxHeight: 1112, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      theAppLaptop: file(
        sourceInstanceName: { eq: "TheAppImages" }
        name: { eq: "phone-kettlebells-1440x900" }
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
  const mobile = images.theAppMobile;
  const tablet = images.theAppTablet;
  const ipadPro = images.theAppIpadPro;
  const laptop = images.theAppLaptop;

  const background = useRenderBackgroundImage(mobile, tablet, ipadPro, laptop);
  const backgroundReady = useIsBackgroundReady(background);

  return (
    <SectionGrid>
      <BackgroundAsset>
        {backgroundReady ? (
          <Image fluid={background} />
        ) : (
          <BackgroundImageLoader />
        )}
      </BackgroundAsset>
      <ContentContainer>
        <Headline1 />
        <HeadlineCopy />
        <ScrollDownArrow scrollId={"the-app-lead"} />
      </ContentContainer>
    </SectionGrid>
  );
};

export default HeadlineSection;

const ContentContainer = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  margin: 80px 16px 0 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
  z-index: 1;
  ${above.mobile`
    margin: 160px 0 0 80px;
    width: 50%;
  `}
  ${above.tablet`
    margin: 220px 0 0 160px;
    width: 36%;
  `}
`;
