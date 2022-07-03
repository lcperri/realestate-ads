import React from "react";

import { useDispatch } from "react-redux";

import styles from "./PasswordUpdate.module.css";

const PasswordUpdate = () => {
  return (
    <form className={styles.container}>
      <h1 className={styles.title}>Cambiar contraseña</h1>

      <label className={styles.header}>Contraseña actual</label>

      <label className={styles.explain}>Ingresa tu contraseña actual</label>

      <div className={styles.inputcontainer}>
        {/* <label className={styles.label}>Nonbre:</label> */}
        <input
          type="text"
          name="name"
          placeholder="Contraseña actual"
          className={styles.input}
          disabled="true"
        />
      </div>
      <label className={styles.header}>Contraseña nueva</label>
      <label className={styles.explain}>
        Ingresa una contraseña nueva. Debe tener entre 6 y 10 caracteres
      </label>
      <div className={styles.inputcontainer}>
        <input
          type="text"
          name="lastname"
          placeholder="Contraseña nueva"
          className={styles.input}
        />
      </div>
      <label className={styles.label}>Usa de 6 a 10 caracteres</label>
      <div className={styles.inputcontainer}>
        {/* <label className={styles.label}>Cumpleaños:</label> */}
        <input
          type="text"
          name="birthday"
          placeholder="Repetir contraseña nueva"
          className={styles.input}
        />
      </div>

      <button className={styles.savebutton} type="submit" disabled="true">
        Guardar cambios
      </button>
    </form>
  );
};

export default PasswordUpdate;
