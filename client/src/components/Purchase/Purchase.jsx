import React, { useEffect } from "react";
import styles from './styles.module.css';
import Swal from "sweetalert2";
import Logo from "../../dumb/Icons/Logo";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getPayment } from './../../redux/actions';

export default function Purchase(){
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("preference_id");
    const status = searchParams.get("collection_status");

    if (status === "approved" && id) {
        dispatch(getPayment(id))
    }
    
    return(
        <div>
            {
              Swal.fire({
                 position: "top-center",
                 icon: "success",
                 title: "¡¡Gracias por tu compra!! Tu propiedad ahora está destacada",
                 showConfirmButton: true,
                 /* timer: 1500, */
                })
            }
        </div>
    )
}