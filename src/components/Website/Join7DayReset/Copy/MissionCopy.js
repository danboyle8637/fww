import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { ElementContainer } from "../../../../styles/Containers";
import { SetBodyText } from "../../../../styles/BodyText";

const MissionCopy = () => {
  const query = graphql`
    query {
      resetMissionCopy: file(
        sourceInstanceName: { eq: "7DayResetCopy" }
        name: { eq: "MissionCopy" }
      ) {
        childMarkdownRemark {
          html
        }
      }
    }
  `;

  const copy = useStaticQuery(query);
  const body = copy.resetMissionCopy.childMarkdownRemark.html;

  return (
    <ElementContainer setMobileMarginTop={20}>
      <SetBodyText dangerouslySetInnerHTML={{ __html: body }} />
    </ElementContainer>
  );
};

export default MissionCopy;
