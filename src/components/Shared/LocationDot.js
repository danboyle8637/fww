import React from "react";
import styled from "styled-components";

import DraggableLocationDot from "../../svgs/DraggableLocationDot";

const LocationDot = ({ active }) => {
  return <Dot active={active} />;
};

export default LocationDot;

const Dot = styled(DraggableLocationDot)`
  margin: 0 20px 0 0;
  width: 20px;
  &:last-child {
    margin-right: 0;
  }
`;
