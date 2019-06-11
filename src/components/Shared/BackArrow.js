import React from "react"
import styled from "styled-components"

import NavArrow from "../../svgs/NavigationArrow"

const BackArrow = () => {
  return (
    <CircleBackground>
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
  background: rgba(43, 44, 58, 0.6);
  border-radius: 50%;
  width: 48px;
  height: 48px;
`

const Arrow = styled(NavArrow)`
  width: 20px;
  transform: translateX(-3px) rotate(-180deg);
`
