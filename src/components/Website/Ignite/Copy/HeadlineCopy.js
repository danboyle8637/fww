import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { ElementContainer } from "../../../../styles/Containers";
import { SetBodyText } from "../../../../styles/BodyText";

const HeadlineCopy = () => {
  const query = graphql`
    query {
      igniteHeadlineCopy: file(
        sourceInstanceName: { eq: "IgniteCopy" }
        name: { eq: "IgniteHeadline" }
      ) {
        childMarkdownRemark {
          html
        }
      }
    }
  `;

  const copy = useStaticQuery(query);
  const body = copy.igniteHeadlineCopy.childMarkdownRemark.html;

  return (
    <ElementContainer setMobileMarginTop={12}>
      <SetBodyText dangerouslySetInnerHTML={{ __html: body }} />
    </ElementContainer>
  );
};

export default HeadlineCopy;
