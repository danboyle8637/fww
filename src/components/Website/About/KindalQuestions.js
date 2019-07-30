import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import {
  SectionContainer,
  ContentContainer,
  ElementContainer,
} from "../../../styles/Containers";
import DraggableRow from "../../../Animations/Tweens/DraggableRow";
import { InnerButton } from "../../../styles/Buttons";
import QuestionCard from "./QuestionCard";
import Headline4 from "./Headlines/Headline4";
import AboveCardSwipe from "../../Shared/AboveCardsSwipe";
import { useActiveCardContext } from "../../../context/ActiveSlideContext";

const KindalQuestions = () => {
  // eslint-disable-next-line
  const [{ activeCard }, dispatch] = useActiveCardContext();

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

  return (
    <SectionContainer>
      <ContentContainer>
        <div id="get-to-know-kindal" />
        <Headline4 />
        <AboveCardSwipe />
        <DraggableRow numberOfCards={6}>{cards}</DraggableRow>
        <ElementContainer justifyCenter setMobileMarginTop={60}>
          {activeCard}
          <InnerButton to={"/"}>Read My Origin Story</InnerButton>
        </ElementContainer>
      </ContentContainer>
    </SectionContainer>
  );
};

export default KindalQuestions;
