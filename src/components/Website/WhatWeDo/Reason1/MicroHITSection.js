import React from "react";
import { useStaticQuery, graphql, navigate } from "gatsby";

import {
  SectionContainer,
  ContentContainer,
  ElementContainer,
  HeadlineContainer,
} from "../../../../styles/Containers";
import Headline3 from "./Headlines/Headline3";
import { SetBodyText } from "../../../../styles/BodyText";
import BaseButton from "../../../Buttons/BaseButton";
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

  const handleButtonClick = () => navigate("/beginner-workouts-to-advanced");

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
          <BaseButton handleClick={handleButtonClick}>
            What's your fitness level?
          </BaseButton>
        </ElementContainer>
      </ContentContainer>
    </SectionContainer>
  );
};

export default MicroHITSection;
