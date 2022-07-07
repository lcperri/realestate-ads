export const validate = (input) => {
  let errors = {};
  errors.button = false;

  if (!/^[a-zA-Z\s]+$/.test(input.name)) {
    errors.name = "Nombre no valido";
  }

  if (!input.lastName) {
    errors.lastName = "Apellido no valido";
  } else if (!/^[a-zA-Z\s]+$/.test(input.lastName)) {
    errors.lastName = "Apellido no valido";
  }

  if (!Number.isInteger(parseInt(input.dni))) {
    errors.dni = "Numero no valido";
  } else if (input.dni < 0) {
    errors.dni = "Numero no valido";
  } else if (input.dni >= 50000000) {
    errors.dni = "Numero no valido";
  }

  if (!/^[0-9]+$/.test(input.telephone)) {
    errors.telephone = "Telefono no valido";
  }

  if (!errors.name && !errors.lastName && !errors.dni && !errors.telephone) {
    errors.button = false;
  } else {
    errors.button = true;
  }

  return errors;
};
