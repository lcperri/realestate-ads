import React from "react";

import styles from "./PersonalData.module.css";

const PersonalData = () => {
  return (
    <form className={styles.container}>
      <h1 className={styles.title}>Datos</h1>

      <label className={styles.header}>Personales</label>

      <label className={styles.explain}>
        Completa con tus datos personales
      </label>

      <div className={styles.inputcontainer}>
        <label className={styles.label}>Nonbre:</label>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          className={styles.input}
        />
      </div>
      <div className={styles.inputcontainer}>
        <label className={styles.label}>Apellido:</label>
        <input
          type="text"
          name="lastname"
          placeholder="Apellido"
          className={styles.input}
        />
      </div>
      <div className={styles.inputcontainer}>
        <label className={styles.label}>Cumpleaños:</label>
        <input
          type="date"
          name="birthday"
          placeholder="Cumpleaños"
          className={styles.input}
        />
      </div>
      <div className={styles.inputcontainer}>
        <label className={styles.label}>DNI:</label>
        <input
          type="number"
          name="dni"
          placeholder="DNI"
          className={styles.input}
        />
      </div>
      <div className={styles.inputcontainer}>
        <label className={styles.label}>Telefono:</label>
        <input
          type="number"
          name="name"
          placeholder="Telefono"
          className={styles.input}
        />
      </div>
      <button className={styles.savebutton} type="submit" disabled="true">
        Guardar cambios
      </button>
    </form>
  );
};

export default PersonalData;
