import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { validate } from "./validate";

import styles from "./EmailUpdate.module.css";

let emailInicial = { inicialemail: "julian@gmail.com" };

const EmailUpdate = () => {
  const [input, setInput] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setInput(emailInicial);
  }, []);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    // dispatch(postPoke(input))
    // alert('Pokemon creado.')
    // passInicial = input;

    emailInicial.inicialemail = input.newemail;
    setInput({
      ...input,
      inicialemail: input.newemail,
      newemail: "",
      repeatemail: "",
    });
  }

  return (
    <form
      className={styles.container}
      onSubmit={(e) => handleSubmit(e)}
      autoComplete="off"
    >
      <h1 className={styles.title}>Cambiar email</h1>

      <label className={styles.explain}>
        Modifica el correo electronico de tu cuenta.
      </label>

      <div className={styles.inputcontainer}>
        <label className={styles.label}>Email actual:</label>
        <input
          type="text"
          name="emailactual"
          placeholder="Email actual"
          className={styles.input}
          disabled={true}
          value={input.inicialemail}
        />
      </div>

      <div className={styles.inputcontainer}>
        <input
          type="text"
          name="newemail"
          placeholder="Nuevo email"
          className={styles.input}
          value={input.newemail}
          onChange={handleChange}
        />
      </div>

      <div className={styles.inputcontainer}>
        <input
          type="text"
          name="repeatemail"
          placeholder="Repetir nuevo email"
          className={styles.input}
          value={input.repeatemail}
          onChange={handleChange}
        />
      </div>
      {errors.email && <span className={styles.errospan}>{errors.email}</span>}

      <button
        className={styles.savebutton}
        type="submit"
        disabled={errors.button || !input.newemail}
      >
        Guardar cambios
      </button>
    </form>
  );
};

export default EmailUpdate;
