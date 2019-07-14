const menuState = {
  isOpen: false,
  xPercent: 0,
  leftPosition: 0,
  menuWidth: 0,
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
    case "setMenuWidth": {
      return {
        ...state,
        xPercent: action.positions.xPercent,
        leftPosition: action.positions.leftPosition,
        menuWidth: action.positions.menuWidth,
      };
    }
    default: {
      return state;
    }
  }
};

export { menuState, menuReducer };
