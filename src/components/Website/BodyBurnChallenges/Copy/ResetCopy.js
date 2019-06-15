import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { ElementContainer } from "../../../../styles/Containers";
import { SetBodyText } from "../../../../styles/BodyText";

const ResetCopy = () => {
  const query = graphql`
    query {
      bbcReset: file(
        sourceInstanceName: { eq: "BBCCopy" }
        name: { eq: "BBCReset" }
      ) {
        childMarkdownRemark {
          html
        }
      }
    }
  `;

  const copy = useStaticQuery(query);
  const body = copy.bbcReset.childMarkdownRemark.html;

  return (
    <ElementContainer setMobileMarginTop={40}>
      <SetBodyText setPadding dangerouslySetInnerHTML={{ __html: body }} />
    </ElementContainer>
  );
};

export default ResetCopy;
