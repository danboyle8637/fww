import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import { SectionGrid, BackgroundAsset } from "../../../../styles/GridContainer";
import DividerMarker1 from "../../../../svgs/DividerMarker1";
import DividerMarkerTriangle from "../../../../svgs/DividerMarkerTriangle";

const KindalAlex = () => {
  const query = graphql`
    query {
      kindalAlex2: file(
        sourceInstanceName: { eq: "WhatWeDoImages" }
        name: { eq: "kindal-alex-600x1300-2" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 1300, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
    }
  `;

  const images = useStaticQuery(query);
  const image2 = images.kindalAlex2.childImageSharp.fluid;

  return (
    <SectionGrid>
      <TopDivider />
      <BackgroundAsset>
        <Image fluid={image2} />
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
  z-index: 1;
`;

const BottomDivider = styled(DividerMarkerTriangle)`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 200%;
  z-index: 1;
  transform: translateX(80px) rotate(180deg);
`;
