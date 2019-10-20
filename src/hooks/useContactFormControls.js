import { useFormStore } from "../context/FormContext";

const useContactFormControls = () => {
  // eslint-disable-next-line
  const [formState, dispatch] = useFormStore();

  const updateFormValue = event => {
    event.persist();
    const inputName = event.target.name;
    const inputValue = event.target.value;

    switch (inputName) {
      case "firstName": {
        dispatch({
          type: "firstNameValue",
          value: inputValue,
        });
        break;
      }
      case "emailAddress": {
        dispatch({
          type: "emailAddressValue",
          value: inputValue,
        });
        break;
      }
      case "howCanIHelp": {
        dispatch({
          type: "howCanIHelpValue",
          value: inputValue,
        });
        break;
      }
      case "biggestObstacle": {
        dispatch({
          type: "biggestObstacleValue",
          value: inputValue,
        });
        break;
      }
      case "tellMeMore": {
        dispatch({
          type: "tellMeMoreValue",
          value: inputValue,
        });
        break;
      }
      case "workoutGoal": {
        dispatch({
          type: "workoutGoalValue",
          value: inputValue,
        });
        break;
      }
      default: {
        throw new Error("None of your actions were picked up.");
      }
    }
  };

  const updateFormOptions = event => {
    event.persist();
    const inputName = event.target.name;

    switch (inputName) {
      case "firstName": {
        dispatch({ type: "firstNameOptions" });
        break;
      }
      case "emailAddress": {
        dispatch({ type: "emailAddressOptions" });
        break;
      }
      case "howCanIHelp": {
        dispatch({ type: "howCanIHelpOptions" });
        break;
      }
      case "biggestObstacle": {
        dispatch({ type: "biggestObstacleOptions" });
        break;
      }
      case "tellMeMore": {
        dispatch({ type: "tellMeMoreOptions" });
        break;
      }
      case "workoutGoal": {
        dispatch({ type: "workoutGoalOptions" });
        break;
      }
      default: {
        throw new Error("None of your option actions where picked up.");
      }
    }
  };

  return {
    updateFormValue,
    updateFormOptions,
  };
};

export default useContactFormControls;
