import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import { SectionContainer, ElementContainer } from "../../styles/Containers";
import { InnerButton } from "../../styles/Buttons";
import { above } from "../../styles/Theme";

const VideoPreviewSection = ({ program, buttonText, kettlebell }) => {
  const query = graphql`
    query {
      bbcWorkoutPreview: file(
        sourceInstanceName: { eq: "BBCCopy" }
        name: { eq: "BBCPreviewVideo" }
      ) {
        childMarkdownRemark {
          html
        }
      }
      strongWorkoutPreview: file(
        sourceInstanceName: { eq: "StrongCopy" }
        name: { eq: "StrongPreviewVideo" }
      ) {
        childMarkdownRemark {
          html
        }
      }
      igniteVideoPreview: file(
        sourceInstanceName: { eq: "IgniteCopy" }
        name: { eq: "IgnitePreviewVideo" }
      ) {
        childMarkdownRemark {
          html
        }
      }
    }
  `;

  const videoLink = useStaticQuery(query);
  const bbc = videoLink.bbcWorkoutPreview.childMarkdownRemark.html;
  const strong = videoLink.strongWorkoutPreview.childMarkdownRemark.html;
  const ignite = videoLink.igniteVideoPreview.childMarkdownRemark.html;

  return (
    <SectionContainer>
      <VideoWrapper>
        {program === "ignite" ? (
          <VideoWrapper dangerouslySetInnerHTML={{ __html: ignite }} />
        ) : null}
        {program === "bbc" ? (
          <VideoWrapper dangerouslySetInnerHTML={{ __html: bbc }} />
        ) : null}
        {program === "strong" ? (
          <VideoWrapper dangerouslySetInnerHTML={{ __html: strong }} />
        ) : null}
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
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 50rem;
  box-shadow: 0 3px 16px 6px rgba(0, 0, 0, 0.2);
  ${above.tablet`
    border-radius: 8px;
    & iframe {
      border-radius: 8px;
    }
  `}
  & p {
    display: none;
  }
`;
