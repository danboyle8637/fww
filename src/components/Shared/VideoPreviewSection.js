import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import {
  SectionContainer,
  ContentContainer,
  ElementContainer,
} from "../../styles/Containers";
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
      bbcVideoMessage: file(
        sourceInstanceName: { eq: "BBCCopy" }
        name: { eq: "VideoMessage" }
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
  const videoMessage = videoLink.bbcVideoMessage.childMarkdownRemark.html;

  return (
    <SectionContainer>
      {program === "bbc" ? (
        <BodyBurnVideoMessage
          dangerouslySetInnerHTML={{ __html: videoMessage }}
        />
      ) : null}
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
      <ContentContainer>
        <ElementContainer justifyCenter setMobileMarginTop={40}>
          <InnerButton to={"/"}>{buttonText}</InnerButton>
        </ElementContainer>
      </ContentContainer>
    </SectionContainer>
  );
};

export default VideoPreviewSection;

const VideoWrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 50rem;
  box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.2);
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

const BodyBurnVideoMessage = styled.div`
  margin: 0 16px 30px 16px;
  padding: 12px 20px;
  border-radius: 8px;
  background: ${props => props.theme.mainBackgroundBorderColor};
  box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.2);
  max-width: 50rem;
  & p {
    margin: 0;
    padding: 0;
    font-size: 13px;
    color: ${props => props.theme.bodyText};
  }
`;
