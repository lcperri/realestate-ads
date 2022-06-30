import React from "react";
import Button from "../../styledComponents/Button";
import DivContainer from "../../styledComponents/DivContainer";
import styles from './styles.module.css'


export default function FormContacto(){

    /*  let numUsuario = 542281460124;
     let url = `https://api.whatsapp.com/send?phone=${542281460124}&text=Hola!`; 
    let url = `https://wa.me/542281460124?text=Me%20gustaría%20saber%20el%20precio%20del%20coche` */
   

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
            {/* <a href={url}>Envíanos un mensaje de WhatsApp</a>
            <br></br> */}
            <Button className={styles.contactar} >Contactar</Button>
        </DivContainer>
    )
}