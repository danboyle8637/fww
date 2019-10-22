import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import {
  SectionContainer,
  ContentContainer,
  ElementContainer,
  HeadlineContainer,
} from "../../../../styles/Containers";
import Headline3 from "./Headlines/Headline3";
import { SetBodyText } from "../../../../styles/BodyText";
import { InnerButton } from "../../../../styles/Buttons";
import MicroHitCard from "./MicroHitCard";

const MicroHITSection = () => {
  const query = graphql`
    query {
      file(
        sourceInstanceName: { eq: "WhatWeDoCopy" }
        name: { regex: "/Micro/" }
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
        <HeadlineContainer>
          <Headline3 />
          <ElementContainer
            column
            setMobileMarginTop={40}
            setTabletMarginTop={40}
            setLaptopMarginTop={40}
          >
            <MicroHitCard />
            <SetBodyText
              setMobileMarginTop={20}
              setTabletMarginTop={40}
              setLaptopMarginTop={40}
              dangerouslySetInnerHTML={{ __html: body }}
            />
          </ElementContainer>
        </HeadlineContainer>
        <ElementContainer justifyCenter setMobileMarginTop={60}>
          <InnerButton to={"/beginner-workouts-to-advanced"}>
            What's your fitness level?
          </InnerButton>
        </ElementContainer>
      </ContentContainer>
    </SectionContainer>
  );
};

export default MicroHITSection;
