import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { SectionContainer, ContentContainer } from "../../../styles/Containers";
import { SetBodyText } from "../../../styles/BodyText";
import Headline from "./Headline";

const Terms = () => {
  const query = graphql`
    query {
      privacy: file(
        sourceInstanceName: { eq: "LegalCopy" }
        name: { eq: "termsOfUse" }
      ) {
        childMarkdownRemark {
          html
        }
      }
    }
  `;

  const policy = useStaticQuery(query);
  const body = policy.privacy.childMarkdownRemark.html;

  return (
    <SectionContainer>
      <ContentContainer>
        <Headline text={"Terms of Use"} />
        <SetBodyText
          setMobileMarginTop={40}
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </ContentContainer>
    </SectionContainer>
  );
};

export default Terms;
