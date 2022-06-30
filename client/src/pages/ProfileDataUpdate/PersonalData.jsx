import React from "react";
import { Link } from "react-router-dom";
import Cards from "../../components/Cards";
import CardsContainer from "../../styledComponents/CardsContainer";
import DivContainer from "../../styledComponents/DivContainer";
import Filter from "../../components/Filters";
import Nav from "../../components/Nav";
import Loader from "../../pages/Loader";
import { useDispatch } from "react-redux";
import styles from "./PersonalData.module.css";
import Button from "../../styledComponents/Button";
import { StyledLink } from "../../styledComponents/StyledLink";

const PersonalData = () => {
  return (
    <form className={styles.container}>
      <h1 className={styles.title}>Datos</h1>

      <label className={styles.header}>Personales</label>

      <label className={styles.explain}>
        Completa con tus datos personales
      </label>

      <div>
        <label className={styles.dataName}>Nonbre:</label>
        <input type="text" name="name" placeholder="Nombre" />
      </div>
    </form>
  );
};

export default PersonalData;
