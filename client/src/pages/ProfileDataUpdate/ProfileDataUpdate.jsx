import React from "react";
import Cards from "../../components/Cards";
import CardsContainer from "../../styledComponents/CardsContainer";
import DivContainer from "../../styledComponents/DivContainer";
import Filter from "../../components/Filters";
import Nav from "./NavBarProfileUpdate";
import Loader from "../../pages/Loader";
import { useDispatch } from "react-redux";
import styles from "./styles.module.css";

const ProfileDataUpdate = () => {
  return (
    <div className={styles.contenedor}>
      <Nav />
    </div>
  );
};

export default ProfileDataUpdate;
