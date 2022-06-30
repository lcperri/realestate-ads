import React from "react";
import Button from "../../styledComponents/Button";
import DivContainer from "../../styledComponents/DivContainer";
import styles from './styles.module.css'
import globalStyles from "../../styledComponents/DivContainer";
export default function FormContacto(){

    return(
        <DivContainer className={styles.contFormContacto}>

            <h1 className={styles.titulo}>Formulario de contacto</h1>
            <br></br>
            <input className={styles.email} type={'text'}  placeholder={'Email'}></input>
            <br></br>
            <input className={styles.nombre} type={'text'}  placeholder={'Nombre'}/>
            <br></br>
            <input className={styles.tel} type={'text'}  placeholder={'Telefono'}/>
            <br></br>
            <textarea className={styles.descrip} type={'text'} placeholder={'Mensaje:'}/>
            <br></br>
            <Button className={styles.contactar}>Contactar</Button>
        </DivContainer>
    )
}