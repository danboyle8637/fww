import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import { SectionGrid, BackgroundAsset } from "../../../../styles/GridContainer";
import DividerMarker1 from "../../../../svgs/DividerMarker1";
import DividerMarkerTriangle from "../../../../svgs/DividerMarkerTriangle";
import useRenderBackgroundImage from "../../../../hooks/useRenderBackgroundImage";
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

  const background = useRenderBackgroundImage(mobile, tablet, laptop);

  return (
    <SectionGrid>
      <TopDivider />
      <BackgroundAsset>
        <Image fluid={background} />
      </BackgroundAsset>
      <BottomDivider />
    </SectionGrid>
  );
};

export default KindalAlex;

const TopDivider = styled(DividerMarker1)`
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  z-index: 2;
  ${above.mobile`
    width: 100%;
    transform: translateY(-40px);
  `}
  ${above.tablet`
    transform: translateY(-60px);
  `}
`;

const BottomDivider = styled(DividerMarkerTriangle)`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 200%;
  z-index: 1;
  transform: translate(80px, 1px) rotate(180deg);
  ${above.mobile`
    width: 100%;
    transform: translate(0px, 50px) rotate(180deg);
  `}
  ${above.tablet`
    transform: translate(0px, 97px) rotate(180deg);
  `}
`;
