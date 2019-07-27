import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import {
  SectionContainer,
  ContentContainer,
  ElementContainer,
} from "../../../styles/Containers";
import { InnerButton } from "../../../styles/Buttons";
import QuestionCard from "./QuestionCard";
import Headline4 from "./Headlines/Headline4";
import DraggableRow from "../../../Animations/Tweens/DraggableRow";

const DanQuestions = () => {
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
        <DraggableRow numberOfCards={6}>{cards}</DraggableRow>
        <ElementContainer justifyCenter setMobileMarginTop={60}>
          <InnerButton to={"/"}>Read My Origin Story</InnerButton>
        </ElementContainer>
      </ContentContainer>
    </SectionContainer>
  );
};

export default DanQuestions;
