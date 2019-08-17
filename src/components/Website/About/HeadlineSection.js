import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

import { SectionGrid, BackgroundAsset } from "../../../styles/GridContainer";
import Headline1 from "./Headlines/Headline1";
import HeadlineCopy from "./Copy/HeadlineCopy";
import ScrollDownArrow from "../../Shared/ScrollDownArrow";
import useRenderBackgroundImage from "../../../hooks/useRenderBackgroundImage";
import useIsBackgroundReady from "../../../hooks/useIsBackgroundReady";
import BackgroundImageLoader from "../../Shared/BackgroundImageLoader";
import { above } from "../../../styles/Theme";

const HeadlineSection = () => {
  const query = graphql`
    query {
      aboutMobile: file(
        sourceInstanceName: { eq: "AboutImages" }
        name: { eq: "smashing-status-quo-600x1300" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 1300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aboutTablet: file(
        sourceInstanceName: { eq: "AboutImages" }
        name: { eq: "smashing-status-quo-834x1112" }
      ) {
        childImageSharp {
          fluid(maxWidth: 834, maxHeight: 1112, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aboutIpadPro: file(
        sourceInstanceName: { eq: "AboutImages" }
        name: { eq: "smashing-status-quo-1024x1112" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1024, maxHeight: 1112, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aboutLaptop: file(
        sourceInstanceName: { eq: "AboutImages" }
        name: { eq: "smashing-status-quo-1440x900" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1440, maxHeight: 900, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `;

  const image = useStaticQuery(query);
  const mobile = image.aboutMobile;
  const tablet = image.aboutTablet;
  const ipadPro = image.aboutIpadPro;
  const laptop = image.aboutLaptop;

  const background = useRenderBackgroundImage(mobile, tablet, ipadPro, laptop);
  const backgroundReady = useIsBackgroundReady(background);

  return (
    <SectionGrid>
      <BackgroundAsset>
        {backgroundReady ? (
          <Image
            fluid={background}
            alt="Kindal going hardcore slamming battle ropes"
            title="Kindal going hardcore slamming battle ropes"
          />
        ) : (
          <BackgroundImageLoader />
        )}
      </BackgroundAsset>
      <ContentWrapper>
        <Headline1 />
        <HeadlineCopy />
        <ScrollDownArrow scrollId="about-lead" />
      </ContentWrapper>
    </SectionGrid>
  );
};

export default HeadlineSection;

const ContentWrapper = styled.div`
  margin: 80px 0 0 20px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  z-index: 1;
  ${above.mobile`
    margin: 120px 0 0 60px;
  `}
  ${above.tablet`
    margin: 200px 0 0 80px;
    width: 30%;
  `}
`;
