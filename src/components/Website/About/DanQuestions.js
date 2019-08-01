import React, { useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";

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

const DanQuestions = () => {
  const [{ activeCard }, dispatch] = useActiveCardContext();

  useEffect(() => {
    dispatch({ type: "setActiveCard", value: 3.5 });
  }, []);

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
        <ElementContainer justifyCenter setMobileMarginTop={60}>
          <InnerButton to={"/"}>Read My Origin Story</InnerButton>
        </ElementContainer>
      </ContentContainer>
    </SectionContainer>
  );
};

export default DanQuestions;
