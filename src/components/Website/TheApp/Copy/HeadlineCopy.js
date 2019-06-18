import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { ElementContainer } from "../../../../styles/Containers";
import { SetBodyText } from "../../../../styles/BodyText";

const HeadlineCopy = () => {
  const query = graphql`
    query {
      headlineCopy: file(
        sourceInstanceName: { eq: "TheAppCopy" }
        name: { eq: "TheAppHeadline" }
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
    <ElementContainer setMobileMarginTop={16}>
      <SetBodyText dangerouslySetInnerHTML={{ __html: body }} />
    </ElementContainer>
  );
};

export default HeadlineCopy;
