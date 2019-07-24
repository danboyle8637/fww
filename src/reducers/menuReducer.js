const menuState = {
  isOpen: false,
  pathName: "",
};

const menuReducer = (state, action) => {
  switch (action.type) {
    case "toggleMenu": {
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    }
    case "closeMenu": {
      return {
        ...state,
        isOpen: false,
      };
    }
    case "setPathName": {
      return {
        ...state,
        pathName: action.value,
      };
    }
    default: {
      return state;
    }
  }
};

export { menuState, menuReducer };
