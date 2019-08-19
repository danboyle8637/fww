import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { SectionContainer, ContentContainer } from "../../../styles/Containers";
import { SetBodyText } from "../../../styles/BodyText";
import Headline from "./Headline";

const PrivacyPolicy = () => {
  const query = graphql`
    query {
      privacy: file(
        sourceInstanceName: { eq: "LegalCopy" }
        name: { eq: "privacyPolicy" }
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
        <Headline text="Privacy Policy" />
        <SetBodyText
          setMobileMarginTop={40}
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </ContentContainer>
    </SectionContainer>
  );
};

export default PrivacyPolicy;
