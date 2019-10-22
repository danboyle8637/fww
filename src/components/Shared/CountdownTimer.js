import React, { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";

const CountdownTimer = ({ endDate }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const intervalTimerRef = useRef();

  const calculateTimerRemaining = useCallback(() => {
    // Returns the value in milliseconds
    const end = new Date(endDate).getTime();

    // Right now in milliseconds
    const start = new Date().getTime();

    let timeRemaining = parseInt((end - start) / 1000);

    if (timeRemaining >= 0) {
      const days = parseInt(timeRemaining / 86400);
      timeRemaining = timeRemaining % 86400;

      const hours = parseInt(timeRemaining / 3600);
      timeRemaining = timeRemaining % 3600;

      const minutes = parseInt(timeRemaining / 60);
      timeRemaining = timeRemaining % 60;

      const seconds = parseInt(timeRemaining);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    } else {
      timeRemaining = 0;
    }
  }, [endDate]);

  const updateTime = useCallback(() => {
    intervalTimerRef.current = setInterval(calculateTimerRemaining, 1000);
  }, [calculateTimerRemaining]);

  useEffect(() => {
    calculateTimerRemaining();
    updateTime();

    return () => {
      console.log("clearing Interval Timer");
      clearInterval(intervalTimerRef.current);
    };
  }, [calculateTimerRemaining, updateTime]);

  return (
    <NumberContainer>
      <NumberWrapper>
        <Num>{parseInt(days, 10)}</Num>
        <NumberLabel>Days</NumberLabel>
      </NumberWrapper>
      <NumberWrapper>
        <Num>{("0" + hours).slice(-2)}</Num>
        <NumberLabel>Hours</NumberLabel>
      </NumberWrapper>
      <NumberWrapper>
        <Num>{("0" + minutes).slice(-2)}</Num>
        <NumberLabel>Minutes</NumberLabel>
      </NumberWrapper>
      <NumberWrapper>
        <Num>{("0" + seconds).slice(-2)}</Num>
        <NumberLabel>Seconds</NumberLabel>
      </NumberWrapper>
    </NumberContainer>
  );
};

export default CountdownTimer;

const NumberContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const NumberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 2px;
  background: #101010;
  padding: 3px 6px 17px 6px;
  border-radius: 6px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 2px 3px 0px rgba(0, 0, 0, 0.4);
`;

const Num = styled.p`
  margin: -5px;
  padding: 0;
  font-family: Montserrat;
  font-weight: 800;
  font-size: 32px;
  color: #b44cff;
`;

const NumberLabel = styled.p`
  margin: -8px;
  padding: 0;
  text-transform: uppercase;
  letter-spacing: 1.1px;
  font-size: 12px;
  color: #f8f8f8;
`;
