import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { ElementContainer } from "../../../styles/Containers";

const Section1 = () => {
  const query = graphql`
    query {
      benefit1: file(
        sourceInstanceName: { eq: "TheAppCopy" }
        name: { eq: "BenefitCard1" }
      ) {
        childMarkdownRemark {
          html
          frontmatter {
            id
            icon
            topHeadline
            bottomHeadline
          }
        }
      }
      benefit2: file(
        sourceInstanceName: { eq: "TheAppCopy" }
        name: { eq: "BenefitCard2" }
      ) {
        childMarkdownRemark {
          html
          frontmatter {
            id
            icon
            topHeadline
            bottomHeadline
          }
        }
      }
      benefit3: file(
        sourceInstanceName: { eq: "TheAppCopy" }
        name: { eq: "BenefitCard3" }
      ) {
        childMarkdownRemark {
          html
          frontmatter {
            id
            icon
            topHeadline
            bottomHeadline
          }
        }
      }
      benefit4: file(
        sourceInstanceName: { eq: "TheAppCopy" }
        name: { eq: "BenefitCard4" }
      ) {
        childMarkdownRemark {
          html
          frontmatter {
            id
            icon
            topHeadline
            bottomHeadline
          }
        }
      }
    }
  `;

  const data = useStaticQuery(query);

  return;
};

export default Section1;
