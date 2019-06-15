import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import { SectionContainer, ElementContainer } from "../../styles/Containers";
import { InnerButton } from "../../styles/Buttons";

const VideoPreviewSection = ({ program, buttonText, kettlebell }) => {
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
      strongWorkoutPreview: file(
        sourceInstanceName: { eq: "BBCImages" }
        name: { eq: "strong-video-preview" }
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
  const bbc = image.bbcWorkoutPreview.childImageSharp.fluid;
  const strong = image.strongWorkoutPreview.childImageSharp.fluid;
  const ignite = image.strongWorkoutPreview.childImageSharp.fluid;

  return (
    <SectionContainer>
      <VideoWrapper>
        {program === "bbc" ? <Image fluid={bbc} /> : null}
        {program === "strong" ? <Image fluid={strong} /> : null}
        {program === "ignite" ? <Image fluid={ignite} /> : null}
      </VideoWrapper>
      <ElementContainer
        column
        alignCenter
        setMobileMarginTop={40}
        setMobileWidth={"90%"}
      >
        <InnerButton kettlebell={kettlebell} to={"/"}>
          {buttonText}
        </InnerButton>
      </ElementContainer>
    </SectionContainer>
  );
};

export default VideoPreviewSection;

const VideoWrapper = styled.div`
  width: 100%;
  max-width: 50rem;
  box-shadow: 0 3px 12px 8px rgba(0, 0, 0, 0.4);
`;
