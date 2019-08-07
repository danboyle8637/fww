import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { SectionContainer, ContentContainer } from "../../../styles/Containers";
import FAQQuestion from "../../Shared/FAQ/FAQQuestion";

const FAQSection = () => {
  const query = graphql`
    query {
      resetFAQ: allFile(
        filter: {
          sourceInstanceName: { eq: "7DayResetCopy" }
          name: { regex: "/FAQ/" }
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

  const data = useStaticQuery(query);

  const questions = data.resetFAQ.nodes.map(question => {
    const id = question.id;
    const q = question.childMarkdownRemark.frontmatter.question;
    const a = question.childMarkdownRemark.html;

    return <FAQQuestion key={id} q={q} a={a} />;
  });

  return (
    <SectionContainer>
      <ContentContainer>{questions}</ContentContainer>
    </SectionContainer>
  );
};

export default FAQSection;
