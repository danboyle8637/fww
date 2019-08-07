import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { TweenMax } from "gsap/TweenMax";
import faqAni from "../../../Animations/Tweens/faqAni";

import NavigationArrow from "../../../svgs/NavigationArrow";

const FAQQuestions = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [answerHeight, setAnswerHeight] = useState(0);
  const questionRef = useRef(null);
  const answerRef = useRef(null);

  useEffect(() => {
    const question = questionRef.current;
    const answer = answerRef.current;
    const answerHeight = answer.clientHeight;

    setAnswerHeight(answerHeight);

    TweenMax.set(answer, { y: -8, autoAlpha: 0, height: 0 });
    TweenMax.set(question, { gap: 0 });
  }, []);

  useEffect(() => {
    const question = questionRef.current;
    const answer = answerRef.current;

    if (isOpen) {
      faqAni(question, answer, answerHeight, isOpen);
    } else {
      faqAni(question, answer, answerHeight, isOpen);
    }
  }, [isOpen]);

  const handleFAQClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <FAQContainer ref={questionRef} onClick={handleFAQClick} isOpen={isOpen}>
      <FAQQuestionText>{q}</FAQQuestionText>
      <FAQArrow isFAQOpen={isOpen} />
      <FAQAnswerText ref={answerRef} dangerouslySetInnerHTML={{ __html: a }} />
    </FAQContainer>
  );
};

export default FAQQuestions;

const FAQContainer = styled.div`
  margin: 0 0 20px 0;
  padding: 18px 20px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: ${props => (props.isOpen ? "16px" : 0)};
  align-items: center;
  border: 2px solid;
  border-color: ${props =>
    props.faqOpen ? "#474EDD" : props.theme.footerBackground};
  border-radius: 8px;
  width: 100%;
  &:last-child {
    margin-bottom: 0;
  }
`;

const FAQQuestionText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 500;
  color: ${props =>
    props.faqOpen ? props.theme.headlinePrimary : props.theme.bodyText};
  line-height: 1.4;
`;

const FAQAnswerText = styled.div`
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.bodyText};
  width: 100%;
`;

const FAQArrow = styled(NavigationArrow)`
  width: 14px;
  transform: rotate(180deg);
`;
