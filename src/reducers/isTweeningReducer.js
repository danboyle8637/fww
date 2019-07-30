const tweeningState = {
  tweenCount: 0,
  isTweening: true,
};

const tweeningReducer = (state, action) => {
  switch (action.type) {
    case "toggleTweening": {
      return { ...state, isTweening: false };
    }
    case "incrementTweenCount": {
      return { ...state, tweenCount: state.tweenCount + 1 };
    }
    default: {
      return state;
    }
  }
};

export { tweeningState, tweeningReducer };
