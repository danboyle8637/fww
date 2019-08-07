import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { ElementContainer } from "../../../../styles/Containers";
import { SetBodyText } from "../../../../styles/BodyText";

const CTACopy = () => {
  const query = graphql`
    query {
      resetLeadCopy: file(
        sourceInstanceName: { eq: "7DayResetCopy" }
        name: { eq: "CTACopy" }
      ) {
        childMarkdownRemark {
          html
        }
      }
    }
  `;

  const copy = useStaticQuery(query);
  const body = copy.resetLeadCopy.childMarkdownRemark.html;

  return (
    <ElementContainer setMobileMarginTop={40}>
      <SetBodyText dangerouslySetInnerHTML={{ __html: body }} />
    </ElementContainer>
  );
};

export default CTACopy;
