import React from "react";

import { useDispatch } from "react-redux";

import styles from "./EmailUpdate.module.css";

const EmailUpdate = () => {
  return (
    <form className={styles.container}>
      <h1 className={styles.title}>Cambiar email</h1>

      <label className={styles.explain}>
        Modifica el correo electronico de tu cuenta.
      </label>

      <div className={styles.inputcontainer}>
        <label className={styles.label}>Email actual:</label>
        <input
          type="text"
          name="name"
          placeholder="Email actual"
          className={styles.input}
        />
      </div>

      <div className={styles.inputcontainer}>
        <input
          type="text"
          name="lastname"
          placeholder="Nuevo email"
          className={styles.input}
        />
      </div>

      <div className={styles.inputcontainer}>
        <input
          type="text"
          name="birthday"
          placeholder="Repetir nuevo email"
          className={styles.input}
        />
      </div>

      <button className={styles.savebutton} type="submit" disabled="true">
        Guardar cambios
      </button>
    </form>
  );
};

export default EmailUpdate;
