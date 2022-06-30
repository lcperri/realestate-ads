import React from "react";
import { Link } from "react-router-dom";
import Cards from "../../components/Cards";
import CardsContainer from "../../styledComponents/CardsContainer";
import DivContainer from "../../styledComponents/DivContainer";
import Filter from "../../components/Filters";
import Nav from "../../components/Nav";
import Loader from "../../pages/Loader";
import { useDispatch } from "react-redux";
import styles from "./NavBarProfileUpdate.module.css";
import Button from "../../styledComponents/Button";
import { StyledLink } from "../../styledComponents/StyledLink";

const NavBarProfile = () => {
  return (
    <nav className={styles.NavBarProfile}>
      <Link to="/hone" className={styles.usernameContainer}>
        {" "}
        Hola: Julian{" "}
      </Link>

      <div className={styles.menuContainer}>
        <StyledLink to="/hone" className={styles.navLink}>
          {" "}
          Publicar{" "}
        </StyledLink>

        <StyledLink to="/hone" className={styles.navLink}>
          {" "}
          Favoritos{" "}
        </StyledLink>

        <StyledLink to="/hone" className={styles.navLink}>
          {" "}
          Mi cuenta{" "}
        </StyledLink>

        <StyledLink to="/hone" className={styles.navLink}>
          {" "}
          Cerrar sesion{" "}
        </StyledLink>
      </div>
    </nav>
  );
};

export default NavBarProfile;
