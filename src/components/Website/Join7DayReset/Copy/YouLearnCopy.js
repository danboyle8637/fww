import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { ElementContainer } from "../../../../styles/Containers";
import { SetBodyText } from "../../../../styles/BodyText";

const YouLearnCopy = () => {
  const query = graphql`
    query {
      youLearnCopy: file(
        sourceInstanceName: { eq: "7DayResetCopy" }
        name: { eq: "YouLearnCopy" }
      ) {
        childMarkdownRemark {
          html
        }
      }
    }
  `;

  const copy = useStaticQuery(query);
  const body = copy.youLearnCopy.childMarkdownRemark.html;

  return (
    <ElementContainer>
      <SetBodyText dangerouslySetInnerHTML={{ __html: body }} />
    </ElementContainer>
  );
};

export default YouLearnCopy;
