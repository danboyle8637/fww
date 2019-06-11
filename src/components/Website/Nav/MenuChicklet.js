import React from "react"
import styled from "styled-components"

import MainMenuIcon from "../../../svgs/MainMenuIcon"
import "./Menu.css"

const MenuChicklet = () => {
  const handleToggleMenu = () => {
    console.log("Menu Icon Clicked")
  }

  return (
    <Chicklet onClick={handleToggleMenu}>
      <MenuIcon />
    </Chicklet>
  )
}

export default MenuChicklet

const Chicklet = styled.div`
  margin-top: 5px;
  background: transparent;
`

const MenuIcon = styled(MainMenuIcon)`
  width: 40px;
`
