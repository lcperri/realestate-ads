import React from "react";
import Button from "../../styledComponents/Button";
import DivContainer from "../../styledComponents/DivContainer";
import Input from "../../styledComponents/Input";
import styles from './styles.module.css'
import imagw  from './whatsapp.png';

export default function FormContacto(){

    
    let url = `https://wa.me/542281460124?text=Me%20gustaría%20saber%20el%20precio%20del%20coche` 
   

    return(
        <DivContainer className={styles.contFormContacto}>
            
            <h1 className={styles.titulo}>Formulario de contacto</h1>
            <br></br>
            <Input className={styles.email} type={'text'}  placeholder={'Email'}></Input>
            <br></br>
            <Input className={styles.nombre} type={'text'}  placeholder={'Nombre'}/>
            <br></br>
            <Input className={styles.tel} type={'text'}  placeholder={'Telefono'}/>
            <br></br>
            <textarea className={styles.descrip} type={'text'} placeholder={'Mensaje:'}/>
            <br></br>
            
            <a href={url} ><img src={imagw} className={styles.whatsap}/></a>
            
            
            <Button className={styles.contactar}>Contactar</Button>


        </DivContainer>
    )
}