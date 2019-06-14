import React from "react";
import styled from "styled-components";

import ChatIcon from "../../../../svgs/ChatIcon";
import AlertIcon from "../../../../svgs/AlertIcon";
import CelebrateIcon from "../../../../svgs/CelebrateIcon";
import { Header3 } from "../../../../styles/Headlines";
import { SetBodyText } from "../../../../styles/BodyText";
import { ElementContainer } from "../../../../styles/Containers";

const WeTrainYouCard = ({ icon, headline, body }) => {
  const showIcon =
    icon === "chat" ? <Chat /> : icon === "alert" ? <Alert /> : <Celebrate />;

  return (
    <CardContainer>
      {showIcon}
      <ElementContainer column>
        <Header3
          secondary
          mobileSmall
          setMLineHeight={1.4}
          setTLineHeight={1.4}
          setLLineHeight={1.4}
        >
          {headline}
        </Header3>
        <SetBodyText
          setMobileMarginTop={14}
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </ElementContainer>
    </CardContainer>
  );
};

export default WeTrainYouCard;

const Chat = styled(ChatIcon)`
  width: 80px;
`;

const Alert = styled(AlertIcon)`
  width: 80px;
`;

const Celebrate = styled(CelebrateIcon)`
  width: 80px;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  column-gap: 20px;
  width: 100%;
`;
