import React from "react";
import styles from "./styles.module.css";
import Swal from "sweetalert2";
import Logo from "../../dumb/Icons/Logo";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { getUserById } from "../../redux/actions";

export default function Success() {
  const navigate = useNavigate();
  const id = localStorage.getItem("id");
  const dispatch = useDispatch();

  dispatch(getUserById(id)).then(() => {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Tu publicación fue creada exitosamente",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/home");
  });
}
