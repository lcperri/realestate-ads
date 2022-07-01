import React from "react";
import { Link } from "react-router-dom";

import styles from "./NavBarProfileUpdate.module.css";

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
