const activeCardState = {
  activeCard: 0,
};

const activeCardReducer = (state, action) => {
  switch (action.type) {
    case "setActiveCard": {
      return {
        activeCard: action.value,
      };
    }
    default: {
      return state;
    }
  }
};

export { activeCardState, activeCardReducer };
