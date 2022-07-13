import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserById, updateUserById } from "../../redux/actions";
import LoginController from "../../localStorage/login";

import styles from "./PasswordUpdate.module.css";
import { validate } from "./validate";
import swal from "sweetalert";

const PasswordUpdate = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);

  const [input, setInput] = useState({});
  const [errors, setErrors] = useState({});
  const [passInicial, setpassInicial] = useState("");

  const headers = LoginController();
  const userId = localStorage.getItem("id");

  console.log(passInicial, "password inicial ******");

  useEffect(() => {
    dispatch(getUserById(userId));
  }, [userId]);

  useEffect(() => {
    if (userData) {
      setpassInicial(userData.password);
      console.log(passInicial, " dentro del use efect password inicial ******");
    }
  }, [userData]);

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

    dispatch(updateUserById(userId, { password: input.newpassword }, headers));

    setInput({
      actualpassword: "",
      newpassword: "",
      repeatnewpassword: "",
    });

    // alert('Password actualizada con exito.')
    swal({
      title: "Cambios en password",
      text: "Password actualizada con exito.",
      icon: "success",
      button: "Aceptar",
      // timer: "2000",
    }).then(function () {
      dispatch(getUserById(userId));
    });
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
