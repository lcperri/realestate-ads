import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./navBar";
import DivNavBar from "./divNavBar";
// import logo from "......./Logo.png";
// import s from "./Nav.module.css";

export default function Nav() {
  return (
    <NavBar>
      {/* <Link to="/" className={s.logoBox}>
        <img src={logo} alt="Logo" className={s.logo} />
      </Link>  */}
      <DivNavBar>
        <a href="#home">Home</a>
      </DivNavBar>
      <DivNavBar>
        <a href="#home">Home</a>
      </DivNavBar>
      <DivNavBar>
        <a href="#home">Home</a>
      </DivNavBar>
      <DivNavBar>
        <a href="#home">Home</a>
      </DivNavBar>
      <DivNavBar>
        <a href="#home">Home</a>
      </DivNavBar>
      <DivNavBar>
        <a href="#home">Home</a>
      </DivNavBar>
      <DivNavBar>
        <a href="#home">Home</a>
      </DivNavBar>
      <DivNavBar>
        <a href="#home">Home</a>
      </DivNavBar>
      <DivNavBar>
        <a href="#home">Home</a>
      </DivNavBar>
      <DivNavBar>
        <a href="#home">Home</a>
      </DivNavBar>
      <DivNavBar>
        <a href="#home">Home</a>
      </DivNavBar>
      <DivNavBar>Home</DivNavBar>
      <DivNavBar>
        <a href="#home">Home</a>
      </DivNavBar>
      <DivNavBar>
        <a href="#home">Home</a>
      </DivNavBar>
      {/* <Link
        to="/breedCreation"
        className={(navdata) =>
          navdata.isActive ? `${s.create} ${s.active}` : s.create
        }
      >
        Create breed
      </Link> */}
    </NavBar>
  );
}
