import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { ElementContainer } from "../../../../styles/Containers";
import { SetBodyText } from "../../../../styles/BodyText";

const LeadCopy = () => {
  const query = graphql`
    query {
      headlineCopy: file(
        sourceInstanceName: { eq: "BBCCopy" }
        name: { eq: "BBCLead" }
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
    <ElementContainer setMobileMarginTop={40} setLaptopMarginTop={60}>
      <SetBodyText setPadding dangerouslySetInnerHTML={{ __html: body }} />
    </ElementContainer>
  );
};

export default LeadCopy;
