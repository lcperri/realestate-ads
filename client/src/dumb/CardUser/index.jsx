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
    console.log("id:",id)
  }
    
  return(

    <StyledCard>
      
      <div className={styles.items}>
        <img src={avatar} />
      </div>                
       
      <h1 className={styles.nomb}>{name} {lastName}</h1>
      <h1 className={styles.datos}>{email}</h1>
      <h1 className={styles.datos}>{dni}</h1>
      <h1 className={styles.datos}> {telephone}</h1>
      <h1 className={styles.datos}>{birthday}</h1>

      <div className={styles.datos}>
        {
          range === 'admin' && (
            <Button onClick={handleElim}>Eliminar</Button>
          )
        }
        
      </div>

    </StyledCard>
  )
}