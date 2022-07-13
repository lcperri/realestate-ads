import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserById, updateUserById } from "../../redux/actions";
import LoginController from "../../localStorage/login"
import swal from "sweetalert";

import { validate } from "./validate";

import styles from "./EmailUpdate.module.css";

const userId = localStorage.getItem("id");

const EmailUpdate = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  const [input, setInput] = useState({  inicialemail:"",
                                        newemail: "",
                                        repeatemail: "",
                                      });
                                      
  const [errors, setErrors] = useState({});

  const headers = LoginController()

  useEffect(() => {
    if (userId) {
      dispatch(getUserById(userId));
    }
  }, [userId]);

  useEffect(() => {
    if(userData){
    
    setInput(
      {
        ...input,
        inicialemail: userData.email,
        newemail: "",
        repeatemail: "",
      });}
  }, [userData]);  

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
    dispatch(updateUserById(userId,{ email: input.newemail}, headers));
    
    
    setInput({
      ...input,
      
      newemail: "",
      repeatemail: "",
    });
    // alert('Email actualizado.')
    swal({
      title: "Cambios en email",
      text: "Email actualizado con exito.",
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
