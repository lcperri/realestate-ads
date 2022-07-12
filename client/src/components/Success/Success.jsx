import React from "react";
import styles from './styles.module.css';
import Swal from "sweetalert2";
import Logo from "../../dumb/Icons/Logo";

export default function Success(){

    return(
        <div>
            {
              Swal.fire({
                 position: "top-center",
                 icon: "success",
                 title: "Gracias por unirte a Mikasa Nueva!!",
                 showConfirmButton: true,
                 /* timer: 1500, */
                })
            }
        </div>
    )
}