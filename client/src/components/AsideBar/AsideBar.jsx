import React from "react";

import styles from "./AsideBar.module.css";

const AsideBar = ({ setButton }) => {
  return (
    <aside className={styles.container}>
      <h1 className={styles.button} onClick={() => setButton("Data")}>
        Datos
      </h1>

      <h1 className={styles.button} onClick={() => setButton("Pass")}>
        Cambiar contraseña
      </h1>

      <h1 className={styles.button} onClick={() => setButton("email")}>
        Cambiar email
      </h1>
    </aside>
  );
};

export default AsideBar;
