const validate = (value, rules) => {
  let isValid = true;

  // console.log(`Value: ${value}`)
  // console.log(`Rules: ${JSON.stringify(rules)}`)

  for (let rule in rules) {
    switch (rule) {
      case "maxLength":
        isValid = isValid && maxLengthValidator(value, rules[rule]);
        break;

      case "minLength":
        isValid = isValid && minLengthValidator(value, rules[rule]);
        break;

      case "isRequired":
        isValid = isValid && requiredValidator(value);
        break;

      case "isEmail":
        isValid = isValid && emailValidator(value);
        break;

      case "isNumber": {
        console.log(typeof value);
        isValid = isValid && numberValidator(value);
        break;
      }

      default:
        isValid = true;
    }
  }

  return isValid;
};

const maxLengthValidator = (value, maxLength) => value.length <= maxLength;

const minLengthValidator = (value, minLength) => value.length >= minLength;

const requiredValidator = value => value.trim() !== "";

const emailValidator = value => {
  var re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase());
};

const numberValidator = value => !isNaN(value);

export default validate;
