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

const KindalQuestions = () => {
  const query = graphql`
    query {
      kindalCards: allFile(
        filter: {
          sourceInstanceName: { eq: "AboutCopy" }
          name: { regex: "/KindalQuestion/" }
        }
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
        <Headline4 />
        <DraggableContainer>{cards}</DraggableContainer>
        <ElementContainer justifyCenter setMobileMarginTop={60}>
          <InnerButton to={"/"}>Read My Origin Story</InnerButton>
        </ElementContainer>
      </ContentContainer>
    </SectionContainer>
  );
};

export default KindalQuestions;

const DraggableContainer = styled.div`
  margin: 60px 0 0 0;
  display: flex;
`;
