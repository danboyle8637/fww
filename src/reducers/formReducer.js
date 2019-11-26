import validate from "../utils/validate";

// Validation Rules for form fields
const firstNameValidationRules = {
  minLength: 2,
  isRequired: true,
};

const emailValidationRules = {
  isEmail: true,
  isRequired: true,
};

const howCanIHelpValidationRules = {
  isRequired: true,
};

const biggestObstacleValidationRules = {
  isRequired: true,
};

const tellMeMoreValidationRules = {
  maxLength: 400,
  isRequired: false,
};

const workoutGoalValidation = {
  maxLength: 4,
  isNumber: true,
  isRequired: false,
};

const passwordValidation = {
  minLength: 6,
  // Contains a number
  // Contains a capital
  isRequired: true,
};

const confirmPasswordValidation = {
  isRequired: true,
  matchPassword: true,
};

// Initial Form State
const formState = {
  formValid: {
    valid: false,
  },
  firstNameValue: {
    value: "",
    valid: false,
  },
  firstNameOptions: {
    initial: true,
    touched: false,
    showInstructions: false,
  },
  emailAddressValue: {
    value: "",
    valid: false,
  },
  emailAddressOptions: {
    initial: true,
    touched: false,
    showInstructions: false,
  },
  passwordValue: {
    value: "",
    valid: false,
  },
  passwordOptions: {
    initial: true,
    touched: false,
    showInstructions: false,
  },
  confirmPasswordValue: {
    value: "",
    valid: false,
  },
  confirmPasswordOptions: {
    initial: true,
    touched: false,
    showInstructions: false,
  },
  tellMeMoreValue: {
    value: "",
    valid: false,
  },
  tellMeMoreOptions: {
    initial: true,
    touched: false,
    showInstructions: false,
  },
  howCanIHelpValue: {
    value: "",
    valid: false,
    options: [
      { value: "technical", displayValue: "Technical help", checked: false },
      {
        value: "7_day_reset",
        displayValue: "7 Day Reset Challenge",
        checked: false,
      },
      {
        value: "join_old_site",
        displayValue: "Join the old site",
        checked: false,
      },
      { value: "other", displayValue: "Other", checked: false },
    ],
  },
  howCanIHelpOptions: {
    initial: true,
  },
  biggestObstacleValue: {
    value: "",
    valid: false,
    options: [
      { value: "time", displayValue: "Not enough time", checked: false },
      {
        value: "intensity",
        displayValue: "I need more intensity",
        checked: false,
      },
      {
        value: "coaching",
        displayValue: "I want more coaching",
        checked: false,
      },
      {
        value: "mindset",
        displayValue: "I want to believe in myself",
        checked: false,
      },
    ],
  },
  biggestObstacleOptions: {
    initial: true,
  },
  workoutGoalValue: {
    value: "",
    valid: false,
  },
  workoutGoalOptions: {
    initial: true,
    touched: false,
    showInstructions: false,
  },
  resetProgramValue: {
    value: "",
    valid: false,
    options: [
      { value: "ignite_reset", checked: false },
      { value: "body_burn_reset", checked: false },
      { value: "strong_reset", checked: false },
    ],
  },
  resetProgramOptions: {
    initial: true,
  },
  usernameValue: {
    value: "",
    valid: false,
  },
  usernameOptions: {
    initial: true,
    touched: false,
    showInstructions: false,
  },
};

