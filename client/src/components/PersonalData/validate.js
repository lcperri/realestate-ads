export const validate = (input) => {
  let errors = {};
  errors.button = false;

  if (!/^[a-zA-Z\s]+$/.test(input.name)) {
    errors.name = "Nombre no valido";
  }

  if (!input.lastname) {
    errors.lastname = "Apellido no valido";
  } else if (!/^[a-zA-Z\s]+$/.test(input.lastname)) {
    errors.lastname = "Apellido no valido";
  }

  if (!Number.isInteger(parseInt(input.dni))) {
    errors.dni = "Numero no valido";
  } else if (input.dni < 0) {
    errors.dni = "Numero no valido";
  } else if (input.dni >= 50000000) {
    errors.dni = "Numero no valido";
  }

  if (!/^[0-9]+$/.test(input.tel)) {
    errors.tel = "Telefono no valido";
  }

  if (!errors.name && !errors.lastname && !errors.dni && !errors.tel) {
    errors.button = false;
  } else {
    errors.button = true;
  }

  return errors;
};
