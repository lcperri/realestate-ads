import React from 'react'
import styles from './styles.module.css'
import Button from '../../styledComponents/Button'
import StyledCard from '../../styledComponents/StyledCard'
import {useDispatch} from "react-redux";
import { deleteUser } from '../../redux/actions';
import LoginController from "../../localStorage/login";

export default function UserCard({id,name, lastName, birthday, email, dni, telephone, avatar}){

  const range = localStorage.getItem('range');
  //const id = localStorage.getItem('id');
  const dispatch = useDispatch();
  const headers = LoginController()

  const handleElim = (e) =>{
    dispatch(deleteUser(id,headers));
    
  }
  const handleDenuncia = (e) =>{}
  
  return(

    <StyledCard>
      
      <div className={styles.items}>
        <img src={avatar} />
      </div>                
       
      <h1 className={styles.nomb}>Nombre: {name} {lastName}</h1>
      <h1 className={styles.datos}>Correo electrónico: {email}</h1>
      <h1 className={styles.datos}>DNI: {dni}</h1>
      <h1 className={styles.datos}>Teléfono: {telephone}</h1>

      <div className={styles.datos}>
      <div>
      <Button onClick={handleElim}>Eliminar</Button>            

      <Button onClick={handleDenuncia}>Ver denuncias</Button>
      </div>
        
      </div>

    </StyledCard>
  )
}