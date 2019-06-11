import React from "react"
import styled from "styled-components"

import Reason1Headline from "./Reason1Headline"
import { ElementContainer } from "../../../../styles/Containers"
import { BodyText } from "../../../../styles/BodyText"
import { InnerButton } from "../../../../styles/Buttons"

const ReasonCard = ({ body, buttonText, headline }) => {
  return (
    <CardContainer>
      <Reason1Headline />
      <ElementContainer setMobileMarginTop={30}>
        <BodyText>
          Learn how we improved workout design so you can get a workout done no
          matter how busy or hectic your day gets.
        </BodyText>
      </ElementContainer>
      <ElementContainer setMobileMarginTop={30}>
        <InnerButton to={"/"}>I'm Busy... Tell Me More!</InnerButton>
      </ElementContainer>
    </CardContainer>
  )
}

export default ReasonCard

const CardContainer = styled.div`
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
