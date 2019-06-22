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

const tellMeMoreValidationRules = {
  maxLength: 400,
  isRequired: false,
};

// Initial Form State
const formState = {
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
        value: "join_old_side",
        displayValue: "Join the old site",
        checked: false,
      },
      { value: "other", displayValue: "Other", checked: false },
    ],
  },
  howCanIHelpOptions: {
    initial: true,
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
    default: {
      return state;
    }
  }
};

export { formState, formReducer };
