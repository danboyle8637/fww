import React, { useEffect, useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import {
  SectionContainer,
  ContentContainer,
  ElementContainer,
} from "../../../styles/Containers";
import { InnerButton } from "../../../styles/Buttons";
import QuestionCard from "./QuestionCard";
import Headline4 from "./Headlines/Headline4";
import LocationDot from "../../Shared/LocationDot";
import AboveCardSwipe from "../../Shared/AboveCardsSwipe";
import DraggableRow from "../../../Animations/Tweens/DraggableRow";
import { useActiveCardContext } from "../../../context/ActiveSlideContext";
import ScreenWidthContext from "../../../context/ScreenWidthContext";

const DanQuestions = () => {
  const [{ activeCard }, dispatch] = useActiveCardContext();
  const device = useContext(ScreenWidthContext);

  useEffect(() => {
    dispatch({ type: "setActiveCard", value: 3.5 });
  }, [dispatch]);

  const query = graphql`
    query {
      danCards: allFile(
        filter: {
          sourceInstanceName: { eq: "AboutCopy" }
          name: { regex: "/DanQuestion/" }
        }
        sort: { fields: birthtime }
      ) {
        nodes {
          id
          childMarkdownRemark {
            html
            frontmatter {
              question
            }
          }
        }
      }
    }
  `;

  const copy = useStaticQuery(query);

  const cards = copy.danCards.nodes.map(card => {
    const id = card.id;
    const question = card.childMarkdownRemark.frontmatter.question;
    const body = card.childMarkdownRemark.html;

    return <QuestionCard key={id} question={question} body={body} />;
  });

  return (
    <SectionContainer>
      <ContentContainer>
        <div id="get-to-know-dan" />
        <Headline4 />
        {device === "laptop" || device === "ultraWide" ? (
          <LaptopCardWrapper>{cards}</LaptopCardWrapper>
        ) : (
          <>
            <AboveCardSwipe />
            <DraggableRow numberOfCards={6}>{cards}</DraggableRow>
            <ElementContainer justifyCenter setMobileMarginTop={40}>
              <LocationDot active={activeCard >= 2.5 ? true : false} />
              <LocationDot active={activeCard === 1.5 ? true : false} />
              <LocationDot active={activeCard === 0.5 ? true : false} />
              <LocationDot active={activeCard === -0.5 ? true : false} />
              <LocationDot active={activeCard === -1.5 ? true : false} />
              <LocationDot active={activeCard <= -2.5 ? true : false} />
            </ElementContainer>
          </>
        )}
        <ElementContainer justifyCenter setMobileMarginTop={60}>
          <InnerButton to={"/"}>Read My Origin Story</InnerButton>
        </ElementContainer>
      </ContentContainer>
    </SectionContainer>
  );
};

export default DanQuestions;

const LaptopCardWrapper = styled.div`
  margin: 60px 0 0 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  row-gap: 50px;
`;
