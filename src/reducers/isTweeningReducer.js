const tweeningState = {
  tweenCount: 0,
  isTweening: false,
};

const tweeningReducer = (state, action) => {
  switch (action.type) {
    case "toggleTweening": {
      return { ...state, isTweening: !state.isTweening };
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
