import React from "react";
import styled from "styled-components";

import MapIcon from "../../../svgs/MapIcon";
import { above } from "../../../styles/Theme";

const FooterAddress = () => {
  return (
    <AddressContainer>
      <Icon fill={"#4d4b65"} />
      <AddressWrapper>
        <AddressText>Fit Women’s Weekly</AddressText>
        <AddressText>2408 Ashley River Rd. Ste. G</AddressText>
        <AddressText>Charleston, SC 29414</AddressText>
      </AddressWrapper>
    </AddressContainer>
  );
};

export default FooterAddress;

const AddressContainer = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px;
`;

const Icon = styled(MapIcon)`
  width: 18px;
  transform: translateY(6px);
  ${above.mobile`
    transform: translateY(-3px);
  `}
`;

const AddressWrapper = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${above.mobile`
    flex-direction: row;
  `}
`;

const AddressText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  text-transform: capitalize;
  text-decoration: none;
  color: ${props => props.theme.footerAddressText};
  ${above.mobile`
    margin: 0 0 0 8px;
  `}
`;
