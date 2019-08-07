import React from "react";
import styled from "styled-components";

import { BodyText } from "../../../styles/BodyText";
import PageCheck from "../../../svgs/PageCheck";
import { above } from "../../../styles/Theme";

const YouGetBullet = ({ text }) => {
  return (
    <BulletContainer>
      <Check />
      <BodyText>{text}</BodyText>
    </BulletContainer>
  );
};

export default YouGetBullet;

const BulletContainer = styled.div`
  margin: 0 0 20px 0;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
  align-items: center;
  &:last-child {
    margin-bottom: 0;
  }
  ${above.mobile`
    margin: 0 0 30px 0;
  `}
`;

const Check = styled(PageCheck)`
  width: 20px;
`;
