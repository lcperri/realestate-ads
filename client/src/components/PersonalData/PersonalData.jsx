import React, { useState, useEffect } from "react";

import styles from "./PersonalData.module.css";
import { validate } from "./validate";

let datosIniniciales = {
  name: "Julian",
  lastname: "Meraviglia",
  birth: "",
  dni: 20000000,
  tel: "0340715333957",
  avatar: "",
};

const PersonalData = () => {
  const [input, setInput] = useState({
    name: "",
    lastname: "",
    birth: "",
    dni: "",
    tel: "",
    avatar: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setInput(datosIniniciales);
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
    datosIniniciales = input;
  }

  return (
    <form
      className={styles.container}
      onSubmit={(e) => handleSubmit(e)}
      autoComplete="off"
    >
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
          value={input.name}
          onChange={handleChange}
        />
      </div>
      {errors.name && <span className={styles.errospan}>{errors.name}</span>}
      <div className={styles.inputcontainer}>
        <label className={styles.label}>Apellido:</label>
        <input
          type="text"
          name="lastname"
          placeholder="Apellido"
          className={styles.input}
          value={input.lastname}
          onChange={handleChange}
        />
      </div>
      {errors.lastname && (
        <span className={styles.errospan}>{errors.lastname}</span>
      )}
      <div className={styles.inputcontainer}>
        <label className={styles.label}>Cumpleaños:</label>
        <input
          type="date"
          name="birth"
          placeholder="Cumpleaños"
          className={styles.input}
          disabled={true}
          value={input.birth}
        />
      </div>

      <div className={styles.inputcontainer}>
        <label className={styles.label}>DNI:</label>
        <input
          type="number"
          name="dni"
          placeholder="DNI"
          className={styles.input}
          value={input.dni}
          onChange={handleChange}
        />
      </div>
      {errors.dni && <span className={styles.errospan}>{errors.dni}</span>}
      <div className={styles.inputcontainer}>
        <label className={styles.label}>Telefono:</label>
        <input
          type="number"
          name="tel"
          placeholder="Telefono"
          className={styles.input}
          value={input.tel}
          onChange={handleChange}
        />
      </div>
      {errors.tel && <span className={styles.errospan}>{errors.tel}</span>}
      <div className={styles.inputcontainer}>
        <label className={styles.label}>Avatar:</label>
        <input
          type="text"
          name="avatar"
          placeholder="avatar"
          className={styles.input}
          value={input.avatar}
          disabled={true}
        />
      </div>
      <button
        className={styles.savebutton}
        type="submit"
        disabled={errors.button}
      >
        Guardar cambios
      </button>
    </form>
  );
};

export default PersonalData;
