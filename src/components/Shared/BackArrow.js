import React from "react"
import styled from "styled-components"

import NavArrow from "../../svgs/NavigationArrow"

const BackArrow = () => {
  const handleBack = () => {
    console.log("Back button clicked")
  }

  return (
    <CircleBackground onClick={handleBack}>
      <Arrow />
    </CircleBackground>
  )
}

export default BackArrow

const CircleBackground = styled.div`
  position: fixed;
  top: 10px;
  left: 10px;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(16, 16, 16, 0.6);
  border-radius: 50%;
  width: 52px;
  height: 52px;
  z-index: 10000;
  cursor: pointer;
`

const Arrow = styled(NavArrow)`
  width: 20px;
  transform: translateX(-3px) rotate(-180deg);
`
