import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Image from "gatsby-image";

import BodyBurnResetLogo from "../../../../svgs/BodyBurnResetLogo";

const ProgramCardHeader = () => {
  const query = graphql`
    query {
      workoutImage: file(
        sourceInstanceName: { eq: "AppImages" }
        name: { eq: "bbc-reset-pushup-workout-bg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 480, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
    }
  `;

  const image = useStaticQuery(query);
  const fluid = image.workoutImage.childImageSharp.fluid;

  return (
    <HeaderGrid>
      <WorkoutHeaderImage fluid={fluid} />
      <Logo />
    </HeaderGrid>
  );
};

export default ProgramCardHeader;

const HeaderGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`;

const WorkoutHeaderImage = styled(Image)`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  border-radius: 6px 6px 0 0;
`;

const Logo = styled(BodyBurnResetLogo)`
  margin: 0 0 0 20px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  justify-self: start;
  align-self: center;
  width: 200px;
  z-index: 1;
`;
