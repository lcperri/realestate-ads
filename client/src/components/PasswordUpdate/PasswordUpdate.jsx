import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import styles from "./PasswordUpdate.module.css";
import { validate } from "./validate";

let passInicial = "123456";

const PasswordUpdate = () => {
  const [input, setInput] = useState({});
  const [errors, setErrors] = useState({});

  // useEffect(() => {
  //   setInput(emailInicial);
  // }, []);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate(passInicial, {
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
    passInicial = input.newpassword;
    setInput({});
  }

  return (
    <form
      className={styles.container}
      onSubmit={(e) => handleSubmit(e)}
      autoComplete="off"
    >
      <h1 className={styles.title}>Cambiar contraseña</h1>

      <label className={styles.header}>Contraseña actual</label>

      <label className={styles.explain}>Ingresa tu contraseña actual</label>

      <div className={styles.inputcontainer}>
        <input
          type="text"
          name="actualpassword"
          placeholder="Contraseña actual"
          value={input.actualpassword}
          className={styles.input}
          onChange={handleChange}
        />
      </div>
      {errors.actualpassword && (
        <span className={styles.errospan}>{errors.actualpassword}</span>
      )}
      <label className={styles.header}>Contraseña nueva</label>
      <label className={styles.explain}>
        Ingresa una contraseña nueva. Debe tener entre 6 y 10 caracteres
      </label>
      <div className={styles.inputcontainer}>
        <input
          type="text"
          name="newpassword"
          placeholder="Contraseña nueva"
          value={input.newpassword}
          className={styles.input}
          onChange={handleChange}
        />
      </div>
      <label className={styles.label}>Usa de 6 a 10 caracteres</label>
      <div className={styles.inputcontainer}>
        {/* <label className={styles.label}>Cumpleaños:</label> */}
        <input
          type="text"
          name="repeatnewpassword"
          placeholder="Repetir contraseña nueva"
          className={styles.input}
          value={input.repeatnewpassword}
          onChange={handleChange}
        />
      </div>
      {errors.newpassword && (
        <span className={styles.errospan}>{errors.newpassword}</span>
      )}

      <button
        className={styles.savebutton}
        type="submit"
        disabled={errors.button || !input.actualpassword}
      >
        Guardar cambios
      </button>
    </form>
  );
};

export default PasswordUpdate;
