import React from "react";
import { useStaticQuery, graphql, navigate } from "gatsby";

import {
  SectionContainer,
  ContentContainer,
  ElementContainer,
} from "../../../../styles/Containers";
import { SetBodyText } from "../../../../styles/BodyText";
import BaseButton from "../../../Buttons/BaseButton";

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

  const handleButtonClick = () => navigate("/join-a-7-day-reset-program");

  return (
    <SectionContainer>
      <ContentContainer>
        <SetBodyText dangerouslySetInnerHTML={{ __html: body }} />
        <ElementContainer justifyCenter setMobileMarginTop={60}>
          <BaseButton handleClick={handleButtonClick}>
            Signup for a Reset Program
          </BaseButton>
        </ElementContainer>
      </ContentContainer>
    </SectionContainer>
  );
};

export default EndSection;
