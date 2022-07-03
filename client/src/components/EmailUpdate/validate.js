export const validate = (input) => {
  let errors = {};
  errors.button = true;

  if (!(input.newemail === input.repeatemail)) {
    errors.email = "Los emails no coinciden";
  } else if (input.newemail && input.repeatemail) {
    if (
      !/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(
        input.newemail
      )
    ) {
      errors.email = "No tiene formato de email";
    }
  }
  if (!errors.email && input.newemail && input.repeatemail) {
    errors.button = false;
  }

  return errors;
};
