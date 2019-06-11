import React from "react"

import {
  SectionContainer,
  ContentContainer,
  ElementContainer,
} from "../../../../styles/Containers"
import Headline1 from "./Headlines/Headline1"
import Reason1LeadCopy from "./Copy/Reason1LeadCopy"

const LeadSection = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <Headline1 />
        <ElementContainer setMobileMarginTop={40}>
          <Reason1LeadCopy />
        </ElementContainer>
      </ContentContainer>
    </SectionContainer>
  )
}

export default LeadSection
