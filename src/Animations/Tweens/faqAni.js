import { Power2 } from "gsap/TweenMax";
import TimelineMax from "gsap/TimelineMax";

const faqAni = (question, answer, answerHeight, isOpen) => {
  const tl = new TimelineMax();

  const openQuestion = () => {
    tl.to(
      answer,
      0.5,
      {
        height: answerHeight,
        ease: Power2.easeOut,
      },
      "-=0.01"
    )
      .to(
        question,
        0.2,
        {
          gap: "16px",
        },
        "-=0.1"
      )
      .to(
        answer,
        0.1,
        {
          y: 0,
          autoAlpha: 1,
          ease: Power2.easeOut,
        },
        "-=0.01"
      )
      .to(question, 0.2, {
        color: "#545885",
        borderColor: "#474EDD",
        ease: Power2.easeOut,
      });
  };

  const closeQuestion = () => {
    tl.to(
      question,
      0.2,
      {
        color: "#B3B6E1",
        borderColor: "#26243E",
        ease: Power2.easeOut,
      },
      "-=0.1"
    )
      .to(
        answer,
        0.1,
        {
          y: -20,
          autoAlpha: 0,
          ease: Power2.easeOut,
        },
        "-=0.01"
      )
      .to(
        answer,
        0.5,
        {
          height: 0,
          ease: Power2.easeOut,
        },
        "-=0.01"
      )
      .to(question, 0.2, {
        gap: 0,
      });
  };

  if (isOpen) {
    openQuestion();
  } else {
    closeQuestion();
  }
};

export default faqAni;
