import React from "react";
import Cards from "../../components/Cards";
import CardsContainer from "../../styledComponents/CardsContainer";
import DivContainer from "../../styledComponents/DivContainer";
import Filter from "../../components/Filters";

import Nav from "./NavBarProfileUpdate";
import AsideBar from "./AsideBar";
import PersonalData from "./PersonalData";

import Loader from "../../pages/Loader";
import { useDispatch } from "react-redux";
import styles from "./styles.module.css";

const ProfileDataUpdate = () => {
  return (
    <div className={styles.conteiner}>
      <Nav />
      <div className={styles.infoconteiner}>
        <AsideBar />
        <PersonalData />
      </div>
    </div>
  );
};

export default ProfileDataUpdate;
