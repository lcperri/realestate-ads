import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Perfil.module.css";

export default function Perfil() {
  return (
    <div className={style.bodyPerfil}>
      <div className={style.perfilContainer}>
        {/* {usuario ? (
        <div className={style.perfilUser}>
          <div className={style.perfilUserName}>
            <div className={style.userImg}>
              <img
                alt="user"
                src={
                  currentUser.photoURL
                    ? currentUser.photoURL
                    : "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
                }
              />
            </div>
            <p>Nombre: {usuario.name} </p>
            <p>Apellido: {usuario.lastName}</p>
            <p>Email: {usuario.email}</p>
            {verified}
            <p>Teléfono: {usuario.phoneNumber}</p>
            <button
              className={style.perfilAddBtn}
              onClick={() => {
                document.getElementById("editProfileDialog").showModal();
              }}
            >
              {" "}
              Actualizar Datos{" "}
            </button>
          </div>
          <EditProfile />
        </div>
        
      ) : ( */}
        <div className={style.perfilUser}>
          <div className={style.perfilUserName}>
            <div className={style.userImg}>
              <img
                alt="user"
                src={
                  // currentUser.photoURL
                  //   ? currentUser.photoURL
                  // :
                  "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
                }
              />
            </div>
            <form>
              <div>
                <label htmlFor="">Nombre : </label>
                <input
                  type="text"
                  className
                  name="nombre"
                // defaultValue={currentUser.displayName || ""}
                // onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="">Email: </label>
                <input
                  type="text"
                  className
                  name="email"
                  defaultValue={"Julian" || ""}
                // onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="">Teléfono: </label>
                <input
                  type="text"
                  className
                  name="telefono"
                // onChange={handleChange}
                />
              </div>
              <button type="submit">Confirmar Datos</button>
            </form>
          </div>
        </div>
        {/* )} */}
      </div>
    </div>
  );
}
