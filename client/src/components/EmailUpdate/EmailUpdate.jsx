import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserById, updateUserById } from "../../redux/actions";

import { validate } from "./validate";

import styles from "./EmailUpdate.module.css";

let emailInicial = {};
console.log(localStorage.getItem("id"), "*** ID del Usuario ***");
const userId = localStorage.getItem("id");

const EmailUpdate = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userById);
  const [input, setInput] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (userId) {
      dispatch(getUserById(userId));
    }
  }, [userId]);

  // useEffect(() => {
  //   setInput(userData.email);
  // }, [userData]);

  //, birthday: "1979-10-15"

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
    emailInicial = { email: input.newemail };
    //console.log(emailInicial);
    //dispatch(updateUserById(userId, { email: input.newemail }));
    setInput({ newemail: "", repeatemail: "" });
  }

  // useEffect(() => {
  //   setInput(emailInicial);
  // }, []);

  // function handleChange(e) {
  //   setInput({
  //     ...input,
  //     [e.target.name]: e.target.value,
  //   });
  //   setErrors(
  //     validate({
  //       ...input,
  //       [e.target.name]: e.target.value,
  //     })
  //   );
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   // dispatch(postPoke(input))
  //   // alert('Pokemon creado.')
  //   // passInicial = input;

  //   emailInicial.inicialemail = input.newemail;
  //   setInput({
  //     ...input,
  //     inicialemail: input.newemail,
  //     newemail: "",
  //     repeatemail: "",
  //   });
  //   console.log(emailInicial);
  // }

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
          value={userData.email}
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
