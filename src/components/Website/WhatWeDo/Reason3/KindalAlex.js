import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import { SectionGrid, BackgroundAsset } from "../../../../styles/GridContainer";
import useRenderBackgroundImage from "../../../../hooks/useRenderBackgroundImage";
import useIsBackgroundReady from "../../../../hooks/useIsBackgroundReady";
import BackgroundImageLoader from "../../../Shared/BackgroundImageLoader";
import { above } from "../../../../styles/Theme";

const KindalAlex = () => {
  const query = graphql`
    query {
      kindalAlexMobile: file(
        sourceInstanceName: { eq: "WhatWeDoImages" }
        name: { eq: "kindal-alex-600x1300" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 1300, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
      kindalAlexTablet: file(
        sourceInstanceName: { eq: "WhatWeDoImages" }
        name: { eq: "kindal-alex-834x1112" }
      ) {
        childImageSharp {
          fluid(maxWidth: 834, maxHeight: 1112, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
      kindalAlexLaptop: file(
        sourceInstanceName: { eq: "WhatWeDoImages" }
        name: { eq: "kindal-alex-1440x900" }
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
  const mobile = images.kindalAlexMobile;
  const tablet = images.kindalAlexTablet;
  const laptop = images.kindalAlexLaptop;

  const background = useRenderBackgroundImage(mobile, tablet, laptop, laptop);
  const backgroundReady = useIsBackgroundReady(background);

  return (
    <SectionGrid>
      <TopLine />
      <BackgroundAsset>
        {backgroundReady ? (
          <Image
            fluid={background}
            alt="Kindal and Alex celebrating a great workout together"
            title="Kindal and Alex celebrating a great workout together"
          />
        ) : (
          <BackgroundImageLoader />
        )}
      </BackgroundAsset>
      <BottomLine />
    </SectionGrid>
  );
};

export default KindalAlex;

const TopLine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 16px;
  background: rgba(43, 44, 58, 0.5);
  z-index: 3;
`;

const BottomLine = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 16px;
  background: rgba(43, 44, 58, 0.5);
  z-index: 3;
`;
