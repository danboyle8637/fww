import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import { SectionContainer, ElementContainer } from "../../styles/Containers";
import { InnerButton } from "../../styles/Buttons";

const VideoPreviewSection = () => {
  const query = graphql`
    query {
      bbcWorkoutPreview: file(
        sourceInstanceName: { eq: "BBCImages" }
        name: { eq: "bbc-video-preview" }
      ) {
        childImageSharp {
          fluid(maxWidth: 800, maxHeight: 450, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
    }
  `;

  const image = useStaticQuery(query);
  const fluid = image.bbcWorkoutPreview.childImageSharp.fluid;

  return (
    <SectionContainer>
      <VideoWrapper>
        <Image fluid={fluid} />
      </VideoWrapper>
      <ElementContainer setMobileMarginTop={40} setMobileWidth={"90%"}>
        <InnerButton to={"/"}>Sign Up for the BBC Reset!</InnerButton>
      </ElementContainer>
    </SectionContainer>
  );
};

export default VideoPreviewSection;

const VideoWrapper = styled.div`
  width: 100%;
`;
