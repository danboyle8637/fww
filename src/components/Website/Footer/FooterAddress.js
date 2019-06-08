import React from "react"
import styled from "styled-components"

import MapIcon from "../../../svgs/MapIcon"

const FooterAddress = () => {
  return (
    <AddressContainer>
      <Icon />
      <AddressWrapper>
        <AddressText>Fit Women’s Weekly</AddressText>
        <AddressText>2408 Ashley River Rd.</AddressText>
        <AddressText>Suite G</AddressText>
        <AddressText>Charleston, SC 29414</AddressText>
      </AddressWrapper>
    </AddressContainer>
  )
}

export default FooterAddress

const AddressContainer = styled.div`
  margin-top: 80px;
  display: flex;
  align-items: flex-start;
  justify-self: flex-end;
`

const Icon = styled(MapIcon)`
  width: 18px;
  transform: translateY(6px);
`

const AddressWrapper = styled.div`
  margin-left: 8px;
`

const AddressText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  text-transform: capitalize;
  text-decoration: none;
  color: ${props => props.theme.footerAddressText};
`
