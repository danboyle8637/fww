import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { ElementContainer } from "../../../../styles/Containers";
import { SetBodyText } from "../../../../styles/BodyText";

const LeadCopy1 = () => {
  const query = graphql`
    query {
      headlineCopy: file(
        sourceInstanceName: { eq: "AboutCopy" }
        name: { eq: "LeadCopy" }
      ) {
        childMarkdownRemark {
          html
        }
      }
    }
  `;

  const copy = useStaticQuery(query);
  const body = copy.headlineCopy.childMarkdownRemark.html;

  return (
    <ElementContainer setMobileMarginTop={40}>
      <SetBodyText dangerouslySetInnerHTML={{ __html: body }} />
    </ElementContainer>
  );
};

export default LeadCopy1;
