import React from "react"
import styled from "styled-components"

import MainMenuIcon from "../../../svgs/MainMenuIcon"
import "./Menu.css"

const MenuChicklet = () => {
  return (
    <Chicklet>
      <MenuIcon />
    </Chicklet>
  )
}

export default MenuChicklet

const Chicklet = styled.div`
  background: transparent;
`

const MenuIcon = styled(MainMenuIcon)`
  width: 40px;
`
