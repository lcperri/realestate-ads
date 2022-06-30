import React from "react";
import { Link } from "react-router-dom";
import Cards from "../../components/Cards";
import CardsContainer from "../../styledComponents/CardsContainer";
import DivContainer from "../../styledComponents/DivContainer";
import Filter from "../../components/Filters";
import Nav from "../../components/Nav";
import Loader from "../../pages/Loader";
import { useDispatch } from "react-redux";
import styles from "./AsideBar.module.css";
import Button from "../../styledComponents/Button";
import { StyledLink } from "../../styledComponents/StyledLink";

const AsideBar = () => {
  return (
    <aside className={styles.container}>
      <Link to="/hone">
        <h1 className={styles.button}>Datos</h1>
      </Link>
      <Link to="/hone">
        <h1 className={styles.button}>Cambiar contraseña</h1>
      </Link>
      <Link to="/hone">
        <h1 className={styles.button}>Cambiar email</h1>
      </Link>
    </aside>
  );
};

export default AsideBar;
