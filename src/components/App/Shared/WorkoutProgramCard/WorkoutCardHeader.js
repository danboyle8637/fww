import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Image from "gatsby-image";

const WorkoutCardHeader = () => {
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

  return <WorkoutHeaderImage fluid={fluid} />;
};

export default WorkoutCardHeader;

const WorkoutHeaderImage = styled(Image)`
  border-radius: 6px 6px 0 0;
`;
