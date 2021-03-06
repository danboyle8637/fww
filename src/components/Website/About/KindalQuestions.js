import React, { useEffect, useContext } from "react";
import { useStaticQuery, graphql, navigate } from "gatsby";
import styled from "styled-components";

import {
  SectionContainer,
  ContentContainer,
  ElementContainer,
} from "../../../styles/Containers";
import DraggableRow from "../../../Animations/Tweens/DraggableRow";
import BaseButton from "../../Buttons/BaseButton";
import QuestionCard from "./QuestionCard";
import Headline4 from "./Headlines/Headline4";
import LocationDot from "../../Shared/LocationDot";
import AboveCardSwipe from "../../Shared/AboveCardsSwipe";
import ScreenWidthContext from "../../../context/ScreenWidthContext";
import { useActiveCardContext } from "../../../context/ActiveSlideContext";

const KindalQuestions = () => {
  // eslint-disable-next-line
  const [{ activeCard }, dispatch] = useActiveCardContext();
  const device = useContext(ScreenWidthContext);

  useEffect(() => {
    dispatch({ type: "setActiveCard", value: 3.5 });
  }, [dispatch]);

  const query = graphql`
    query {
      kindalCards: allFile(
        filter: {
          sourceInstanceName: { eq: "AboutCopy" }
          name: { regex: "/KindalQuestion/" }
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

  const cards = copy.kindalCards.nodes.map(card => {
    const id = card.id;
    const question = card.childMarkdownRemark.frontmatter.question;
    const body = card.childMarkdownRemark.html;

    return <QuestionCard key={id} question={question} body={body} />;
  });

  const handleButtonClick = () => navigate("/");

  return (
    <SectionContainer>
      <ContentContainer>
        <div id="get-to-know-kindal" />
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
          <BaseButton handleClick={handleButtonClick}>
            Read My Origin Story
          </BaseButton>
        </ElementContainer>
      </ContentContainer>
    </SectionContainer>
  );
};

export default KindalQuestions;

const LaptopCardWrapper = styled.div`
  margin: 60px 0 0 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  row-gap: 50px;
`;
