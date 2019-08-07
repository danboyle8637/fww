import React from "react";
import styled from "styled-components";

import YouGetBullet from "./YouGetBullet";
import { above } from "../../../styles/Theme";

const YouGetBullets = () => {
  const bullets = [
    { id: 0, text: "Fully filmed workouts" },
    { id: 1, text: "Workout coaching" },
    { id: 2, text: "Workout timers" },
    { id: 3, text: "Rep counting" },
    { id: 4, text: "Workout tracking" },
    { id: 5, text: "Progress tracking" },
    { id: 6, text: "Training plan" },
    { id: 7, text: "Weekly LIVE coaching!" },
  ];

  const features = bullets.map(bullet => {
    const id = bullet.id;
    const text = bullet.text;
    return <YouGetBullet key={id} text={text} />;
  });

  return <BulletsContainer>{features}</BulletsContainer>;
};

export default YouGetBullets;

const BulletsContainer = styled.div`
  margin: 30px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${above.mobile`
    margin: 30px 0 0 60px;
  `}
`;
