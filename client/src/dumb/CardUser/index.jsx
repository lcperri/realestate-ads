import React from "react";
import styles from "./styles.module.css";
import Button from "../../styledComponents/Button";
import StyledCard from "../../styledComponents/StyledCard";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../redux/actions";
import LoginController from "../../localStorage/login";
import capitalize from "../../functions/capitalize";
import { useNavigate } from "react-router-dom";

export default function UserCard({
  id,
  name,
  lastName,
  rango,
  email,
  dni,
  telephone,
  avatar,
  flags,
}) {
  const range = localStorage.getItem("range");
  //const id = localStorage.getItem('id');
  const dispatch = useDispatch();
  const headers = LoginController();
  const navigate = useNavigate();

  const handleElim = (e) => {
    dispatch(deleteUser(id, headers));
  };
  const handleDenuncia = (e) => {
    navigate(`/denuncias/${id}`);
  };

  return (
    <StyledCard className={styles.contened}>
      <div>
        <img
          src={
            avatar
              ? avatar
              : "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
          }
          className={styles.foto}
        />
      </div>

      <div>
        {flags && flags?.length === 1 && (
          <h3 className={styles.datos}>{flags.length} DENUNCIA</h3>
        )}
        {flags && flags?.length > 1 && (
          <h3 className={styles.datos}>{flags.length} DENUNCIAS</h3>
        )}
      </div>
      <div>
      <h3 className={styles.datos}>Rango: </h3>
        <h2 className={styles.name}>{rango.toUpperCase()}</h2>
      </div>
      <div>
        <h3 className={styles.datos}>Nombre: </h3>
        <h2 className={styles.name}>
          {capitalize(name)} {capitalize(lastName)}
        </h2>
      </div>

      <div>
        <h3 className={styles.datos}>Correo electrónico: </h3>
        <h2 className={styles.name}>{email}</h2>
      </div>

      <div>
        <h3 className={styles.datos}>DNI: </h3>
        <h2 className={styles.name}>{dni}</h2>
      </div>

      <div>
        <h3 className={styles.datos}>Teléfono: </h3>
        <h2 className={styles.name}>{telephone}</h2>
      </div>

      <div>
        <Button className={styles.btns} onClick={handleElim}>
          Eliminar
        </Button>
        {flags && flags?.length > 0 && (
        <Button onClick={handleDenuncia}>Ver denuncias</Button>
        )}
      </div>
    </StyledCard>
  );
}
