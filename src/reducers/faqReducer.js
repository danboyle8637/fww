import faqAni from "../Animations/Tweens/faqAni";

const faqState = {
  prevQuestion: {},
  prevAnswer: {},
  answerHeight: 0,
  isOpen: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setPreviousQuestion": {
      return {
        prevQuestion: action.value.prevQuestion,
        prevAnswer: action.value.prevAnswer,
        answerHeight: action.value.answerHeight,
        isOpen: true,
      };
    }
    case "closeAndClearPreviousQuestion": {
      const { prevQuestion, prevAnswer, answerHeight } = state;
      faqAni(prevQuestion, prevAnswer, answerHeight, false);
      return {
        prevQuestion: {},
        prevAnswer: {},
        answerHeight: 0,
        isOpen: false,
      };
    }
    default: {
      return state;
    }
  }
};

export { faqState, reducer };