// Form Reducer
const formReducer = (state, action) => {
  switch (action.type) {
    case "firstNameValue": {
      const valid = validate(action.value, firstNameValidationRules);
      return {
        ...state,
        firstNameValue: {
          value: action.value,
          valid: valid,
        },
      };
    }
    case "firstNameOptions": {
      return {
        ...state,
        firstNameOptions: {
          initial: false,
          touched: !state.firstNameOptions.touched,
          showInstructions: !state.firstNameOptions.showInstructions,
        },
      };
    }
    case "emailAddressValue": {
      const valid = validate(action.value, emailValidationRules);
      return {
        ...state,
        emailAddressValue: {
          value: action.value,
          valid: valid,
        },
      };
    }
    case "emailAddressOptions": {
      return {
        ...state,
        emailAddressOptions: {
          initial: false,
          touched: !state.emailAddressOptions.touched,
          showInstructions: !state.emailAddressOptions.showInstructions,
        },
      };
    }
    case "passwordValue": {
      const valid = validate(action.value, passwordValidation);
      return {
        ...state,
        passwordValue: {
          value: action.value,
          valid: valid,
        },
      };
    }
    case "passwordOptions": {
      return {
        ...state,
        passwordOptions: {
          initial: false,
          touched: !state.passwordOptions.touched,
          showInstructions: !state.passwordOptions.showInstructions,
        },
      };
    }
    case "confirmPasswordValue": {
      const valid = validate(
        state.value,
        confirmPasswordValidation,
        state.passwordValue.value
      );
      return {
        ...state,
        confirmPasswordValue: {
          value: state.value,
          valid: valid,
        },
      };
    }
    case "confirmPasswordOptions": {
      return {
        ...state,
        confirmPasswordOptions: {
          initial: false,
          touched: !state.confirmPasswordOptions.touched,
          showInstructions: !state.confirmPasswordOptions.showInstructions,
        },
      };
    }
    case "howCanIHelpValue": {
      const valid = validate(action.value, howCanIHelpValidationRules);

      const options = state.howCanIHelpValue.options.map(option => {
        if (action.value === option.value) {
          return {
            value: option.value,
            displayValue: option.displayValue,
            checked: !option.checked,
          };
        } else if (option.checked) {
          return {
            value: option.value,
            displayValue: option.displayValue,
            checked: !option.checked,
          };
        } else {
          return {
            value: option.value,
            displayValue: option.displayValue,
            checked: option.checked,
          };
        }
      });

      return {
        ...state,
        howCanIHelpValue: {
          value: action.value,
          valid: valid,
          options: options,
        },
      };
    }
    case "howCanIHelpOptions": {
      return {
        ...state,
        howCanIHelpOptions: {
          initial: false,
        },
      };
    }
    case "biggestObstacleValue": {
      const valid = validate(action.value, biggestObstacleValidationRules);

      const options = state.biggestObstacleValue.options.map(option => {
        if (action.value === option.value) {
          return {
            value: option.value,
            displayValue: option.displayValue,
            checked: !option.checked,
          };
        } else if (option.checked) {
          return {
            value: option.value,
            displayValue: option.displayValue,
            checked: !option.checked,
          };
        } else {
          return {
            value: option.value,
            displayValue: option.displayValue,
            checked: option.checked,
          };
        }
      });

      return {
        ...state,
        biggestObstacleValue: {
          value: action.value,
          valid: valid,
          options: options,
        },
      };
    }
    case "biggestObstacleOptions": {
      return {
        ...state,
        biggestObstacleOptions: {
          initial: false,
        },
      };
    }
    case "tellMeMoreValue": {
      const valid = validate(action.value, tellMeMoreValidationRules);
      return {
        ...state,
        tellMeMoreValue: {
          value: action.value,
          valid: valid,
        },
      };
    }
    case "tellMeMoreOptions": {
      return {
        ...state,
        tellMeMoreOptions: {
          initial: false,
          touched: !state.tellMeMoreOptions.touched,
          showInstructions: !state.tellMeMoreOptions.showInstructions,
        },
      };
    }
    case "workoutGoalValue": {
      //const valueNumber = Number(action.value);
      const valid = validate(action.value, workoutGoalValidation);
      return {
        ...state,
        workoutGoalValue: {
          value: action.value,
          valid: valid,
        },
      };
    }
    case "workoutGoalOptions": {
      return {
        ...state,
        workoutGoalOptions: {
          initial: false,
          touched: !state.workoutGoalOptions.touched,
          showInstructions: !state.workoutGoalOptions.showInstructions,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export { formState, formReducer };
