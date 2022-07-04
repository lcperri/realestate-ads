export const validate = (passInicial, input) => {
  let errors = {};
  errors.button = true;

  if (!(passInicial === input.actualpassword)) {
    errors.actualpassword = "Contraseña incorrecta";
  }

  if (!(input.newpassword === input.repeatnewpassword)) {
    errors.newpassword = "Contraseñas no coinciden";
  } else if (input.newpassword && input.repeatnewpassword) {
    if (input.newpassword.length < 6 || input.newpassword.length > 10) {
      errors.newpassword = "Debe tener entre 6 y 10 caracteres";
    }
  }
  if (
    !errors.actualpassword &&
    !errors.newpassword &&
    input.newpassword &&
    input.repeatnewpassword
  ) {
    errors.button = false;
  }

  return errors;
};
