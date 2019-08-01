const activeCardState = {
  activeCard: null,
};

const activeCardReducer = (state, action) => {
  switch (action.type) {
    case "setActiveCard": {
      return {
        ...state,
        activeCard: action.value,
      };
    }
    default: {
      return state;
    }
  }
};

export { activeCardState, activeCardReducer };
