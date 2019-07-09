import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import CoachingMoreIcon from "../../../svgs/CoachingMoreIcon";

const CoachingVideo = () => {
  const query = graphql`
    query {
      coachingBackground: file(
        sourceInstanceName: { eq: "AppImages" }
        name: { eq: "bbc-reset-pushup-coaching-bg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 352, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
    }
  `;

  const background = useStaticQuery(query);
  const image = background.coachingBackground.childImageSharp.fluid;

  return (
    <SectionGrid>
      <CoachingBackground fluid={image} />
      <ContentWrapper>
        <MoreIcon />
      </ContentWrapper>
    </SectionGrid>
  );
};

export default CoachingVideo;

const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  width: 100%;
`;

const ContentWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const CoachingBackground = styled(Image)`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
`;

const MoreIcon = styled(CoachingMoreIcon)`
  width: 40px;
`;
