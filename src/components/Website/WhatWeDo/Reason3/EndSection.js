import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import {
  SectionContainer,
  ContentContainer,
  ElementContainer,
} from "../../../../styles/Containers";
import { SetBodyText } from "../../../../styles/BodyText";
import { InnerButton } from "../../../../styles/Buttons";

const EndSection = () => {
  const query = graphql`
    query {
      file(
        sourceInstanceName: { eq: "WhatWeDoCopy" }
        name: { eq: "Reason3End" }
      ) {
        childMarkdownRemark {
          html
        }
      }
    }
  `;

  const copy = useStaticQuery(query);
  const body = copy.file.childMarkdownRemark.html;

  return (
    <SectionContainer>
      <ContentContainer>
        <SetBodyText dangerouslySetInnerHTML={{ __html: body }} />
        <ElementContainer justifyCenter setMobileMarginTop={60}>
          <InnerButton to={"/"}>Signup for a Reset Program</InnerButton>
        </ElementContainer>
      </ContentContainer>
    </SectionContainer>
  );
};

export default EndSection;
